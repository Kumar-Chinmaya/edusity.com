import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = ({setPlayState}) => {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={about_img} alt="" className='about-img'/>
            <img src={play_icon} alt="" className='play-icon' onClick={()=>{setPlayState(true)}} />
        </div>
        <div className="about-right">
            <h3>ABOUT UNIVERSITY</h3>
            <h2>Nurturing Tomorrows Leaders Today</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque ab hic, corporis quaerat quis cum tenetur et voluptatum voluptates vitae modi illo fuga optio distinctio odit architecto quisquam? Commodi, alias!</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste nulla aliquam, tempora magnam assumenda maxime nemo vitae incidunt sed? Minima sapiente officia ullam voluptatibus, nostrum voluptate vitae provident porro ad!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe distinctio architecto, fugiat quia quaerat in temporibus, fugit totam veniam sapiente neque! Explicabo reprehenderit laboriosam delectus dolor necessitatibus voluptas quis? Facere?</p>
        </div>
    </div>
  )
}

export default About