import React from 'react';
import ExperienceItem from '../components/ExperienceItem';
import experienceList from '../resources/ExpList';
import "../styles/Experience.css"


function Experience() {
  return (
    <div className="experience">
        <h1 className='expTitle'>Developemt and SQA Experiences</h1>
        <div className='expList'>
          {experienceList.map((experience) => {
            return <ExperienceItem name ={experience.name} image={experience.image}/>
          })}
        </div>
    </div>

  );
}

export default Experience;
