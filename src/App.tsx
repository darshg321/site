import type {Component, ParentProps} from 'solid-js';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import {Router, Route} from "@solidjs/router";
import home from "./home";
import now from "./now";
import projects from "./projects";
import blog from "./blog";

const Layout = (props: ParentProps) => (
    <div class="min-h-screen flex flex-col bg-blue">
        {/*<Dir/>*/}
        <Navbar/>
        <main class="grow">
            {props.children}
        </main>
        <Footer/>
    </div>
)

const App: Component = () => {
    return (
        <div class="h-full w-full">
            <Router root={Layout}>
                <Route path={"/"} component={home}/>
                <Route path={"/now"} component={now}/>
                <Route path={"/projects"} component={projects}/>
                <Route path={"/blog"} component={blog}/>
            </Router>
        </div>
    );
};

export default App;
