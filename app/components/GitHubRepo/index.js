/**
*
* GitHubRepo
*
*/

import React from 'react';

// import { FormattedMessage } from 'react-intl';
// import messages from './messages';
import styles from './styles.css';

const colors = {
  Python: '#295b85',
  JavaScript: '#ff0',
  Vue: '#222',
  CSS: 'grey',
  HTML: 'grey',
};

class GitHubRepo extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const repo = this.props.repo;
    let color;
    let langShort;
    if (repo.language) {
      color = colors[repo.language];
      langShort = repo.language[0].toUpperCase();
    } else {
      color = 'white';
      langShort = 'N';
    }

    return (
      <div key={repo.html_url} className={styles.repoCard}>
        <div className={styles.header}>
          <span className={styles.lang} style={{ background: color }}>{langShort}</span>
          <strong className={styles.name}>{repo.name}</strong>
          <span className={styles.createdBy}>Created by Kane Blueriver</span>
        </div>
        <div className={styles.content}>
          <p>{repo.description}</p>
        </div>
        <div className={styles.footer}>
          <span className={styles.status}>{repo.forks_count} FORKS</span>
          <span className={styles.status}>{repo.stargazers_count} STARS</span>
        </div>
      </div>
    );
  }
}

GitHubRepo.propTypes = {
  repo: React.PropTypes.object,
};

export default GitHubRepo;
