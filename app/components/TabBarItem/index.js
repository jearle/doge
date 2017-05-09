/**
*
* TabBarItem
*
*/

import React, { PropTypes } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router';

const Container = styled.div`
  background: #f7f7f7;
  height: 100%;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;

  a {
    color: ${({ isSelected }) => isSelected ? '#0578ff' : '#cdcdcd'};
    text-decoration: none;
  }
`;

const Icon = styled.div`
  font-size: 30px;
`;
const Text = styled.div`
`;

const TabBarItem = ({ children = null, url, icon, isSelected = false }) => (
  <Container
    isSelected={isSelected}
  >
    <Link
      to={url}
    >
      <Icon>
        <i
          className={`fa fa-${icon}`}
          aria-hidden={'true'}
        >
        </i>
      </Icon>
      <Text>
        {children}
      </Text>
    </Link>
  </Container>
  );

TabBarItem.propTypes = {
  children: PropTypes.node,
  url: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  isSelected: PropTypes.bool,
};

export default TabBarItem;
