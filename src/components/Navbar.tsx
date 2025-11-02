import type {Component} from 'solid-js';

const Navbar: Component = () => {
    return (
        <nav class={"flex flex-row items-center justify-center space-x-10 py-8 px-4 border-b border-y-pink"}>
            <a href={"/"} class="text-base hover:text-[#ed344f]">about</a>
            <a href={"/projects"} class="text-base hover:text-magenta">projects</a>
            <a href={"/blog"} class="text-base hover:text-magenta">blog</a>
            <a href={"/now"} class="text-base hover:text-magenta">now</a>
        </nav>
    );
};

export default Navbar;
