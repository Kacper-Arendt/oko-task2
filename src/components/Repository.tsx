import styled from "styled-components";
import {IRepo} from "../Queries";
import {GoStar, GoRepoForked, GoEye} from "react-icons/go";

const StyledRepository = styled.div`
  width: 35rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3, min-content);
  grid-template-areas: 
    "name name  name user"
    "description description description user"
    "stars watchers forks .";
  padding: .5rem;
  gap: 1rem;
  place-items: center;
  border-radius: 5px;
  box-shadow: rgba(99, 99, 99, 0.2) 0 2px 8px 0;
  background-color: #BFBDBA;

  p {
    text-align: center;
  }
`

const Name = styled.a`
  grid-area: name;
  place-self: start;
  margin: 5px 0 0 5px;
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: bold;
  color: black;
  cursor: pointer;
  white-space: nowrap;
  transition: scale .3s;
  
  :hover{
    transform: scale(1.02);
  }
  :active{
    transform: scale(.95);
  }
`

const StyledP = styled.p`
  width: 95%;
  border-radius: 3px;
  background-color: #A3BF3B;
  padding: 3px 0;

  svg {
    margin-right: 5px;
  }
`

const Stars = styled(StyledP)`
  grid-area: stars;
`
const Watchers = styled(StyledP)`
  grid-area: watchers;
`
const Forks = styled(StyledP)`
  grid-area: forks;
`

const Description = styled.span`
  grid-area: description;
  overflow: hidden;
  place-self: start;
  text-overflow: ellipsis;
  max-width: 25rem;
  max-height: 5rem;
`

const User = styled.div`
  grid-area: user;
  display: flex;
  flex-direction: column;
  align-self: start;
  align-items: center;

  img {
    width: 60%;
    height: auto;
    margin-bottom: 1rem;
  }

  p {
    font-weight: bold;
  }
`

interface IProps {
    repo: IRepo,
}

export const Repository = (props: IProps) => {
    const {id, url, description, forkCount, name, watchers, owner: {avatarUrl, login}, stargazers} = props.repo;

    return (
        <StyledRepository key={id}>
            <Name href={url} target='_blank'>{name}</Name>
            <Description>{description}</Description>
            <User>
                <img src={avatarUrl} alt="Repository owner avatar"/>
                <p>{login}</p>
            </User>
            <Stars><GoStar/>{stargazers.totalCount}</Stars>
            <Watchers><GoEye/>{watchers.totalCount}</Watchers>
            <Forks><GoRepoForked/>{forkCount}</Forks>
        </StyledRepository>
    )
}