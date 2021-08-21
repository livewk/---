// 菜单的config

import {
    CarOutlined, CarryOutOutlined,
    DesktopOutlined, FileDoneOutlined, HomeOutlined,
    LineChartOutlined, ShopOutlined, ShoppingCartOutlined, UserOutlined,
} from "@ant-design/icons";


const menuConfig = [
    {
        title: '首页', // 菜单标题名称
        key: '/home', // 对应的path
        icon: <HomeOutlined />, // 图标名称
        isPublic: true, // 公开的
    },
    {
        title: '任务', // 菜单标题名称
        key: '/task', // 对应的path
        icon: <DesktopOutlined />, // 图标名称
        isPublic: true, // 公开的
    },
    {
        title: '业务管理',
        key: '/work',
        icon: <FileDoneOutlined />,
        children: [ // 子菜单列表
            {
                title: '采购管理',
                key: '/buyer',
                icon: <ShoppingCartOutlined />,
                children: [ // 子菜单列表
                    {
                        title: '采购申请',
                        key: '/buyerOrderReserve',
                        icon: '',
                    },
                    {
                        title: '采购单',
                        key: '/buyerOrder',
                        icon: ''
                    },
                    {
                        title: '查看明细',
                        key: '/buyerOrderInfo',
                        icon: ''
                    },
                    {
                        title: '往期商品价格',
                        key: '/oldBuyerPrice',
                        icon: ''
                    }
                ]
            },
            {
                title: '库房管理',
                key: '/warehouse',
                icon: <ShopOutlined />,
                children: [ // 子菜单列表
                    {
                        title: '入库申请',
                        key: '/warehouseOrderReserve',
                        icon: ''
                    },
                    {
                        title: '入库单',
                        key: '/warehouseOrder',
                        icon: ''
                    },
                    {
                        title: '入库单查询',
                        key: '/warehouseOrders',
                        icon: ''
                    },
                    {
                        title: '库存查询',
                        key: '/warehouseOrderInfo',
                        icon: ''
                    },
                ]
            },
            {
                title: '销售管理',
                key: '/sales',
                icon: <LineChartOutlined />,
                children: [ // 子菜单列表
                    {
                        title: '销售预定',
                        key: '/salesOrderReserve',
                        icon: ''
                    },
                    {
                        title: '销售单',
                        key: '/salesOrder',
                        icon: ''
                    },
                    {
                        title: '销售单查询',
                        key: '/salesOrders',
                        icon: ''
                    },
                    {
                        title: '业绩销售',
                        key: '/salesInfo',
                        icon: ''
                    },
                    {
                        title: '客户信息',
                        key: '/clientInfo',
                        icon: ''
                    },
                ]
            },
            {
                title: '物流管理',
                key: '/logistics',
                icon: <CarOutlined />,
                children: [ // 子菜单列表
                    {
                        title: '车辆管理',
                        key: '/cars',
                        icon: ''
                    },
                    {
                        title: '物流费用',
                        key: '/logisticsOrder',
                        icon: ''
                    },
                ]
            },
        ]
    },

    {
        title: '审核批复',
        key: '/reply',
        icon: <CarryOutOutlined />,

    },
    {
        title: '人员管理',
        key: '/user',
        icon: <UserOutlined />,
        children: [ // 子菜单列表
            {
                title: '通讯录',
                key: '/users',
                icon: ''
            },
            {
                title: '考勤报表',
                key: '/checking',
                icon: ''
            },
            {
                title: '工资管理',
                key: '/salary',
                icon: ''
            },
            {
                title: '岗位管理',
                key: '/post',
                icon: ''
            },
        ]
    },
    {
        title: '建议&投诉',
        key: '/suggest',
        icon: <UserOutlined />,
        children: [ // 子菜单列表
            {
                title: '建议',
                key: '/suggestInfo',
                icon: ''
            },
            {
                title: '投诉',
                key: '/complaint',
                icon: ''
            }
        ]
    },
]


export default menuConfig
