import styled from 'styled-components'
import { FlexContainer } from './common';



const LeftContainer = styled(FlexContainer)`
border-bottom: 1px solid lightgrey;
  align-items: center;
`;


export default function Left(props) {
  return (
      <LeftContainer>{props.children}</LeftContainer>
  );
}
