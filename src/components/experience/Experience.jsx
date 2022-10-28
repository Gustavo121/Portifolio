import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'
import {GiStopwatch} from 'react-icons/gi'

const Experience = () => {
  return (
    <section id='experience'>Experience
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frond-end Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>JavaScript</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>React</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>NodeJS</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
          </div>
        </div>

        {/*END OF FRONTEND*/}

        <div className='experience__backend'>
        <h3>Back-end Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <GiStopwatch />
              <div>
                <h4>In the process of future studies</h4>
                <small className='text-light'></small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience