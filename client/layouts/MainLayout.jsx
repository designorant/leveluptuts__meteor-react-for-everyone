import React from 'react';

export const MainLayout = ({ content }) => (
  <div className="main-layout">
    {content}
  </div>
);

MainLayout.propTypes = {
  content: React.PropTypes.object,
};
