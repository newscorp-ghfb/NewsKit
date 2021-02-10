import React, {useState} from 'react';
import {Button} from '../../button';
import {Drawer} from '..';
// import {
//   StorybookHeading,
//   StorybookSubHeading,
// } from '../../test/storybook-comps';

// https://github.com/storybookjs/storybook/issues/5721
export default {
  name: 'drawer',
  children: [
    {
      name: 'default',
      type: 'story',
      component: () =>
        React.createElement(() => {
          const [open, setOpen] = useState(false);

          return (
            <>
              <Button onClick={() => setOpen(true)}>Open Drawer</Button>
              <Drawer open={open} />
            </>
          );
        }),
    },
    {
      name: 'left placement',
      type: 'story',
      component: () =>
        React.createElement(() => {
          const [open, setOpen] = useState(false);

          return (
            <>
              <Button onClick={() => setOpen(true)}>Open Drawer</Button>
              <Drawer placement="left" open={open}>
                <div>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Molestiae eaque hic recusandae tenetur quia. Aperiam omnis
                  dolores minima sint ea voluptate, cumque tempore ratione alias
                  soluta, fugit ad, quidem vel!
                </div>
                <div>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Molestiae eaque hic recusandae tenetur quia. Aperiam omnis
                  dolores minima sint ea voluptate, cumque tempore ratione alias
                  soluta, fugit ad, quidem vel!
                </div>
                <div>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Molestiae eaque hic recusandae tenetur quia. Aperiam omnis
                  dolores minima sint ea voluptate, cumque tempore ratione alias
                  soluta, fugit ad, quidem vel!
                </div>
                <div>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Molestiae eaque hic recusandae tenetur quia. Aperiam omnis
                  dolores minima sint ea voluptate, cumque tempore ratione alias
                  soluta, fugit ad, quidem vel!
                </div>
                <div>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Molestiae eaque hic recusandae tenetur quia. Aperiam omnis
                  dolores minima sint ea voluptate, cumque tempore ratione alias
                  soluta, fugit ad, quidem vel!
                </div>
                <div>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Molestiae eaque hic recusandae tenetur quia. Aperiam omnis
                  dolores minima sint ea voluptate, cumque tempore ratione alias
                  soluta, fugit ad, quidem vel!
                </div>
                <div>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Molestiae eaque hic recusandae tenetur quia. Aperiam omnis
                  dolores minima sint ea voluptate, cumque tempore ratione alias
                  soluta, fugit ad, quidem vel!
                </div>
              </Drawer>
            </>
          );
        }),
    },
  ],
};
