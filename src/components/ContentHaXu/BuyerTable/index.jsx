import React, { useContext, useState, useEffect, useRef } from 'react';
import {Table, Button, Popconfirm, Form, AutoComplete} from 'antd';
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

export default class BuyerTable extends React.Component {

    constructor(props) {
        super(props);
        this.columns = [
            // 列表的头，内容设置
            {
                title: '编号',
                dataIndex: 'id',
                width: '5%',
            },
            {
                title: '产品名称',
                dataIndex: 'productName',
                width: '12%',
                dropDownData : [{ value: '龙虾' }, { value: '鲍鱼' }],
                editable: true,
            },
            {
                title: '产品规格',
                dataIndex: 'productSize',
                width: '12%',
                dropDownData : [{ value: '5-6' }, { value: '10-12' }],
                editable: true,

            },
            {
                title: '产地',
                dataIndex: 'productPlace',
                width: '12%',
                dropDownData : [{ value: '福建' }, { value: '龙岩' }],
                editable: true,
            },
            {
                title: '单位',
                dataIndex: 'productUnit',
                width: '8%',
                dropDownData : [{ value: 'kg' }, { value: '斤' }],
                editable: true,
            },
            {
                title: '数量',
                dataIndex: 'productCount',
                width: '6%',
                editable: true,
            },
            {
                title: '价格',
                dataIndex: 'productPrice',
                width: '6%',
                editable: true,

            },
            {
                title: '小计',
                dataIndex: 'subTotal',
                width: '5%',
                render: (_, record) => {
                    const {dataSource} = this.state
                    // 乘法
                    const sub = dataSource.map((item) => {
                        if (item.key === record.key)
                        return item.productCount * 1 * item.productPrice * 1
                    })
                    return <label>{sub}</label>
                },
            },
            {
                title: '备注',
                dataIndex: 'remark',
                width: '20%',
                editable: true,
            },
            {
                title: '操作',
                dataIndex: 'operation',
                width: '10%',
                render: (_, record) =>
                    this.state.dataSource.length >= 1 ? (
                        <Popconfirm title="确定要删除该行?" onConfirm={() => this.handleDelete(record.key)}>
                            <a>删除</a>
                        </Popconfirm>
                    ) : null,
            },
        ];
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

            ],
            count: 1,
        };
    }

    handleDelete = (key) => {
        // 删除行功能
        const dataSource = [...this.state.dataSource];
        this.setState({
            dataSource: dataSource.filter((item) => item.key !== key),
        });
    };
    handleAdd = () => {
        const { count, dataSource } = this.state;
        const newData = {
            key: count,
            id: count,
            productName: `请点击选择${count}`,
            productSize: `请点击选择${count}`,
            productPlace: `请点击选择${count}`,
            productUnit: `kg`,
            productCount: '0',
            productPrice: '0',
            remark: '情况说明',
        };
        this.setState({
            dataSource: [...dataSource, newData],
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
                <Button
                    onClick={this.handleAdd}
                    type="primary"
                    style={{
                        marginBottom: 16,
                        marginTop: 16,
                    }}
                >
                    添加一行
                </Button>
                <Table
                    components={components}
                    rowClassName={() => 'editable-row'}
                    bordered
                    dataSource={dataSource}
                    columns={columns}
                />
            </div>
        );
    }
}
