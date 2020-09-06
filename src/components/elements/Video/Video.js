import React from 'react';
import styled from 'styled-components';

// 16:9
const Container = styled.div`
  width: 100%;
  padding-top: 56.25%;
  position: relative;
  overflow: hidden;

  iframe {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
  }
`;

const Video = ({ videoSrcURL, videoTitle }) => (
  <Container>
    <iframe
      src={videoSrcURL}
      title={videoTitle}
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      frameBorder="0"
      webkitallowfullscreen="true"
      mozallowfullscreen="true"
      allowFullScreen
    />
  </Container>
);

export default Video;
