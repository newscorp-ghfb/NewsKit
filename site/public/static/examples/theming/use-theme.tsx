...
import { useTheme } from "newskit";

const MyThemedComponent = (props) => {

    const { sizing: { sizing010 } } = useTheme();

    return <div>Sizing from theme: {sizing010}</div>
})
