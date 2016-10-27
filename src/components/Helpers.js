import React from 'react';
import {helpers} from '../api/data';

const Helpers = () => (
  <div>
    {helpers
      .map (helper =>
        (<div dangerouslySetInnerHTML={{__html: helpers[0].description}}/>))
    }
  </div>
)

export default Helpers;