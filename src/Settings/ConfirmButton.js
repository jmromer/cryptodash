import React from 'react';
import styled from 'styled-components';

import { AppContext } from '../App/AppProvider';
import { fontSize1, greenBoxShadow, color3 } from '../Shared/Styles';

const ConfirmButtonStyled = styled.div`
  color: ${color3};
  cursor: pointer;
  margin: 20px;
  padding: 5px;
  text-align: center;
  width: 100%;
  ${fontSize1};
  &:hover {
    ${greenBoxShadow};
  }
`;

export const CenterDiv = styled.div`
  display: grid;
  justify-content: center;
`;

export default function () {
  return (
    <AppContext.Consumer>
      {({ confirmFavorites }) => (
        <CenterDiv>
          <ConfirmButtonStyled onClick={confirmFavorites}>
            Confirm Favorites
          </ConfirmButtonStyled>
        </CenterDiv>
      )}
    </AppContext.Consumer>
  );
}
