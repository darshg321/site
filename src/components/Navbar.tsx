import type {Component} from 'solid-js';

const Navbar: Component = () => {
    return (
        <nav class={"flex flex-row items-center justify-center space-x-10 py-8 px-4 border-b border-gray-200"}>
            <a href={"/"} class="text-base hover:text-[#ed344f]">about</a>
            <a href={"/projects"} class="text-base hover:text-[#ed344f]">projects</a>
            <a href={"/blog"} class="text-base hover:text-[#ed344f]">blog</a>
            <a href={"/now"} class="text-base hover:text-[#ed344f]">now</a>
        </nav>
    );
};

export default Navbar;
