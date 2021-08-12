import React, {Component} from 'react';
import "./index.css"
import LoginHaixu from '../../components/LoginHaixu'

class Login extends Component {
    render() {
        return (
            <div className="login">
                <headereader className="login-header">
                    <img src="https://z3.ax1x.com/2021/08/11/faxCk9.png" alt={"logo"}/>
                    <h1>北京市海旭恒业商贸有限公司：管理系统</h1>
                </headereader>
                <section  className="login-section">
                    <h2>用户登入</h2>
                    <div className="section-div-form"><LoginHaixu/></div>
                </section>
            </div>
        );
    }
}

export default Login;