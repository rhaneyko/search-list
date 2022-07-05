
import React, { useState } from 'react'

import {
    Container,
    ContainerSearch,
    Title,
    CreateItemList,
    Inputs,
    InputSearch,
    SearchButton,
    ContainerList,
    ContainerListItem,
    ContainerListItemTitle,
    ContainerListItemQuantity,
} from './styles'

const HomePage: React.FC = () => {
    const listItems = [
        {
            itemName: 'Leite',
            itemQuantity: '3',
        },
        {
            itemName: 'Suco',
            itemQuantity: '5',
        },
        {
            itemName: 'Pão',
            itemQuantity: '5',
        },
        {
            itemName: 'Açucar',
            itemQuantity: '1',
        },
        {
            itemName: 'Trigo',
            itemQuantity: '2',
        },
        {
            itemName: 'Creme de Leite',
            itemQuantity: '4',
        },
        {
            itemName: 'Biscoito',
            itemQuantity: '6',
        },
        {
            itemName: 'Café',
            itemQuantity: '5',
        },
        {
            itemName: 'Balinha',
            itemQuantity: '10',
        }
    ]

  const [ itemList, setItemList ] = useState<{
    itemName: string,
    itemQuantity: string,

  }[] | undefined>(listItems)
  const [ text, setText ] = useState<string>('')

  const searchOnClick = () => {
    const findItems = listItems && listItems?.length > 0 ?
    listItems?.filter((u) => u?.itemName === text)
    : undefined

    console.log(findItems)

    setItemList(findItems)
  }
    
  
  return (
    <Container>
        <ContainerSearch>
        <Title>Home Page</Title>
        <CreateItemList
        >
          <Inputs>
            <InputSearch
                type='text'
                placeholder='Search'
                value={text}
                onChange={(e) => {
                  setText(e.target.value)
                  setItemList(listItems)
                }}
            />
            <SearchButton 
            disabled={text === ''}
            onClick={searchOnClick}>Pesquisar</SearchButton>
              
          </Inputs>
        </CreateItemList>
        <ContainerList>
          {itemList && itemList?.length === 0 && <p>Nenhum item encontrado</p>}
          {itemList && itemList?.length > 0 && listItems?.map((itemName) => (
            <ContainerListItem>
              <ContainerListItemTitle>{itemName?.itemName}</ContainerListItemTitle>
              <ContainerListItemQuantity>{itemName?.itemQuantity}</ContainerListItemQuantity>

            </ContainerListItem>
          ))}
          
        </ContainerList>
        </ContainerSearch>
    </Container>
  )
}

export default HomePage
