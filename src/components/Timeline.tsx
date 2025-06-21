import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="2021 - present"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Bachelor Of Engineering - Computer Engineering</h3>
            <h4 className="vertical-timeline-element-subtitle">Savitribai Phule Pune University</h4>
            <p>
              Full-stack Web Development, GenAI/LLM, Data Structures, Algorithms, Object-oriented Programming, Database Management Systems, Software Engineering, Computer Networks and Operating Systems, Data Mining, Machine Learning, Artificial Intelligence, Cloud Computing, Security for Networked Systems

            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2024 - 2025"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Software Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">Rewise Analytics & Technologies Pvt. Ltd</h4>
            <p>
              User Experience, Problem-Solving, Data Analysis, Networking, Fast-paced startup environment.
            </p>
          </VerticalTimelineElement>
          
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;