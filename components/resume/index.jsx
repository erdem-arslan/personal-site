import React from 'react'
import { BsBook, BsPersonWorkspace } from 'react-icons/bs'
import {History, SubTitle, HeadTitle, SkillsSwipe }from '../index.js'

function Resume() {
      return (
    <div className='mt-6 ml-6'>
            <HeadTitle>Resume</HeadTitle>
            <SubTitle icon={BsBook}>Education</SubTitle>
            <History title="Kutahya Dumlupınar University" date="2021 - 2023" desc="Computer Programming" other="3,45/4" />
            <History title="Yıldırım Beyazit IMBK M.T.A.L" date="2015 - 2019" desc="Computer Science" other=" Web Design and Coding"/>
            
            <div className='mt-10'>
                <SubTitle icon={BsPersonWorkspace}>Experience</SubTitle>
                <History title="Fizyonops" date="JAN 2023 - JUL 2023" desc="Front End Developer" other=" React JS, Next Js, Tailwind CSS, TypeScript"/>
            </div>
            <div className='mt-10'>
                <HeadTitle secondary >Skills</HeadTitle>
                <SkillsSwipe/>
            </div>            
          </div>
  )
}

export default Resume