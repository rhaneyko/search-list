import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    align-items: center;
    justify-content: center;
    
    width: 100%;
    height: 100vh;

    background-color: ${props => props.theme.colors.background};
`;

export const ContainerSearch = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    background-color: #CECECE;

    padding: 10px;
`;

export const Title = styled.h1``;

export const Inputs = styled.div`
    display: flex;
    flex-direction: row;

    
`;

export const InputAddItem = styled.input`
    width: 200px;
    height: 30px;

    padding-left: 10px;
    
    border: 1px solid #000;
    border-radius: 5px;
`;

export const CreateItem = styled.button`
    width: 60px;
    height: 50px;

    margin: 10px;

    border: none;
`;

export const InputSearch = styled.input`
    width: 200px;
    height: 30px;

    padding-left: 10px;

    margin-top: 10px;
    
    border: 1px solid #000;
    border-radius: 5px;
`;

export const SearchButton = styled.button`
    width: 100px;
    height: 30px;

    margin: 10px;
    background-color: #605F5E;
    color: #E2E2E2;

    border: none;
`;

export const ContainerList = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    margin-top: 20px;

    width: 300px;
    height: auto;

    padding: 10px;

    background-color: #CECECE;
`;

export const ContainerListItem = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;

    width: 280px;
    height: 50px;

    margin: 5px;
    padding: 10px;

    border-radius: 5px;

    background-color: #FFF;
`;

export const ContainerListItemTitle = styled.p``;

export const ContainerListItemQuantity = styled.p`
    font-size: 12px;
`;
