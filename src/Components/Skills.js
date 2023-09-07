import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faAngular, faReact, faNodeJs, faNpm, faYarn, faJava, faAws, faJs, faPython } from "@fortawesome/free-brands-svg-icons";
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

class Skills extends Component {
    constructor(props) {
        super(props);
        this.skills = props.skills;
    }
    render() {
        return (
            <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="skills">
                <div className="w-100">
                    <h2 className="mb-5">Skills</h2>
                    <p>My proficiency extends across a spectrum of technologies, including: </p>
                    {
                        this.skills.map((data, index) => (
                            <div key={index} className="col-6">
                                <p className="list-item">
                                    <FontAwesomeIcon icon={faCheckCircle} color="green" />
                                    <span className="ml-3">{data.name}</span>
                                </p>
                            </div>
                        ))
                    }

                </div>
            </section>
        );
    }
}

export default Skills;


/**
 * {
                            this.skills.map((data, index) =>(
                                <div key={index} className="col-6">
                                    <p className="list-item">
                                        <FontAwesomeIcon icon={faCheckCircle} color="green" />
                                        <span className="ml-3">{data.name}</span>
                                    </p>
                                </div>
                            ))
                        }
 * 
 */