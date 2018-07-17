import React from 'react'
import styled from 'styled-components'


export const Button = styled.button`
  font: unset;
  cursor: pointer;

  min-width: 80px;

  padding-top: 5px;
  padding-bottom: 5px;
  padding-left: 10px;
  padding-right: 10px;

  border: none;
  border-radius: 2px;
  background: #ecececec;
  color: #3c3c3c;

  &:hover {
    background: #e6e6e6e6;
  }
`

export const PrimaryButton = Button.extend`
  background: #4168e1;
  color: #fff;

  &:hover {
    background: #3859bf;
  }
`
