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
          <img className='Badge_avatar' src={this.props.avatarUrl} alt=''></img>
          <h1>{this.props.firstName}<br />{this.props.lastName} </h1>
        </div>
        <div className='Badge__section-info'>
          <h3>{this.props.jobTitle}</h3>
          <div>@{this.props.twitter}</div>
        </div>
        <div className='Badge__footer'>
          #platzi
        </div>
      </div>
      
    )
  }
}

export default Badge;