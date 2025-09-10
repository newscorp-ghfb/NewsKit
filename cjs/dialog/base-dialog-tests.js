"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sharedDialogTests = void 0;
var tslib_1 = require("tslib");
/* istanbul ignore file */
// eslint-disable-next-line
var react_1 = require("@testing-library/react");
var react_2 = tslib_1.__importDefault(require("react"));
// eslint-disable-next-line import/no-extraneous-dependencies
var user_event_1 = tslib_1.__importDefault(require("@testing-library/user-event"));
var test_utils_1 = require("../test/test-utils");
var sharedDialogTests = function (Dialog, header, body) {
    test('renders default', function () {
        var fragment = (0, test_utils_1.renderToFragmentInBody)(Dialog, {
            open: true,
            header: header,
            children: body,
            onDismiss: function () { },
        });
        expect(fragment).toMatchSnapshot();
    });
    test('renders without header', function () {
        var fragment = (0, test_utils_1.renderToFragmentInBody)(Dialog, {
            open: true,
            onDismiss: function () { },
            children: body,
        });
        expect(fragment).toMatchSnapshot();
    });
    test('renders with aria-ariaLabelledby attribute', function () {
        var fragment = (0, test_utils_1.renderToFragmentInBody)(Dialog, {
            open: true,
            onDismiss: function () { },
            ariaLabelledby: 'headerLabel',
            header: (react_2.default.createElement(react_2.default.Fragment, null,
                react_2.default.createElement("div", { id: "headerLabel" }, "Overridden dialog header"))),
            children: null,
        });
        expect(fragment).toMatchSnapshot();
    });
    test('renders with aria-describedby attribute', function () {
        var fragment = (0, test_utils_1.renderToFragmentInBody)(Dialog, {
            open: true,
            onDismiss: function () { },
            ariaDescribedby: 'description purpose',
            children: (react_2.default.createElement(react_2.default.Fragment, null,
                react_2.default.createElement("div", { id: "description" }, "Overridden dialog components"),
                react_2.default.createElement("div", { id: "purpose" }, "Showing different styles"))),
        });
        expect(fragment).toMatchSnapshot();
    });
    test('renders without overlay', function () {
        var fragment = (0, test_utils_1.renderToFragmentInBody)(Dialog, {
            open: true,
            header: header,
            children: body,
            onDismiss: function () { },
            hideOverlay: true,
        });
        expect(fragment).toMatchSnapshot();
    });
    test('renders screen reader message when focus trapping disabled', function () {
        var fragment = (0, test_utils_1.renderToFragmentInBody)(Dialog, {
            open: true,
            header: header,
            children: body,
            onDismiss: function () { },
            disableFocusTrap: true,
        });
        expect(fragment).toMatchSnapshot();
    });
    test('invokes onDismiss callback when Esc key pressed', function () { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var mockCallBack;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    mockCallBack = jest.fn();
                    (0, test_utils_1.renderWithTheme)(Dialog, {
                        open: true,
                        onDismiss: mockCallBack,
                        header: header,
                        children: body,
                    });
                    user_event_1.default.keyboard('{escape}');
                    return [4 /*yield*/, (0, react_1.waitFor)(function () { return expect(mockCallBack).toHaveBeenCalled(); })];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    test('invokes onDismiss callback when clicking on the overlay', function () {
        var mockCallBack = jest.fn();
        var overlay = (0, test_utils_1.renderWithTheme)(Dialog, {
            open: true,
            onDismiss: mockCallBack,
            header: header,
            children: body,
        }).getByTestId('overlay');
        react_1.fireEvent.click(overlay);
        expect(mockCallBack).toHaveBeenCalled();
    });
    test('invokes onDismiss callback when clicking on the close button', function () {
        var mockCallBack = jest.fn();
        var dialogCloseIcon = (0, test_utils_1.renderWithTheme)(Dialog, {
            open: true,
            onDismiss: mockCallBack,
            header: header,
            children: body,
        }).getByLabelText('close');
        react_1.fireEvent.click(dialogCloseIcon);
        expect(mockCallBack).toHaveBeenCalled();
    });
    test('renders without close button', function () {
        var fragment = (0, test_utils_1.renderToFragmentInBody)(Dialog, {
            open: true,
            header: header,
            children: body,
            onDismiss: function () { },
            closePosition: 'none',
        });
        expect(fragment).toMatchSnapshot();
    });
    test('renders without header and close', function () {
        var fragment = (0, test_utils_1.renderToFragmentInBody)(Dialog, {
            open: true,
            children: body,
            onDismiss: function () { },
            closePosition: 'none',
        });
        expect(fragment).toMatchSnapshot();
    });
    test('toggle aria-hidden to content outside dialog', function () {
        var Component = function () {
            var _a = react_2.default.useState(true), open = _a[0], setOpen = _a[1];
            return (react_2.default.createElement(react_2.default.Fragment, null,
                react_2.default.createElement("p", { "data-testid": "outside-content" }, "other content"),
                react_2.default.createElement(Dialog, { open: open, onDismiss: function () { return setOpen(false); } }, "Dialog content")));
        };
        var _a = (0, test_utils_1.renderWithThemeInBody)(Component), getByTestId = _a.getByTestId, asFragment = _a.asFragment, container = _a.container;
        // outside content is hidden for screen readers when dialog is open
        // since the dialog is rendered inside a portal the outside content is the "container"
        expect(container).toHaveAttribute('aria-hidden', 'true');
        expect(asFragment()).toMatchSnapshot();
        // outside content should be visible when dialog is closed
        react_1.fireEvent.click(getByTestId('button'));
        expect(container).not.toHaveAttribute('aria-hidden');
        expect(asFragment()).toMatchSnapshot();
    });
};
exports.sharedDialogTests = sharedDialogTests;
//# sourceMappingURL=base-dialog-tests.js.map