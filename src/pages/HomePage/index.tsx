
import React, { FormEvent, useState } from 'react'

import {
    Container,
    ContainerSearch,
    Title,
    CreateItemList,
    Inputs,
    InputAddItem,
    CreateItem,
    InputSearch,
    AddButton,
    ContainerList,
    ContainerListItem,
    ContainerListItemTitle,
} from './styles'

import {AiOutlinePlusCircle, AiOutlineSearch } from 'react-icons/ai'
import { isTemplateSpan } from 'typescript';

interface ItemProps {
    id: number;
    title: string;
}

const HomePage = () => {
    const listItems = [ 'Carne', 'Leite', 'Água', 'Ovo', 'Sabão', 'Trigo', 'Feijão', 'Óleo', 'Arroz' ]
  return (
    <Container>
        <ContainerSearch>
        <Title>Home Page</Title>
        <CreateItemList
        >
          <Inputs>
            <InputSearch
                type="text"
                placeholder="Search"

            />
          </Inputs>

        
        </CreateItemList>
        <ContainerList>
            {listItems.map(item => (
                <ContainerListItem key={item}>
                    <ContainerListItemTitle>{item}</ContainerListItemTitle>
                </ContainerListItem>
            ))}

        </ContainerList>

        </ContainerSearch>
    </Container>
  )
}

export default HomePage
