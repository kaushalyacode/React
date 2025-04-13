import React, { Component } from "react";

export class MountinChild extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Kauhslaya',
            age: 10
        };
        console.log('constructor called: MC')
    }

    static getDerivedStateFromProps(props, state) {
        if (state.name !== props.name) {
            console.log('getDerivedStateFromProps called return : Mc');
            return {
                name: props.name
            }
        }
        console.log('getDerivedStateFromProps called : MC');
        return null;
    }

    componentDidMount() {
        console.log('componentDidMount called : MC');
    }
    shouldComponentUpdate(nextProps, nextState) {       
        console.log('shouldComponentUpdate called : Mc');
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('getSnapshotBeforeUpdate called : Mc');
        return null;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('componentDidUpdate called : Mc');
    }

    render() {
        console.log('render called : MC')
        return (<div>Mc  {this.state.name + this.state.age}</div>);
    }
}