import React,{Component} from 'react'
//逻辑组件
export default  class Control extends Component{
  constructor(props){
    super(props);
    this.state={
      text:'',color:'#f4f4da'
    }  
  }
 handlechange(e){
   this.setState({text:e.target.value})
 }
 handlechangecolor(e){
  this.setState({color:e.target.value})
 }
 addvalue(){
  this.props.add(this.state.text,this.state.color)
 }
  render(){
      return <div>
        <textarea placeholder="请在这里输入" ref="input" onChange={this.handlechange.bind(this)}></textarea>
        <input onChange={this.handlechangecolor.bind(this)} />
        <button onClick={this.addvalue.bind(this)}>add</button>

      </div>
    }
}
