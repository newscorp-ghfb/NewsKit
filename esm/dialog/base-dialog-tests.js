import { __awaiter, __generator } from "tslib";
/* istanbul ignore file */
// eslint-disable-next-line
import { fireEvent, waitFor } from '@testing-library/react';
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import userEvent from '@testing-library/user-event';
import { renderToFragmentInBody, renderWithTheme, renderWithThemeInBody, } from '../test/test-utils';
export var sharedDialogTests = function (Dialog, header, body) {
    test('renders default', function () {
        var fragment = renderToFragmentInBody(Dialog, {
            open: true,
            header: header,
            children: body,
            onDismiss: function () { },
        });
        expect(fragment).toMatchSnapshot();
    });
    test('renders without header', function () {
        var fragment = renderToFragmentInBody(Dialog, {
            open: true,
            onDismiss: function () { },
            children: body,
        });
        expect(fragment).toMatchSnapshot();
    });
    test('renders with aria-ariaLabelledby attribute', function () {
        var fragment = renderToFragmentInBody(Dialog, {
            open: true,
            onDismiss: function () { },
            ariaLabelledby: 'headerLabel',
            header: (React.createElement(React.Fragment, null,
                React.createElement("div", { id: "headerLabel" }, "Overridden dialog header"))),
            children: null,
        });
        expect(fragment).toMatchSnapshot();
    });
    test('renders with aria-describedby attribute', function () {
        var fragment = renderToFragmentInBody(Dialog, {
            open: true,
            onDismiss: function () { },
            ariaDescribedby: 'description purpose',
            children: (React.createElement(React.Fragment, null,
                React.createElement("div", { id: "description" }, "Overridden dialog components"),
                React.createElement("div", { id: "purpose" }, "Showing different styles"))),
        });
        expect(fragment).toMatchSnapshot();
    });
    test('renders without overlay', function () {
        var fragment = renderToFragmentInBody(Dialog, {
            open: true,
            header: header,
            children: body,
            onDismiss: function () { },
            hideOverlay: true,
        });
        expect(fragment).toMatchSnapshot();
    });
    test('renders screen reader message when focus trapping disabled', function () {
        var fragment = renderToFragmentInBody(Dialog, {
            open: true,
            header: header,
            children: body,
            onDismiss: function () { },
            disableFocusTrap: true,
        });
        expect(fragment).toMatchSnapshot();
    });
    test('invokes onDismiss callback when Esc key pressed', function () { return __awaiter(void 0, void 0, void 0, function () {
        var mockCallBack;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    mockCallBack = jest.fn();
                    renderWithTheme(Dialog, {
                        open: true,
                        onDismiss: mockCallBack,
                        header: header,
                        children: body,
                    });
                    userEvent.keyboard('{escape}');
                    return [4 /*yield*/, waitFor(function () { return expect(mockCallBack).toHaveBeenCalled(); })];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    test('invokes onDismiss callback when clicking on the overlay', function () {
        var mockCallBack = jest.fn();
        var overlay = renderWithTheme(Dialog, {
            open: true,
            onDismiss: mockCallBack,
            header: header,
            children: body,
        }).getByTestId('overlay');
        fireEvent.click(overlay);
        expect(mockCallBack).toHaveBeenCalled();
    });
    test('invokes onDismiss callback when clicking on the close button', function () {
        var mockCallBack = jest.fn();
        var dialogCloseIcon = renderWithTheme(Dialog, {
            open: true,
            onDismiss: mockCallBack,
            header: header,
            children: body,
        }).getByLabelText('close');
        fireEvent.click(dialogCloseIcon);
        expect(mockCallBack).toHaveBeenCalled();
    });
    test('renders without close button', function () {
        var fragment = renderToFragmentInBody(Dialog, {
            open: true,
            header: header,
            children: body,
            onDismiss: function () { },
            closePosition: 'none',
        });
        expect(fragment).toMatchSnapshot();
    });
    test('renders without header and close', function () {
        var fragment = renderToFragmentInBody(Dialog, {
            open: true,
            children: body,
            onDismiss: function () { },
            closePosition: 'none',
        });
        expect(fragment).toMatchSnapshot();
    });
    test('toggle aria-hidden to content outside dialog', function () {
        var Component = function () {
            var _a = React.useState(true), open = _a[0], setOpen = _a[1];
            return (React.createElement(React.Fragment, null,
                React.createElement("p", { "data-testid": "outside-content" }, "other content"),
                React.createElement(Dialog, { open: open, onDismiss: function () { return setOpen(false); } }, "Dialog content")));
        };
        var _a = renderWithThemeInBody(Component), getByTestId = _a.getByTestId, asFragment = _a.asFragment, container = _a.container;
        // outside content is hidden for screen readers when dialog is open
        // since the dialog is rendered inside a portal the outside content is the "container"
        expect(container).toHaveAttribute('aria-hidden', 'true');
        expect(asFragment()).toMatchSnapshot();
        // outside content should be visible when dialog is closed
        fireEvent.click(getByTestId('button'));
        expect(container).not.toHaveAttribute('aria-hidden');
        expect(asFragment()).toMatchSnapshot();
    });
};
//# sourceMappingURL=base-dialog-tests.js.map