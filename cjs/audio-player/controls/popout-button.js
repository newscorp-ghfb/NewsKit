"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PopoutButton = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var icons_1 = require("../../icons");
var icon_button_1 = require("../../icon-button");
exports.PopoutButton = react_1.default.memo(function (props) {
    var href = props.href, onClick = props.onClick, rest = tslib_1.__rest(props, ["href", "onClick"]);
    return (react_1.default.createElement(icon_button_1.IconButton, tslib_1.__assign({}, rest, { size: "medium", "data-testid": "audio-player-popout", "aria-label": "Open popout player", onClick: href || onClick
            ? function () {
                if (href) {
                    window.open(href, '', 'width=380,height=665');
                }
                if (onClick) {
                    onClick(props);
                }
            }
            : undefined }),
        react_1.default.createElement(icons_1.IconFilledLaunch, { overrides: { size: 'iconSize020' } })));
});
//# sourceMappingURL=popout-button.js.map