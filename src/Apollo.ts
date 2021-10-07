import {
    ApolloClient,
    InMemoryCache,
    NormalizedCacheObject
} from "@apollo/client";

export const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
    uri: 'https://api.github.com/graphql',
    cache: new InMemoryCache(),
    headers: {
        Authorization: `bearer ${process.env.REACT_APP_GITHUB_KEY}`
    }
});