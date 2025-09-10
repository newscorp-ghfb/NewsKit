"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StoryFormComplete = void 0;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var __1 = require("..");
var button_1 = require("../button");
var block_1 = require("../block");
var icons_1 = require("../icons");
var icon_button_1 = require("../icon-button");
var fieldset_1 = require("../fieldset");
var select_1 = require("../select");
var radio_button_1 = require("../radio-button");
var storybook_comps_1 = require("../test/storybook-comps");
exports.default = {
    title: 'Composed/Form',
    component: function () { return 'None'; },
    parameters: {
        previewTabs: {
            'storybook/canvas/panel': { index: -1 },
            'storybook/docs/panel': { hidden: true },
        },
        viewMode: 'story',
        docs: {
            page: null,
        },
    },
};
var ShowPasswordButton = function (_a) {
    var onClick = _a.onClick, isVisible = _a.isVisible;
    return (React.createElement(icon_button_1.IconButton, { "aria-label": "toggle password", onClick: onClick, size: "small", overrides: { stylePreset: 'iconButtonMinimalPrimary' } }, isVisible ? (React.createElement(icons_1.IconFilledStop, { overrides: { size: 'iconSize010' } })) : (React.createElement(icons_1.IconFilledRemoveRedEye, { overrides: { size: 'iconSize010' } }))));
};
var StoryFormComplete = function () {
    var _a = React.useState(false), showPassword = _a[0], toggleShowPassword = _a[1];
    return (React.createElement(storybook_comps_1.StorybookPage, null,
        React.createElement(__1.Form, { onSubmit: console.log },
            React.createElement(fieldset_1.Fieldset, { legend: "Personal" },
                React.createElement(block_1.Block, { marginBlockStart: "space020", marginBlockEnd: "space050" },
                    React.createElement(__1.FormInput, { name: "first-name", rules: {
                            required: 'Required field',
                            minLength: {
                                value: 2,
                                message: 'Name must be at least 2 characters long',
                            },
                        } },
                        React.createElement(__1.FormInputLabel, null, "First name"),
                        React.createElement(__1.FormInputTextField, null),
                        React.createElement(__1.FormInputAssistiveText, null, "Enter your first name"))),
                React.createElement(block_1.Block, { marginBlockStart: "space020", marginBlockEnd: "space050" },
                    React.createElement(__1.FormInput, { name: "last-name", rules: {
                            required: 'Required field',
                            minLength: {
                                value: 2,
                                message: 'Name must be at least 2 characters long',
                            },
                        } },
                        React.createElement(__1.FormInputLabel, null, "Last name"),
                        React.createElement(__1.FormInputTextField, null),
                        React.createElement(__1.FormInputAssistiveText, null, "Enter your last name"))),
                React.createElement(block_1.Block, { marginBlockStart: "space020", marginBlockEnd: "space050" },
                    React.createElement(__1.FormInput, { name: "country", rules: {
                            required: 'Required field',
                        } },
                        React.createElement(__1.FormInputLabel, null, "Country"),
                        React.createElement(__1.FormInputSelect, null,
                            React.createElement(select_1.SelectOption, { value: "BG" }, "Bulgaria"),
                            React.createElement(select_1.SelectOption, { value: "UK" }, "United Kingdom"),
                            React.createElement(select_1.SelectOption, { value: "NL" }, "The Netherlands"),
                            React.createElement(select_1.SelectOption, { value: "DE" }, "Germany")),
                        React.createElement(__1.FormInputAssistiveText, null, "Enter your last name")))),
            React.createElement(fieldset_1.Fieldset, { legend: "Login information" },
                React.createElement(block_1.Block, { marginBlockStart: "space020", marginBlockEnd: "space050" },
                    React.createElement(__1.FormInput, { name: "email", rules: {
                            required: 'Required field',
                            pattern: /^\S+@\S+$/i,
                        } },
                        React.createElement(__1.FormInputLabel, null, "Email"),
                        React.createElement(__1.FormInputTextField, { type: "email" }),
                        React.createElement(__1.FormInputAssistiveText, null, "Enter your email"))),
                React.createElement(block_1.Block, { marginBlockStart: "space020", marginBlockEnd: "space050" },
                    React.createElement(__1.FormInput, { name: "password", rules: {
                            required: 'Required field',
                            minLength: {
                                value: 8,
                                message: 'Name must be at least 8 characters long',
                            },
                        } },
                        React.createElement(__1.FormInputLabel, null, "Password"),
                        React.createElement(__1.FormInputTextField, { type: showPassword ? 'text' : 'password', endEnhancer: React.createElement(ShowPasswordButton, { onClick: function () { return toggleShowPassword(!showPassword); }, isVisible: showPassword }) }),
                        React.createElement(__1.FormInputAssistiveText, null, "Enter your password")))),
            React.createElement(fieldset_1.Fieldset, { legend: "Subscription type" },
                React.createElement(block_1.Block, { marginBlockStart: "space020", marginBlockEnd: "space050" },
                    React.createElement(__1.FormInput, { name: "subscription", rules: {
                            required: 'Required field',
                        } },
                        React.createElement(radio_button_1.RadioGroup, null,
                            React.createElement(__1.FormInputRadioButton, { id: "subscription-online", value: "online", label: "Online", overrides: { marginBlockEnd: 'space020' } }),
                            React.createElement(__1.FormInputRadioButton, { id: "subscription-print", value: "print", label: "Print", overrides: { marginBlockEnd: 'space020' } }),
                            React.createElement(__1.FormInputRadioButton, { id: "subscription-both", value: "both", label: "Online and print", overrides: { marginBlockEnd: 'space020' } })),
                        React.createElement(__1.FormInputAssistiveText, null, "Make your choice")))),
            React.createElement(fieldset_1.Fieldset, { legend: "Interests" },
                React.createElement(block_1.Block, { marginBlockStart: "space020", marginBlockEnd: "space050" },
                    React.createElement(__1.FormInput, { name: "interests", rules: {
                            required: 'Required field',
                            validate: function (value) {
                                if (value.length < 3) {
                                    return 'Select at least 3 interests';
                                }
                                return true;
                            },
                        } },
                        React.createElement(__1.FormInputCheckbox, { id: "interests-politics", value: "politics", label: "Politics", overrides: { marginBlockEnd: 'space020' } }),
                        React.createElement(__1.FormInputCheckbox, { id: "interests-business", value: "Business", label: "Business", overrides: { marginBlockEnd: 'space020' } }),
                        React.createElement(__1.FormInputCheckbox, { id: "interests-society", value: "Society", label: "Society", overrides: { marginBlockEnd: 'space020' } }),
                        React.createElement(__1.FormInputCheckbox, { id: "interests-technology", value: "Technology", label: "Technology", overrides: { marginBlockEnd: 'space020' } }),
                        React.createElement(__1.FormInputCheckbox, { id: "interests-sport", value: "Sport", label: "Sport", overrides: { marginBlockEnd: 'space020' } }),
                        React.createElement(__1.FormInputCheckbox, { id: "interests-science", value: "Science", label: "Science", overrides: { marginBlockEnd: 'space020' } }),
                        React.createElement(__1.FormInputAssistiveText, null, "Make your choice")))),
            React.createElement(button_1.Button, { type: "submit" }, "Register"))));
};
exports.StoryFormComplete = StoryFormComplete;
exports.StoryFormComplete.storyName = 'Complete';
//# sourceMappingURL=form.stories.js.map