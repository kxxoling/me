import { defineMessages } from 'react-intl';

export default defineMessages({
  header: {
    id: 'app.components.GitHubRepo.header',
    defaultMessage: 'This is the GitHubRepo component !',
  },
  forkedFrom: {
    id: 'app.containers.GitHubRepo.forkedFrom',
    defaultMessage: 'Forked from',
  },
  starredBy: {
    id: 'app.containers.GitHubRepo.starredBy',
    defaultMessage: 'Starred by',
  },
  issuesCount: {
    id: 'app.containers.GitHubRepo.issuesCount',
    defaultMessage: 'Unresolved issues',
  },
  reposTitle: {
    id: 'app.containers.GitHubSummary.reposTitle',
    defaultMessage: 'Repositories:',
  },
});
