import React, { Component } from "react";
import { MountinChild } from "./MountinChild";

export class Mounting extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Kauhslaya',
            age:10
        };
        console.log('constructor called: m')
    }

    static getDerivedStateFromProps(props, state) {
        if (state.name !== props.name) {
            console.log('getDerivedStateFromProps called return : M');
            return {
                name: props.name
            }
        }
        console.log('getDerivedStateFromProps called : M');
        return null;
    }

    shouldComponentUpdate(nextProps, nextState) {       
        console.log('shouldComponentUpdate called : M');
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('getSnapshotBeforeUpdate called : M');
        return null;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('componentDidUpdate called : M');
    }

    componentDidMount() {
        console.log('componentDidMount called : M');
    }

    handleButtonClick = () => {
        this.setState({
            name: 'Kauhs'
        })
    }

    render() {
        console.log('render called : M')
        return (<div>M <MountinChild name='dev'/> <button onClick={
            this.handleButtonClick
        }></button>{this.state.name + this.state.age}</div>);
    }
}