
import React from 'react';

import './index.less'
const Message = (props: any) => {
    return (
        <div className="replyitem">
            <div className="replyhead">
                <a className="user_avatar">
                    <img src={props.item.avatar_url} title="fengmk2" />
                </a>
                <div className="dark">{props.item.author.loginname}</div>
                <div className='date'><a>{props.index + 1}&nbsp;楼·{new Date().getDate() - new Date(props.item.create_at).getDate()}天前</a></div>
            </div>
            <div dangerouslySetInnerHTML={{ __html: props.item.content }}></div>
        </div>
    )         
};
export default Message;
