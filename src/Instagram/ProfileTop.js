import React from 'react';
import styled from 'styled-components';
import {rgba} from 'polished';
import avatar from 'assets/avatar.jpeg'

const StyledWrapper = styled.div``

const StyledAvatarWrapper = styled.div`
`
const StyledAvatar = styled.img``

export default function ProfileTop() {
  return (
    <StyledWrapper>
    <StyledAvatarWrapper>
      <StyledAvatar src={avatar}/>
    </StyledAvatarWrapper>
    </StyledWrapper>
  );
}
