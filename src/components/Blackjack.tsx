import {createSignal, Component} from "solid-js";

const suits = ["♥", "♦", "♣", "♠"];
const ranks = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

const getValue = (r: string) => (["J", "Q", "K"].includes(r) ? 10 : r === "A" ? 11 : +r);
const calcValue = (hand: { rank: string }[]) => {
    let v = hand.reduce((s, c) => s + getValue(c.rank), 0);
    let aces = hand.filter(c => c.rank === "A").length;
    while (v > 21 && aces--) v -= 10;
    return v;
};

const Blackjack: Component = () => {
    const [deck, setDeck] = createSignal<{ rank: string; suit: string }[]>([]);
    const [dealer, setDealer] = createSignal<{ rank: string; suit: string }[]>([]);
    const [player, setPlayer] = createSignal<{ rank: string; suit: string }[]>([]);
    const [bank, setBank] = createSignal(500);
    const [bet, setBet] = createSignal(0);
    const [msg, setMsg] = createSignal("");
    const [roundProfit, setRoundProfit] = createSignal(0);
    const [inRound, setInRound] = createSignal(false);
    const [over, setOver] = createSignal(false);
    const [stats, setStats] = createSignal({wins: 0, losses: 0, pushes: 0, rounds: 0});

    const shuffle = (a: any[]) => {
        for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
        }
        return a;
    };

    const newDeck = () => shuffle(suits.flatMap(s => ranks.map(r => ({rank: r, suit: s}))));

    function start() {
        const d = newDeck();
        setDeck(d);
        setPlayer([]);
        setDealer([]);
        setBet(0);
        setMsg("");
        setRoundProfit(0);
        setInRound(false);
        setOver(false);
    }

    function deal() {
        if (bet() <= 0 || bet() > bank()) return setMsg("select a valid bet");
        const d = newDeck();
        const p = [d.pop()!, d.pop()!];
        const dl = [d.pop()!, d.pop()!];
        setDeck(d);
        setPlayer(p);
        setDealer(dl);
        setInRound(true);
        setMsg("");
        setRoundProfit(0);
    }

    function dealCard(to: "player" | "dealer") {
        const d = [...deck()];
        const c = d.pop();
        if (!c) return;
        setDeck(d);
        to === "player" ? setPlayer([...player(), c]) : setDealer([...dealer(), c]);
    }

    function hit() {
        dealCard("player");
        if (calcValue(player()) > 21) endRound("bust");
    }

    function stand() {
        let d = [...dealer()];
        while (calcValue(d) < 17) d.push(deck().pop()!);
        setDealer(d);
        const pv = calcValue(player());
        const dv = calcValue(d);
        if (dv > 21 || pv > dv) endRound("win");
        else if (pv < dv) endRound("lose");
        else endRound("push");
    }

    function double() {
        if (bank() < bet() * 2) return setMsg("not enough funds");
        setBet(bet() * 2);
        dealCard("player");
        if (calcValue(player()) > 21) endRound("bust");
        else stand();
    }

    function endRound(result: "win" | "lose" | "push" | "bust") {
        setInRound(false);
        setOver(true);
        const s = {...stats()};
        s.rounds++;
        let profit = 0;

        if (result === "win") {
            setMsg("you win!");
            profit = bet();
            setBank(bank() + profit);
            s.wins++;
        } else if (result === "push") {
            setMsg("push (tie)");
            profit = 0;
            s.pushes++;
        } else {
            const lost = bet();
            setMsg(result === "bust" ? "bust!" : "dealer wins");
            profit = -lost;
            setBank(bank() - lost);
            s.losses++;
        }
        setRoundProfit(profit);
        setStats(s);
    }

    function addChip(v: number) {
        if (bank() >= bet() + v) setBet(bet() + v);
    }

    function cashOut() {
        const s = stats();
        const wr = s.rounds ? ((s.wins / s.rounds) * 100).toFixed(1) : "0";
        const profit = bank() - 500;
        return (
            <div class="flex flex-col items-center text-sm font-mono">
                <p class="text-lg mb-1">🏁 Cash Out</p>
                <p>Rounds: {s.rounds}</p>
                <p>Wins: {s.wins} | Losses: {s.losses} | Pushes: {s.pushes}</p>
                <p>Win rate: {wr}%</p>
                <p>Profit: ${profit}</p>
                <button
                    class="mt-2 bg-yellow-green text-white px-3 py-1 rounded hover:opacity-90"
                    onClick={start}
                >
                    play again
                </button>
            </div>
        );
    }

    return (
        <div
            class="flex flex-col md:flex-row items-center justify-between w-full max-w-3xl bg-white rounded-lg p-4 space-y-3 md:space-y-0 md:space-x-6">
            {/* Left Side */}
            <div class="flex flex-col items-center justify-center w-full md:w-2/3 space-y-3">
                {/* Dealer */}
                <div class="flex flex-col items-center">
                    <p class="text-xl text-magenta uppercase mb-1">dealer</p>
                    <div class="flex gap-1">
                        {dealer().map(c => (
                            <div
                                class="w-10 h-14 bg-pink rounded flex items-center justify-center text-sm font-semibold">
                                {c.rank}
                                <span class="text-[10px] ml-0.5">{c.suit}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Player */}
                <div class="flex flex-col items-center">
                    <p class="text-xl text-orange uppercase mb-1">you</p>
                    <div class="flex gap-1">
                        {player().map(c => (
                            <div
                                class="w-10 h-14 bg-pink rounded flex items-center justify-center text-sm font-semibold">
                                {c.rank}
                                <span class="text-[10px] ml-0.5">{c.suit}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Right Side */}
            <div class="flex flex-col items-center w-full md:w-1/3 space-y-2 text-center">
                <p class="text-sm">
                    💰 bank: <span class="font-mono text-yellow-green">${bank()}</span>
                </p>

                {!inRound() && !over() && (
                    <>
                        <p class="text-xs">choose bet:</p>
                        <div class="flex gap-2">
                            {[10, 25, 50, 100].map(v => (
                                <div
                                    class="w-8 h-8 bg-yellow-green rounded-full flex items-center justify-center text-xs font-semibold cursor-pointer hover:scale-110 transition"
                                    onClick={() => addChip(v)}
                                >
                                    {v}
                                </div>
                            ))}
                        </div>
                        <p class="text-xs font-mono mt-1">total bet: ${bet()}</p>
                        <button
                            class="bg-orange text-white px-3 py-1 rounded text-xs font-mono hover:opacity-90"
                            onClick={deal}
                        >
                            deal
                        </button>
                    </>
                )}

                {inRound() && (
                    <div class="flex gap-2 mt-1">
                        <button class="bg-magenta text-white px-2 py-1 rounded text-xs font-mono" onClick={hit}>
                            hit
                        </button>
                        <button class="bg-orange text-white px-2 py-1 rounded text-xs font-mono" onClick={stand}>
                            stand
                        </button>
                        <button
                            class="bg-yellow-green text-white px-2 py-1 rounded text-xs font-mono"
                            onClick={double}
                        >
                            double
                        </button>
                    </div>
                )}

                {over() && (
                    <>
                        <div class="text-xs font-semibold">{msg()}</div>
                        <div class={`text-xs font-mono ${roundProfit() >= 0 ? "text-green" : "text-magenta"}`}>
                            {roundProfit() >= 0 ? `+${roundProfit()} profit` : `${roundProfit()} profit`}
                        </div>
                        <button
                            class="bg-pink text-white px-3 py-1 rounded text-xs font-mono hover:opacity-90"
                            onClick={start}
                        >
                            new round
                        </button>
                        <button
                            class="bg-orange text-white px-3 py-1 rounded text-xs font-mono hover:opacity-90"
                            onClick={() => setMsg("")}
                        >
                            cash out
                        </button>
                        {msg() === "" && cashOut()}
                    </>
                )}
            </div>
        </div>
    );
};

export default Blackjack;
