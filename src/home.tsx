import type {Component} from 'solid-js';
import Title from "./components/Title";
import Cube from "./components/Cube";

const Home: Component = () => {
    return (
        <div class={"flex flex-col items-center"}>
            <Title/>
            <div class={"w-1/2 space-y-4"}>
                <p>i'm a high school student in Mississauga, Ontario, and i'm passionate about building. i started my
                    journey with software in 2022, building sites and apps. more recently, however, i've been
                    learning hardware, and creating projects i find really cool</p>
                <div class={"flex flex-row space-x-2"}>
                    <p>try CURLing the site:</p>
                    <p class={"bg-red-300"}>curl https://darshgupta.dev</p>
                </div>
                <div class={"flex flex-row space-x-2"}>
                    <p>pull the website code with:</p>
                    <p class={"bg-red-300"}>git clone https://darshgupta.dev</p>
                </div>
            </div>

            {/*<div style={{ display: "grid", placeItems: "center", height: "100vh", background: "#111" }}>*/}
            {/*    <Cube/>*/}
            {/*</div>*/}
        </div>
    );
};

export default Home;
