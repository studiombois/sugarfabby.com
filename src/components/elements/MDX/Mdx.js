/* eslint-disable react/display-name */
import Heading from '@components/elements/Text/Heading';
import Paragraph from '@components/elements/Text/Paragraph';
import React from 'react';
import Blockquote from './Blockquote';
import Code from './Code';
import Link from './Link';
import List, { OrderedList } from './List';
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
  ol: (props) => <OrderedList {...props} />,
  inlineCode: (props) => <Code {...props} />,
  pre: (props) => <Pre {...props} />,
  blockquote: (props) => <Blockquote {...props} />,
};
