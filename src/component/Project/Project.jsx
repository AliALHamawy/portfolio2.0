import { useState } from 'react'
import './Project.css'
import { useLocation, } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


import { Pagination, Navigation } from 'swiper/modules';

// import { img } from '../Projects/myProjects'
// import { myProjects } from '../Projects/myProjects';

// const projectImagesList = img[myProjects.id]|| []

function Project() {
    const [copy, setCopy] = useState(null)
    const location = useLocation()
    const project = location.state?.project
    console.log('Project data:', project)

    if (!project) {
        return <div className="container flex justify-center align-middle text-center ">Page Not Found </div>
    }

    const handleCopyLink = async () => {
        try {
            await navigator.clipboard.writeText(project.link);
            setCopy(project.link);
            setTimeout(() => setCopy(null), 1500)
        } catch (error) {
            console.log("Failed to copy link", error)
        }
    }

    return (
        <>

            <div className="project pt-25 mx-auto p-2">
                {/* {arr.map((item) => ( */}
                <div className="top-section flex justify-between pb-10 ">
                    <div className="left-section flex">
                        <div className="image">
                            <img src={project.imgPath} alt={project.projectTitle} />
                        </div>
                        <div className="info flex flex-col gap-3 w-150 p-2 ">
                            <h2 className="title">{project.projectTitle}</h2>
                            <p className="sub-title">{project.subTitle}</p>
                            <p className="nots">Note: {project.note}</p>
                        </div>
                    </div>
                    <div className="right-section justify-center align-middle text-center">
                        <button onClick={() => window.open(project.link, '_blank')}>Visit</button>
                        <button className='ri-github-line' onClick={() => window.open(project.gitRepo, '_blank')}></button>
                        <button className='ri-alibaba-cloud-line' onClick={handleCopyLink}></button>
                    </div>
                </div>
                {/* ))} */}
                <div className="b"></div>
                <div className="bottom-section">
                    <Swiper
                        slidesPerView={'auto'}
                        spaceBetween={30}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Pagination]}
                        className="mySwiper"
                    >
                        {project.imgs.map((img, index) => (
                            <SwiperSlide key={index}> <img src={img} alt={`${project.projectTitle} screenshot ${index + 1}`} />
                            </SwiperSlide>))}

                    </Swiper>
                </div>
            </div>
        </>
    )
}

export default Project
//