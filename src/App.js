import React, {useState } from 'react';
import Sidebar from './Components/Sidebar';
import Landing from './Components/Landing';
import Experience from './Components/Experience';
import Education from './Components/Education';
import Skills from './Components/Skills';
import Interests from './Components/Interests';
import Awards from './Components/Awards';
import profileData from './profileData.json';


export const App = () => {
  const [landingData] = useState(profileData.landing);
  const [experience] = useState(profileData.experience);
  const [education] = useState(profileData.education);
  const [skills] = useState(profileData.skills);
  const [interests] = useState(profileData.interests);
  const [awards] = useState(profileData.awards);
  return (
    <div className="App">
      <Sidebar sidebarData={landingData} />
        <div className="container-fluid">
          <Landing landingData={landingData} />
          <hr className="m-0" />
          <Experience experience={experience} />
          <hr className="m-0" />
          <Education education={education}/>
          <hr className="m-0" />
          <Skills skills={skills} />
          <hr className="m-0" />
          <Interests interests={interests} />
          <hr className="m-0" />
          <Awards awards={awards} />
        </div>
    </div>
  )
}
