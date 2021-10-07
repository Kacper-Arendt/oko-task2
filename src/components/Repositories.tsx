import styled from "styled-components";
import {useQuery} from "@apollo/react-hooks";
import {SEARCH_FOR_REPOS} from "../Queries";
import {useState} from "react";

const Wrapper = styled.div`
  margin: 4rem 0 0;
  text-align: center;

`

export const Repositories = () => {
    const [searchTerm, setSearchTerm] = useState<string>('');
    const {data, loading, error} = useQuery(SEARCH_FOR_REPOS, {variables: {searchTerm}})

    if (loading) return <div>Loading...</div>

    if (error) return <div>{error}</div>

    if (!data.search.repositoryCount) return <div>There are no such repositories!</div>

    return (
        <Wrapper>

        </Wrapper>
    )
}