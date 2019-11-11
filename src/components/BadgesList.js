import React from 'react';
import './styles/BadgesList.css';

class BadgesList extends React.Component {
  render(){
    return (
      <ul className='list-unstyled'>
        {this.props.badges.map((badge) => {
          return (
            <li key={badge.id}>
              <div className="badgeSections__container">
                <div className="row">
                  <div className="col-4">
                    <div className=''>
                      <img className='Badge__avatar' src={badge.avatarUrl} alt=''></img>
                    </div>
                  </div>
                  <div className="col-8 Badge__content">
                    <div className='row Badge__content-name'>
                      {badge.firstName} {badge.lastName} 
                    </div>
                    <div className='row Badge__content-twitter' >
                      {badge.twitter}
                    </div>
                    <div className='row Badge__content-job'>
                      {badge.jobTitle}
                    </div>
                  </div>
                </div>
              </div>
            </li>
          )
        })}
      </ul>
    )
  }
}

export default BadgesList;