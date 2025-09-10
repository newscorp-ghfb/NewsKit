import { __assign, __rest } from "tslib";
import React from 'react';
import { IconFilledLaunch } from '../../icons';
import { IconButton } from '../../icon-button';
export var PopoutButton = React.memo(function (props) {
    var href = props.href, onClick = props.onClick, rest = __rest(props, ["href", "onClick"]);
    return (React.createElement(IconButton, __assign({}, rest, { size: "medium", "data-testid": "audio-player-popout", "aria-label": "Open popout player", onClick: href || onClick
            ? function () {
                if (href) {
                    window.open(href, '', 'width=380,height=665');
                }
                if (onClick) {
                    onClick(props);
                }
            }
            : undefined }),
        React.createElement(IconFilledLaunch, { overrides: { size: 'iconSize020' } })));
});
//# sourceMappingURL=popout-button.js.map