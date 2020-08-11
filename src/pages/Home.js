import React from 'react'
import img from '@/assets/test.jpeg'
import Api from '@/apis/api-services'
import img from '@/assets/test.jpeg';
import $ from "jquery"
class Home extends React.Component {
  componentDidMount() {
    this.getApi()
  }
  getApi() {
    Api.getList({a:1,b:2}).then(res => {

    })
  }
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