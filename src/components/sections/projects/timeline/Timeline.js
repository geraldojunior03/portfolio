import React from 'react';
import './Timeline.css';
import { BsFillCalendar2DateFill } from "react-icons/bs";


const TimelineCard = ({ accentColor, year, title, description }) => (
  <li style={{ '--accent-color': accentColor }}>
    <div className="date">{title}</div>
    <div className="descr">{description}</div>
    <div className="title"><BsFillCalendar2DateFill id='teste'/>{year}</div>
  </li>
);

const Timeline = () => {
  const timelineData = [
    {
      accentColor: '#6c63ff',
      title: 'Fábrica - Estágio',
      year: '2022 - 2023',
      description:
        'Participação na fábrica para estudos e conhecimentos técnicos da área de qualidade de software',
    },
    {
      accentColor: '#330093',
      title: 'Alelo - Analista QA',
      year: '2023 - 2025',
      description:
        'Atuando na Alelo com testes regressivos manuais e automatizados. Utilizando da linguagem Java e framework Selenium.',
    }
  ];

  return (
    <div className="projects">
      <ul>
        {timelineData.map((data, index) => (
          <TimelineCard
            key={index}
            accentColor={data.accentColor}
            year={data.year}
            title={data.title}
            description={data.description}
          />
        ))}
      </ul>
      <div className="credits">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.freepik.com/free-vector/infographic-template-with-yearly-info_1252895.htm"
        >
        </a>
      </div>
    </div>
  );
};

export default Timeline;
