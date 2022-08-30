import styled from 'styled-components';
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';
import { Color, S1, BODY } from '../../ui';

export const StyledTabs = styled(Tabs)`
  ${S1};
  width: 100%;
  margin-top: 72px;
`;

export const StyledTabList = styled(TabList).attrs(() => ({
  tabsrole: 'TabList',
}))`
  display: flex;

  margin: 0;

  list-style-type: none;
`;

export const StyledTab = styled(Tab).attrs(() => ({
  tabsrole: 'Tab',
}))`
  width: 150px;
  margin-right: 4px;
  padding-bottom: 20px;

  ${S1};
  text-align: center;
  color: ${Color.SECONDARY};

  user-select: none;

  cursor: pointer;

  &.is-selected {
    color: ${Color.PRIMARY};
    border-bottom: 2px solid ${Color.PRIMARY};
  }

  &:focus {
    outline: none;
  }
`;

export const StyledTabPanel = styled(TabPanel).attrs(() => ({
  tabsrole: 'TabPanel'
}))`
  display: none;

  min-height: 25vh;
  padding-top: 48px;
  margin-bottom: 48px;

  ${BODY};
  font-size: 18px;
  color: ${Color.PRIMARY};

  border-top: 2px solid ${Color.GREY};

  &.is-selected {
    display: block;
  }
`;