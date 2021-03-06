import styled from "styled-components";
import {useQuery} from "@apollo/react-hooks";
import {ISearchReposResponse, SEARCH_FOR_REPOS} from "../Queries";
import {Repository} from "./Repository";
import {useEffect, useState} from "react";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  margin: 6rem 0 0;
`

interface IProps {
    searchTerm: string
}

export const Repositories = (props: IProps) => {
    const [searchRepo, setSearchRepo] = useState('');
    const {data, loading, error} = useQuery<ISearchReposResponse>(SEARCH_FOR_REPOS,
        {variables: {searchTerm: searchRepo}});

    useEffect(() => {
        setTimeout(function () {
            setSearchRepo(props.searchTerm)
        }, 1000);
    }, [props.searchTerm])

    if (loading) return <Wrapper>Loading...</Wrapper>

    if (error) return <Wrapper>{error.message}</Wrapper>

    if (!data!.search.repositoryCount) return <div>There are no such repositories!</div>

    return (
        <Wrapper>
            {data!.search.repositoryCount && <p>Total: {data!.search.repositoryCount}</p>}
            {data!.search.edges.map((repo: any) => {
                return <Repository key={repo.node.id} repo={repo.node}/>
            })}
        </Wrapper>
    )
}