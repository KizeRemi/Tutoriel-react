import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: ${props => props.row ? "row" : "column"};
  align-items: ${props => props.centered ? "center" : "normal"};
  margin: 3rem 3rem;
  text-align: ${props => props.centered ? "center" : "normal"};
  background-color: #FFFFFF;
  ${props => props.bordered && "border: 2px solid #E2E2E2;"};
  border-radius: 5px;
`;

export default Container;
