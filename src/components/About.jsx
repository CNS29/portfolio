import React from 'react';
import webdevelopment from '../assests/img/webdevelopment.png';
import uiux from '../assests/img/uiux.png';
import SkillCard from './SkillCard';

const skills = [
    {
        icon: webdevelopment,
        name: "Frontend Development",
        about: "I can built a beautiful and scalable SPA using HTML,CSS and React.js"
    },
    {
        icon: uiux,
        name: "UI/UX developer",
        about: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    }
];

const About = () => {
    return (
        <div className="about content__section">
            <h6 className="about__intro">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos eum modi nisi! Non, nulla nihil nostrum debitis culpa sed quibusdam a doloribus sit reprehenderit et, laudantium minus eos quae maxime!</h6>
            <div className="container about__container">
                <h6 className="about__heading">What I Offer</h6>
                <div className="row">
                    {skills.map((skill, index) => (
                        <SkillCard skill={skill} key={index}/>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default About;
