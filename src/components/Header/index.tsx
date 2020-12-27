import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './index.less'

const Globalheader: React.FC = () => {
    let [user, setuser] = useState<string>('');
    useEffect(() => {
        if (localStorage.getItem("_token")) {
            axios.get("https://api.github.com/user", {
                headers: {
                    "authorization": `bearer ${localStorage.getItem('_token')}`,
                }
            }).then((response2) => {
                setuser(response2.data.login);
            })
        }
    })
    function clearToken() {
        localStorage.removeItem("_token");
        setuser('');
    }
    return (<div className='navbar'>
        <div className='navbar-inner'>
            <a className='brand' href='/'>
                <img style={{ width: '120px' }} src="//static2.cnodejs.org/public/images/cnodejs_light.svg" />
            </a>
            <form id='search_form' className='navbar-search' action="/search">
                <input type='text' id='q' name='q' className='search-query span3' />
            </form>
            <ul className='nav pull-right'>
                <li><a href='/'>首页</a></li>

                <li><a href='https://cnodejs.org/getstart'>新手入门</a></li>
                <li><a href='https://cnodejs.org/api'>API</a></li>

                <li><a href="https://cnodejs.org/about" target="">关于</a></li>
                {!user ? (<li><a href="https://github.com/login/oauth/authorize?response_type=code&redirect_uri=https%3A%2F%2Fcnodejs.org%2Fauth%2Fgithub%2Fcallback&client_id=0625d398dd9166a196e9">注册</a></li>) : (<li><a>{user}</a></li>)}
                {
                    !user ? (<li><a href='/login'>登录</a></li>) : (<li><button onClick={()=>{clearToken()}}>注销</button></li>)
                }
            </ul>
        </div>
    </div>)

};

export default Globalheader;
