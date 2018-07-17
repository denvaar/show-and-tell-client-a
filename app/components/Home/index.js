import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import teamPhoto from 'images/lightbulbs.jpg'
import { Heading } from 'components/Ui'


const Wrapper = styled.div`
  margin: 2rem;

`

const PageTitleWrapper = styled.div`
  font-size: 40px;
  text-align: center;
  padding-top: 1rem;
`

const TeamImage = styled.div`
  background-image: url(${teamPhoto});
  background-size: cover;
  height: 400px;
`

const ImageOverlay = styled.div`
  background-color: rgba(58, 95, 59, 0.68);
  color: #ffffff;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`

const CardLink = styled(Link)`
  margin: 10px;
  color: #5bb89e;
  text-decoration: none;
`

const Home = ({ }) => {
  return (
    <Wrapper>
      <Heading>{'Show and Tell'}</Heading>
      <h3>{'Friday\'s 2:00 PM'}</h3>
    </Wrapper>
  )
}

export default Home
