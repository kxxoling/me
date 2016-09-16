import React from 'react';
import { FormattedMessage } from 'react-intl';
import Helmet from 'react-helmet';

import messages from './messages';
import styles from './styles.css';

import SocialSharer from '../../components/SocialSharer';

export default class HomePage extends React.Component { // eslint-disable-line react/prefer-stateless-function

  render() {
    const avatarUrl = 'https://avatars0.githubusercontent.com/u/1227139';
    return (
      <div className={styles.home}>
        <Helmet
          title={messages.title.defaultMessage}
          meta={[
            { name: 'description', content: messages.description.defaultMessage },
          ]}
        />
        <div className={styles.centerContainer}>
          <figure className={styles.avatarContainer}>
            <img src={avatarUrl} alt="Kane Blueriver" />
            <figcaption>
              <FormattedMessage {...messages.name} />
            </figcaption>
          </figure>
          <div className={styles.bioContainer}>
            <p className={styles.bioItem}>
              <FormattedMessage {...messages.bio} />
            </p>
          </div>
          <SocialSharer />
        </div>
      </div>
    );
  }
}
