import { useState } from 'react'
import './SuggestedProjects.css'
import { myProjects } from '../Projects/myProjects';


function SuggestedProjects() {
    const [arr, setArr] = useState(myProjects);
    const [important, setImportant] = useState(myProjects)
    return (
        <div className='suggested-projects container mt-10 mx-auto flex justify-center align-middle'>
            <div className="ul-container mx-auto">
                <ul className="projects-list flex flex-col gap-10">
                    {arr.map((arr, index) => (
                        (arr.important) === "yes"?(
                            <li key={index} className="list-item" style={{backgroundImage: `url(${arr.suggestImg})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
                            <a href="">

                                <h1>{arr.projectTitle}</h1>

                            </a>
                        </li>) : null
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default SuggestedProjects


//  style={{backgroundImage: url({arr.imgPath})}}