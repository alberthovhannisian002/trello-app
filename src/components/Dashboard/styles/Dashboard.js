import styled from 'styled-components';
import { Layout } from 'antd';

const WhiteLayout = styled(Layout)`
    height: 100vh;
    width: 100vw;
    overflow-x: scroll;
    padding: 50px;
    display: flex;
    flex-direction: row;
`;

const ModalButtonsContainer = styled.div`
    margin-top: 10px;
`;

const ListsContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin-right: 10px;
`;

export { 
    ModalButtonsContainer,
    WhiteLayout,
    ListsContainer,
}
