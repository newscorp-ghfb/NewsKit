...
import { withTheme } from "newskit";

const MyThemedComponent = withTheme(props => {

    const { theme: { sizing: { sizing010 } } } = props;

    return <div>Sizing from theme: {sizing010}</div>
})