import React from "react";
import mock01 from '../assets/images/mock01.png';
import mock02 from '../assets/images/mock02.png';
import mock03 from '../assets/images/mock03.png';
import mock04 from '../assets/images/mock04.png';
import mock05 from '../assets/images/mock05.png';
import mock06 from '../assets/images/mock06.png';
import mock07 from '../assets/images/mock07.jpg';
import mock08 from '../assets/images/mock08.png';
import mock09 from '../assets/images/mock09.jpg';
import mock10 from '../assets/images/mock10.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Project Experience</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://github.com/yashsonawane14/College-Recommendation-System-using-Machine-Learning" target="_blank" rel="noreferrer"><img src={mock10} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/yashsonawane14/College-Recommendation-System-using-Machine-Learning" target="_blank" rel="noreferrer"><h2>College Recommendation System</h2></a>
                <p>Developed a College Recommendation System using KNN and XGBoost with a Django-based web app, featuring a LLaMA-integrated chatbot to assist users with personalized queries.</p>
            </div>
            <div className="project">
                <a href="https://github.com/yashsonawane14/AgeAndGenderDetection" target="_blank" rel="noreferrer"><img src={mock09} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/yashsonawane14/AgeAndGenderDetection" target="_blank" rel="noreferrer"><h2>Age and Gender Detection</h2></a>
                <p>Built a web app for real-time age and gender detection from images using deep learning models with OpenCV and Flask.</p>
            </div>
            <div className="project">
                <a href="https://github.com/yashsonawane14/Shared-Wishlist-App" target="_blank" rel="noreferrer"><img src={mock08} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/yashsonawane14/Shared-Wishlist-App" target="_blank" rel="noreferrer"><h2>Shared Wishlist App</h2></a>
                <p>Developed a Shared Wishlist App using Vue.js, Flask, and Firebase, enabling users to collaboratively create and manage wishlists with Google Sign-In and real-time updates.</p>
            </div>
            <div className="project">
                <a href="http://github.com/yashsonawane14/NoteItDown/" target="_blank" rel="noreferrer"><img src={mock07} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="http://github.com/yashsonawane14/NoteItDown" target="_blank" rel="noreferrer"><h2>Note It Down: A online notes app</h2></a>
                <p>Built Note It Down, a note management web app using Java, Servlets, JSP, and MySQL, featuring a responsive UI with HTML, CSS, and Bootstrap, and designed with modular OOP principles for maintainability.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;