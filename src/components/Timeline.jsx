import React from "react";
import "./Timeline.css";

const TimelineItem = ({ title, time, followUp, author, isLast }) => (
  <div className="timeline-item">
    <div className="timeline-left">
      <p className="timeline-title">{title}</p>
      <p className="timeline-time">{time}</p>
    </div>

    <div className="timeline-middle">
      <div className="timeline-dot" />
      {!isLast && <div className="timeline-line" />}
    </div>

    <div className="timeline-right">
      <p className="timeline-status">Discussion Done</p>
      <p className="timeline-description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
        <br />
        <span className="follow-up">Follow Up : {followUp}</span>
        <br />
        <span className="author">- {author}</span>
      </p>
    </div>
  </div>
);

const Timeline = () => {
  const data = [
    {
      date: "11 Oct 23",
      items: [
        {
          title: "Proposal Sent",
          time: "05:30 PM",
          followUp: "11 Oct 23 10:30 AM",
          author: "Bhimkumar Prasad",
        },
        {
          title: "Interested",
          time: "02:30 PM",
          followUp: "11 Oct 23 10:30 AM",
          author: "Bhimkumar Prasad",
        },
      ],
    },
    {
      date: "7 Oct 23",
      items: [
        {
          title: "Proposal Sent",
          time: "05:30 PM",
          followUp: "11 Oct 23 10:30 AM",
          author: "Bhimkumar Prasad",
        },
        {
          title: "Interested",
          time: "02:30 PM",
          followUp: "11 Oct 23 10:30 AM",
          author: "Bhimkumar Prasad",
        },
      ],
    },
  ];

  return (
    <div className="timeline-container">
      {data.map((section, index) => (
        <div key={index} className="timeline-section">
          <p className="timeline-date">{section.date}</p>
          <div className="timeline-box">
            {section.items.map((item, idx) => (
              <TimelineItem
                key={idx}
                {...item}
                isLast={idx === section.items.length - 1}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
