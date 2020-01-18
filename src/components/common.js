import styled from 'styled-components';

export const SectionLabel = styled.div`
  text-align: center;
  width: 100%;
  height: 30px;
  line-height: 30px;
  
  font-size: 16px;
`;

export const InformationLabel = styled.div`
  text-align: center;
  width: 100%;
  height: 24px;
  line-height: 24px;
  
  font-size: 12px;
`;

export const Button = styled.button`
  height: 30px;
  width: 100px;
  
  cursor: ${(props) => props.active ? 'pointer' : 'default' };
  border: ${(props) => props.active ? '1px solid #4E82D7' : '1px solid darkgrey' };
  border-radius: 4px;
  background-color: ${(props) => props.active ? '#5b9dff' : 'grey' };
  color: white;
`;
