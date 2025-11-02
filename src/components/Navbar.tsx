import type {Component} from 'solid-js';

const Navbar: Component = () => {
    return (
        <div class={"flex flex-row items-center justify-center space-x-10 text-xl"}>
            <a href={"/"}>about</a>
            <a href={"/projects"}>projects</a>
            <a href={"/blog"}>blog</a>
            <a href={"/now"}>now</a>
        </div>
    );
};

export default Navbar;
