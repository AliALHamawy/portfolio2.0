import './LandingProject.css'
import { myProjects } from '../Projects/myProjects'
import { useState } from 'react';
// import { Navigation, Pagination, } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


function LandingProject() {
  const [arr, setArr] = useState(myProjects);
  return (
    <Swiper
        slidesPerView={5}
        spaceBetween={40}
        centeredSlides={true}
        loop={true}
        // pagination={{
        //   clickable: true,
        // }}
        // navigation={true}
        breakpoints={{
          500: {
            slidesPerView: 1,
            spaceBetween: -300,
          },          
          650: {
            slidesPerView: 1,
            spaceBetween: -250,
          },
          740: {
            slidesPerView: 1,
            spaceBetween: -370,
          },
          800: {
            slidesPerView: 3,
            spaceBetween: 300,
          },
        920: {
          slidesPerView: 3,
          spaceBetween: 170,
        },
        1070: {
          slidesPerView: 3,
          spaceBetween: 25,
        },
        1380: {
          slidesPerView: 3,
          spaceBetween: 25,
        },
        1400: {
          slidesPerView: 3,
          spaceBetween: 25,
        },
        1560: {
          slidesPerView: 4,
          spaceBetween: 25,
        },
        1630: {
          slidesPerView: 4,
          spaceBetween: -10,
        },
      }}
        className="mySwiper landing-projects-section "
      >
      {arr.map((arr, index) => (
        <SwiperSlide className='mb-10'
      key={index}>
          <div className="project-card">
            <div className="image">
              <img src={arr.imgPath} alt="/src/assets/projects photo/placeholder.svg" />
            </div>
            <div className='text-div'>
              <h1>{arr.projectTitle}</h1>
              <p>{arr.subTitle}</p>
            </div>
            <button className='visit'>MORE</button>
          </div>
        </SwiperSlide>
      ))}
      <hr />
    </Swiper>
  )
}

export default LandingProject