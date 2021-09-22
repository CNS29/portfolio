import React from 'react';

const SkillCard = (props) => {
    const {skill} = props;
    return (
        <div className="col xl-6 lg-6 md-12 sm-12 c-12">
            <div className="skill-card">
                <img src={skill.icon} alt="pictures" className="skill-card__img"/>
                <div className="skill-card__body">
                    <h6 className="skill-card__title">{skill.name}</h6>
                    <p className="skill-card__content">{skill.about}</p>
                </div>
            </div>
        </div>
    )
}

export default SkillCard;
