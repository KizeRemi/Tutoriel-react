import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: ${props => props.row ? "row" : "column"};
  align-items: ${props => props.centered ? "center" : "normal"};
  margin: 3rem 0;
`;

export default Container;
