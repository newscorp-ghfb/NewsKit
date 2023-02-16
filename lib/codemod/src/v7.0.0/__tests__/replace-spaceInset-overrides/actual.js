import {Flag, Button, Modal, Menu, MenuGroup, MenuItem, MenuSub} from "newskit";

const Component = () => (
  <>
    <Flag overrides={{spaceInset: "space060"}}>
      Flag
    </Flag>
    <Flag overrides={{spaceInset: "10px"}}>
      Flag
    </Flag>
    <Flag overrides={{spaceInset: {xs: "space060", md: "space020"}}}>
      Flag
    </Flag>
    <Flag overrides={{spaceInset: {xs: "10px", md: "15px"}}}>
      Flag
    </Flag>
    <Button overrides={{spaceInset: "spaceInsetSquish020", stylePreset: "inkPositive"}}>
      Button
    </Button>
    <Button>
      Button
    </Button>
    <Modal open onDismiss={() => {}} overrides={{header: {spaceInset: "space000"}}}>
      Modal
    </Modal>
    <Menu overrides={{spaceInset: "10px"}}>
      <MenuGroup title="Group 1" overrides={{title: {spaceInset: "10px"}}}>
        <MenuItem href={href} overrides={{spaceInset: "10px"}}>
          Group 1-item 1
        </MenuItem>
        <MenuSub
          title="Menu item 3"
          overrides={{list: {spaceInset: "10px"}}}
        >
          <MenuItem href={href}>
            Group 3-item 1
          </MenuItem>
        </MenuSub>
      </MenuGroup>
    </Menu>
    <Block spaceInset="space020">Block</Block>
    <Block spaceInset={{xs: "space020", md: "space060"}}>Block</Block>
  </>
);
