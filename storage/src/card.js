import React,{Component} from 'react'





//单个卡片的组件
export default class Card extends Component{
  deletecard(){
    this.props.ondelete(this.props.information)
  }
   render(){
    var style={
      backgroundColor:this.props.color
    }
     return <div className="card" style={style}>
        <span onClick={this.deletecard.bind(this)}>xXXXXXX</span>
        {this.props.text}
     </div>
   }
}