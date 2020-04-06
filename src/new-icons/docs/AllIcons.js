import React from 'react';
import Heading from '../../Heading';
import * as Icons from 'wix-ui-icons-common';
import s from './AllIcons.scss';
import { Layout, Cell } from '../../Layout';

const renderIcon = name => (
  <div className={s.singleIconView} key={name}>
    <span>{React.createElement(Icons[name])}</span>
    <span className={s.iconName}>{name}</span>
  </div>
);

const AllIcons = () => (
  <Layout>
    <Cell>
      <Heading appearance="H2">All Icons:</Heading>
    </Cell>
    <Cell>
      <div className={s.iconList}>{Object.keys(Icons).map(renderIcon)}</div>
    </Cell>
  </Layout>
);

export default AllIcons;
