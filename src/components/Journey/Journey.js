import React from 'react'
import './journey.css'

export default function Experience() {
  return (
    <div className='journey' id='journey'>
        <div className='div-journey'>
            <div className='div-journey-title'>
              My <span className='blue'>Journey</span>
            </div>
            <div className='div-journey-body'>
              <div className='div-journey-body-left'>
                <div className='div-journey-body-title'>Experience</div>
                  <div className='div-education-item'>
                    <li className='journey-date'>Jan 2023 - Apr 2024</li>
                    <div className='div-education-item-body'>DevOps (Level 2) - Goodtech Information Systems Inc.</div>
                    <div className='div-education-item-body-info'>
                      <li>Implemented change requests in UAT and Production environments, and deployed hotfixes and enhancements via AWS EC2 and Lambda.</li>
                      <li>Conducted new invalidations after each release via AWS CloudFront and backed up all package releases for proper rollback processes.</li>
                      <li>Monitored application capacity on AWS WAF and Shield, reporting all blocked requests.</li>
                      <li>Generated comprehensive reports and runbooks of all infrastructure team processes.</li>
                      <li>Assisted in Crowdstrike installation on company assets and monitored endpoint detections.</li>
                      <li>Performed regular patching of EC2s in AWS to maintain security and optimal performance.</li>
                    </div>
                  </div>
                  <div className='div-education-item'>
                    <li className='journey-date'>Nov 2022 - Jan 2023</li>
                    <div className='div-education-item-body'>Quality Assurance Tester - Goodtech Information Systems Inc.</div>
                    <div className='div-education-item-body-info'>
                      <li>Developed and executed test cases for UI and APIs in GoodBank mobile banking application, leading to a 60% reduction in critical bugs.</li>
                      <li>Participated actively in Scrum activities, contributing to the timely delivery of high-quality software products.</li>
                      <li>Authored comprehensive installation and download guides for Android and iOS beta testers, enhancing user experience and feedback collection.</li>
                    </div>
                  </div>
              </div>
              <div className='div-journey-body-right'>
                <div className='div-journey-body-title'>Education</div>
                <div className='div-education-item'>
                  <li className='journey-date'>Feb 2022 - Sept 2022</li>
                  <div className='div-education-item-body'>Full-stack Web Development - Avion School</div>
                  <div className='div-education-item-body-info'>
                    <p>- Front-end stack: HTML, CSS, Javascript, ReactJS</p>
                    <p>- Back-end stack: Ruby, Ruby on Rails</p>
                  </div>
                </div>
                <div className='div-education-item'>
                  <li className='journey-date'>2014 - 2020</li>
                  <div className='div-education-item-body'>BS in Materials Engineering - University of the Philippines Diliman</div>
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}
