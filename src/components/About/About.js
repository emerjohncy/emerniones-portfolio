import React from 'react';
import './about.css';
import aboutImage from '../../assets/about-me.jpg';

export default function About() {
  return (
    <div className='about' id='about'>
        <div className='div-about'>
            <div className='div-about-left'>
                <img className='img-about' src={aboutImage}></img>
            </div>
            <div className='div-about-right'>
                <div className='about-title'>
                    About <span className='blue'>Me</span>
                </div>
                <div className='about-body'>
                    <p>
                        I am <span className='blue'> Emer</span> and I am a Junior Software Engineer, who is passionate
                        about <span className='blue'> building applications</span>. I possess sufficient skills in both
                        front-end and back-end development through HTML, CSS, Javascript, 
                        ReactJS, Ruby, and Ruby on Rails.
                    </p> 
                    <br></br>
                    <p>
                        Initially, I entered college as a Materials Engineering student, 
                        despite not knowing still what I was really keen about doing in 
                        the long run. Until such time, I got into my first mandatory
                        programming class, Introduction to Computer Programming. From 
                        that moment, I knew that this is what I want to do. I was drawn 
                        to the field because I really enjoy <span className='blue'> solving complex problems</span>. 
                        Despite getting denied to shift out to a programming-related degree,
                        I did not stop from there.
                    </p>
                    <br></br>
                    <p>
                        On 2022, I decided to enroll myself to <span className='blue'>Full-Stack Web Development </span> 
                        course offered by <span className='blue'>Avion School</span>. After finishing the course, I landed 
                        my very first job as <span className='blue'> DevOps (Level 2) </span> in <span className='blue'> 
                        GoodTech Information Systems Inc.</span>, a startup company that provides financial technology solutions 
                        to the underserved and unbanked communities in the Philippines. I 
                        started as a Quality Assurance Tester under Dev Team where I developed 
                        and manually executed test cases for UI and APIs in their software 
                        products. After which I was transitioned to the newly established
                        Infrastructure and Security Team of the company where I implemented 
                        all change requests in production environments, deployed hotfixes and 
                        enhancements of all the company's software products via Amazon Web 
                        Services (AWS), and have performed other AWS-related tasks.
                    </p>
                    <br></br>
                    <p>
                        Currently, I am actively advancing my expertise in the technologies of 
                        <span className='blue'> AWS</span> while honing my development skills in 
                        <span className='blue'> ReactJS</span> and <span className='blue'> Ruby on Rails</span>. 
                        In my spare time, I try to stay updated on the languages and framework 
                        documentation.
                    </p>
                    <br></br>
                    <p>
                        When I am not at the computer, I usually spend my time <span className='blue'> dancing </span>, hanging 
                        out with my <span className='blue'> family </span> and <span className='blue'> friends</span>, or playing 
                        <span className='blue'> airsoft</span>.
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}
