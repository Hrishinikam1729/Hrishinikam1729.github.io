import Home from "./Components/Home.jsx";
import BigName from "./Components/BigName.jsx";
import ReachMe from "./Components/ReachMe.jsx";
import AboutMe from "./Components/AboutMe.jsx";
import Project from "./Components/Project.jsx"

const HomeContainer = () => {
    return ( <
        div >
        <
        Home / >
        <
        /div>
    );
};

const ReachMeContainer = () => {
    return ( <
        div >
        <
        ReachMe / >
        <
        /div>
    );
};

const AboutMeContainer = () => {
    return ( <
        div >
        <
        AboutMe / >
        <
        /div>
    );
};

const BigNameContainer = () => {
    return ( <
        div >
        <
        BigName / >
        <
        /div>
    );
};


const Project1 = () => {
    return ( <
        div >
        <
        Project ProjectName = "Docker"
        Link = "http://" / >
        <
        /div>
    )

};

export { HomeContainer, ReachMeContainer, AboutMeContainer, BigNameContainer, Project1 };