// import a CSS module
import classes from './main.css';

import { Droppable } from '@shopify/draggable';

export default () => {
  const containers = document.querySelectorAll('.container');

  new Droppable(containers, {
    draggable: '.kirby-wrap',
    dropzone: '.wrapper',
    mirror: {
      constrainDimensions: true,
    },
  });
};
