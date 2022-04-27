import AnimatedName from './Components/AnimatedName';

// import nameImage from './assets/name-proper-size.png';

import './App.scss';

function App() {
  return (
    <div className="App">
      <header className="block">
        {/* <img src={nameImage} alt="Sam Olson" /> */}
        {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 556 301" role="img">
          <mask id="nameMask">
            <path class="name-svg-letter" id="name-svg-n" d="M466.7,135.1c0,12.1,0.1,24.3,0.1,36.4c-1.9-14.7,0.3-29.9,6.2-43.4c1.6-3.6,4.8-7.7,8.5-6.3c2.6,1,3.5,4.2,3.9,6.9c5.3,32.2,4.1,65.3,11.9,97s27.6,63.3,59,72.3" fill="none" stroke="#ffffff" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>
            <path class="name-svg-letter" id="name-svg-o2" d="M448,125.9c-8.7,9.3-13.2,22.4-12,35c0.3,3.1,1.1,6.5,3.5,8.4c4.8,3.8,12-0.6,15.5-5.6c7.6-10.9,8.7-25.9,3-37.9c-2.3-4.8-7.2-9.7-12.3-8.1" fill="none" stroke="#ffffff" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>
            <path class="name-svg-letter" id="name-svg-s2" d="M422.2,123.6c-3.9-2.7-9.9,1-10.6,5.7c-0.8,4.7,2,9.4,5.4,12.8s7.4,6.2,10.3,10s4.4,9.3,1.9,13.4c-2.5,4.1-10,4.3-11.5-0.2" fill="none" stroke="#ffffff" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>
            <path class="name-svg-letter" id="name-svg-l" d="M403.8,85.9c0.7,28-0.5,56-3.6,83.8" fill="none" stroke="#ffffff" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>
            <path class="name-svg-letter" id="name-svg-o1" d="M277.6,81.8c-14.3,26.3-24.2,54.9-29.2,84.4c-3,18-4.1,36.9,1.8,54.1s20.2,32.5,38.2,35.3c21.8,3.3,42.1-11.7,56.6-28.4c40.2-46.3,56.1-110.2,53.5-171.5c-0.9-20-6-43.3-24.3-51.3c-14.7-6.4-31.9,0.2-44.6,9.9c-30.9,23.5-45.3,62.9-51.7,101.2" fill="none" stroke="#ffffff" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>
            <path class="name-svg-letter" id="name-svg-m" d="M178.3,128.5c0,11.1-0.1,22.2-0.1,33.3c0.2-12.5,5.7-34.4,11.8-35c3,1.6,2.6,17.8,2,24.6c5-12.8,10-37,20-39.5c7-0.5,5.7,46.6,4.8,70.1c-1,23.5-1.8,47.6,5.3,70.1s23.7,43.4,46.5,49" fill="none" stroke="#ffffff" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>
            <path class="name-svg-letter" id="name-svg-a" d="M155.8,123.7c-0.6-4,1.7-8.9,5.7-8.9c2.3,0,4.3,1.7,5.4,3.8c1,2.1,1.3,4.4,1.5,6.7c1.4,13.6,2.8,27.4,2.2,41.1c0.2-5.4,0.1-10.9-0.3-16.3c-0.2-2.1-0.5-4.4-2.1-5.8c-2.5-2.1-6.4-0.7-9,1.3c-5,3.7-8.8,9-10.8,14.9c-0.9,2.7-1.1,6.4,1.4,7.8c1.6,0.9,3.7,0.4,5.5-0.3c4.8-1.9,9.2-4.8,12.7-8.6" fill="none" stroke="#ffffff" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>
            <path class="name-svg-letter" id="name-svg-s1" d="M94.7,38.3c6.2-15-4.8-34.7-20.9-36.2S43,19.1,49.1,34.1c3.1,7.6,10.1,12.9,16.8,17.7c29.2,21,60.4,41.9,77.6,73.6c14.9,27.5,17.2,62.1,3.5,90.2s-43.8,48.1-75,47.4c-31.2-0.8-61.3-23.8-67.9-54.3c-8-37.1,16.5-72.7,40.2-102.3" fill="none" stroke="#ffffff" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>
          </mask>
          <image href={nameImage} x="0" y="0" width="556" height="301" mask="url(#nameMask)" />
        </svg> */}
        <AnimatedName />
      </header>
    </div>
  );
}

export default App;
