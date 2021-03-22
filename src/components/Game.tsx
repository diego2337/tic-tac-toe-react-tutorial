import React, { ReactNode } from 'react';
import Board from './Board';
import Move from './Move';

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

  render() {
    const current = this.state.history[this.state.stepNumber];
    const winner = this.calculateWinner(current.squares);

    let moves = this.showMoves();

    let status = this.showGameStatus(winner);

    return (
      <>
        <div>
          { status }
        </div>
        <div className="game">
          <div className="game-board">
            <Board 
              squareStyles = { this.getSquareStyles(winner) }
              squares = { current.squares }
              onClick = { (i) => this.handleClick(i) }
            />
          </div>
          <div className="game-info">
            { this.renderMoves(moves) }
          </div>
        </div>
      </>
    );
  }

  calculateWinner(squares: Array<number>): Array<number> | null {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return lines[i];
      }
    }
    return null;
  }

  showMoves(): Array<ReactNode> {
    return this.state.history.map((step, move) => {
      const desc = move ?
        'Move ' + step.rowColPosition + '. Go to move #' + move :
        'Go to game start';
      return (
        <ul key={move}>
          <button onClick={() => this.jumpTo(move)}>{desc}</button>
        </ul>
      )
    });
  }

  renderMoves(moves: Array<ReactNode>) {
    let rows:Array<ReactNode> = [];
    for (let i = 0; i < this.state.stepNumber; i++) {
      let bold = "bold";
      rows.push(
        <Move
          style = {{ fontWeight: bold }}
          move = { moves[i] }
        />
      );
    }
    return rows;
  }

  jumpTo(step: number) {
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) === 0,
    });
  }

  showGameStatus(status: Array<number> | null) {
    if (status) {
      return 'Winner: ' + status[0];
    } else {
      return 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    }
  }

  getSquareStyles(winnerRow: Array<number> | null): Array<string>  {
    let colors = [];
    for (let i = 0; i < 9; i++) {
      colors.push("black");
    }
    if (winnerRow) {
      console.log("winnerRow:");
      console.log(winnerRow);
      for (let i = 0; i < winnerRow.length; i++) {
        colors[winnerRow[i]] = "green";
      }
    }
    console.log("colors:");
    console.log(colors);
    return colors;
  }

  handleClick(i: any) {
    const current = this.getCurrentBoard();
    const squares = current.squares.slice();
    if (this.calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.changeGameState({
      squares: squares,
      clickedIndex: i
    });
  }

  getCurrentBoard() {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    return history[history.length - 1]; 
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
}