import type {Component} from 'solid-js';
import {createSignal} from "solid-js";
import Snake from "./Snake";

const Games: Component = () => {
    const [index, setIndex] = createSignal(0);
    const games = [<Snake/>];

    const next = () => setIndex((index() + 1) % games.length);
    const prev = () => setIndex((index() - 1 + games.length) % games.length);

    return (
        <div class="flex items-center justify-center mt-8 space-x-4">
            <button
                class="text-2xl font-bold px-3 py-1 rounded hover:bg-blue/20 transition"
                onClick={prev}
            >
                ←
            </button>

            <div class="inline-block text-center transition-all duration-300">
                {games[index()]}
            </div>

            <button
                class="text-2xl font-bold px-3 py-1 rounded hover:bg-blue/20 transition"
                onClick={next}
            >
                →
            </button>
        </div>
    );
}


export default Games;
