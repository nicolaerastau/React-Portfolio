import React from 'react';
import Image from './image/contact.png';
import { Link } from 'react-router-dom';
import './css/contact.css';

const contactStyle = {
  backgroundImage: `url(${Image})`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center center',
  boxShadow: '0 0 40px rgba(0,0,0,0.8)',
};

function Contact(props) {
  return (
    <div>
      <div>
        <Link className='back' to={'/'}>
          Back to home
        </Link>
      </div>
      <div className='contact' style={contactStyle}>
        <div className='title_1'>
          <h1>{props.title}</h1>
        </div>
        <section id='phone'>You're welcome to contact me.</section>

        <div className='email'>
          <a href='mailto: nickqsr@yahoo.com' className='btn'>
            Send Email
          </a>
        </div>
      </div>
    </div>
  );
}
export default Contact;
