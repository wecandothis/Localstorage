import React,{Component} from 'react'
import './jscolor.min'
import marked from 'marked'
//逻辑组件
export default  class Control extends Component{
  constructor(props){
    super(props);
    this.state={
      text:'',color:'#f4d4da'
    }  
  }
 handlechange(e){
   e.preventDefault()
   this.setState({text:e.target.value})
 }
 handlechangecolor(e){
  e.preventDefault()
  this.setState({color:e.target.value});
  this.refs.markdiv.style.backgroundColor='#'+e.target.value
  
 }
 addvalue(){
  this.props.add(this.state.text,this.state.color)
 }
  render(){
    const aaa=marked(this.state.text)
    const style={backgroundColor:this.state.color}
      return <div>
        <textarea placeholder="请在这里输入" onChange={this.handlechange.bind(this)}></textarea>
        <input className='jscolor' onBlur={this.handlechangecolor.bind(this)} />
        <button onClick={this.addvalue.bind(this)}>add</button>
       <div ref='markdiv' dangerouslySetInnerHTML={{ __html: aaa }} ></div>
      </div>
    }
}
