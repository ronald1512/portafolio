import React, {Component} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faHtml5, faAngular, faReact, faNodeJs, faNpm, faYarn, faJava, faAws } from "@fortawesome/free-brands-svg-icons";

class Skills extends Component{
    constructor(props){
        super(props);
        this.skills=props.skills;
    }
    render(){
        return(
            <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="skills">
                <div className="w-100">
                    <h2 className="mb-5">Skills</h2>
                    <div className="subheading mb-3">Programming Languages &amp; Tools</div>
                    <ul className="list-inline dev-icons">
                        <li className="list-inline-item"><FontAwesomeIcon icon={faHtml5} /></li>
                        <li className="list-inline-item"><FontAwesomeIcon icon={faAngular} /></li>
                        <li className="list-inline-item"><FontAwesomeIcon icon={faReact} /></li>
                        <li className="list-inline-item"><FontAwesomeIcon icon={faNodeJs} /></li>
                        <li className="list-inline-item"><FontAwesomeIcon icon={faNpm} /></li>
                        <li className="list-inline-item"><FontAwesomeIcon icon={faYarn} /></li>
                        <li className="list-inline-item"><FontAwesomeIcon icon={faJava} /></li>
                        <li className="list-inline-item"><FontAwesomeIcon icon={faAws} /></li>
                    </ul>
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