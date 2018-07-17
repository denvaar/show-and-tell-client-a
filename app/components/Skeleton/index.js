import React from 'react'
import styled from 'styled-components'


const Skeleton = styled.div`
  margin: 5px;
  background: #d2d2d26b;
  border-radius: ${props => props.borderRadius};
  width: ${props => props.width};
  height: ${props => props.height};

`

Skeleton.defaultProps = {
  borderRadius: '12px',
  width: '70px',
  height: '15px'
}

export default Skeleton
