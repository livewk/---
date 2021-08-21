import React, { useContext, useState, useEffect, useRef } from 'react';
import {Table, Button, Form, AutoComplete} from 'antd';
import '../../../../configs/buyerTableConstant'


const EditableContext = React.createContext(null);

const EditableRow = ({
                         index,
                         ...props
                     }) => {
    const [form] = Form.useForm();
    return (
        <Form form={form} component={false}>
            <EditableContext.Provider value={form}>
                <tr {...props} />
            </EditableContext.Provider>
        </Form>
    );
};

const EditableCell = ({
                          title,
                          editable,
                          dropDownData,
                          children,
                          dataIndex,
                          record,
                          handleSave,
                          ...restProps
                      }) => {
    // 用于保存单元格的状态（是否可编辑）
    const [editing, setEditing] = useState(false);
    // 获取组件的状态
    const inputRef = useRef(null);
    const form = useContext(EditableContext);

    useEffect(() => {
        // 判断单元格是否为输入状态
        if (editing) {
            // 让组件获得焦点,并选中全部
            inputRef.current.focus({
                cursor: 'all',
            });
        }
    }, [editing]);

    const toggleEdit = () => {
        // 切换单元格状态并保存之前的值
        setEditing(!editing);
        form.setFieldsValue({
            // [dataIndex] = 选中单元格的元素key 将单元格的值保存
            [dataIndex]: record[dataIndex],
        });
    };

    const save = async () => {
        // 保存数据
        try {
            // 验证并获取单元格的值
            const values =await form.validateFields();
            // 切换状态
            toggleEdit();
            handleSave({ ...record, ...values });
        } catch (errInfo) {
            console.log('Save failed:', errInfo);
        }
    };
    // 结点信息
    let childNode = children;
    if (editable) {
        // 如果编辑功能打开状态，先判断子结点是否为编辑状态
        childNode = editing ? (
            <Form.Item
                style={{
                    margin: 0,
                }}
                // 将单元的key值赋值给name
                name={dataIndex}
                // 内容为空时显示*
                rules={[
                    {
                        required: true,
                        message: `${title} 不能为空值.`,
                    },
                ]}
            >
                {/*<Input.Group compact>*/}
                <AutoComplete
                    // 是否有边框
                    // bordered={false}
                    style={{ width: '100%' }}
                    options={dropDownData}
                    ref={inputRef}
                    defaultValue={children}
                    onPressEnter={save}
                    onBlur={save}
                />
                {/*</Input.Group>*/}
            </Form.Item>
        ) : (
            <div
                className="editable-cell-value-wrap"
                style={{
                    paddingRight: 24,
                    width:"100%"
                }}
                // 鼠标点击事件
                onClick={toggleEdit}
            >
                {children}
            </div>
        );
    }

    return <td {...restProps}>{childNode}</td>;
};


