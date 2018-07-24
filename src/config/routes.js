const apiRoute = '/api';

const routes = {
  Home: '/',
  Test: '/test',
  Auth: '/auth',
  Dashboard: '/dashboard',
  InviteAuth: '/invite/auth',
};

const authRoutes = {
  Register: '/register',
  Login: '/login',
  GitHub: '/github/authenticate/:code',
  WakaTime: '/wakatime/authenticate/:code',
};

const organisationRoutes = {
  Setup: '/setup',
  Update: '/update/:id',
  Get: '/:id',
  List: '/list',
  Invite: '/invite',
};

const dashboardRoutes = {
  BasicSetup: '/setup-1',
  OAuthSetup: '/setup-2',
  Organisation: '/organisation',
  WakaTime: `${apiRoute}/wakatime`,
  GitHub: `${apiRoute}/github`,
  User: '/user',
};

const userRoutes = {
  Get: '/:id',
};

const WakaTimeApiUrl = 'https://wakatime.com/api/v1';

const wakatimeRoutes = {
  Projects: '/users/current/projects',
  ProjectCommits: '/users/current/projects/:project/commits',
  Durations: '/users/current/durations',
  CurrentUser: '/users/current',
};

const wakatimeApiRoutes = {
  Projects: `${WakaTimeApiUrl}/users/current/projects`,
  Durations: `${WakaTimeApiUrl}/users/current/durations`,
  CurrentUser: `${WakaTimeApiUrl}/users/current`,
};

const GitHubApiUrl = 'https://api.github.com';

const githubRoutes = {
  Issues: '/user/issues',
  Repos: '/user/repos',
  RepoPullRequests: '/user/repos/:owner/:repo/pulls',
};

const githubApiRoutes = {
  Issues: `${GitHubApiUrl}/user/issues`,
  Repos: `${GitHubApiUrl}/user/repos`,
  RepoPullRequests: `${GitHubApiUrl}/repos`,
};

export {
  authRoutes,
  dashboardRoutes,
  organisationRoutes,
  wakatimeRoutes,
  wakatimeApiRoutes,
  githubRoutes,
  githubApiRoutes,
  userRoutes,
};

export default routes;
