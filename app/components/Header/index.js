import React from 'react';
import { Link } from 'react-router';

import { Icon } from 'react-fa';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import styles from './styles.css';

class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const fontConfig = {
      size: '4x',
      inverse: true,
    };

    return (
      <div className={styles.header}>
        <ul className={styles.iconsContainer}>
          <li className={styles.iconContainer}>
            <Link className={styles.icon} to="">
              <Icon name="home" {...fontConfig} />
              <FormattedMessage {...messages.me} />
            </Link>
          </li>
          <li className={styles.iconContainer}>
            <Link className={styles.icon} to="github">
              <Icon name="github" {...fontConfig} />
              <FormattedMessage {...messages.githubSummary} />
            </Link>
          </li>
          <li className={styles.iconContainer}>
            <Link className={styles.icon} to="jobs">
              <Icon name="briefcase" {...fontConfig} />
              <FormattedMessage {...messages.jobHistory} />
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Header;
