import styled from 'styled-components';
import { Input, Button } from 'antd';

const ColumnContainer = styled.div`
    width: 300px;
    height: 90vh;
    overflow-y: scroll; 
    overflow-x: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 10px;
    background-color: #ebecf0;
    border-radius: 3px;
    box-sizing: border-box;
    max-height: 100%;
    white-space: normal;
    -webkit-box-shadow: 5px 4px 15px 0px rgba(0,0,0,0.65); 
    box-shadow: 5px 4px 15px 0px rgba(0,0,0,0.65);
    ::-webkit-scrollbar {
        width: 0px;
      }
      ::-webkit-scrollbar-thumb {
        border-radius: 4px;
        background-color: rgba(0, 0, 0, .5);
        -webkit-box-shadow: 0 0 1px rgba(255, 255, 255, .5);
      }
      position: relative;
`;

const ListNameContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 5px;
    position: sticky;
    top: 0;
    left: 0;
    background-color: #ebecf0;
`;

const StyledColumnInput = styled(Input)`
    background: transparent;
    border: none;
    font-weight: bold;
    font-size: 1rem;
    cursor: pointer;
    &&:hover {
        border-bottom: 1px solid black;
        outline: none;
    }
`;

const FlexRowCentered = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const StyledBottomButton = styled(Button)`
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    margin: 0;
`;

export {
    ColumnContainer,
    ListNameContainer,
    StyledColumnInput,
    FlexRowCentered,
    StyledBottomButton,
}
