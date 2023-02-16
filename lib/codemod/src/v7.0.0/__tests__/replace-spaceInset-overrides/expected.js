import {Flag, Button, Modal, Menu, MenuGroup, MenuItem, MenuSub} from "newskit";

const Component = () => (
  <>
    <Flag overrides={{
      paddingBlock: "space060",
      paddingInline: "space060"
    }}>
      Flag
    </Flag>
    <Flag overrides={{
      paddingBlock: "10px",
      paddingInline: "10px"
    }}>
      Flag
    </Flag>
    <Flag overrides={{
      paddingBlock: {
        xs: "space060",
        md: "space020"
      },

      paddingInline: {
        xs: "space060",
        md: "space020"
      }
    }}>
      Flag
    </Flag>
    <Flag overrides={{
      paddingBlock: {
        xs: "10px",
        md: "15px"
      },

      paddingInline: {
        xs: "10px",
        md: "15px"
      }
    }}>
      Flag
    </Flag>
    <Button overrides={{
      paddingBlock: "space020",
      paddingInline: "space030",
      stylePreset: "inkPositive"
    }}>
      Button
    </Button>
    <Button>
      Button
    </Button>
    <Modal open onDismiss={() => {}} overrides={{
      header: {
        paddingBlock: "space000",
        paddingInline: "space000"
      }
    }}>
      Modal
    </Modal>
    <Menu overrides={{
      paddingBlock: "10px",
      paddingInline: "10px"
    }}>
      <MenuGroup title="Group 1" overrides={{
        title: {
          paddingBlock: "10px",
          paddingInline: "10px"
        }
      }}>
        <MenuItem href={href} overrides={{
          paddingBlock: "10px",
          paddingInline: "10px"
        }}>
          Group 1-item 1
        </MenuItem>
        <MenuSub
          title="Menu item 3"
          overrides={{
            list: {
              paddingBlock: "10px",
              paddingInline: "10px"
            }
          }}
        >
          <MenuItem href={href}>
            Group 3-item 1
          </MenuItem>
        </MenuSub>
      </MenuGroup>
    </Menu>
    <Block paddingBlock="space020" paddingInline="space020">Block</Block>
    <Block
      paddingBlock={{
        xs: "space020",
        md: "space060"
      }}
      paddingInline={{
        xs: "space020",
        md: "space060"
      }}>Block</Block>
  </>
);
