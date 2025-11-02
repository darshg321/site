import type {Component} from 'solid-js';

const Footer: Component = () => {

    return (
        <footer
            class={"flex flex-row justify-center items-center space-x-6 py-6 px-4 border-t border-gray-200 text-sm text-gray-600"}>
            <p>made with procrastination !! </p>
            <p>on ver:</p>
            <a href={"commit"}>[commit]</a>
            <p>inspired by:</p>
            <a href={"https://phthallo.com"} class={"text-magenta"}>phthallo</a>
            <a href={"https://aconlin.com"} class={"text-magenta"}>acon</a>
        </footer>
    );
};

export default Footer;
