
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
    itemName: string;
    itemQuantity: number;
  }[] | undefined>(listItems)
  const [ text, setText ] = useState<string>('')

  const searchOnClick = () => {
    const findItems =
      itemList && itemList?.length > 0
      ? itemList?.filter((u) => u?.itemName === text)
      : undefined
    console.log(findItems)

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
                   setItemList(listItems)
                }}
            />
            <SearchButton 
            disabled={!text}
            onClick={searchOnClick}>Pesquisar</SearchButton>
          </Inputs>
        <ContainerList>
        {itemList && itemList?.length === 0 && (
          <p>No User Found</p>
        )}
        {itemList && itemList?.length > 0 && (
          itemList?.map((item) => (
            <ContainerListItem key={item.itemName}>
              <ContainerListItemTitle>{item.itemName}</ContainerListItemTitle>
              <ContainerListItemQuantity><strong>Quantidade: </strong>{item.itemQuantity}</ContainerListItemQuantity>
            </ContainerListItem>
          ))
        )}
        </ContainerList>
        </ContainerSearch>
    </Container>
  )
}

export default HomePage
