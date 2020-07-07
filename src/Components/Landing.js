import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';       //ya que instalamos estas chivas, debemos importarlo para que jale. El otro modo es usar el cdn
import { faGithub, faLinkedin, faFacebook, faTwitter } from "@fortawesome/free-brands-svg-icons";

class Landing extends Component {
    constructor(props) {
        super(props);
        this.landingData = props.landingData;
    }
    render() {
        return (
            <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="about">
                <div className="w-100">
                    <h1 className="mb-0">{this.landingData.firstName}
                        <span className="text-primary">{this.landingData.lastName}</span>
                    </h1>
                    <div className="subheading mb-5">{this.landingData.phoneNumber} ·
                        <a href={"mailto:"+this.landingData.email}>{this.landingData.email}</a>
                    </div>
                    <p className="lead mb-5">{this.landingData.bio}</p>
                    <div className="social-icons">
                        <a className="social-icon" href={this.landingData.linkedin}>
                            <FontAwesomeIcon icon={faLinkedin}/>
                        </a>
                        <a className="social-icon" href={this.landingData.github}>
                            <FontAwesomeIcon icon={faGithub}/>
                        </a>
                        <a className="social-icon" href={this.landingData.facebook}>
                            <FontAwesomeIcon icon={faFacebook}/>
                        </a>
                        <a className="social-icon" href={this.landingData.twitter}>
                            <FontAwesomeIcon icon={faTwitter}/>
                        </a>
                    </div>
                </div>
            </section>
        );
    }
}

export default Landing;