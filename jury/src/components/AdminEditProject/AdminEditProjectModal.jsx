import axios from "axios";
import React from "react";
import { useState } from "react";

import "./AdminEditProjectModal.css";

const AdminEditProjectModal = (props, {create}) => {
    
    const [update, setUpdate] = useState(false)

    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjY3NzMxMzgwLCJpYXQiOjE2NjUxMzkzODAsImp0aSI6IjNlYTA4ZjE2YmUzNDQyYmViZjQ1Njg5NDkzMDhlZTIzIiwidXNlcl9pZCI6Mn0.sAquDN8WQVpuJnZ8BjLqX8h4ua6KX_IvUH4sdcxDKdc"


    const [project, setProject] = useState({ projectName: '', projectAuthor: ''})


    // const addNewProjects = () => {
    //     const newProject = {
    //         ...project, id: Date.now()
    //     }
    //     create(newProject)
    //     setProject({ projectname: '', participant: '' })
    // }

    async function addNewProject() {
        // addNewProjects()
        axios.post(`http://aleksbcg.beget.tech/projects/${props.EventId}/`, {    
            headers: {
                Authorization: "Bearer " + token
            }
        },
        {
            event: null,
            name_of_project: project.projectName,
            speaker_name: project.projectAuthor
        }).then(response => {
            console.log(response.data)
        }).catch(function (error) {
            console.log(error);
        })
    }

    console.log(props.EventId)

    return (
        <div className={props.active ? "AdminEditProjectModal active" : "AdminEditProjectModal"} onClick={() => props.setActive(false)} >
            <div className="AdminEditProjectModal__content" onClick={e => e.stopPropagation()}>
                <div className="AdminEditProjectModal__content-container">
                    <h1>Добавление проекта</h1>
                    <div className="AdminEditProjectModal__content-regJury">
                        <div className="AdminEditProjectModal__content-regJury__inputs">
                            <input placeholder="Наименование проекта " type="text" value={project.projectName} onChange={e => setProject({ ...project, projectName: e.target.value})}/>
                            <input placeholder="Имя конкурсанта" type="text" value={project.projectAuthor} onChange={e => setProject({ ...project, projectAuthor: e.target.value })} />
                        </div>
                        <button onClick={addNewProject} >Добавить</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminEditProjectModal