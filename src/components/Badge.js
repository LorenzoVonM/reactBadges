import React from 'react';
import './styles/Badges.css';
import confLogo from '../images/badge-header.svg';



class Badge extends React.Component {
  render() {
    return(
      <div className='Badge'>
        <div className='Badge__header'>
          <img src={confLogo} alt='logo'/>
        </div>
        <div className='Badge__section-name'>
          <img className='Badge_avatar' src='https://www.gravatar.com/avatar?d=identicon' alt=''></img>
          <h1>Leonardo Daniel</h1>
        </div>
        <div className='Badge__section-info'>
          <h3>FrontEnd</h3>
          <div>@leo_Supernova</div>
        </div>
        <div className='Badge__footer'>
          #platzi
        </div>
      </div>
      
    )
  }
}

export default Badge;