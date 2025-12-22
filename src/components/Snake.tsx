import {
    createSignal,
    createEffect,
    onCleanup,
    onMount,
    type Component,
} from "solid-js";

const GRID_SIZE = 15;

type Point = { x: number; y: number };

const randomFood = (snake: Point[]): Point => {
    while (true) {
        const x = Math.floor(Math.random() * GRID_SIZE);
        const y = Math.floor(Math.random() * GRID_SIZE);
        if (!snake.some(s => s.x === x && s.y === y)) {
            return {x, y};
        }
    }
};

export const Snake: Component = () => {
    const [snake, setSnake] = createSignal<Point[]>([{x: 7, y: 7}]);
    const [dir, setDir] = createSignal<Point>({x: 1, y: 0});
    const [pendingDir, setPendingDir] = createSignal<Point>({x: 1, y: 0});
    const [food, setFood] = createSignal<Point>(randomFood([{x: 7, y: 7}]));
    const [running, setRunning] = createSignal(false);
    const [gameOver, setGameOver] = createSignal(false);
    const [score, setScore] = createSignal(0);
    const [speed, setSpeed] = createSignal(180);
    const [flashClass, setFlashClass] = createSignal(""); // for visual feedback

    let boardRef: HTMLDivElement | undefined;

    const resetGame = () => {
        const initialSnake = [{x: 7, y: 7}];
        setSnake(initialSnake);
        setDir({x: 1, y: 0});
        setPendingDir({x: 1, y: 0});
        setFood(randomFood(initialSnake));
        setScore(0);
        setSpeed(180);
        setGameOver(false);
        setRunning(false);
        setFlashClass("");
    };

    const startGame = () => {
        if (gameOver()) resetGame();
        setRunning(true);
        boardRef?.focus(); // auto focus board
    };

    const pauseGame = () => {
        setRunning(false);
    };

    const handleKey = (e: KeyboardEvent) => {
        if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", " "].includes(e.key)) {
            e.preventDefault(); // stop page scroll
        }

        if (e.key === " " || e.code === "Space") {
            running() ? pauseGame() : startGame();
            return;
        }

        const current = dir();
        let next: Point | null = null;

        if (e.key === "ArrowUp" || e.key === "w") next = {x: 0, y: -1};
        if (e.key === "ArrowDown" || e.key === "s") next = {x: 0, y: 1};
        if (e.key === "ArrowLeft" || e.key === "a") next = {x: -1, y: 0};
        if (e.key === "ArrowRight" || e.key === "d") next = {x: 1, y: 0};

        if (!next) return;
        if (current.x + next.x === 0 && current.y + next.y === 0) return;

        setPendingDir(next);
    };

    const triggerFlash = (color: "apple" | "death") => {
        if (color === "apple") {
            setFlashClass("ring-2 ring-yellow-green/70");
        } else {
            setFlashClass("ring-4 ring-magenta/90");
        }
        setTimeout(() => setFlashClass(""), color === "apple" ? 150 : 400);
    };

    const step = () => {
        if (!running() || gameOver()) return;

        const currentSnake = snake();
        const currentDir = pendingDir();
        setDir(currentDir);

        const head = currentSnake[0];
        const newHead = {x: head.x + currentDir.x, y: head.y + currentDir.y};

        // wall collision
        if (
            newHead.x < 0 ||
            newHead.x >= GRID_SIZE ||
            newHead.y < 0 ||
            newHead.y >= GRID_SIZE
        ) {
            setGameOver(true);
            setRunning(false);
            triggerFlash("death");
            return;
        }

        // self collision
        if (currentSnake.some(seg => seg.x === newHead.x && seg.y === newHead.y)) {
            setGameOver(true);
            setRunning(false);
            triggerFlash("death");
            return;
        }

        const newSnake = [newHead, ...currentSnake];
        const currentFood = food();

        if (newHead.x === currentFood.x && newHead.y === currentFood.y) {
            setScore(score() + 1);
            setFood(randomFood(newSnake));
            setSpeed(Math.max(80, speed() - 5));
            triggerFlash("apple");
        } else {
            newSnake.pop();
        }

        setSnake(newSnake);
    };

    createEffect(() => {
        if (!running()) return;
        const id = window.setInterval(step, speed());
        onCleanup(() => clearInterval(id));
    });

    onMount(() => {
        window.addEventListener("keydown", handleKey);
        onCleanup(() => window.removeEventListener("keydown", handleKey));
    });

    const cells = Array.from({length: GRID_SIZE * GRID_SIZE}, (_, i) => i);

    const statusText = () => {
        if (gameOver()) return "you crashed :(";
        if (!running() && score() === 0) return "press space or ▶ to start";
        if (!running()) return "paused ⏸";
        return "slither on !!";
    };

    return (
        <div
            class="flex flex-col md:flex-row items-center justify-between w-full max-w-3xl bg-white rounded-lg p-4 space-y-3 md:space-y-0 md:space-x-6">
            {/* Left: Board */}
            <div class="flex flex-col items-center justify-center w-full md:w-2/3 space-y-3">
                <p class="text-xl text-magenta uppercase mb-1 tracking-wide font-bold">snake</p>

                <div
                    ref={boardRef}
                    tabIndex={0}
                    class={`grid gap-[2px] bg-pink/10 p-2 rounded-lg border-2 border-orange outline-none transition-all duration-150 ${flashClass()}`}
                    style={{
                        "grid-template-columns": `repeat(${GRID_SIZE}, minmax(0, 1fr))`,
                    }}
                >
                    {cells.map(i => {
                        const x = i % GRID_SIZE;
                        const y = Math.floor(i / GRID_SIZE);
                        const segs = snake();
                        const isHead = segs.length > 0 && segs[0].x === x && segs[0].y === y;
                        const isBody = !isHead && segs.some(s => s.x === x && s.y === y);
                        const f = food();
                        const isFood = f.x === x && f.y === y;

                        let cellClass =
                            "w-4 h-4 rounded-sm border border-pink/20 bg-white";

                        if (isBody) cellClass = "w-4 h-4 rounded-sm bg-pink";
                        if (isHead) cellClass = "w-4 h-4 rounded-sm bg-orange";
                        if (isFood) cellClass = "w-4 h-4 rounded-sm bg-yellow-green";

                        return <div class={cellClass}/>;
                    })}
                </div>

                <p class="text-[10px] text-gray-500 uppercase tracking-wide">
                    arrows / WASD to move · space to pause
                </p>
            </div>

            {/* Right: Controls */}
            <div
                class="flex flex-col items-center w-full md:w-1/3 space-y-2 text-center">
                <p class="text-sm">
                    score:{" "}
                    <span class="font-mono text-yellow-green">{score()}</span>
                </p>
                <p class="text-xs font-mono text-gray-500">
                    speed: {Math.round(1000 / speed())} tiles/sec
                </p>

                <div class="text-xs font-semibold">{statusText()}</div>

                <div class="flex gap-2 mt-1">
                    {!running() && (
                        <button
                            class="bg-orange text-white px-3 py-1 rounded text-xs font-mono hover:opacity-90"
                            onClick={startGame}
                        >
                            ▶ start
                        </button>
                    )}
                    {running() && (
                        <button
                            class="bg-magenta text-white px-3 py-1 rounded text-xs font-mono hover:opacity-90"
                            onClick={pauseGame}
                        >
                            ⏸ pause
                        </button>
                    )}
                    <button
                        class="bg-pink text-white px-3 py-1 rounded text-xs font-mono hover:opacity-90"
                        onClick={resetGame}
                    >
                        ⭮ reset
                    </button>
                </div>

                {gameOver() && (
                    <div class="mt-1 text-xs font-mono text-magenta">
                        final score: {score()}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Snake;