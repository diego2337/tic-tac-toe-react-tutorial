import React from 'react';
import Board from './Board';

interface IProps {
}

interface IState {
  history: Array<any>,
  stepNumber: number,
  xIsNext: boolean
}

export default class Game extends React.Component<IProps, IState> {
  protected board: Board;
  constructor(props: any) {
    super(props);
    this.board = new Board(props);
    this.state = {
      history: [{
        squares: Array(9).fill(null),
      }],
      xIsNext: true,
      stepNumber: 0,
    }
  }

  getCurrentBoard() {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    return history[history.length - 1]; 
  }

  handleClick(i: any) {
    const current = this.getCurrentBoard();
    const squares = current.squares.slice();
    if (this.board.calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.changeGameState({
      squares: squares,
      clickedIndex: i
    });
  }

  changeGameState(gameData: any) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    this.setState({
      history: history.concat([{
        squares: gameData.squares,
        rowColPosition: this.board.mapIndexToColRow(gameData.clickedIndex)
      }]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext
    });
  }

  jumpTo(step: number) {
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) === 0,
    })
  }

  showMoves() {
    return this.state.history.map((step, move) => {
      const desc = move ?
        'Move ' + step.rowColPosition + '. Go to move #' + move :
        'Go to game start';
      return (
        <li key={move}>
          <button onClick={() => this.jumpTo(move)}>{desc}</button>
        </li>
      )
    });
  }

  showGameStatus(status: number | null) {
    if (status) {
      return 'Winner: ' + status;
    } else {
      return 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    }
  }

  render() {
    const current = this.state.history[this.state.stepNumber];
    const winner = this.board.calculateWinner(current.squares);

    let moves = this.showMoves();

    let status = this.showGameStatus(winner);

    return (
      <div className="game">
        <div className="game-board">
          <Board 
            squares = { current.squares }
            onClick = { (i) => this.handleClick(i) }
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}