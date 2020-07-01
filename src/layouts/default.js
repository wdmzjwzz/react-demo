import React from 'react'
import { Route } from 'react-router-dom'
import Banner from '../components/banner'
class Connect extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
      <div>
        <Banner />
        {this.props.children}
      </div>)
  }
}
export default Connect