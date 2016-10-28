import React from 'react';
import {helpers} from '../api/data';

const Helpers = () => (
  <div>
    {helpers
      .map (helper =>
        (<div dangerouslySetInnerHTML={{__html: helper.description}}/>))
    }
  </div>
)

export default Helpers;