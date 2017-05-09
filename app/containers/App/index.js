/**
 *
 * App.react.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React, { PropTypes } from 'react';
import styled from 'styled-components';

import Page from 'components/Page';
import TabBar from 'components/TabBar';
import TabBarItem from 'components/TabBarItem';

const Container = styled.div`
  background: green;
  height: 100%;
`;


const tabBarItemValues = [
  {
    url: '/my-dojo',
    icon: 'university',
    name: 'My Dojo',
  },
  {
    url: '/habit',
    icon: 'clock-o',
    name: 'Habit',
  },
  {
    url: '/chat',
    icon: 'comment',
    name: 'Chat',
  },
  {
    url: '/concierge',
    icon: 'bell',
    name: 'Concierge',
  },
  {
    url: '/journey',
    icon: 'map-marker',
    name: 'Journey',
  },
];

const createTabBarItems = ({ pathname }) => tabBarItemValues
  .map(({ url, icon, name }, i) => (
    <TabBarItem
      key={i}
      url={url}
      icon={icon}
      isSelected={pathname === url}
    >
      {name}
    </TabBarItem>
  ));

export default class App extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    children: PropTypes.node,
    location: PropTypes.object,
  };

  render() {
    const {
      pathname,
    } = this.props.location;

    const tabBarItems = createTabBarItems({ pathname });

    return (
      <Container>
        <Page>
          {React.Children.toArray(this.props.children)}
        </Page>
        <TabBar>
          {tabBarItems}
        </TabBar>
      </Container>
    );
  }
}
