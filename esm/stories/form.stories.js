import * as React from 'react';
import { Form, FormInput, FormInputAssistiveText, FormInputCheckbox, FormInputLabel, FormInputRadioButton, FormInputSelect, FormInputTextField, } from '..';
import { Button } from '../button';
import { Block } from '../block';
import { IconFilledRemoveRedEye, IconFilledStop } from '../icons';
import { IconButton } from '../icon-button';
import { Fieldset } from '../fieldset';
import { SelectOption } from '../select';
import { RadioGroup } from '../radio-button';
import { StorybookPage } from '../test/storybook-comps';
export default {
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
    return (React.createElement(IconButton, { "aria-label": "toggle password", onClick: onClick, size: "small", overrides: { stylePreset: 'iconButtonMinimalPrimary' } }, isVisible ? (React.createElement(IconFilledStop, { overrides: { size: 'iconSize010' } })) : (React.createElement(IconFilledRemoveRedEye, { overrides: { size: 'iconSize010' } }))));
};
export var StoryFormComplete = function () {
    var _a = React.useState(false), showPassword = _a[0], toggleShowPassword = _a[1];
    return (React.createElement(StorybookPage, null,
        React.createElement(Form, { onSubmit: console.log },
            React.createElement(Fieldset, { legend: "Personal" },
                React.createElement(Block, { marginBlockStart: "space020", marginBlockEnd: "space050" },
                    React.createElement(FormInput, { name: "first-name", rules: {
                            required: 'Required field',
                            minLength: {
                                value: 2,
                                message: 'Name must be at least 2 characters long',
                            },
                        } },
                        React.createElement(FormInputLabel, null, "First name"),
                        React.createElement(FormInputTextField, null),
                        React.createElement(FormInputAssistiveText, null, "Enter your first name"))),
                React.createElement(Block, { marginBlockStart: "space020", marginBlockEnd: "space050" },
                    React.createElement(FormInput, { name: "last-name", rules: {
                            required: 'Required field',
                            minLength: {
                                value: 2,
                                message: 'Name must be at least 2 characters long',
                            },
                        } },
                        React.createElement(FormInputLabel, null, "Last name"),
                        React.createElement(FormInputTextField, null),
                        React.createElement(FormInputAssistiveText, null, "Enter your last name"))),
                React.createElement(Block, { marginBlockStart: "space020", marginBlockEnd: "space050" },
                    React.createElement(FormInput, { name: "country", rules: {
                            required: 'Required field',
                        } },
                        React.createElement(FormInputLabel, null, "Country"),
                        React.createElement(FormInputSelect, null,
                            React.createElement(SelectOption, { value: "BG" }, "Bulgaria"),
                            React.createElement(SelectOption, { value: "UK" }, "United Kingdom"),
                            React.createElement(SelectOption, { value: "NL" }, "The Netherlands"),
                            React.createElement(SelectOption, { value: "DE" }, "Germany")),
                        React.createElement(FormInputAssistiveText, null, "Enter your last name")))),
            React.createElement(Fieldset, { legend: "Login information" },
                React.createElement(Block, { marginBlockStart: "space020", marginBlockEnd: "space050" },
                    React.createElement(FormInput, { name: "email", rules: {
                            required: 'Required field',
                            pattern: /^\S+@\S+$/i,
                        } },
                        React.createElement(FormInputLabel, null, "Email"),
                        React.createElement(FormInputTextField, { type: "email" }),
                        React.createElement(FormInputAssistiveText, null, "Enter your email"))),
                React.createElement(Block, { marginBlockStart: "space020", marginBlockEnd: "space050" },
                    React.createElement(FormInput, { name: "password", rules: {
                            required: 'Required field',
                            minLength: {
                                value: 8,
                                message: 'Name must be at least 8 characters long',
                            },
                        } },
                        React.createElement(FormInputLabel, null, "Password"),
                        React.createElement(FormInputTextField, { type: showPassword ? 'text' : 'password', endEnhancer: React.createElement(ShowPasswordButton, { onClick: function () { return toggleShowPassword(!showPassword); }, isVisible: showPassword }) }),
                        React.createElement(FormInputAssistiveText, null, "Enter your password")))),
            React.createElement(Fieldset, { legend: "Subscription type" },
                React.createElement(Block, { marginBlockStart: "space020", marginBlockEnd: "space050" },
                    React.createElement(FormInput, { name: "subscription", rules: {
                            required: 'Required field',
                        } },
                        React.createElement(RadioGroup, null,
                            React.createElement(FormInputRadioButton, { id: "subscription-online", value: "online", label: "Online", overrides: { marginBlockEnd: 'space020' } }),
                            React.createElement(FormInputRadioButton, { id: "subscription-print", value: "print", label: "Print", overrides: { marginBlockEnd: 'space020' } }),
                            React.createElement(FormInputRadioButton, { id: "subscription-both", value: "both", label: "Online and print", overrides: { marginBlockEnd: 'space020' } })),
                        React.createElement(FormInputAssistiveText, null, "Make your choice")))),
            React.createElement(Fieldset, { legend: "Interests" },
                React.createElement(Block, { marginBlockStart: "space020", marginBlockEnd: "space050" },
                    React.createElement(FormInput, { name: "interests", rules: {
                            required: 'Required field',
                            validate: function (value) {
                                if (value.length < 3) {
                                    return 'Select at least 3 interests';
                                }
                                return true;
                            },
                        } },
                        React.createElement(FormInputCheckbox, { id: "interests-politics", value: "politics", label: "Politics", overrides: { marginBlockEnd: 'space020' } }),
                        React.createElement(FormInputCheckbox, { id: "interests-business", value: "Business", label: "Business", overrides: { marginBlockEnd: 'space020' } }),
                        React.createElement(FormInputCheckbox, { id: "interests-society", value: "Society", label: "Society", overrides: { marginBlockEnd: 'space020' } }),
                        React.createElement(FormInputCheckbox, { id: "interests-technology", value: "Technology", label: "Technology", overrides: { marginBlockEnd: 'space020' } }),
                        React.createElement(FormInputCheckbox, { id: "interests-sport", value: "Sport", label: "Sport", overrides: { marginBlockEnd: 'space020' } }),
                        React.createElement(FormInputCheckbox, { id: "interests-science", value: "Science", label: "Science", overrides: { marginBlockEnd: 'space020' } }),
                        React.createElement(FormInputAssistiveText, null, "Make your choice")))),
            React.createElement(Button, { type: "submit" }, "Register"))));
};
StoryFormComplete.storyName = 'Complete';
//# sourceMappingURL=form.stories.js.map