export default class WarehouseTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // 数据源
            dataSource: [
                {
                    key:'0',
                    id: '0',
                    productName: '请选择名称',
                    productSize: '请选择规格',
                    productPlace: '请选择产地',
                    productUnit: 'kg',
                    productCount: '0',
                    productPrice: '0',
                    remark: '.',
                },
                {
                    key:'subTotal',
                    id: '合计',
                    productName: '请选择名称',
                    productSize: '请选择规格',
                    productPlace: '请选择产地',
                    productUnit: 'kg',
                    productCount: '',
                    productPrice: '',
                    remark: '.',
                },

            ],
            count: 1,
            selectedRowKeys:[],
            isLine: true//store.getState(),
        };
        // 表格的列表头设置
        this.columns = [
            // 列表的头，内容设置
            {
                title: '编号',
                dataIndex: 'id',
                width: '5%',
                render:(text, record, index)=>{
                    if (record.id === "合计"){
                        return text;
                    }else {
                        return ++index || '--';
                    }
                }
            },
            {
                title: '保质期(天)',
                dataIndex: 'warranty',
                width: '6%',
                dropDownData : [{ value: '50' }, { value: '鲍鱼' }],
                editable: true,
                render:(text, record)=>{
                    if (record.id === "合计"){
                        return "";
                    }else {
                        return text || '0';
                    }
                }
            },
            {
                title: '产品名称',
                dataIndex: 'productName',
                width: '12%',
                dropDownData : [{ value: '龙虾' }, { value: '鲍鱼' }],
                editable: true,
                render:(text, record)=>{
                    if (record.id === "合计"){
                        return "";
                    }else {
                        return text || '--';
                    }
                }
            },
            {
                title: '产品规格',
                dataIndex: 'productSize',
                width: '12%',
                dropDownData : [{ value: '5-6' }, { value: '10-12' }],
                editable: true,
                render:(text, record)=>{
                    if (record.id === "合计"){
                        return "";
                    }else {
                        return text || '--';
                    }
                }

            },
            {
                title: '产地',
                dataIndex: 'productPlace',
                width: '12%',
                dropDownData : [{ value: '福建' }, { value: '龙岩' }],
                editable: true,
                render:(text, record)=>{
                    if (record.id === "合计"){
                        return "";
                    }else {
                        return text || '--';
                    }
                }
            },
            {
                title: '单位',
                dataIndex: 'productUnit',
                width: '8%',
                dropDownData : [{ value: 'kg' }, { value: '斤' }],
                editable: true,
                render:(text, record)=>{
                    if (record.id === "合计"){
                        return "";
                    }else {
                        return text || '--';
                    }
                }
            },
            {
                title: '数量',
                dataIndex: 'productCount',
                width: '6%',
                //editable: true,
                render:(text, record)=>{
                    if (record.id === "合计"){
                        let count = 0
                       this.state.dataSource.map((item)=> count = item.productCount*1 + count);
                        return count
                    }else {
                        return text || '00';
                    }
                }
            },
            {
                title: '备注',
                dataIndex: 'remark',
                width: '20%',
                editable: true,
            },
        ];
    };

    handleAdd = () => {
        // 添加行
        const { count, dataSource } = this.state;
        const newData = {
            key: count,
            id: count,
            productName: `请点击选择`,
            productSize: `请点击选择`,
            productPlace: `请点击选择`,
            productUnit: `kg`,
            productCount: '0',
            productPrice: '0',
            remark: '.',
        };

        const subTotal ={
            key: "subTotal",
            id: "合计",
            productName: `请点击选择`,
            productSize: `请点击选择`,
            productPlace: `请点击选择`,
            productUnit: `kg`,
            productCount: '0',
            productPrice: '0',
            remark: '.',
        }
        let reNewData = []
        dataSource.map(item =>{
            // 如果是合计则不组成新数据
            if(item.id==="合计"){
                return null
            }
            reNewData = [...reNewData, item]
        })
        // 先添加空白数组
        reNewData = [...reNewData, newData]
        // 组合成带合计的数组
        reNewData = [...reNewData, subTotal]
        this.setState({
            dataSource: reNewData,
            count: count + 1,
        });
    };
    handleSave = (row) => {
        // 保存数据
        const newData = [...this.state.dataSource];
        const index = newData.findIndex((item) => row.key === item.key);
        const item = newData[index];
        newData.splice(index, 1, { ...item, ...row });
        this.setState({
            dataSource: newData,
        });
    };

    render() {
        const { dataSource } = this.state;
        // 加载两个方法
        const components = {
            body: {
                row: EditableRow,
                cell: EditableCell,
            },
        };

        const columns = this.columns.map((col) => {
            if (!col.editable) {
                return col;
            }
            // 向EditableCell 传递参数
            return {
                ...col,
                onCell: (record) => ({
                    record,
                    editable: col.editable,
                    dataIndex: col.dataIndex,
                    title: col.title,
                    dropDownData: col.dropDownData,
                    handleSave: this.handleSave,
                }),
            };
        });

        return (
            <div>
                <Table
                    components={components}
                    rowClassName={() => 'editable-row'}
                    bordered     // 边框
                    dataSource={dataSource}  // 行的数据
                    columns={columns} // 行的样式
                    size="small"        // 密集型显示
                    pagination={{pageSize:11}}   // 分页显示的行数
                    footer ={() => {    // table 的角
                        return  <Button
                            onClick={this.handleAdd}
                            type="dashed"
                            block
                        >
                            添加一行
                        </Button>
                    }}
                />
            </div>
        );
    }
}
