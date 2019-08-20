import styled from 'styled-components';

const Button = styled.button`
  border-radius: 50px;
  background-color: #F9F9F9;
  display: flex;
  align-items: center;
  margin: 0 1rem;
  ${props => props.collapse && "transform: rotate(180deg)"};
`;

export default Button;
