import {createSignal, Component} from "solid-js";
import Title from "./components/Title";
import Games from "./components/Games";

const Home: Component = () => {
    const [tooltip, setTooltip] = createSignal("copy");
    const [showTooltip, setShowTooltip] = createSignal(false);

    const copy = async () => {
        await navigator.clipboard.writeText("curl https://darshgupta.dev");
        setTooltip("copied!");
        setTimeout(() => setTooltip("copy"), 1500);
    };

    return (
        <div class="flex flex-col min-h-screen">
            <div class="flex flex-col items-center px-6 py-12 max-w-3xl mx-auto">
                <Title/>
                <div class="w-full space-y-6">
                    <p>
                        i'm a high school student in Mississauga, Ontario, and i'm passionate
                        about building. i started my journey with software in 2022, building sites and apps.
                        more recently, however, i've been learning hardware, and creating projects i find really
                        cool.
                    </p>

                    <div class="flex flex-col space-y-3 relative">
                        <p>try CURLing the site:</p>

                        <div class="relative inline-block">
                            <button
                                class="bg-pink px-4 py-2 rounded font-mono text-sm inline-block text-left hover:bg-pink/80 transition"
                                onClick={copy}
                                onMouseEnter={() => setShowTooltip(true)}
                                onMouseLeave={() => setShowTooltip(false)}
                            >
                                curl https://darshgupta.dev
                            </button>

                            <div
                                class={`absolute left-full ml-2 top-1/2 -translate-y-1/2 px-2 py-1 text-xs font-mono rounded bg-orange text-blue shadow-lg transition-opacity duration-200 ${
                                    showTooltip() ? "opacity-100" : "opacity-0"
                                }`}
                            >
                                {tooltip()}
                            </div>
                        </div>
                    </div>
                </div>
                <p class={"text-orange text-2xl pt-6 font-semibold"}>play a few games !!</p>

                <Games/>
            </div>
        </div>
    );
};

export default Home;
