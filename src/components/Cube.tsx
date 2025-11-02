import {Component} from "solid-js";
import "./Cube.css";

const Cube: Component = (props) => {
    return (
        <div class={"cube"}>
            <div class={"top"}></div>
            <div class={"right"}></div>
            <div class={"bottom"}></div>
            <div class={"left"}></div>
            <div class={"front"}></div>
            <div class={"back"}></div>
        </div>
    );
};

export default Cube;
