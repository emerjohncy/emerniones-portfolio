import React, { useState } from 'react'
import './projects.css'
import tictactoe from '../../assets/tictactoe.png'
import bankingApp from '../../assets/banking-app.png'
import slackApp from '../../assets/slack-app.png'
import journalApp from '../../assets/journal-app.png'
import shoesBiddingApp from '../../assets/shoes-bidding-app.png'

export default function Projects() {
    const [isShoesBiddingAppHovered, setIsShoesBiddingAppHovered] = useState(false);
    const [isJournalAppHovered, setIsJournalAppHovered] = useState(false);
    const [isSlackAppHovered, setIsSlackAppHovered] = useState(false);
    const [isBankingAppHovered, setIsBankingAppHovered] = useState(false);
    const [isTictactoeHovered, setIsTictactoeHovered] = useState(false);
    
  return (
    <div className='projects' id='projects'>
        <div className='div-projects'>
            <div className='div-projects-title'>
                My <span className='blue'>Projects</span>
            </div>
            <div className='div-projects-body'>
                <div className='div-projects-item'
                onMouseEnter={() => setIsShoesBiddingAppHovered(true)} 
                onMouseLeave={() => setIsShoesBiddingAppHovered(false)}>
                    <img className='projects-image' src={shoesBiddingApp} />
                    <div className={`${isShoesBiddingAppHovered ? "project-hovered" : "project-not-hovered"}`}>
                        <div className='projects-title'>Shoes Bidding Application</div>
                        <div className='projects-description'>
                        A Ruby on Rails application that allows a user to auction his/her owned shoes; while other users can buy shoes on auction through bidding
                        </div>
                        <div className='projects-footer'>
                            <a className='visit-site' href='https://shoes-bidding-app.onrender.com/' target='blank'>Visit Site</a>
                            <a className='source-code' href='https://github.com/emerjohncy/final_project' target='blank'>Source Code</a>
                        </div>
                    </div>
                </div>
                <div className='div-projects-item'
                onMouseEnter={() => setIsJournalAppHovered(true)} 
                onMouseLeave={() => setIsJournalAppHovered(false)}>
                    <img className='projects-image' src={journalApp} />
                    <div className={`${isJournalAppHovered ? "project-hovered" : "project-not-hovered"}`}>
                        <div className='projects-title'>Journal Application</div>
                        <div className='projects-description'>
                        A Ruby on Rails application that allows users to create tasks and manage them according to their corresponding category
                        </div>
                        <div className='projects-footer'>
                            <a className='visit-site' href='https://journalapp.emerniones.com/' target='blank'>Visit Site</a>
                            <a className='source-code' href='https://github.com/emerjohncy/journal_app' target='blank'>Source Code</a>
                        </div>
                    </div>
                </div>
                <div className='div-projects-item'
                onMouseEnter={() => setIsSlackAppHovered(true)} 
                onMouseLeave={() => setIsSlackAppHovered(false)}>
                    <img className='projects-image' src={slackApp} />
                    <div className={`${isSlackAppHovered ? "project-hovered" : "project-not-hovered"}`}>
                        <div className='projects-title'>Slack Clone Application</div>
                        <div className='projects-description'>
                        A ReactJS application that allows a user to communicate with other users through a channel or a direct message
                        </div>
                        <div className='projects-footer'>
                            <a className='visit-site' href='https://emerjohncy-slack-clone.netlify.app/' target='blank'>Visit Site</a>
                            <a className='source-code' href='https://github.com/emerjohncy/slack-react' target='blank'>Source Code</a>
                        </div>
                    </div>
                </div>
                <div className='div-projects-item'
                onMouseEnter={() => setIsBankingAppHovered(true)} 
                onMouseLeave={() => setIsBankingAppHovered(false)}>
                    <img className='projects-image' src={bankingApp} />
                    <div className={`${isBankingAppHovered ? "project-hovered" : "project-not-hovered"}`}>
                        <div className='projects-title'>Banking Application</div>
                        <div className='projects-description'>
                            A Javascript application that allows a user, preferably a bank employee, to manage the bank's accounts
                        </div>
                        <div className='projects-footer'>
                            <a className='visit-site' href='https://emerjohncy.github.io/batch18-frontend-activities/banking-app/' target='blank'>Visit Site</a>
                            <a className='source-code' href='https://github.com/emerjohncy/batch18-frontend-activities/tree/main/banking-app' target='blank'>Source Code</a>
                        </div>
                    </div>
                </div>

                <div className='div-projects-item'
                onMouseEnter={() => setIsTictactoeHovered(true)} 
                onMouseLeave={() => setIsTictactoeHovered(false)}>
                    <img className='projects-image' src={tictactoe} />
                    <div className={`${isTictactoeHovered ? "project-hovered" : "project-not-hovered"}`}>
                        <div className='projects-title'>Tic-Tac-Toe Application</div>
                        <div className='projects-description'>
                            A tic-tac-toe application, made with HTML, CSS and Javascript, that allows users to play tic-tac-toe
                        </div>
                        <div className='projects-footer'>
                            <a className='visit-site' href='https://emerjohncy.github.io/batch18-frontend-activities/tic-tac-toe/' target='blank'>Visit Site</a>
                            <a className='source-code' href='https://github.com/emerjohncy/batch18-frontend-activities/tree/main/tic-tac-toe' target='blank'>Source Code</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
