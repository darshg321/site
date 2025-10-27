import type { Component } from 'solid-js';

const Navbar: Component = () => {
    return (
        <div>
            <a href={"/projects"}>projects</a>
            <a href={"/blog"}>blog</a>
            <a href={"/now"}>now</a>
        </div>
    );
};

export default Navbar;
