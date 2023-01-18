import styled from 'styled-components'

const Button = styled.button`
  top: 0;
  left: 0;
  transition: all .15s linear 0s;
  position: relative;
  display: inline-block;
  padding: 5px 15px;
  background-color: ${props => props.disabled ? 'grey': '#6415ff'};
  cursor: pointer;
  color: #FFF;
  letter-spacing: 1px;
  margin: 0 20px;
  box-shadow: -6px 6px 0 #404040;
  text-decoration: none;
  width: 280px;
  
  &:hover, &:disabled {
    top: 3px;
    left: -3px;
    box-shadow: -3px 3px 0 #404040;
    
    &::after {
      top: 1px;
      left: -2px;
      width: 4px;
      height: 4px;
    }
    
    &::before {
      bottom: -2px;
      right: 1px;
      width: 4px;
      height: 4px;
    }
  }
  
  &::after {
    transition: all .15s linear 0s;
    content: '';
    position: absolute;
    top: 2px;
    left: -4px;
    width: 8px;
    height: 8px;
    background-color: #404040;
    transform: rotate(45deg);
    z-index: -1;
    
  }
  
  &::before {
    transition: all .15s linear 0s;
    content: '';
    position: absolute;
    bottom: -4px;
    right: 2px;
    width: 8px;
    height: 8px;
    background-color: #404040;
    transform: rotate(45deg);
    z-index: -1;
  }
`

export default function RenderButton({label, onClick, disabled}) {
  return (
      <Button onClick={onClick} disabled={disabled}>{label}</Button>
  );
}
