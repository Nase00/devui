import styled from 'styled-components';

const Toolbar = styled.div`
  display: flex;
  flex-shrink: 0;
  box-sizing: border-box;
  width: 100%;
  padding: 5px;
  background-color: ${props => props.theme.base01};
  text-align: center;
  position: relative;
  ${({ borderPosition, theme }) =>
    borderPosition && `border-${borderPosition}: 1px solid ${theme.base02};`
  }
  
  & > div {
    margin: 0 1px;
  }
  
  & button {
    border-radius: 0;
    white-space: nowrap;
    box-shadow: none !important;
  }

  & > .Select {
    position: static;
    text-align: left;
    margin: 0 1px;
    flex-grow: 1;
    
    .Select-control {
      cursor: pointer;
      border-radius: 0 !important;
      text-align: center;
    }

    .Select-menu-outer {
      margin-top: 5px;
    }
  }
  & > .Select.is-focused > .Select-control {
    text-align: left;
  }
`;

export default Toolbar;
