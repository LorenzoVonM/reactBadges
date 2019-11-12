import React from 'react';
import './styles/Home.css';
import platziconflogo from '../images/platziconf-logo.svg';
import astronauts from '../images/astronauts.svg';

function Home(){
  return(
    <div className=" Home">
      <div className="row  Row__center">
        <div className="col-5">
          <div className="row Row__center">
            <img src={platziconflogo} alt="Platzi Conf Logo"/>
          </div>
              <div className="row Row__center-sub">
                <h1>
                  <br/>
                  PRINT YOUR BADGES
                </h1>
              </div>
              <div className="row Row__center-sub">
                <p className="Home__description-p">
                  The easiest way to manage your conference 
                </p>
              </div>  
            <div className="row Row__center-sub">
              <button className="btn btn-primary" >Start Now</button>
            </div>
        </div>
        <div className="col-7">
          <img src={astronauts} alt="Platzi Conf Logo"/>
        </div>

      </div>
      
    </div>
  )
}

export default Home;