import React from "react";
//import { ReactDOM } from "react";

class AppInner extends React.Component() {
    componentDidMount(){
        console.log("mounted!")
    }
    render() {
        <div>I am inner Component yaye!</div>
    }
}

export default AppInner;