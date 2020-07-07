import React from 'react'
import img from '@/assets/test.jpeg';
import $ from "jquery"
class Home extends React.Component {
  render() {
    return (
      <div>
        {
          console.log($('body'))
        }
        <h1>Home页面啊</h1>
        <img src={img}></img>
      </div>
    )
  }
}
export default Home