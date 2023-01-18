import styled, { keyframes } from 'styled-components'
import { FlexContainer } from './common';


const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const RightContainer = styled(FlexContainer)`
  animation: ${fadeIn} 0.5s ease-in;
  border-bottom: 1px solid lightgrey;
  align-items: center;
`;


export default function Right({children}) {
  return (
      <RightContainer>{children}</RightContainer>
  );
}
