/**
*
* Header
*
*/

import React from 'react';
import { Link } from 'react-router';
import {
  LinkedInButton,
  LinkedInCount,
  TwitterCount,
  TwitterButton,
  GooglePlusButton,
  GooglePlusCount,
} from 'react-social';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import styles from './styles.css';

class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const url = 'https://plus.google.com';
    return (
      <div className={styles.header}>
        <ul>
          <li>
            <Link to="github">
              <FormattedMessage {...messages.githubSummary} />
            </Link>
          </li>
          <li>
            <Link to="jobs">
              <FormattedMessage {...messages.jobHistory} />
            </Link>
          </li>
          <li>
            <Link to="">
              <FormattedMessage {...messages.me} />
            </Link>
          </li>
        </ul>
        <LinkedInButton url={url}>
          <LinkedInCount url={url} />
        </LinkedInButton>
        <TwitterButton url={url}>
          <TwitterCount url={url} />
        </TwitterButton>
        <GooglePlusButton url={url}>
          <GooglePlusCount url={url} />
        </GooglePlusButton>
      </div>
    );
  }
}

export default Header;
