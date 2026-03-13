import { useState } from 'react'
import './SuggestedProjects.css'
import { myProjects } from '../Projects/myProjects';
import { useNavigate } from 'react-router-dom';


function SuggestedProjects() {
    const [arr, setArr] = useState(myProjects);
    const [important, setImportant] = useState(myProjects)    
    const navigate = useNavigate();
    
    const handleMoreClick = (project) => {
        const titleSlug = project.projectTitle.replace(/\s+/g, '-').toLowerCase()
        navigate(`/project/${titleSlug}`, {
            state: {project}
        })
    }
    return (
        <div className='suggested-projects container mt-10 mx-auto flex justify-center align-middle'>
            <div className="ul-container mx-auto">
                <ul className="projects-list flex flex-col gap-10">
                    {arr.map((item, index) => (
                        (item.important) === "yes"?(
                            <li key={index} className="list-item" style={{backgroundImage: `url(${item.suggestImg})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }} 
                                onClick={() => handleMoreClick(item)}>
                            <a href="">

                                <h1>{item.projectTitle}</h1>

                            </a>
                        </li>) : null
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default SuggestedProjects

