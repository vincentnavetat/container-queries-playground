// import a CSS module
import classes from './main.scss';

import { Droppable, Plugins } from '@shopify/draggable';

export default () => {
  const containers = document.querySelectorAll('.container');

  const droppable = new Droppable(containers, {
    draggable: '.kirby',
    dropzone: '.wrapper',
    mirror: {
      constrainDimensions: true,
    },
    plugins: [Plugins.ResizeMirror],
  });
};
