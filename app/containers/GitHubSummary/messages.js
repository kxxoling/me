/*
 * GitHubSummary Messages
 *
 * This contains all the text for the GitHubSummary component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  forkedFrom: {
    id: 'app.containers.GitHubSummary.forkedFrom',
    defaultMessage: 'Forked from',
  },
  starredBy: {
    id: 'app.containers.GitHubSummary.starredBy',
    defaultMessage: 'Starred by',
  },
  issuesCount: {
    id: 'app.containers.GitHubSummary.issuesCount',
    defaultMessage: 'Unresolved issues',
  },
  prsTitle: {
    id: 'app.containers.GitHubSummary.prsTitle',
    defaultMessage: 'Pull Requests:',
  },
  reposTitle: {
    id: 'app.containers.GitHubSummary.reposTitle',
    defaultMessage: 'Repositories:',
  },
  title: {
    id: 'app.components.GitHubSummary.title',
    defaultMessage: 'GitHub Summary | Kane Blueriver',
  },
  description: {
    id: 'app.components.GitHubSummary.description',
    defaultMessage: 'It\'s GitHub Summary page!',
  },
});
