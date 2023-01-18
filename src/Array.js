import styled from 'styled-components'
import LeftContainer from './components/Left'
import RightContainer from './components/Right'
import Button from './components/Button'
import RenderBox from './components/Box'
import { useState } from 'react'

const ArrayContainer = styled.div`
  display: flex;  
  margin-bottom: 15px;
`;

function renderData(data, textOnly){
  return (
    data.map((s, i) => {
      return (<RenderBox textOnly={textOnly} key={"push-"+i} content={s.v} bgColor={s.bgColor} />)
    })
  )
}

export default function DemoArray({id, buttonLabel ="", leftData, rightData, textOnly = false}) {

  const [ showResult, setShowResult ] = useState(false)
  const [ isButtonDisabled, setIsButtonDisabled ] = useState(false)

  const showRightContainer = () =>{
    setShowResult(true);
    setIsButtonDisabled(true);
  }

  return (
    <ArrayContainer id={id}>
      <LeftContainer>
        {renderData(leftData)}
      </LeftContainer>
      <Button disabled={isButtonDisabled} onClick={showRightContainer} label={buttonLabel}></Button>
      {showResult && 
        <RightContainer>
          {renderData(rightData, textOnly)}
        </RightContainer>
      }
    </ArrayContainer>
  );
}
