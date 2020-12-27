
import React, { useEffect, useState } from 'react';
import './index.less'
import { Pagination } from 'antd';
import ListItem from './components/listItem';
import axios from 'axios';
const Home: React.FC = () => {
    let [nodelist, setnodelist] = useState([]);
    let [tab, settab] = useState<string>('');
    useEffect(() => {
        axios.get('https://cnodejs.org/api/v1/topics').then(res => {
            setnodelist(res.data.data);
            console.log(res.data.data);
        })

        document.getElementsByClassName("navlist")[0].addEventListener("click", (e: any) => {
            let name = e.target.title;
            settab(name);
            axios.get(`https://cnodejs.org/api/v1/topics?tab=${name}`).then(res => {
                setnodelist(res.data.data);
            })

            let lilist = document.getElementsByClassName("li");
            for (let i = 0; i < lilist.length; i++) {
                lilist[i].className = "li";
            }
            e.target.className = 'active li'

        })
    }, [])
    return (<div>
        <div className="leftContent">
            <ul className="nav navlist">
                <li className="active li" >全部</li>
                <li className="li" title="good">精华</li>
                <li className="li" title="share">分享</li>
                <li className="li" title="ask">问答</li>
                <li className="li" title="job">招聘</li>
            </ul>
            <div className="inner">
                <div className="topic_list">
                    {nodelist.map((item: any, index) => {
                        return <ListItem item={item} key={index}></ListItem>
                    })}
                </div>
            </div>
            <div className="page">
                <Pagination defaultCurrent={1} total={50} onChange={(page, pagesize) => {
                    axios.get(`https://cnodejs.org/api/v1/topics?page=${page}&tab=${tab}`).then(res => {
                        setnodelist(res.data.data);
                    })
                }} />
            </div>
        </div>
        <div className="rightContent"></div>
    </div>)
};

export default Home;