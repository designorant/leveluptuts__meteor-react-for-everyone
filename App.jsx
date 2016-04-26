import React from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';

import ResolutionsForm from './ResolutionsForm.jsx';
import ResolutionSingle from './ResolutionSingle.jsx';

Resolutions = new Mongo.Collection('resolutions');

export default class App extends TrackerReact(React.Component) { // TODO: Find out whether TrackerReact is actually needed/useful for pulling data

  resolutions() {
    return Resolutions.find().fetch();
  }

  render() {
    let res = this.resolutions();
    return (
      <div>
        <h1>My Resolutions</h1>
        <ResolutionsForm />
        <ul>
          <ResolutionSingle resolution={res[0]} />
        </ul>
      </div>
    );
  }

}
