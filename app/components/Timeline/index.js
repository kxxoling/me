import React from 'react';

import classNames from 'classnames';
import styles from './styles.css';

class Timeline extends React.Component {
  renderBlock(job) {
    const img = 'https://avatars0.githubusercontent.com/u/1227139';
    return (
      <div className={styles.block}>
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
    );
  }

  renderJobBlocks(jobs) {
    const jobBlocks = [];
    for (const job of jobs) {
      jobBlocks.push(this.renderBlock(job));
    }
    return jobBlocks;
  }

  render() {
    const jobs = [{
      company: 'PEVC',
      details: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, optio, dolorum provident rerum aut hic quasi placeat iure tempora laudantium ipsa ad debitis unde? Iste voluptatibus minus veritatis qui ut.',
      joinTime: '2012',
      leaveTime: '2014',
    }];
    return (
      <div>
        <section className={classNames(styles.timeline)}>
          {
            this.renderJobBlocks(jobs)
          }
        </section>
      </div>
    );
  }
}

export default Timeline;
