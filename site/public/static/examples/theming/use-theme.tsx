import {useTheme} from 'newskit';

const MyThemedComponent = props => {
  const theme = useTheme();
  return <div>sizing010 from theme = {theme.sizing.sizing010}</div>;
};
