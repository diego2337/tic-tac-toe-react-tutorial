import React from 'react';

interface IProps {
  style: any,
  value: number,
  onClick: React.MouseEventHandler<HTMLButtonElement>
}
export default class Square extends React.Component<IProps> {
  render() {
    return (
      <button className = {"square " + this.props.style.color} onClick={this.props.onClick}>
        {this.props.value}
      </button>
    );
  }
}