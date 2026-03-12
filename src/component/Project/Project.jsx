import { useState } from 'react'
import  './Project.css'
// import projectInfo from './projectInfo'
import { useLocation, useNavigate } from 'react-router-dom'

function Project() {
    const [copy , setCopy] = useState(null)

    const location = useLocation()
    const navigate = useNavigate()
    const project = location.state?.project
    if(!project) {
        return <div className="container flex justify-center align-middle text-center ">Page Not Found </div>
    }
    const handleCopyLink = async () => {
        try {
            await navigator.clipboard.writeText(project.link);
            setCopy(link);
            setTimeout(() => setCopy(null), 1500)
        }catch(error) {
            console.log("Failed to copy link",error)
            
        }
    }

    return (
        <>
        
            {/* <button className="back-button" onClick={() => navigate(-1)}>
                ← Back to Projects
            </button> */}
            <div className="project pt-22 mx-auto p-2">
                <div className="top-section flex justify-between">
                    <div className="left-section flex">
                        <div className="image">
                            <img src={project.imgPath} alt="" />
                        </div>
                        <div className="info flex flex-col gap-3 w-150 p-2 ">
                            <h2 className='title '>{project.projectTitle}</h2>
                            <p className='sub-title'>{project.subTitle}</p>
                            <p className='nots'>Nots</p>
                        </div>
                    </div>
                    <div className="right-section justify-center align-middle text-center">
                        <button onClick={() => window.open(project.link, '_blank')}>Visit</button>
                        <button className='ri-github-line' onClick={() => window.open(project.gitRepo, '_blank')}></button>
                        <button className='ri-alibaba-cloud-line' onClick={handleCopyLink}></button>
                    </div>
                </div>
                <div className="bottom-section">
                    
                </div>
            </div>
        </>
    )
}

export default Project