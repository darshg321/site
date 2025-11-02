import type {Component} from 'solid-js';

const Dir: Component = () => {
    const origin = () => window.location.href;

    return (
        <div class={"flex justify-center items-center p-5"}>
            <p>~/ {origin}</p>
        </div>
    );
};

export default Dir;
