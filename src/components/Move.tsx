import React, { ReactNode } from 'react';

interface IProps {
    style: any
    move: ReactNode
}

interface IState {
}

export default class Move extends React.Component<IProps, IState> {
    render() {
        return (
            <ol style = { this.renderStyle() }>{this.props.move}</ol>
        );
    }

    renderStyle() {
        /** TODO - implement styling */
        return undefined;
    }
}