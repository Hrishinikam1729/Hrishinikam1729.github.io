import React from "react";
import '../Css/project.css';

const Project = (props)=>{
    
    return (<div class="ProjectTag">
        <h2>
        {props.ProjectName}
        </h2>
        <hr />
        <p>{props.Link}</p>
            </div>);
}

export default Project;