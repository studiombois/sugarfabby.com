/* eslint-disable react/display-name */
import Heading from '@components/atoms/Text/Heading';
import Paragraph from '@components/atoms/Text/Paragraph';
import React from 'react';
import Code from './Code';
import Link from './Link';
import List from './List';
import Pre from './Pre';

export default {
  h1: (props) => <Heading size="h1" {...props} />,
  h2: (props) => <Heading size="h2" {...props} />,
  h3: (props) => <Heading size="h3" {...props} />,
  h4: (props) => <Heading size="h4" {...props} />,
  h5: (props) => <Heading size="h5" {...props} />,
  h6: (props) => <Heading size="h6" {...props} />,
  p: (props) => <Paragraph {...props} />,
  a: (props) => <Link {...props} />,
  ul: (props) => <List {...props} />,
  inlineCode: (props) => <Code {...props} />,
  pre: (props) => <Pre {...props} />,
};
