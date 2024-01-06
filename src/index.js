import React from "react";
import ReactDOM from "react-dom";
import { HomeContainer, ReachMeContainer, AboutMeContainer, BigNameContainer, Project1 } from "./App";

const root = document.getElementById("root");
const bigNameRoot = document.getElementById("BigName");
const project1Root = document.getElementById("Project1");

ReactDOM.createRoot(root).render( < React.StrictMode >
        <
        HomeContainer / >
        <
        ReachMeContainer / >
        <
        AboutMeContainer / >
        <
        /React.StrictMode>);

        ReactDOM.createRoot(bigNameRoot).render( < React.StrictMode >
            <
            BigNameContainer / >
            <
            /React.StrictMode>);
            ReactDOM.createRoot(project1Root).render( < React.StrictMode >
                <
                Project1 / >
                <
                /React.StrictMode>);