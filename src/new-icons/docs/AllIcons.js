import React from 'react';
import * as Icons from 'wix-ui-icons-common';

const renderIcon = name => {
  return (
    <div>
      <span>{React.createElement(Icons[name])}</span>
      <span>{name}</span>
    </div>
  );
};

const AllIcons = () => <div>{Object.keys(Icons).map(renderIcon)}</div>;

export default AllIcons;
