import {FaSearch} from "react-icons/fa";
import React, { useState } from "react";
import styled from "styled-components";

const Header = styled.header`
  position: fixed;
  width: 100%;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #4A6D8C;
`

const Form = styled.form`
  width: 15rem;
  height: 70%;
  display: flex;
  flex-direction: row;
`

const Input = styled.input`
  width: 100%;
  padding: 1rem 3.5rem 1rem 1.5rem;
  border: none;
  border-radius: 10rem;
  outline: none;
  cursor: pointer;
`

const Button = styled.button`
  background: transparent;
  border: none;
  outline: none;
  margin-left: -2rem;
  cursor: pointer;
`

export const SearchBar = () => {
    const [repoName, setRepoName] = useState<string>('');

    const searchRepos = (e: React.SyntheticEvent): void => {
        e.preventDefault();
        console.log(repoName)
        setRepoName('');
    };

    return (
        <Header>
            <Form>
                <Input
                    type="text"
                    value={repoName}
                    onChange={(e) => setRepoName(e.target.value)}
                />
                <Button
                    type='submit'
                    disabled={repoName!.length < 3}
                    onClick={searchRepos}
                >
                    <FaSearch/>
                </Button>
            </Form>
        </Header>
    )
}