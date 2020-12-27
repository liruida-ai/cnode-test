
import React from 'react';
import './index.less'
const listItem = (props: any) => {
    let time: string = props.item.last_reply_at.toString();
    let nowtime = new Date();
    let year = nowtime.getFullYear() - parseInt(time.slice(0, 4));
    let month = nowtime.getMonth() + 1 - parseInt(time.slice(5, 7));
    let day = nowtime.getDate() - parseInt(time.slice(8, 10));
    console.log(year, month, day);
    return (
        <div className="cell" >
            <a className="user_avatar pull-left" href="/user/905868332">
                <img src={props.item.avatar_url} title="905868332" />
            </a>
            <span className="reply_count pull-left">
                <span className="count_of_replies" title="回复数">
                    {props.item.reply_count}
                </span>
                <span className="count_seperator">/</span>
                <span className="count_of_visits" title="点击数">
                    {props.item.visit_count}
                </span>
            </span>
            <a className="last_time pull-right">
                <img className="user_small_avatar" src={props.item.avatar_url} title="905868332" />
                <span className="last_active_time">
                    {
                        year > 0 ? year + '年前' : month > 0 ? month + '月前' : day > 0 ? day + '天前' : '刚刚'
                    }
                </span>
            </a>
            <div className="topic_title_wrapper">
                {
                    props.item.top ? <span className="good">置顶</span> :
                        props.item.good ? <span className="top">精华</span> :
                            props.item.tab == "share" ? <span className="topiclist-tab"> 分享 </span> :
                                props.item.tab == "ask" ? <span className="topiclist-tab">问答 </span> :
                                    <span className="topiclist-tab">招聘</span>}
                <a className="topic_title" href={`/topic/${props.item.id}`} title="代码在线运行，后台是Node的，有没有案例，或者怎么实现">
                    {props.item.title}
                </a>
            </div>
        </div>
    );
};

export default listItem;
