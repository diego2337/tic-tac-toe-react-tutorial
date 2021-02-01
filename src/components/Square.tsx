import React from 'react';

interface IProps {
  value: number,
  onClick: React.MouseEventHandler<HTMLButtonElement>
}
export default class Square extends React.Component<IProps> {
  render() {
    return (
      <button className="square" onClick={this.props.onClick}>
        {this.props.value}
      </button>
    );
  }
}