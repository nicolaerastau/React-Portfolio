import React from 'react';
import './css/about.css';
import { Link } from 'react-router-dom';
import AboutImage from './image/about.jpg';

const aboutStyle = {
  backgroundImage: `url(${AboutImage})`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center center'
};

function About(props) {
  return (
    <div>
      <div>
        <Link className='back' to={'/'}>
          Back to home
        </Link>
      </div>
      <div className='about' style={aboutStyle}>
        <div className='text'>
          My name is Nicolae, I live in Södertälje and I'm 51 years old. I have
          decided a long time ago to work in the IT industry, but I could not do
          this because of various reasons. In 2010 I have moved to Sweden and I
          have started a new life. In 2017 I have finished my education as a
          Javascript frontend-developer and I take this step in my life with a
          big challenge.Now I am working as a frontend-developer att
          Skatteverket Stockholm.In my free time I'm interested in learning new
          technologies in JavaScript like "styled-components", "TypeScript" and
          "Svelte".
        </div>
      </div>
    </div>
  );
}

export default About;
