import React from 'react';
import confLogo from '../images/badge-header.svg';

class Badge extends React.Component {
  render() {
    return(
      <div>
        <div>
          <img src={confLogo} alt='logo'/>
        </div>
        <div>
          <img src='https://www.gravatar.com/avatar?d=identicon' alt=''></img>
          <h1>name</h1>
        </div>
        <div>
          <p>FrontEnd</p>
          <p>@leo</p>
        </div>
        <div>
          #platzi
        </div>
      </div>
      
    )
  }
}

export default Badge;