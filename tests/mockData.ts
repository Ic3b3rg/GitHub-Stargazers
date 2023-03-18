import { OwnerRepoResponse, StargazersUser } from "../types/apiService";

export const mockedOwnerRepoResponse: OwnerRepoResponse = {
    id: 123,
    node_id: "abc",
    name: "mocked_repo",
    full_name: "mocked_owner/mocked_repo",
    private: false,
    owner: {
        login: "mocked_owner",
        id: 456,
        node_id: "def",
        avatar_url: "https://example.com/avatar",
        gravatar_id: "",
        url: "https://example.com/mocked_owner",
        html_url: "https://example.com/mocked_owner",
        followers_url: "https://example.com/mocked_owner/followers",
        following_url: "https://example.com/mocked_owner/following{/other_user}",
        gists_url: "https://example.com/mocked_owner/gists{/gist_id}",
        starred_url: "https://example.com/mocked_owner/starred{/owner}{/repo}",
        subscriptions_url: "https://example.com/mocked_owner/subscriptions",
        organizations_url: "https://example.com/mocked_owner/orgs",
        repos_url: "https://example.com/mocked_owner/repos",
        events_url: "https://example.com/mocked_owner/events{/privacy}",
        received_events_url: "https://example.com/mocked_owner/received_events",
        type: "User",
        site_admin: false
    },
    html_url: "https://example.com/mocked_owner/mocked_repo",
    description: "This is a mocked repository.",
    fork: false,
    url: "https://api.example.com/repos/mocked_owner/mocked_repo",
    forks_url: "https://api.example.com/repos/mocked_owner/mocked_repo/forks",
    keys_url: "https://api.example.com/repos/mocked_owner/mocked_repo/keys{/key_id}",
    collaborators_url: "https://api.example.com/repos/mocked_owner/mocked_repo/collaborators{/collaborator}",
    teams_url: "https://api.example.com/repos/mocked_owner/mocked_repo/teams",
    hooks_url: "https://api.example.com/repos/mocked_owner/mocked_repo/hooks",
    issue_events_url: "https://api.example.com/repos/mocked_owner/mocked_repo/issues/events{/number}",
    events_url: "https://api.example.com/repos/mocked_owner/mocked_repo/events",
    assignees_url: "https://api.example.com/repos/mocked_owner/mocked_repo/assignees{/user}",
    branches_url: "https://api.example.com/repos/mocked_owner/mocked_repo/branches{/branch}",
    tags_url: "https://api.example.com/repos/mocked_owner/mocked_repo/tags",
    blobs_url: "https://api.example.com/repos/mocked_owner/mocked_repo/git/blobs{/sha}",
    git_tags_url: "https://api.example.com/repos/mocked_owner/mocked_repo/git/tags{/sha}",
    git_refs_url: "https://api.example.com/repos/mocked_owner/mocked_repo/git/refs{/sha}",
    trees_url: "https://api.example.com/repos/mocked_owner/mocked_repo/git/trees{/sha}",
    statuses_url: "https://api.example.com/repos/mocked_owner/mocked_repo/statuses/{sha}",
    languages_url: "https://api.example.com/repos/mocked_owner/mocked_repo/languages",
    stargazers_url: "https://api.example.com/repos/mocked_owner/mocked_repo/stargazers",
    contributors_url: "https://api.example.com/repos/mocked_owner/mocked_repo/contributors",
    subscribers_url: "https://api.example.com/repos/mocked",
    subscription_url: "",
    commits_url: "",
    git_commits_url: "",
    comments_url: "",
    issue_comment_url: "",
    contents_url: "",
    compare_url: "",
    merges_url: "",
    archive_url: "",
    downloads_url: "",
    issues_url: "",
    pulls_url: "",
    milestones_url: "",
    notifications_url: "",
    labels_url: "",
    releases_url: "",
    deployments_url: "",
    created_at: new Date(),
    updated_at: new Date(),
    pushed_at: new Date(),
    git_url: "",
    ssh_url: "",
    clone_url: "",
    svn_url: "",
    size: 0,
    stargazers_count: 0,
    watchers_count: 0,
    language: "",
    has_issues: false,
    has_projects: false,
    has_downloads: false,
    has_wiki: false,
    has_pages: false,
    has_discussions: false,
    forks_count: 0,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: {
        key: "",
        name: "",
        spdx_id: "",
        url: "",
        node_id: "",
    },
    allow_forking: false,
    is_template: false,
    web_commit_signoff_required: false,
    topics: [],
    visibility: "",
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: "",
    network_count: 0,
    subscribers_count: 0
}
export const stargazersUserMock: StargazersUser = {
    login: "johndoe",
    id: 123,
    node_id: "abc123",
    avatar_url: "https://www.example.com/avatar.jpg",
    gravatar_id: "",
    url: "https://api.github.com/users/johndoe",
    html_url: "https://github.com/johndoe",
    followers_url: "https://api.github.com/users/johndoe/followers",
    following_url: "https://api.github.com/users/johndoe/following{/other_user}",
    gists_url: "https://api.github.com/users/johndoe/gists{/gist_id}",
    starred_url: "https://api.github.com/users/johndoe/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/johndoe/subscriptions",
    organizations_url: "https://api.github.com/users/johndoe/orgs",
    repos_url: "https://api.github.com/users/johndoe/repos",
    events_url: "https://api.github.com/users/johndoe/events{/privacy}",
    received_events_url: "https://api.github.com/users/johndoe/received_events",
    type: "User",
    site_admin: false
  };
  