import type { Component } from 'solid-js';

const Title: Component = () => {
    return (
        <div class={"grid grid-flow-col grid-cols-3 gap-4 mx-auto max-w-sm "}>
            <div class={"text-4xl"}>
                <h1>hi, im </h1>
            </div>
            <div class={"text-4xl"}>
                <h1>darsh</h1>
            </div>
            <div class={"text-6xl text-[#ec3a50]"}>
                <h1>!!</h1>
            </div>
        </div>
    );
};

export default Title;
