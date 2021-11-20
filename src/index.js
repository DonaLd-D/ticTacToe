import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';

import Board from './views/board'

class Game extends React.Component {
  constructor(){
    super()
    this.state={
      todo:[]
    }
  }
  addTodo(item){
    let todo=this.state.todo
    todo.push(item)
    this.setState({todo:todo})
  }
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board toChild={(item)=>this.addTodo(item)}/>
        </div>
        <div className="game-info">
          <span>步骤展示</span>
          <ol>{this.state.todo.map(item=>{
            return <li key={item.index+item.value}>第{item.index+1}格，{item.value}</li>
          })}</ol>
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);