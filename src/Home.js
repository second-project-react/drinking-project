import React from 'react';
import './Home.css';

import Surprise from './components/Surprise';

import 'react-multi-carousel/lib/styles.css';
import CarouselTop from './components/CarouselTop';
import CarouselSecond from './components/CarouselSecond';
import Newsletter from './components/Newsletter';
import { Container } from 'react-bootstrap';

const Home = (props) => {
   return (
      <div>
         <Container fluid className="Home p-0">
            <div className="topPart">
               <CarouselTop />
            </div>

            <div className="secondRow">
               <Surprise />
               <Newsletter />
            </div>
            <div className="latestRow">
               <CarouselSecond />
            </div>
         </Container>
      </div>
   );
};

export default Home;
