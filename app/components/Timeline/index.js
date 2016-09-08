import React from 'react';

import classNames from 'classnames';
import styles from './styles.css';

import resume from '../../assets/resume.json';

class Timeline extends React.Component {
  renderBlock(job) {
    const img = 'https://avatars0.githubusercontent.com/u/1227139';
    return (
      <div className={styles.block}>
        <div className={classNames(styles.img, styles.picture)}>
          <img src={img} alt="" />
        </div>
        <div className={styles.content}>
          <h2>{job.company}
            <span className={styles.position}>{job.position}</span>
          </h2>
          <p className={styles.summary}>{job.summary}</p>
          <ul className={styles.highlightContainer}>
            {
              job.highlights.map((highlight) =>
                <li className={styles.highlight}>{highlight}</li>)
            }
          </ul>
          <span className={styles.date}>
            {job.startDate}
            -
            {job.endDate}
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
    const jobs = resume.work;
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
