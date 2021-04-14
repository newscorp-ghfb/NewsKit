export const DrawerExample = () => {
    const [isActive, setIsActive] = React.useState(false);
  
    const open = () => setIsActive(true);
    const close = () => setIsActive(false);
  
    return (
      <>
        <Button onClick={open}>Open Drawer</Button>
        <Drawer
          open={isActive}
          onDismiss={close}
          ariaLabelledby="drawerHeader"
          ariaDescribedby="drawerContent"
          header={<div id="drawerHeader">Drawer header</div>}
        >
          <div id="drawerContent">Drawer content</div>
        </Drawer>
      </>
    );
  };