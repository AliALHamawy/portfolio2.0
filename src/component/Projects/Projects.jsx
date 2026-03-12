import { useState } from 'react'
import './Projects.css'
import { myProjects } from './myProjects'
import { useNavigate } from 'react-router-dom';

function Projects() {
    const [arr, setArr] = useState(myProjects);
    const [currentActive, setCurrentActive] = useState("all")
    const navigate = useNavigate();
    const handleClick = (buttonCategory) => {
        setCurrentActive(buttonCategory)
        if (buttonCategory === "all") {
            setArr(myProjects)
            return;
        }
        const newArr = myProjects.filter(
            (item) => item.category === buttonCategory
        )
        setArr(newArr)
    }

    const handleMoreClick = (project) => {
        const titleSlug = project.projectTitle.replace(/\s+/g, '-').toLowerCase()
        navigate(`/project/${titleSlug}`, {
            state: {project}
        })
    }

    return (
        <>
            <div className="projects flex">
                <div className="left-psection sticky w-55 grid grid-cols-1 ml-5 mr-2">
                    <button
                        onClick={() => {
                            setCurrentActive("all")
                            setArr(myProjects)
                        }}
                        className={currentActive === "all" ? "active" : null}>All Projects</button>
                    <button
                        onClick={() => handleClick("css")} className={currentActive === "css" ? "active" : null}>HTML & CSS</button>
                    <button onClick={() => handleClick("js")} className={currentActive === "js" ? "active" : null}>JS</button>
                    <button onClick={() => handleClick("bootstrap")} className={currentActive === "bootstrap" ? "active" : null}>BootStrap</button>
                    <button onClick={() => handleClick("tailwind")} className={currentActive === "tailwind" ? "active" : null}>Tailwind</button>
                    <button onClick={() => handleClick("react")} className={currentActive === "react" ? "active" : null}>React</button>
                </div>

                <div className="right-psection mx-auto">
                    {arr.map((item, index) => (
                        <div key={index} className="project-card">
                            <div className="image">

                                <img src={item.imgPath} alt="/src/assets/projects photo/placeholder.svg" />
                            </div>
                            <div>
                                <h1>{item.projectTitle}</h1>
                                <p>{item.subTitle}</p>
                            </div>
                            <button
                                className='visit' 
                                onClick={() => handleMoreClick(item)}>MORE</button>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Projects