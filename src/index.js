import React, { createElement, Fragment } from "react";

const nestComponents = (...args) => (props) => 
  args.reduceRight((children, provider) => 
    createElement(provider, { children }), <Fragment {...props} />);

export const render = createElement;
export default nestComponents;