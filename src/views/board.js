import React from "react";
import Square from './square'
import './board.scss'

import cal from '../utils/cal'

class Board extends React.Component {
  constructor(props){
    super(props)
    this.state={
      squares:Array(9).fill(null),
      isX:true,
      isEnd:false
    }
  }
  renderSquare(i) {
    return <Square value={this.state.squares[i]} handleChange={()=>this.handleChange(i)}/>;
  }
  handleChange(i){
    let squares=this.state.squares
    squares[i]=this.state.isX?'X':'O'
    let isEnd=cal(squares)?true:false
    if(!this.state.isEnd){
      this.setState({squares:squares,isX:!this.state.isX,isEnd:isEnd})
      this.props.toChild({index:i,value:squares[i]})
    }
  }

  render() {
    const status = 'Next player: '+(this.state.isX?'X':'O')
    const winner=cal(this.state.squares)

    return (
      <div>
        <div className="status">{winner?'Winner is: '+winner:status}<span className="reset" onClick={()=>document.location.reload()}>reset</span></div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

export default Board
