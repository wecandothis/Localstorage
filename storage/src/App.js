import React, { Component } from 'react';
import './App.css';
import Card from './card'
import Control from './control'
class App extends Component {
constructor(props){
  super(props);
  this.state={
     cards:[
     {id:'1',text:"hello ",color:"#f5e5a3"},
     {id:'2',text:"world ",color:"#f5e5a3"},
     {id:'3',text:"HI ",color:"#f5e5a3"},
     ]
  }
}
//组件渲染完成后,提取本地数据
componentDidMount(){
     var data=JSON.parse(localStorage.getItem('stordata'));
     if(data){
        this.setState({cards:data})
     }
     
}
//组件更新后，返回更新后的本地数据
componentDidUpdate(){
  var stordata=JSON.stringify(this.state.cards);
  localStorage.setItem('stordata',stordata)
  console.log("123")

}
ondelete(v){
    var newcards=this.state.cards.filter((_v)=>_v.id!=v.id);
    this.setState({cards:newcards})

}
addstatevalue(text,color){
    var cardsnew=this.state.cards.slice();
   cardsnew.unshift({id:Date.now(),text:text,color:'#'+color});
   this.setState({cards:cardsnew})
}



  render() {
    var CompCard=this.state.cards.map(card=>{
      return <Card key={card.id} color={card.color} text={card.text} ondelete={this.ondelete.bind(this)} information={card}/>
    })
    return <div>
   <Control add={this.addstatevalue.bind(this)} />
   {CompCard}
    </div>   
  }
}





export default App;
