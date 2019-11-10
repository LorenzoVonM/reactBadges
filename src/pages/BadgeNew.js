import React from 'react';

import './styles/BadgeNew.css';
import Navbar from '../components/Navbar';
import header from '../images/badge-header.svg';
import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm';

class BadgeNew extends React.Component {
  render(){
    return(
      <div>
        <Navbar />
        <div className='BadgeNew__hero'>
          <img className='img-fluid' src={header} alt='Logo' />
        </div>
        <div className='container'>
          <div className='row'>
            <div className='col-6'>
              <Badge firstName='Leo' 
                lastName='Hernández'
                jobTitle='Fullstack Dev'
                twitter='leo_Supernova'
                avatarUrl='https://s.gravatar.com/avatar/6d0594db0a0ade9b4302932bd113a271?s=80'
              />
            </div>
            <div className="col-6">
              <BadgeForm />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default BadgeNew;