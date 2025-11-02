import type { Component } from 'solid-js';

const Title: Component = () => {
    return (
        <div class={"flex flex-row items-center justify-center min-h-40 space-x-10"}>
            <div class={"text-4xl"}>
                <h1>hi, im </h1>
            </div>
            <div class={"text-6xl bg-cyan-300 italic font-"}>
                <h1>darsh</h1>
            </div>
            <div class={"text-6xl text-[#ec3a50]"}>
                <h1>!!</h1>
            </div>
        </div>
    );
};

export default Title;
