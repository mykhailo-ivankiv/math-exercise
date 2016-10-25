import React from 'react';
import katex from 'katex';

import 'katex/dist/katex.min.css';
const KaTex = () => {
  const  html = {__html: katex.renderToString("c = \\pm\\sqrt{a^2 + b^2}")};
  return (
    <span dangerouslySetInnerHTML = {html}/>
  )

}

export default KaTex