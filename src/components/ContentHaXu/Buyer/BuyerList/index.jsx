import React, {Component} from 'react';
import {Table, Input, Button, Space, Drawer} from 'antd';
import Highlighter from 'react-highlight-words';
import { SearchOutlined } from '@ant-design/icons';
import DrawerTable from "../DrawerTable";

const data = [
    {
        key: '1',
        orderData: 'John Brown',
        id: 32,
        orderId: 'New York No. 1 Lake Park',
        clientInfo: "北京北辰实业股份有限公司国家会议中心"
    },
    {
        key: '2',
        orderData: 'Joe Black',
        id: 42,
        orderId: 'London No. 1 Lake Park',
        clientInfo: "北京北辰实业股份有限公司国家会议中心大酒店"
    },
    {
        key: '3',
        orderData: 'Jim Green',
        id: 32,
        orderId: 'Sidney No. 1 Lake Park',
        clientInfo: "北京北辰实业股份有限公司洲际酒店"
    },
    {
        key: '4',
        orderData: 'Jim Red',
        id: 32,
        orderId: 'London No. 2 Lake Park',
        clientInfo: "北京北辰实业股份有限公司五洲皇冠假日国际酒店"
    },
];

export default class BuyerList extends Component {
    state = {
        searchText: '',
        searchedColumn: '',
    };

    state = { visible: false };

    showDrawer = () => {
        // 显示现实的方法
        this.setState({
            visible: true,
        });
    };

    onClose = () => {
        // 关闭抽屉的方法
        this.setState({
            visible: false,
        });
    };

    getColumnSearchProps = dataIndex => ({
        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
            <div style={{ padding: 8 }}>
                {/* 搜索框 */}
                <Input
                    ref={node => {
                        this.searchInput = node;
                    }}
                    placeholder={`搜索 ${dataIndex}`}
                    value={selectedKeys[0]}
                    onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                    onPressEnter={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
                    style={{ marginBottom: 8, display: 'block' }}
                />
                <Space>
                    <Button
                        type="primary"
                        onClick={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
                        icon={<SearchOutlined />}
                        size="small"
                        style={{ width: 90 }}
                    >
                        搜索
                    </Button>
                    <Button onClick={() => this.handleReset(clearFilters)} size="small" style={{ width: 90 }}>
                        重置
                    </Button>
                    <Button
                        type="link"
                        size="small"
                        onClick={() => {
                            confirm({ closeDropdown: false });
                            this.setState({
                                searchText: selectedKeys[0],
                                searchedColumn: dataIndex,
                            });
                        }}
                    >
                        过滤
                    </Button>
                </Space>
            </div>
        ),
        filterIcon: filtered => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
        onFilter: (value, record) =>
            record[dataIndex]
                ? record[dataIndex].toString().toLowerCase().includes(value.toLowerCase())
                : '',
        onFilterDropdownVisibleChange: visible => {
            if (visible) {
                setTimeout(() => this.searchInput.select(), 100);
            }
        },
        render: text =>
            this.state.searchedColumn === dataIndex ? (
                <Highlighter
                    highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
                    searchWords={[this.state.searchText]}
                    autoEscape
                    textToHighlight={text ? text.toString() : ''}
                />
            ) : (
                text
            ),
    });

    handleSearch = (selectedKeys, confirm, dataIndex) => {
        confirm();
        this.setState({
            searchText: selectedKeys[0],
            searchedColumn: dataIndex,
        });
    };

    handleReset = clearFilters => {
        clearFilters();
        this.setState({ searchText: '' });
    };

    render() {
        const columns = [
            // 列表头
            {
                title: 'id',
                dataIndex: 'id',
                key: 'id',
                width: '30%',
                ...this.getColumnSearchProps('id'),
            },
            {
                title: '日期',
                dataIndex: 'orderData',
                key: 'orderData',
                width: '20%',
                ...this.getColumnSearchProps('orderData'),
            },
            {
                title: '采购订单号',
                dataIndex: 'orderId',
                key: 'orderId',
                ...this.getColumnSearchProps('orderId'),
            },
            {
                title: '客户信息',
                dataIndex: 'clientInfo',
                key: 'clientInfo',
                ...this.getColumnSearchProps('clientInfo'),
            },
        ];
        return <>
            <Table
                    columns={columns}
                    dataSource={data}
                    onRow={record => {
                        return {
                            onClick: event => {
                                this.showDrawer()
                            }, // 点击行
                        };
                    }}
                />;

            <Drawer
                title= "订单的详情 "
                width="50%"
                onClose={this.onClose}
                visible={this.state.visible}
                bodyStyle={{ paddingBottom: 80 }}
                footer={
                        <div
                            style={{
                                textAlign: 'right',
                            }}
                        >
                            <Button onClick={this.onClose} type="primary">
                                编辑
                            </Button>
                        </div>
                }

            >
                <DrawerTable />
            </Drawer>
            </>
    }
}
