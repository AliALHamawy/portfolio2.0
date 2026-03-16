import './Skills.css'

function Skills() {
  return (
    <div className='skills '>

      <div className=" flex flex-col md:flex-row justify-center mx-auto mt-10 align-middle">
        <div className=' axs flex gap-5 md:gap-10 md:mr-12'>
          <i className='ri-html5-line text-6xl gray icon html'></i>
          <i className='ri-css3-line text-6xl gray icon css'></i>
          <i className='ri-javascript-line text-6xl gray icon js'></i>
          <i className='ri-reactjs-line text-6xl gray icon reactjs'></i>
        </div>
        <div className='flex gap-5 md:gap-12'>
          <i className='ri-bootstrap-line text-6xl gray icon bootstrap'></i>
          <i className='ri-tailwind-css-line text-6xl gray icon tailwind-css'></i>
          <i className='ri-figma-line text-6xl gray icon figma'></i></div>
      </div>
    </div>
  )
}

export default Skills