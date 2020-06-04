const RailItem: React.FC<{itemId: number}> = ({itemId, ...props}) => {
  const {fireEvent} = useInstrumentation();
  return (
    <InstrumentationProvider
      context={{
        // THIS WON'T BE INCLUDED! The fireEvent above is outside the scope of this provider!
        railItemId: itemId,
      }}
    >
      <button
        {...props}
        onClick={() => {
          fireEvent({
            originator: 'button',
            trigger: EventTrigger.Click,
          });
        }}
      >
        {itemId}: A really great item!
      </button>
    </InstrumentationProvider>
  );
};
