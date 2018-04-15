import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';

export default () => {
  return (
    <Menu>
      <Menu.Item>
        CrowdCoin
      </Menu.Item>
      <Menu.Menu position="right">
        <Menu.Item>Campaign</Menu.Item>
        <Menu.Item>+</Menu.Item>
      </Menu.Menu>
    </Menu>
  );
}