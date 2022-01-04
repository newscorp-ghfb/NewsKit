export const handleEnterKeyPress = (onClick: () => void) => ({
  key,
}: {
  key: string;
}) => {
  if (key === 'Enter') {
    onClick();
  }
};
