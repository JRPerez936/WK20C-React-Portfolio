import React, { useState } from 'react';

const ProjectList = () => {
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
        category: 'techBlog.PNG',
        github: 'https://github.com/JRPerez936/WK14-Tech-Blog',
        deploy: 'https://desolate-brook-02162.herokuapp.com/#'
      },
      {
        name: 'Weather Dashboard',
        category: 'weather.PNG',
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
  
    
    return (
      <div>
        <div className="flex-row">
          {projects.map((image, i) => (
            <div>
                <img
                    src={require(`../../assets/images/projectpics/${image.category}`)}
                    alt={image.name}
                    className="img-thumbnail mx-1"
                    key={image.name}
                />
                <h2>{image.name}</h2>
                <a href={image.github}><button>Github</button></a>
                <a href={image.deploy}><button>Website</button></a>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default ProjectList;