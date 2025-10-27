import type { Component } from 'solid-js';
import Navbar from "./components/Navbar";
import Dir from "./components/Dir";
import Footer from "./components/Footer";
import { Router, Route } from "@solidjs/router";
import home from "./home";

const Layout = (props) => (
    <>
        <Dir />
        <Navbar />
        {props.children}
        <Footer />
    </>
)

const App: Component = () => {
  return (
    <div>
        {/*<Dir />*/}
        {/*<Title />*/}
        {/*<Navbar />*/}
        <Router root={Layout}>
            <Route path={"/"} component={home} />
        </Router>
        {/*<Footer />*/}
    </div>
  );
};

export default App;
