import styled from "styled-components";

export const Item = styled.div`
display: flex;
  justify-content: space-between;
`; 

export const BtnDel = styled.button`
   cursor: pointer;
  width: 120px;
  padding: 4px 12px;
  background-color: white;
  border-radius: 4px;
  border: none;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;

    &:hover, &:focus{
      box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    }
`;