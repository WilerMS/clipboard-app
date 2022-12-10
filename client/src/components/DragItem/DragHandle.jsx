import React from "react";
import styled from 'styled-components'
import { FiMenu } from 'react-icons/fi'

const DragIconWrapper = styled.div`
  display: inline-block;
  svg {
    width: 20px;
    height: 20px;
    vertical-align: middle;
    padding-right: 1rem;
  }
`

export default function DragHandle(props) {
  return (
    <DragIconWrapper {...props}>
      <FiMenu />
    </DragIconWrapper>
  );
}
