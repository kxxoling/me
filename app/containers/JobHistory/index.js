import React from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import Icon from 'react-fa';

import messages from './messages';
import styles from './styles.css';
import Timeline from 'components/Timeline';

export class JobHistory extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className={styles.jobHistory}>
        <Helmet
          title={messages.title.defaultMessage}
          meta={[
            { name: 'description', content: messages.description.defaultMessage },
          ]}
        />
        <div className={styles.iconContainer}>
          <Icon name="briefcase" size="4x" className={styles.icon} />
        </div>
        <h2 className={styles.title}>
          <FormattedMessage {...messages.jobHistory} />
        </h2>
        <Timeline className={styles.container} />
      </div>
    );
  }
}


function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapDispatchToProps)(JobHistory);
