import React from 'react';
import {
  LinkedInButton,
  LinkedInCount,
  TwitterCount,
  TwitterButton,
  GooglePlusButton,
  GooglePlusCount,
} from 'react-social';
import styles from './styles.css';

class SocialSharer extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const url = 'http://gh.windrunner.info/me/';
    return (
      <div className={styles.socialSharer}>
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

export default SocialSharer;
