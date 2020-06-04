const RailItem: React.FC<{itemId: number}> = ({itemId, ...props}) => {
  const {fireEvent} = useInstrumentation();
  const eventContext = {
    railItemId: itemId,
  };
  return (
    <button
      {...props}
      onClick={() => {
        fireEvent({
          originator: 'button',
          trigger: EventTrigger.Click,
          context: eventContext,
        });
      }}
    >
      {itemId}: A really great item!
    </button>
  );
};
