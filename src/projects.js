import React from 'react';
import { Link } from 'react-router-dom';
import './css/projects.css';
import Image from './image/projects.jpg';

function Projects(props) {
  const projectsStyle = {
    backgroundImage: `url(${Image})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center'
  };

  return (
    <div>
      <div>
        <Link className='back' to={'/'}>
          Back to home
        </Link>
      </div>
      <div className='projects' style={projectsStyle}>
        <div className='title_2'>{props.title}</div>
        <ul className='responsive'>
          <li className='list'>
            <a
              target='_blank'
              rel='noopener noreferrer'
              href={'https://react-fotball.netlify.com/'}
            >
              - A react app about fotball
            </a>
          </li>
          <li className='list'>
            <a
              target='_blank'
              rel='noopener noreferrer'
              href={'https://githubfinder1968.netlify.com/'}
            >
              - Github Finder-React hooks
            </a>
          </li>
          <li className='list'>
            <a
              target='_blank'
              rel='noopener noreferrer'
              href={'https://nicolaerastau.github.io/Fetch-api/'}
            >
              - Search on Reddit-ES6,Fetch&Parcel
            </a>
          </li>
          <li className='list'>
            <a
              target='_blank'
              rel='noopener noreferrer'
              href={'https://nicolaerastau.github.io/react/'}
            >
              - React App
            </a>
          </li>
          <li className='list'>
            <a
              target='_blank'
              rel='noopener noreferrer'
              href={'https://nicolaerastau.github.io/React-list/'}
            >
              - React App-list
            </a>
          </li>
          <li className='list'>
            <a
              target='_blank'
              rel='noopener noreferrer'
              href={'https://nicolaerastau.github.io/Angular5/ng5/'}
            >
              - Angular 5-app
            </a>
          </li>
          <li className='list'>
            <a
              target='_blank'
              rel='noopener noreferrer'
              href={'https://nicolaerastau.github.io/Angular6/ng6/'}
            >
              - Angular 6-app
            </a>
          </li>
          <li className='list'>
            <a
              target='_blank'
              rel='noopener noreferrer'
              href={'https://nicolaerastau.github.io/Projects/#/'}
            >
              - Old portfolio with Angular1
              <br /> and Node.js
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Projects;
