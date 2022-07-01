import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    align-items: center;
    justify-content: center;

    height: 100vh;

    background-color: ${props => props.theme.colors.background};
`;

export const Title = styled.h1``;

export const CreateItemList = styled.div``;

export const InputSearch = styled.input`
    width: 200px;
    height: 30px;

    padding-left: 10px;
    
    border: 1px solid #000;
    border-radius: 5px;

`;
export const AddButton = styled.button`
    width: 60px;
    height: 50px;

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
    height: 300px;

    background-color: red;

`;
export const ContainerListItem = styled.ul``;
export const ContainerListItemTitle = styled.li``;
