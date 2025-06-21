import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';
import yashimage1 from '../assets/images/yashimage1.jpg';
function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={yashimage1} alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/yashsonawane14" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/yash-sonawane1411/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Yash Dilip Sonawane</h1>
          <p>Software Developer</p>
         
          <a href="/YashSonawane-Resume.pdf" download className="download-btn">
            <button>Download Resume</button>
          </a>

          <div className="mobile_social_icons">
            <a href="https://github.com/yashsonawane14" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/yash-sonawane1411/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;