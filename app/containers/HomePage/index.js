/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a neccessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

export default class HomePage extends React.Component { // eslint-disable-line react/prefer-stateless-function

  render() {
    const avatarUrl = 'https://avatars0.githubusercontent.com/u/1227139';
    return (
      <div className="homePage">
        <div className="avatarContainer">
          <figure className="avatar">
            <img src={avatarUrl} alt="My avatar" />
            <figcaption>
              <FormattedMessage {...messages.name} />
            </figcaption>
          </figure>
          <div className="socialIcons">
          </div>
        </div>
        <div className="bio">
          <p className="bioItem">
            <FormattedMessage {...messages.bio} />
          </p>
          <p className="bioItem">
            Some self introduction.
          </p>
        </div>
      </div>
    );
  }
}
