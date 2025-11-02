import type {Component} from 'solid-js';

const Footer: Component = () => {

    return (
        <div class={"flex flex-row justify-center items-center space-x-6 p-4"}>
            <p>made with procrastination !! </p>
            <p>on ver [commit]</p>
            <p>inspired by [] [] []</p>
        </div>
    );
};

export default Footer;
