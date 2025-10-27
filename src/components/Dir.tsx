import type { Component } from 'solid-js';

const Dir: Component = () => {
    const origin = () => window.location.href;

    return (
        <div>
            <p>~/ {origin}</p>
        </div>
    );
};

export default Dir;
