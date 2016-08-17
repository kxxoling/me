/**
*
* Timeline
*
*/

import React from 'react';

import { FormattedMessage } from 'react-intl';
import classNames from 'classnames';
import messages from './messages';
import styles from './styles.css';

class Timeline extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const job = {
      company: 'PEVC',
      details: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, optio, dolorum provident rerum aut hic quasi placeat iure tempora laudantium ipsa ad debitis unde? Iste voluptatibus minus veritatis qui ut.',
      joinTime: '2012',
      leaveTime: '2014',
    };
    const img = 'https://avatars0.githubusercontent.com/u/1227139';
    return (
      <section className={classNames(styles.timeline)}>
        <div className={styles.block}>
          <FormattedMessage {...messages.header} />
          <div className={classNames(styles.img, styles.picture)}>
            <img src={img} alt="" />
          </div>
          <div className={styles.content}>
            <h2>{job.company}</h2>
            <p>{job.details}</p>
            <a href="#0" className={styles['read-more']}>Read more</a>
            <span className={styles.date}>
              {job.joinTime}
              -
              {job.leaveTime}
            </span>
          </div>
        </div>
      </section>
    );
  }
}

export default Timeline;
