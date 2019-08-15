import styled from 'styled-components';

const Number = styled.div`
  background: linear-gradient(45deg, #F9BD4F, #EEA756);
  border-radius: 25px;   
  color: #FFFFFF;
  font-size: 24px;
  font-weight: bold;
  max-width: 130px;
  padding: 0.5rem ${props => props.compact ? "1rem" : "2rem"};
  text-align: center;
  margin-right: 1rem;
`;

export default Number;
