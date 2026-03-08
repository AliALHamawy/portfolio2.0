import { useState } from 'react'
import './Projects.css'
import { myProjects } from './myProjects'
function Projects() {
    const [arr , setArr] = useState(myProjects);
    return (
        <>
            <div className="projects flex">
                <div className="left-psection sticky w-55 grid grid-cols-1 ml-5 mr-2">
                    <button>All Projects</button>
                    <button>HTML & CSS</button>
                    <button>JS</button>
                    <button>BootStrape</button>
                    <button>Tailwind</button>
                    <button>React</button>
                </div>

                <div className="right-psection mx-auto">
                    {arr.map((item , index) => (
                        <div key={index} className="project-card">
                        <div className="image">
                            
                        <img src={item.imgPath} alt="/src/assets/projects photo/placeholder.svg" />
                        </div>
                        <div>
                            <h1>{item.projectTitle}</h1>
                            <p>{item.subTitle}</p>
                        </div>
                        <button className='visit'>MORE</button>
                    </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Projects