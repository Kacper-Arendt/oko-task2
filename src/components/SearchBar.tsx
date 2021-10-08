import {FaRegTrashAlt} from "react-icons/fa";
import React from "react";
import styled from "styled-components";

const Header = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #4A6D8C;
`

const Form = styled.form`
  width: 20rem;
  height: 60%;
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
`;

interface IProps {
    callback: (value: string) => void;
}

export const SearchBar = (props: IProps) => {

    function handleTextChange(value: string) {
        if (value.length >= 3) props.callback(value);
    }

    return (
        <Header>
            <Form>
                <Input
                    type="text"
                    onChange={(e) => handleTextChange(e.target.value)}
                />
                <Button onClick={() => handleTextChange('')} type='reset'>
                    <FaRegTrashAlt/>
                </Button>
            </Form>
        </Header>
    )
}