import React from 'react';
import Background from './image/home2.jpg';
import './css/home.css';
import Popup from 'reactjs-popup';
import Image from './image/image1.jpg';

const myStyles = {
  backgroundImage: `url(${Background})`,
  backgroundPosition: 'center center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
};

const imageStyle = {
  backgroundImage: `url(${Image})`,
  backgroundPosition: 'center center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  // transition: 'all 0.3s ease-in-out',
};

function Home(props) {
  return (
    <div className='home' style={myStyles}>
      <div className='title'>{props.title}</div>
      <div className='subtitle'>{props.subtitle}</div>
      <div className='image' style={imageStyle}>
        <div className='content1'>
          "I am telling you once again, React is not so difficult to learn."
        </div>
      </div>

      <Popup
        trigger={<button className='button'> {props.button} </button>}
        modal
      >
        {(close) => (
          <div className='modal'>
            <div className='header'>About portfolio</div>
            <div className='content'>
              This is an portfolio which is build with React.js.The work is in
              progress.
            </div>
            <div className='actions'>
              <button
                className='button_1'
                onClick={() => {
                  console.log('modal closed ');
                  close();
                }}
              >
                close
              </button>
            </div>
          </div>
        )}
      </Popup>
    </div>
  );
}

export default Home;
