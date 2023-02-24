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
                    <div className='d-sm-flex justify-content-start'>
                        <span className="d-lg-none d-block">
                            <img className="img-fluid img-profile rounded-circle mx-auto mb-2" src="./images/profile.jpeg" alt="" />
                        </span>
                        <h1 className="mb-0">
                            <span className='d-block d-lg-inline'>{this.landingData.firstName}</span>
                            <span className="d-block d-lg-inline text-primary ml-lg-2">{this.landingData.lastName}</span>
                        </h1>
                    </div>
                    <div className="subheading mb-5">
                        <a className='mx-2' style={{ color: "#6c757d", whiteSpace: "nowrap" }} href={"tel:" + this.landingData.phoneNumber.replace("-")}>📞 {this.landingData.phoneNumber}</a>
                        <a className='mx-2' style ={{whiteSpace: "nowrap"}} href={"mailto:" + this.landingData.email}>✉️ {this.landingData.email}</a>
                    </div>
                    <p className="lead mb-5">{this.landingData.bio}</p>
                    <div className="social-icons">
                        <a className="social-icon" href={this.landingData.linkedin}>
                            <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                        <a className="social-icon" href={this.landingData.github}>
                            <FontAwesomeIcon icon={faGithub} />
                        </a>
                        <a className="social-icon" href={this.landingData.facebook}>
                            <FontAwesomeIcon icon={faFacebook} />
                        </a>
                        <a className="social-icon" href={this.landingData.twitter}>
                            <FontAwesomeIcon icon={faTwitter} />
                        </a>
                    </div>
                </div>
            </section>
        );
    }
}

export default Landing;