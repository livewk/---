import React, {Component} from 'react';
import { Drawer, Button, Select } from 'antd';


const { Option } = Select;

export default class OrderDrawer extends Component {
    state = { visible: false };

    showDrawer = () => {
        // 显示的方法
        this.setState({
            visible: true,
        });
    };

    onClose = () => {
        // 关闭的方法
        this.setState({
            visible: false,
        });
    };

    componentDidMount()  {
        console.log("1223456")
        this.setState({
            visible: true,
        });
    }

    render() {
        return (
            <>
                {/*<Button type="primary" onClick={this.showDrawer}>*/}
                {/*    <PlusOutlined /> New account*/}
                {/*</Button>*/}
                <Drawer
                    title="Create a new account"
                    width={720}
                    onClose={this.onClose}
                    visible={this.state.visible}
                    bodyStyle={{ paddingBottom: 80 }}
                    footer={
                        <div
                            style={{
                                textAlign: 'right',
                            }}
                        >
                            <Button onClick={this.onClose} style={{ marginRight: 8 }}>
                                Cancel
                            </Button>
                            <Button onClick={this.onClose} type="primary">
                                Submit
                            </Button>
                        </div>
                    }
                >
                </Drawer>
            </>
        );
    }
}