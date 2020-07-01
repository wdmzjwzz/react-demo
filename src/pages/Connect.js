import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { ThemeContext, themes } from '../components/theme-context';
import Toolbar from '../components/toolbar'
import { MyContext } from '../components/mycontext';


class Connect extends React.Component {
  // static contextType = MyContext;
  constructor(props) {
    super(props);
    this.state = {
      theme: themes.light,
    };

    this.toggleTheme = () => {
      this.setState(state => ({
        theme:
          state.theme === themes.dark
            ? themes.light
            : themes.dark,
      }));
    };
  }
  render() {
    console.log(this.props)
    return (
      <div>
        <h1>Connect页面啊</h1>
        <h2><Link to="/connect/sub">子页面</Link></h2>
        {this.props.children}
      </div>
    )
  }
}
export default Connect