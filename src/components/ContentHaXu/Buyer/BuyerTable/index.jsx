import React, { useContext, useState, useEffect, useRef } from 'react';
import {Table, Button, Popconfirm, Form, AutoComplete, Input} from 'antd';
import '../../../../configs/buyerTableConstant'
import {BUYER_ORDER} from "../../../../configs/buyerTableConstant";
import capitalAmount from "../../../../utils/numToChinese"

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
        childNode = editing ? ((dataIndex === 'productPrice' || dataIndex === 'productCount') ? (
            // 数字验证
            <Form.Item
                style={{margin: 0,}}
                name={dataIndex} // 将单元的key值赋值给name
                rules={[
                    { required: true, message: `${title} 不能为空值.` },// 内容为空时显示*
                    { pattern: /^[0-9.]+$/, message: '只能输入数字' },
                ]}>

                <Input ref={inputRef} onPressEnter={save} onBlur={save} prefix={dataIndex === 'productPrice' ? "￥":null}/>
            </Form.Item>
        ) :(
            // 表单验证
            <Form.Item
                style={{ margin: 0, }}
                name={dataIndex}  // 将单元的key值赋值给name
                rules={[
                    { required: true, message: `${title} 不能为空值.` },// 内容为空时显示*
                ]}>
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
            </Form.Item>
        )) : (
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
            selectedRowKeys:[],
            isline: true//store.getState(),
        };
        // 表格的列表头设置
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
                render:(text, record)=>{
                    return "￥" + text || '0';
                }

            },
            {
                title: '小计',
                dataIndex: 'subTotal',
                width: '5%',
                render: (_, record) => {
                    const {dataSource} = this.state
                    // 乘法
                    let sub = 0
                    dataSource.map((item) => {
                        if (item.key === record.key){
                            sub += ((item.productCount*1)*(item.productPrice * 1))
                        }
                    })
                    return "￥" + sub.toFixed(3)|| 0

                },
            },
            {
                title: '备注',
                dataIndex: 'remark',
                width: '20%',
                editable: true,
                render:(text, record)=>{
                    if (record.id === "合计"){
                        return "";
                    }else {
                        return text || '-';
                    }
                }
            },
            {
                title: '付款状态',
                dataIndex: 'productDebt',
                dropDownData : [{ value: '已付款' }, { value: '未付款' }],
                width: '6%',
                // 列是否可见
                responsive: this.props.buyerType===BUYER_ORDER ? false:[],
                editable: true,
                render:(text, record)=>{
                    return text || '已付款';

                }
            },
            {
                title: '操作',
                dataIndex: 'operation',
                width: '10%',
                render:(text, record)=> {
                    if (record.id === "合计") {
                        return "";
                    } else {
                        return this.state.dataSource.length >= 1 ? (
                            <Popconfirm title="确定要删除该行?" onConfirm={() => this.handleDelete(record.key)}>
                                <a>删除</a>
                            </Popconfirm>
                        ) : null
                    }
                }
            }
        ];

    }

    handleDelete = (key) => {
        // 删除行功能
        const dataSource = [...this.state.dataSource];
        this.setState({
            dataSource: dataSource.filter((item) => item.key !== key),
        });
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
        this.setState({ dataSource: newData,});
    };

    onSelectChange = selectedRowKeys => {
        // 点击选择后的 ，
        const newSelectedKey = selectedRowKeys.filter(item => item !== "subTotal" )
        this.setState({ selectedRowKeys:newSelectedKey });
    };

    render() {
        const { dataSource, selectedRowKeys } = this.state;
        const components = { body: { row: EditableRow, cell: EditableCell, }, // 加载两个方法
        };

        const columns = this.columns.map((col) => {
            if (!col.editable) return col;         // 判断是否可以编辑
            return {  // 向EditableCell 传递参数
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

        const rowSelection = {            // 加载选择行的数组和方法
            selectedRowKeys,
            onChange: this.onSelectChange,
        };

        return (
            <div style={{width:"100%"}}>
                <Table
                    components={components}
                    rowClassName={() => 'editable-row'}
                    rowSelection={this.props.buyerType===BUYER_ORDER ?rowSelection : null}  // 选择框
                    bordered
                    dataSource={dataSource}  // 行的数据
                    columns={columns}  // 行的样式
                    size="small"
                    pagination={{pageSize:9}}   // 分页
                    summary={pageData => {
                        // 汇总
                        let totalPrice = 0;
                        let totalAll = 0;

                        pageData.forEach(({ productCount, productPrice }) => {
                            totalPrice += productCount*productPrice*1;
                        });

                        dataSource.map(({productCount, productPrice})=>{
                            totalAll += productCount*productPrice*1
                        });


                        return (    // 总结行
                        <Table.Summary fixed>
                            <Table.Summary.Row>
                                <Table.Summary.Cell colSpan={12}>
                                    <Button onClick={this.handleAdd} type="dashed" block > 添加一行 </Button>
                                </Table.Summary.Cell>
                            </Table.Summary.Row><Table.Summary.Row>
                                <Table.Summary.Cell colSpan={2}>小计：</Table.Summary.Cell>
                                <Table.Summary.Cell colSpan={6}>{capitalAmount(totalPrice)}</Table.Summary.Cell>
                                <Table.Summary.Cell index={7}>{totalPrice}</Table.Summary.Cell>
                                <Table.Summary.Cell colSpan={3}></Table.Summary.Cell>
                            </Table.Summary.Row>
                            <Table.Summary.Row>
                                <Table.Summary.Cell colSpan={2}>总计:</Table.Summary.Cell>
                                <Table.Summary.Cell colSpan={4}>{capitalAmount(totalAll)}</Table.Summary.Cell>
                                <Table.Summary.Cell colSpan={6}>{totalAll}</Table.Summary.Cell>
                            </Table.Summary.Row>
                        </Table.Summary>
                    )}}
                />
            </div>
        );
    }
}
