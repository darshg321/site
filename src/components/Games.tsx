import type {Component} from "solid-js";
import {createSignal} from "solid-js";
import Snake from "./Snake";
import Blackjack from "./Blackjack";

const Games: Component = () => {
    const [index, setIndex] = createSignal(0);
    const games = [<Snake/>, <Blackjack/>];

    const next = () => setIndex((index() + 1) % games.length);
    const prev = () => setIndex((index() - 1 + games.length) % games.length);

    return (
        <div class="flex items-center justify-center mt-8 space-x-2 md:space-x-4 border-2 border-pink rounded-xl overflow-hidden">
            {/* Left Button */}
            <button
                class="text-2xl font-bold px-2 md:px-3 py-1 rounded hover:bg-blue/20 transition"
                onClick={prev}
            >
                ←
            </button>

            {/* Game Container */}
            <div
                class="flex items-center justify-center text-center transition-all duration-300 overflow-hidden w-full max-w-[740px]"
                style={{
                    "min-height": "320px",
                }}
            >
                <div class="w-full h-full flex items-center justify-center">
                    {games[index()]}
                </div>
            </div>

            {/* Right Button */}
            <button
                class="text-2xl font-bold px-2 md:px-3 py-1 rounded hover:bg-blue/20 transition"
                onClick={next}
            >
                →
            </button>
        </div>
    );
};

export default Games;

