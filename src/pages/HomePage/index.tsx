
import React from 'react'

import {
    Container,
    Title,
    CreateItemList,
    InputSearch,
    AddButton,
    ContainerList,
    ContainerListItem,
    ContainerListItemTitle,
} from './styles'

const HomePage = () => {

  return (
    <Container>
        <Title>Home Page</Title>
        <CreateItemList>
        <InputSearch
            type="text"
            placeholder="Search"
        />
        <AddButton>add</AddButton>
        </CreateItemList>

        <ContainerList>
            <ContainerListItem>
                <ContainerListItemTitle></ContainerListItemTitle>
           </ContainerListItem>
        </ContainerList>
    </Container>
  )
}

export default HomePage
