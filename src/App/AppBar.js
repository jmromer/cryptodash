import React from 'react';
import styled, { css } from 'styled-components';
import { AppContext } from './AppProvider';

const Logo = styled.div`
  font-size: 1.5rem;
`;

const Bar = styled.div`
  margin-bottom: 40px;
  display: grid;
  grid-template-columns: 180px auto 100px 100px;
`;

const ControlButtonElem = styled.div`
  cursor: pointer;
  ${props =>
    props.active &&
    css`
      text-shadow: 0px 0px 35px #03ff03;
    `}
`;

function toProperCase (lower) {
  return lower.charAt(0).toUpperCase() + lower.substr(1);
}

function ControlButton ({ name }) {
  return (
    <AppContext.Consumer>
      {({ page, setPage }) => (
        <ControlButtonElem active={page === name} onClick={() => setPage(name)}>
          {toProperCase(name)}
        </ControlButtonElem>
      )}
    </AppContext.Consumer>
  );
}

export default function () {
  return (
    <Bar>
      <Logo>CryptoDash</Logo>
      <div></div>
      <ControlButton name='dashboard' active />
      <ControlButton name='settings' />
    </Bar>
  );
}
