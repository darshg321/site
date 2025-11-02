import type {Component, ParentProps} from 'solid-js';
import Navbar from "./components/Navbar";
import Dir from "./components/Dir";
import Footer from "./components/Footer";
import {Router, Route} from "@solidjs/router";
import home from "./home";
import now from "./now";
import projects from "./projects";
import blog from "./blog";

const Layout = (props: ParentProps) => (
    <div class="min-h-screen flex flex-col">
        <Dir/>
        <Navbar/>
        <div class="grow">
            {props.children}
        </div>
        <Footer/>
    </div>
)

const App: Component = () => {
    return (
        <div class="h-full w-full">
            {/*<Dir />*/}
            {/*<Title />*/}
            {/*<Navbar />*/}
            <Router root={Layout}>
                <Route path={"/"} component={home}/>
                <Route path={"/now"} component={now}/>
                <Route path={"/projects"} component={projects}/>
                <Route path={"/blog"} component={blog}/>
            </Router>
            {/*<Footer />*/}
        </div>
    );
};

export default App;
