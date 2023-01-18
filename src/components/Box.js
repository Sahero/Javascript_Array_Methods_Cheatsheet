import styled from 'styled-components'

const Box = styled.div`
  background: ${props => props.bgColor || "black"};
  color: #fff;
  width: 20px;
  height: 20px;
  margin: 0px;
  padding: 5px;
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  transform:
    perspective(750px)
    translate3d(0px, 0px, -250px)
    rotateX(27deg);
  border: 5px solid #e6e6e6;
  box-shadow: 0 70px 40px -20px rgba(0, 0, 0, 0.2);
  transition: 0.4s ease-in-out transform;
  cursor: default;
  &:hover {
    transform: translate3d(0px, 0px, -250px);
  }
`
const Text = styled.p`
  background: ${props => props.bgColor || "white"};
  color: grey;
  padding: 5px;
  margin: 0px;
  font-size: 20px;
  font-family: monospace;
  width: 20px;
  height: 20px;
`
export default function RenderBox({ content, bgColor, textOnly }) {
  return (
    textOnly ?
      <Text>{content}</Text >
      :
      <Box bgColor={bgColor}>{content}</Box>

  );
}
