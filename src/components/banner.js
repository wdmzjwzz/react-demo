import React from 'react';
import { Link } from 'react-router-dom'
import '../styles/banner.less'
class Banner extends React.Component {
  render() {
    return (
      <div className="header">
        <ul>
          <li><Link to="/">首页</Link></li>
          <li><Link to="/about">关于</Link></li>
          <li><Link to="/connect">联系我们</Link></li>
        </ul>
      </div>
    );
  }
}
export default Banner;