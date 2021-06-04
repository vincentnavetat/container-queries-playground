// import a CSS module
import classes from './main.css';

import { Swappable, Plugins } from '@shopify/draggable';

export default () => {
  const containers = document.querySelectorAll('.wrapper');

  const swappable = new Swappable(containers, {
    draggable: '.kirby',
    mirror: {
      constrainDimensions: true,
    },
    plugins: [Plugins.ResizeMirror],
  });

  console.log('kewl!');
  console.log(swappable);
};
