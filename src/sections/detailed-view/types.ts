type FilesObject = {
  [key: string]: {
    filename: string;
    type: string;
    language: string;
    raw_url: string;
    size: number;
    truncated: boolean;
    content: string;
  };
};

type OwnerObject = {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
};

type UserObject = {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
  name: string;
  company: string | null;
  blog: string;
  location: string | null;
  email: string | null;
  hireable: string | null;
  bio: string | null;
  twitter_username: string | null;
  public_repos: number;
  public_gists: number;
  followers: number;
  following: number;
  created_at: string;
  updated_at: string;
};

export type ForkObject = {
  url: string;
  user: UserObject;
  id: string;
  created_at: string;
  updated_at: string;
};

type HistoryUserObject = {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
};

type ChangeStatusObject = {
  total: number;
  additions: number;
  deletions: number;
};

type HistoryObject = {
  user: HistoryUserObject;
  version: string;
  committed_at: string;
  change_status: ChangeStatusObject;
  url: string;
};

export type DetailedViewProps = {
  gist: {
    url: string;
    forks_url: string;
    commits_url: string;
    id: string;
    node_id: string;
    git_pull_url: string;
    git_push_url: string;
    html_url: string;
    files: [FilesObject];
    public: true;
    created_at: string;
    updated_at: string;
    description: string;
    comments: number;
    user: string | number | null;
    comments_url: string;
    owner: OwnerObject;
    forks: [ForkObject];
    history: [HistoryObject];
    truncated: false;
  };
};
