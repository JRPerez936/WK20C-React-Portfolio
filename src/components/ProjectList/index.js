import React, { useState } from 'react';

const ProjectList = ({ category }) => {
    const [projects] = useState([
      {
        name: 'Spot',
        category: 'spot.png',
        github: 'https://github.com/JRPerez936/spot',
        deploy: 'https://fierce-bayou-66905.herokuapp.com/'
      },
      {
        name: 'And Chill',
        category: 'and chill logo.PNG',
        github: 'https://github.com/JRPerez936/project-1',
        deploy: 'https://pfizzz.github.io/project-1/'
      },
      {
        name: 'Tech Blog',
        category: 'led_wall.jpeg',
        github: 'https://github.com/JRPerez936/WK14-Tech-Blog',
        deploy: 'https://desolate-brook-02162.herokuapp.com/#'
      },
      {
        name: 'Weather Dashboard',
        category: 'led_wall.jpeg',
        github: 'https://github.com/JRPerez936/WK6C-Weather-Dashboard',
        deploy: 'https://jrperez936.github.io/WK6C-Weather-Dashboard/'
      },
      {
        name: 'Run Buddy',
        category: 'run_buddy.PNG',
        github: 'https://github.com/JRPerez936/run-buddy',
        deploy: 'https://jrperez936.github.io/run-buddy/'
      }
    ]);
  
    const currentProjects = projects.filter((project) => project.category === category);
    return (
      <div>
        <div className="flex-row">
          {currentProjects.map((image, i) => (
            <img
            src={require(`../../assets/images/projectpics/${category}`)}
            alt={image.name}
            className="img-thumbnail mx-1"
            onClick= {image.github}
            key={image.name}
          />
          ))}
        </div>
      </div>
    );
  };
  
  export default ProjectList;