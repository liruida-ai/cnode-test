import React from 'react';
import './index.less'
const Globalheader: React.FC = () => (
    <div id="footer_main">
        <div className="links">
            <a className="dark" href="https://cnodejs.org/rss">RSS</a>|
            <a className="dark" href="https://github.com/cnodejs/nodeclub/">源码地址</a>
        </div>
        <div className="col_fade">
            <p>CNode 社区为国内最专业的 Node.js 开源技术社区，致力于 Node.js 的技术研究。</p>
            <p>服务器搭建在
                <a href="https://www.digitalocean.com/?refcode=eba02656eeb3" target="_blank" className="sponsor_outlink" data-label="digitalocean">
                    <img src="//static2.cnodejs.org/public/images/digitalocean.png" title="digitalocean" alt="digitalocean" width="92px" />
                </a>
                ，存储赞助商为
                <a href="http://www.qiniu.com/?ref=cnode" target="_blank" className="sponsor_outlink" data-label="qiniu_bottom">
                    <img src="//static2.cnodejs.org/public/images/qiniu.png" title="七牛云存储" alt="七牛云存储" width="115px" />
                </a>
            </p>
            <p>新手搭建 Node.js 服务器，推荐使用无需备案的 <a href="https://www.digitalocean.com/?refcode=eba02656eeb3">DigitalOcean(https://www.digitalocean.com/)</a></p>
        </div>
    </div>

);

export default Globalheader;
