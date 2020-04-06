import React from 'react';
import * as Icons from 'wix-ui-icons-common';
import s from './AllIcons.scss';

const renderIcon = name => (
  <div className={s.singleIconView} key={name}>
    <span>{React.createElement(Icons[name])}</span>
    <span className={s.iconName}>{name}</span>
  </div>
);

const AllIcons = () => (
  <div className={s.iconList}>{Object.keys(Icons).map(renderIcon)}</div>
);

export default AllIcons;
