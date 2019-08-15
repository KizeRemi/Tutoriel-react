import styled from 'styled-components';

const TitlePage = styled.h1`
  text-align: center;
  color: #3B3A4E;
  font-size: 42px;
  text-transform: ${props => props.uppercase ? "uppercase" : "none"};
`;

export default TitlePage;
