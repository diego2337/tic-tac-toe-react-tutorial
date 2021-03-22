import React from 'react';
import Square from './Square';

interface IProps {
  squares: Array<any>,
  squareStyles: Array<string>,
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

  render() {
    let squares: Array<any> = [];
    let rowLength = 3;
    for(let i = 0; i < rowLength; i++) {
      squares.push([]);
      this.renderRow(i, squares[i]);
      squares[i] = <div className = "board-row">
          { squares[i] }
      </div>
    }
    return (
      <div>
        { squares }
      </div>
    );
  }

  renderRow(row: number, square: Array<any>) {
    let colLength = 3;
    for (let i = 0; i < colLength; i++) {
      square.push(
        this.renderSquare(i + (colLength * row))
      );
    }
  }

  renderSquare(i: any) {
    return <Square 
              style = {{ color: this.props.squareStyles[i] }}
              value={this.props.squares[i]}
              onClick={() => this.props.onClick(i)}
    />;
  }
}