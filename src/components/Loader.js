/* eslint-disable import/prefer-default-export */
import React from 'react';
import {
  Dimmer, Loader, Image, Segment,
} from 'semantic-ui-react';

export const Loading = () => (
  <div>
    <Segment>
      <Dimmer active inverted>
        <Loader size='large'>Loading</Loader>
      </Dimmer>

      <Image src='https://react.semantic-ui.comhttps://react.semantic-ui.com/images/wireframe/paragraph.png' />
    </Segment>
  </div>
);
