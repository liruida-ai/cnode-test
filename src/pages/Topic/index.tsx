
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './index.less'
import Message from './component/message';
const Topic: React.FC = (props: any) => {
    let [data, setdata] = useState<any>('loading...');
    let [replies, setreplies] = useState<[]>([]);
    useEffect(() => {
        axios.get(`https://cnodejs.org/api/v1/topic/${props.match.params.id}?accesstoken=true`).then(res => {
            setreplies(res.data.data.replies)
            setdata(res.data.data);
        })
    }, [])
    console.log(replies);
    return (
        <div>
            <div style={{backgroundColor:'#fff'}}>
            <div className="header">{data.title}</div>
            <div dangerouslySetInnerHTML={{ __html: data.content }} ></div>
            </div>
            <div className="reply">
                <div className="nav">{replies.length}&nbsp;回复</div>
                {replies.map((item: any, index: number) => {
                    return (<Message item={item} index={index}></Message>)
                })}
            </div>
        </div>
    );
};

export default Topic;
