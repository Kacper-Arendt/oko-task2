import gql from 'graphql-tag';

export interface IRepo {
    id: string,
    name: string,
    url: string,
    forkCount: number,
    description: string
    watchers: { totalCount: number }
    owner: {
        login: string,
        avatarUrl: string,
        url: string,
    },
    stargazers: { totalCount: number },
}

export interface ISearchReposResponse {
    search: {
        repositoryCount: number,
        edges: [IRepo],
    },
}

export const SEARCH_FOR_REPOS = gql`
    query($searchTerm: String!) {
        search(query: $searchTerm, type: REPOSITORY, first: 10) {
            repositoryCount,
            edges {
                node {
                    ... on Repository {
                        id,
                        name,
                        url,
                        description,
                        forkCount,
                        watchers{
                            totalCount
                        },
                        owner {
                            login,
                            avatarUrl,
                            url,
                        },
                        stargazers {
                            totalCount
                        }}
                }
            }
        }
    }
`;