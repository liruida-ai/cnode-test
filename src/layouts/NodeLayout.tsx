import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './NodeLayout.less'
//这里写通用布局
const Layout: React.FC = ({ children }) => {
    return (
        <div>
            <Header />
            <div className="content">
                <div className="box">
                    <div className="leftContent">
                        {children}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
};

export default Layout;
