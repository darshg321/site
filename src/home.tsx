import type {Component} from 'solid-js';
import Title from "./components/Title";
import Cube from "./components/Cube";

const Home: Component = () => {
    return (
        <div>
            <div class={"flex flex-col items-center px-6 py-12 max-w-3xl mx-auto"}>
                <Title/>
                <div class={"w-full space-y-6 text-base leading-relaxed"}>
                    <p class="text-gray-700">i'm a high school student in Mississauga, Ontario, and i'm passionate
                        about building. i started my
                        journey with software in 2022, building sites and apps. more recently, however, i've been
                        learning hardware, and creating projects i find really cool</p>
                    <div class={"flex flex-col space-y-2"}>
                        <p class="text-gray-600">try CURLing the site:</p>
                        <p class={"bg-pink px-4 py-2 rounded font-mono text-sm inline-block"}>curl
                            https://darshgupta.dev</p>
                    </div>
                    <div class={"flex flex-col space-y-2"}>
                        <p class="text-gray-600">pull the website code with:</p>
                        <p class={"bg-pink px-4 py-2 rounded font-mono text-sm inline-block"}>git clone
                            https://darshgupta.dev</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
