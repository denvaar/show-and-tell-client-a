import React from 'react'
import styled from 'styled-components'


const Text = styled.div`
  text-align: center;
  color: #ddd;
  font-size: 2em;
`

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;

  background: #ffffff;
`

const Spinner = styled.div`
  margin: 100px auto;
  width: 70px;
  height: 70px;
  position: relative;
  text-align: center;

  -webkit-animation: sk-rotate 1.0s infinite linear;
  animation: sk-rotate 1.0s infinite linear;

  @-webkit-keyframes sk-rotate { 100% { -webkit-transform: rotate(360deg) }}
  @keyframes sk-rotate { 100% { transform: rotate(360deg); -webkit-transform: rotate(360deg) }}

  @-webkit-keyframes sk-bounce {
    0%, 100% { -webkit-transform: scale(0.0) }
    50% { -webkit-transform: scale(1.0) }
  }

  @keyframes sk-bounce {
    0%, 100% {
      transform: scale(0.0);
      -webkit-transform: scale(0.0);
    } 50% {
      transform: scale(1.0);
      -webkit-transform: scale(1.0);
    }
  }
`

const Dot = styled.div`
  width: 60%;
  height: 60%;
  display: inline-block;
  position: absolute;
  top: 0;
  border-radius: 100%;

  background-color: royalblue;

  -webkit-animation: sk-bounce 2.0s infinite ease-in-out;
  animation: sk-bounce 2.0s infinite ease-in-out;
`

const OtherDot = Dot.extend`
  top: auto;
  bottom: 0;
  -webkit-animation-delay: -1.0s;
  animation-delay: -1.0s;
`

const LoadingOverlay = ({ }) => (
  <Wrapper>
    <Spinner>
      <Dot />
      <OtherDot />
    </Spinner>
    <Text>{'Loading...'}</Text>
  </Wrapper>
)

export default LoadingOverlay
