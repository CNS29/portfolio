import React from 'react';
import Bar from './Bar';
import { languages, tools } from './Data/resume';

const Resume = () => {
    
    return (
        <div className="resume content__section">
            <div className="container">
                <div className="row">
                    <div className="col xl-6 lg-6 md-12 sm-12 c-12 resume-card">
                        <h4 className="resume-card__heading">
                            Education
                        </h4>
                        <div className="resume-card__body">
                            <h5 className="resume-card__title">
                                Computer Science Engineer
                            </h5>
                            <p className="resume-card__name">
                                Academy of Technology
                            </p>
                            <p className="resume-card__details">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. In, velit id. Quae nam voluptas sit sed natus, provident odit impedit et, voluptatem sapiente sunt perferendis itaque fugiat tempore magni praesentium?
                            </p>
                        </div>
                    </div>
                    <div className="col xl-6 lg-6 md-12 sm-12 c-12 resume-card">
                        <h4 className="resume-card__heading">
                            Experiance
                        </h4>
                        <div className="resume-card__body">
                            <h5 className="resume-card__title">
                                Lorem ipsum dolor sit.
                            </h5>
                            <p className="resume-card__name">
                                Lorem ipsum dolor sit.
                            </p>
                            <p className="resume-card__details">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. In, velit id. Quae nam voluptas sit sed natus, provident odit impedit et, voluptatem sapiente sunt perferendis itaque fugiat tempore magni praesentium?
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col xl-6 lg-6 md-12 sm-12 c-12 resume-language">
                        <h5 className="resume-language__heading">
                            Language and Framework
                        </h5>
                        <div className="resume-language__body">
                            {languages.map((language, index) => (
                                <Bar key={index} data={language}/>
                            ))}
                        </div>
                    </div>
                    <div className="col xl-6 lg-6 md-12 sm-12 c-12 resume-language">
                        <h5 className="resume-language__heading">
                            Tools and Softwares
                        </h5>
                        <div className="resume-language__body">
                            {tools.map((tool, index) => (
                                <Bar key={index} data={tool}/>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Resume;
