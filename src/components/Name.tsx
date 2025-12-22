import type {Component} from 'solid-js';
import {createSignal, onMount, onCleanup} from 'solid-js';

const Name: Component = () => {
    const [fontIndex, setFontIndex] = createSignal(0);

    const fonts = [
        'Georgia, serif',
        '"Times New Roman", Times, serif',
        'Arial, sans-serif',
        'Verdana, sans-serif',
        '"Courier New", Courier, monospace',
        '"Comic Sans MS", cursive',
        '"Trebuchet MS", sans-serif',
        '"Impact", fantasy',
        '"Lucida Console", monospace',
        '"Brush Script MT", cursive',
    ];

    let intervalId: number;

    onMount(() => {
        intervalId = window.setInterval(() => {
            setFontIndex((prev) => (prev + 1) % fonts.length);
        }, 500);
    });

    onCleanup(() => {
        if (intervalId) window.clearInterval(intervalId);
    });

    return (
        <div class={"flex flex-row items-center justify-center py-20 space-x-4"}>
            <div class={"text-4xl font-bold"}>
                <h1>hi, im </h1>
            </div>
            <div class={"text-6xl italic font-bold text-orange transition-all duration-500"}
                 style={{"font-family": fonts[fontIndex()]}}>
                <h1>darsh</h1>
            </div>
            <div class={"text-6xl text-magenta font-bold"}>
                <h1>!!</h1>
            </div>
        </div>
    );
};

export default Name;
