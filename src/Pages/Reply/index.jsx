import React, {Component} from 'react';
import {Card} from "antd";
import ContentReply from "../../components/ContentHaXu/ContentReply";

class Reply extends Component {
    // 任务页
    render() {
        return (
            <Card title={"申请批复"} style={{height:"100%"}}>
                <ContentReply/>
            </Card>
        );
    }
}

export default Reply;