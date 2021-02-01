import React from 'react';
import Square from './Square';

interface IProps {
  squares: Array<any>,
  onClick: React.MouseEventHandler<HTMLButtonElement>
}

interface IState {
}

export default class Board extends React.Component<IProps, IState> {
  mapIndexToColRow(index: number) {
    switch (index) {
      case 0:
        return "(0, 0)";
      case 1:
        return "(1, 0)";
      case 2:
        return "(2, 0)";
      case 3:
        return "(0, 1)";
      case 4:
        return "(1, 1)";
      case 5:
        return "(2, 1)";
      case 6:
        return "(0, 2)";
      case 7:
        return "(1, 2)";
      case 8:
        return "(2, 2)";
      default:
        return "";  
    }
  }

  calculateWinner(squares: Array<number>): number | null {
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
        return squares[a];
      }
    }
    return null;
  }

  renderSquare(i: any) {
    return <Square 
              value={this.props.squares[i]}
              onClick={() => this.props.onClick(i)}
    />;
  }

  render() {
    return (
      <div>
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