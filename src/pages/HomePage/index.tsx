
import React, { useState } from 'react'

import {
    Container,
    ContainerSearch,
    Title,
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
            itemQuantity: 3,
        },
        {
            itemName: 'Suco',
            itemQuantity: 5,
        },
        {
            itemName: 'Pão',
            itemQuantity: 5,
        },
        {
            itemName: 'Açucar',
            itemQuantity: 1,
        },
        {
            itemName: 'Trigo',
            itemQuantity: 2,
        },
        {
            itemName: 'Creme de Leite',
            itemQuantity: 4,
        },
        {
            itemName: 'Biscoito',
            itemQuantity: 6,
        },
        {
            itemName: 'Café',
            itemQuantity: 5,
        },
        {
            itemName: 'Balinha',
            itemQuantity: 10,
        }
    ]

  const [ itemList, setItemList ] = useState<{
    itemName: string,
    itemQuantity: number,
  }[] | undefined>(listItems)
  const [ text, setText ] = useState<string>('')

  const searchOnClick = () => {
    const findItems =
      itemList && itemList?.length > 0
      ? itemList?.filter((u) => u?.itemName === text)
      : undefined

    setItemList(findItems)
  }
    
  
  return (
    <Container>
        <ContainerSearch>
        <Title>Home Page</Title>
          <Inputs>
            <InputSearch
                type='text'
                placeholder='Search'
                value={text}
                onChange={(e) => {
                  setText(e.target.value)
                  setItemList(itemList)
                }}
            />
            <SearchButton 
            disabled={!text}
            onClick={searchOnClick}>Pesquisar</SearchButton>
          </Inputs>
        <ContainerList>
          {itemList && itemList?.length === 0 && <p>Nenhum item encontrado</p>}
          {itemList && 
          itemList?.length > 0 && 
          listItems?.map((itemName) => (
            <ContainerListItem>
              <ContainerListItemTitle>{itemName?.itemName}</ContainerListItemTitle>
              <ContainerListItemQuantity>Quantidade: {itemName?.itemQuantity}</ContainerListItemQuantity>

            </ContainerListItem>
          ))}
          
        </ContainerList>
        </ContainerSearch>
    </Container>
  )
}

export default HomePage
