import { __assign, __awaiter, __generator, __rest } from "tslib";
/* istanbul ignore file */
import React, { useState } from 'react';
import { AudioPlayerContainer, Box, Container, DrawerContainer, ModalWrapper, StyledFullWidthVisible, StyledInput, StyledLabel, } from './styled';
import { Tag } from '../tag';
import { LinkInline, LinkStandalone } from '../link';
import { IconButton } from '../icon-button';
import { Button } from '../button';
import { IconFilledAddCircle, IconFilledEmail, IconFilledError, IconFilledFacebook, IconFilledInfo, IconFilledInstagram, IconFilledTwitter, IconOutlinedArrowForwardIos, } from '../icons';
import { Stack } from '../stack';
import { AssistiveText } from '../assistive-text';
import { Banner } from '../banner';
import { getSSRId } from '../utils';
import { Byline } from '../byline';
import { Caption } from '../caption';
import { Block } from '../block';
import { TextBlock } from '../text-block';
import { Headline } from '../headline';
import { DateTime } from '../date-time';
import { Divider } from '../divider';
import { StackChild } from '../stack-child';
import { EmailInput } from '../email-input';
import { Fieldset } from '../fieldset';
import { Checkbox } from '../checkbox';
import { Switch } from '../switch';
import { Flag } from '../flag';
import { Image } from '../image';
import { Form, FormInput, FormInputAssistiveText, FormInputLabel, FormInputTextField, } from '../form';
import { TextField } from '../text-field';
import { InlineMessage } from '../inline-message';
import { Menu, MenuItem } from '../menu';
import { OrderedList } from '../ordered-list';
import { Scroll } from '../scroll';
import { Select, SelectOption } from '../select';
import { ShareBar } from '../share-bar';
import { StatefulSlider } from '../slider';
import { Tab, Tabs } from '../tabs';
import { TitleBar } from '../title-bar';
import { Toast } from '../toast';
import { UnorderedList } from '../unordered-list';
import { AudioPlayer } from '../audio-player';
import { VolumeControl } from '../volume-control';
import { Drawer } from '../drawer';
import { Modal } from '../modal';
import { H1, P } from '../typography';
import { LabelFlag, returnLastLetterInCamelCase, renderCard, renderCardInset, useActiveState, CTABtn, } from './helper';
import { StructuredList, StructuredListCell, StructuredListItem, } from '../structured-list';
import { Cell, Grid } from '../grid';
import { Label } from '../label';
import { RadioButton } from '../radio-button';
import { AudioPlayerComposable, AudioPlayerPlayPauseButton, AudioPlayerSkipPreviousButton, AudioPlayerSkipNextButton, AudioPlayerSeekBar, AudioPlayerTimeDisplay, AudioPlayerReplayButton, AudioPlayerForwardButton, } from '../audio-player-composable/index';
import { calculateTime } from '../audio-player-composable/components/time-display/utils';
import { GridLayout } from '../grid-layout';
import { Tooltip } from '../tooltip';
export var checkboxStates = [
    ['default', {}],
    ['checked', { checked: true }],
    ['disabled', { state: 'disabled' }],
    ['checked-disabled', { checked: true, state: 'disabled' }],
    ['invalid', { state: 'invalid' }],
    ['invalid-checked', { state: 'invalid', checked: true }],
    ['valid', { state: 'valid' }],
    ['valid-checked', { state: 'valid', checked: true }],
];
export var switchStates = [
    ['default', {}],
    ['checked', { checked: true }],
    ['disabled', { state: 'disabled' }],
    ['checked-disabled', { checked: true, state: 'disabled' }],
];
export var radioButtonStates = [
    ['default', { checked: false }],
    ['checked', { checked: true }],
    ['disabled', { state: 'disabled' }],
    ['checked-disabled', { checked: true, state: 'disabled' }],
    ['invalid', { checked: false, state: 'invalid' }],
    ['invalid-checked', { checked: true, state: 'invalid' }],
    ['valid', { checked: false, state: 'valid' }],
    ['valid-checked', { checked: true, state: 'valid' }],
];
var listData = ["alpha", "bravo", "charlie", "delta", "echo", "foxtrot"];
var textFieldStates = [
    ['Default', { state: undefined }],
    ['Disabled', { state: 'disabled' }],
    ['Invalid', { state: 'invalid' }],
    ['Valid', { state: 'valid' }],
];
var tags = [
    'This',
    'Is',
    'A',
    'Stack',
    'Example',
    'showing',
    'multiple',
    'tags',
].map(function (item) { return React.createElement(Tag, { key: item }, item); });
var loremIpsum = [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quis erat sed velit tincidunt tincidunt. Sed gravida erat sit amet vulputate euismod. In id quam et sem dignissim mattis. Nullam sit amet ex maximus, egestas ligula vitae, pulvinar magna. Quisque nisi elit, mollis ut mauris dapibus, efficitur aliquam dui. Quisque auctor volutpat feugiat. Maecenas pretium elit ex, at condimentum leo luctus eu. Vivamus eget facilisis dolor, eu semper elit. Etiam rhoncus semper ex tincidunt ultrices. Nulla libero orci, egestas sed lectus ac, laoreet lacinia ipsum.',
];
var DrawerContent = function () { return (React.createElement(React.Fragment, null,
    React.createElement(P, null,
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id scelerisque sapien. Praesent mollis vestibulum nunc at blandit. Donec vitae venenatis mi. Aenean ut ornare diam, non facilisis diam. Pellentesque consequat mi in imperdiet ultrices. Sed vitae erat ac urna",
        ' ',
        React.createElement(LinkInline, { href: "/" }, "Test link"),
        " rutrum aliquet eu mattis ligula. Sed dapibus, enim sed tristique gravida, nisl dolor malesuada lacus, quis auctor dui mauris eu odio. Vivamus eu augue et enim varius viverra. Vivamus ut tellus iaculis, ullamcorper ligula sit amet, posuere ipsum."),
    React.createElement("div", null,
        React.createElement(Button, null, "Remind me later"),
        React.createElement(Button, null, "Ok")))); };
var modalContent = (React.createElement(Stack, { flow: "vertical-center", stackDistribution: "center", spaceInline: "space020" },
    React.createElement(H1, null, "You need an account"),
    React.createElement(P, null, "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam. (Double click for more text :) )")));
var arrowIcon = (React.createElement(Stack, { stackDistribution: "flex-end", flow: "horizontal-center" },
    React.createElement(IconOutlinedArrowForwardIos, { overrides: {
            size: 'iconSize010',
            stylePreset: 'inkContrast',
        } })));
var listItemWithThreeCells = (React.createElement(StructuredListItem, { ariaLabel: "list item" },
    React.createElement(StructuredListCell, null,
        React.createElement(TextBlock, { stylePreset: "inkContrast", typographyPreset: "utilityHeading010" }, "Label")),
    React.createElement(StructuredListCell, null,
        React.createElement(TextBlock, { stylePreset: "inkSubtle", typographyPreset: "utilityBody020" }, "A short description of the label")),
    React.createElement(StructuredListCell, null, arrowIcon)));
var buttonPresets = [
    'Primary',
    'Secondary',
    'Positive',
    'Negative',
    'Inverse',
];
var buttonKinds = ['Solid', 'Outlined', 'Minimal'];
var flagPresets = [
    'Primary',
    'Positive',
    'Negative',
    'Neutral',
    'Notice',
    'Informative',
    'Inverse',
];
var flagKinds = ['Solid', 'Minimal'];
var fullAudioPlayerAreas = "\n  seekBar seekBar seekBar \n  currentTime none totalTime  \n  volume controls link\n ";
/* istanbul ignore next */
var sleep = function (ms) { return new Promise(function (resolve) { return setTimeout(resolve, ms); }); };
/* istanbul ignore next */
var onSubmit = function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, sleep(2000)];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); };
/* istanbul ignore next */
var validateUserName = function (value) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, sleep(1000)];
            case 1:
                _a.sent();
                return [2 /*return*/, value !== 'newskit' || 'This username is already taken'];
        }
    });
}); };
export var scenarios = [
    {
        name: 'Assistive Text',
        component: function () { return (React.createElement(Stack, { spaceInline: "space110", spaceStack: "space060", flow: "horizontal-top", wrap: "wrap" }, textFieldStates.map(function (_a) {
            var id = _a[0], state = _a[1].state;
            return (React.createElement(Stack, { key: "".concat(id, "-assistive-text"), spaceInline: "space050" },
                React.createElement(LabelFlag, null, id),
                React.createElement(AssistiveText, { state: state }, "Assistive Text")));
        }))); },
    },
    {
        name: 'Audio Player',
        component: function () { return (React.createElement(React.Fragment, null,
            React.createElement(React.Fragment, null,
                React.createElement(Block, { spaceStack: "space050" },
                    React.createElement(LabelFlag, null, "Default")),
                React.createElement(AudioPlayerContainer, null,
                    React.createElement(AudioPlayer, { src: "https://newskit.co.uk/static/sample.mp3", title: "The Breakfast Show with Giles Coren", captionSrc: "captions.vtt", ariaLandmark: "audio player default" }))),
            React.createElement(React.Fragment, null,
                React.createElement(Block, { spaceStack: "space050" },
                    React.createElement(LabelFlag, null, "Live")),
                React.createElement(AudioPlayerContainer, null,
                    React.createElement(AudioPlayer, { src: "https://radio.talkradio.co.uk/stream", title: "The Breakfast Show with Giles Coren", live: true, captionSrc: "captions.vtt", ariaLandmark: "audio player live" }))))); },
    },
    {
        name: 'Audio Player Composable',
        component: function () { return (React.createElement(React.Fragment, null,
            React.createElement(React.Fragment, null,
                React.createElement(AudioPlayerComposable, { src: "https://newskit.co.uk/static/sample.mp3", ariaLandmark: "audio player skip buttons" },
                    React.createElement(GridLayout, { rowGap: "20px", areas: fullAudioPlayerAreas }, function (Areas) { return (React.createElement(React.Fragment, null,
                        React.createElement(Areas.SeekBar, null,
                            React.createElement(AudioPlayerSeekBar, null)),
                        React.createElement(Areas.CurrentTime, null,
                            React.createElement(AudioPlayerTimeDisplay, { format: function (_a) {
                                    var currentTime = _a.currentTime;
                                    return calculateTime(currentTime);
                                } })),
                        React.createElement(Areas.TotalTime, { justifySelf: "end" },
                            React.createElement(AudioPlayerTimeDisplay, { format: function (_a) {
                                    var duration = _a.duration;
                                    return calculateTime(duration);
                                } })),
                        React.createElement(Areas.Volume, { alignSelf: "center", justifySelf: "start" }, "Not yet"),
                        React.createElement(Areas.Link, { alignSelf: "center", justifySelf: "end" }, "Not yet"),
                        React.createElement(Areas.Controls, null,
                            React.createElement(GridLayout, { columns: "repeat(5, auto)", columnGap: "20px", justifyContent: "center", alignItems: "center" },
                                React.createElement(AudioPlayerSkipPreviousButton, null),
                                React.createElement(AudioPlayerReplayButton, null),
                                React.createElement(AudioPlayerPlayPauseButton, null),
                                React.createElement(AudioPlayerForwardButton, null),
                                React.createElement(AudioPlayerSkipNextButton, null))))); }))))); },
    },
    {
        name: 'Banner',
        component: function (_a) {
            var stylePreset = _a.stylePreset;
            return React.createElement(function () {
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
                var _a = React.useState(true), isActive = _a[0], setIsActive = _a[1];
                /* istanbul ignore next */
                var close = function () { return setIsActive(false); };
                /* istanbul ignore next */
                var action = function () {
                    /* istanbul ignore next */
                    console.log('CTA Called!');
                };
                return (React.createElement(Stack, { spaceInline: "space050", key: "".concat(stylePreset, "-banner") },
                    React.createElement(LabelFlag, null, returnLastLetterInCamelCase(stylePreset)),
                    React.createElement(Banner, { "aria-label": "Banner with ".concat(stylePreset), title: "Banner title", icon: React.createElement(IconFilledInfo, { overrides: {
                                size: 'iconSize020',
                                stylePreset: 'inkInverse',
                            } }), actions: [
                            function () { return (React.createElement(React.Fragment, null,
                                React.createElement(StyledFullWidthVisible, { xs: true, sm: true },
                                    React.createElement(CTABtn, { onClick: 
                                        /* istanbul ignore next */ function () {
                                            action();
                                        } }, "CTA button")),
                                React.createElement(StyledFullWidthVisible, { md: true, lg: true, xl: true },
                                    React.createElement(CTABtn, { size: "small", onClick: 
                                        /* istanbul ignore next */ function () {
                                            action();
                                        } }, "CTA button")))); },
                        ], onClose: close, overrides: { stylePreset: stylePreset } }, "Here goes a brief line or two describing the toast information.")));
            });
        },
    },
    {
        name: 'Block',
        component: function () { return (React.createElement(Container, { border: true, height: "15px" },
            React.createElement(Block, { stylePreset: "inkSubtle" }, "Block default without padding or margin"))); },
    },
    {
        name: 'Button',
        component: function () { return (React.createElement(Stack, { spaceInline: "space110", spaceStack: "space060", flow: "horizontal-top", wrap: "wrap" }, buttonPresets.map(function (preset) { return (React.createElement(Stack, { spaceInline: "space050", key: "".concat(preset, "-button") },
            React.createElement(LabelFlag, null, preset),
            React.createElement(Stack, { flow: "horizontal-top", spaceInline: "space090" }, buttonKinds.map(function (kind) { return (React.createElement(Stack, { spaceInline: "space050", key: "".concat(kind, "-button") },
                React.createElement(LabelFlag, { key: "flag", prefix: "secondary" }, kind),
                React.createElement(Button, { key: "button", overrides: { stylePreset: "button".concat(kind).concat(preset) } }, "Button"))); })))); }))); },
    },
    {
        name: 'Byline',
        component: function () { return (React.createElement(Byline, { bylineData: [
                {
                    author: 'Author',
                    href: 'https://www.thetimes.co.uk/profile/richard-lloyd-parry',
                    title: 'Job Title',
                    location: 'Location',
                    key: 1,
                },
            ] })); },
    },
    {
        name: 'Caption',
        component: function () { return (React.createElement(Stack, { flow: "horizontal-top", spaceInline: "space110", spaceStack: "space060", wrap: "wrap" },
            React.createElement(Stack, { spaceInline: "space020" },
                React.createElement(Image, { src: "/placeholder-3x2.png", alt: "Example Image", overrides: { width: '300px', height: '200px' }, placeholderIcon: true }),
                React.createElement(Caption, { creditText: "Credit text" }, "Image with Caption")),
            React.createElement(Stack, { spaceInline: "space020" },
                React.createElement(Image, { src: "/placeholder-3x2.png", alt: "Example Image", overrides: { width: '300px', height: '200px' }, placeholderIcon: true }),
                React.createElement(Caption, { creditText: "Credit text", overrides: {
                        paddingInline: {
                            xs: 'space040',
                            md: 'space050',
                        },
                        paddingBlock: {
                            xs: 'space040',
                            md: 'space050',
                        },
                    } }, "Image with Caption Inset")))); },
    },
    {
        name: 'Card',
        component: function () { return (React.createElement(Stack, { spaceInline: "space050" },
            React.createElement(Stack, { spaceInline: "space050" },
                React.createElement(LabelFlag, null, "Vertical"),
                React.createElement(Grid, { xsMargin: "space000" },
                    React.createElement(Cell, { xs: 12, sm: 6, md: 5 },
                        React.createElement(Stack, { spaceInline: "space050" },
                            React.createElement(LabelFlag, { prefix: "secondary" }, "Default"),
                            renderCard('vertical'))),
                    React.createElement(Cell, { xs: 12, sm: 6, md: 5 },
                        React.createElement(Stack, { spaceInline: "space050" },
                            React.createElement(LabelFlag, { prefix: "secondary" }, "Inset"),
                            renderCardInset('vertical'))))),
            React.createElement(Stack, { spaceInline: "space050" },
                React.createElement(LabelFlag, null, "Horizontal"),
                React.createElement(Grid, { xsMargin: "space000" },
                    React.createElement(Cell, { xs: 12, sm: 6, md: 5 },
                        React.createElement(Stack, { spaceInline: "space050" },
                            React.createElement(LabelFlag, { prefix: "secondary" }, "Default"),
                            renderCard('horizontal'))),
                    React.createElement(Cell, { xs: 12, sm: 6, md: 5 },
                        React.createElement(Stack, { spaceInline: "space050" },
                            React.createElement(LabelFlag, { prefix: "secondary" }, "Inset"),
                            renderCardInset('horizontal'))))),
            React.createElement(Stack, { spaceInline: "space050" },
                React.createElement(LabelFlag, null, "Reverse"),
                React.createElement(Grid, { xsMargin: "space000" },
                    React.createElement(Cell, { xs: 12, sm: 6, md: 5 }, renderCard('horizontal-reverse')))))); },
    },
    {
        name: 'Checkbox',
        component: function () { return (React.createElement(Stack, { spaceInline: "space100", spaceStack: "space060", flow: "horizontal-top", wrap: "wrap" }, checkboxStates.map(function (_a) {
            var id = _a[0], _b = _a[1], checked = _b.checked, props = __rest(_b, ["checked"]);
            return (React.createElement(Stack, { key: "".concat(id, "-checkbox"), spaceInline: "space050" },
                React.createElement(LabelFlag, null, id[0].toUpperCase() + id.slice(1)),
                React.createElement(Checkbox, __assign({}, props, { defaultChecked: checked, label: id, size: "medium" }))));
        }))); },
    },
    {
        name: 'Switch',
        component: function () { return (React.createElement(Stack, { spaceInline: "space100", spaceStack: "space060", flow: "horizontal-top", wrap: "wrap" }, switchStates.map(function (_a) {
            var id = _a[0], _b = _a[1], checked = _b.checked, props = __rest(_b, ["checked"]);
            return (React.createElement(Stack, { key: "".concat(id, "-checkbox"), spaceInline: "space050" },
                React.createElement(LabelFlag, null, id[0].toUpperCase() + id.slice(1)),
                React.createElement(Switch, __assign({}, props, { defaultChecked: checked, label: id, size: "medium" }))));
        }))); },
    },
    {
        name: 'RadioButton',
        component: function () { return (React.createElement(Stack, { spaceInline: "space100", spaceStack: "space060", flow: "horizontal-top", wrap: "wrap" }, radioButtonStates.map(function (_a) {
            var id = _a[0], _b = _a[1], checked = _b.checked, props = __rest(_b, ["checked"]);
            return (React.createElement(Stack, { key: "".concat(id, "-radiobutton"), spaceInline: "space050" },
                React.createElement(LabelFlag, null, id[0].toUpperCase() + id.slice(1)),
                React.createElement(RadioButton, __assign({}, props, { checked: checked, label: id, size: "medium" }))));
        }))); },
    },
    {
        name: 'Date Time',
        component: function () { return (React.createElement(Stack, { spaceInline: "space110", spaceStack: "space060", flow: "horizontal-top", wrap: "wrap" },
            React.createElement(Stack, { spaceInline: "space050" },
                React.createElement(LabelFlag, null, "Default"),
                React.createElement(DateTime, { date: "2017-01-01T04:32:00.000Z" })),
            React.createElement(Stack, { spaceInline: "space050" },
                React.createElement(LabelFlag, null, "Prefix"),
                React.createElement(DateTime, { date: "2017-01-01T04:32:00.000Z", prefix: "Updated:" })),
            React.createElement(Stack, { spaceInline: "space050" },
                React.createElement(LabelFlag, null, "Suffix"),
                React.createElement(DateTime, { date: "2017-01-01T04:32:00.000Z", suffix: "The Times" })),
            React.createElement(Stack, { spaceInline: "space050" },
                React.createElement(LabelFlag, null, "Prefix and Suffix"),
                React.createElement(DateTime, { date: "2017-01-01T04:32:00.000Z", suffix: "The Times", prefix: "Updated:" })))); },
    },
    {
        name: 'Divider',
        component: function () { return (React.createElement(Stack, { spaceInline: "space110", flow: "horizontal-top", wrap: "wrap" },
            React.createElement(Stack, { spaceInline: "space050" },
                React.createElement(LabelFlag, null, "Horizontal"),
                React.createElement(Container, { border: true, height: "50px", width: "" },
                    React.createElement(Stack, { stackDistribution: "center", flow: "vertical-center" },
                        React.createElement(IconFilledAddCircle, { overrides: { size: 'iconSize030' } }),
                        React.createElement(Divider, null),
                        React.createElement(IconFilledAddCircle, { overrides: { size: 'iconSize030' } })))),
            React.createElement(Stack, { spaceInline: "space050" },
                React.createElement(LabelFlag, null, "Vertical"),
                React.createElement(Container, { border: true, width: "50px" },
                    React.createElement(Stack, { flow: "horizontal-center", stackDistribution: "center" },
                        React.createElement(IconFilledAddCircle, { overrides: { size: 'iconSize030' } }),
                        React.createElement(StackChild, { alignSelf: "stretch" },
                            React.createElement(Divider, { vertical: true })),
                        React.createElement(IconFilledAddCircle, { overrides: { size: 'iconSize030' } })))))); },
    },
    {
        name: 'Email Input',
        component: function () { return (React.createElement(Stack, { spaceInline: "space110", flow: "horizontal-top", spaceStack: "space060", wrap: "wrap" },
            React.createElement(Stack, { spaceInline: "space050" },
                React.createElement(LabelFlag, null, "Default"),
                React.createElement(EmailInput, { label: "Email address", placeholder: "Enter your email address.", assistiveText: "Assistive text", icon: React.createElement(IconFilledEmail, { overrides: {
                            size: 'iconSize020',
                            stylePreset: 'inkSubtle',
                        } }), overrides: {
                        width: '360px',
                    } })),
            React.createElement(Stack, { spaceInline: "space050" },
                React.createElement(LabelFlag, null, "Submit validation"),
                React.createElement(Form, { onSubmit: onSubmit },
                    React.createElement(Block, { spaceStack: "space050" },
                        React.createElement(EmailInput, { label: "Email address", name: "email", assistiveText: "Assistive text", icon: React.createElement(IconFilledEmail, { overrides: {
                                    size: 'iconSize020',
                                    stylePreset: 'inkSubtle',
                                } }), rules: {
                                required: 'Required field',
                                pattern: {
                                    // eslint-disable-next-line no-useless-escape
                                    value: /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
                                    message: 'Please provide a valid email',
                                },
                            }, overrides: {
                                width: '360px',
                            } })),
                    React.createElement(Button, { type: "submit" }, "Submit"))))); },
    },
    {
        name: 'Fieldset',
        component: function () { return (React.createElement(Stack, { spaceInline: "space110", flow: "horizontal-top", spaceStack: "space060", wrap: "wrap" },
            React.createElement(Stack, { spaceInline: "space050" },
                React.createElement(LabelFlag, null, "Small"),
                React.createElement(Fieldset, { legend: "Legend", size: "small" },
                    React.createElement(Checkbox, { label: "Label", overrides: { spaceStack: 'space030' } }),
                    React.createElement(AssistiveText, null, "Assistive Text"))),
            React.createElement(Stack, { spaceInline: "space050" },
                React.createElement(LabelFlag, null, "Medium"),
                React.createElement(Fieldset, { legend: "Legend", size: "medium" },
                    React.createElement(Checkbox, { label: "Label", overrides: { spaceStack: 'space030' } }),
                    React.createElement(AssistiveText, null, "Assistive Text"))),
            React.createElement(Stack, { spaceInline: "space050" },
                React.createElement(LabelFlag, null, "Large"),
                React.createElement(Fieldset, { legend: "Legend", size: "large" },
                    React.createElement(Checkbox, { label: "Label", overrides: { spaceStack: 'space030' } }),
                    React.createElement(AssistiveText, null, "Assistive Text"))))); },
    },
    {
        name: 'Flag',
        component: function () { return (React.createElement(Stack, { spaceInline: "space110", spaceStack: "space060", flow: "horizontal-top", wrap: "wrap" }, flagPresets.map(function (preset) { return (React.createElement(Stack, { spaceInline: "space050", key: "".concat(preset, "-flag") },
            React.createElement(LabelFlag, null, preset),
            React.createElement(Stack, { flow: "horizontal-top", spaceInline: "space090" }, flagKinds.map(function (kind) { return (React.createElement(Stack, { spaceInline: "space050", key: "".concat(kind, "-flag") },
                React.createElement(LabelFlag, { key: "label-flag", prefix: "secondary" }, kind),
                React.createElement(Flag, { key: "flag", overrides: { stylePreset: "flag".concat(kind).concat(preset) } }, "Flag"))); })))); }))); },
    },
    {
        name: 'FormInput',
        component: function () { return (React.createElement(Grid, { xsMargin: "space000", smColumnGutter: "space100" },
            React.createElement(Cell, { xs: 12, sm: 6 },
                React.createElement(React.Fragment, null,
                    React.createElement(Block, { spaceStack: "space050" },
                        React.createElement(LabelFlag, null, "Default")),
                    React.createElement(FormInput, { name: "username-default", rules: {
                            required: 'Required field',
                            minLength: {
                                value: 5,
                                message: 'Usernames must be at least 5 characters long',
                            },
                            validate: validateUserName,
                        } },
                        React.createElement(FormInputLabel, null, "Username"),
                        React.createElement(FormInputTextField, { size: 'small' }),
                        React.createElement(FormInputAssistiveText, null, "Assistive Text")))),
            React.createElement(Cell, { xs: 12, sm: 6 },
                React.createElement(React.Fragment, null,
                    React.createElement(Block, { spaceStack: "space050" },
                        React.createElement(LabelFlag, null, "Valid")),
                    React.createElement(FormInput, { state: "valid", name: "email-valid", rules: {
                            required: 'Required field',
                            pattern: {
                                // eslint-disable-next-line no-useless-escape
                                value: /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
                                message: 'Please provide a valid email',
                            },
                        } },
                        React.createElement(FormInputLabel, null, "E-mail"),
                        React.createElement(FormInputTextField, { size: 'small' }),
                        React.createElement(FormInputAssistiveText, null, "Assistive Text")))),
            React.createElement(Cell, { xs: 12, sm: 6 },
                React.createElement(React.Fragment, null,
                    React.createElement(Block, { spaceStack: "space050" },
                        React.createElement(LabelFlag, null, "Invalid")),
                    React.createElement(FormInput, { state: "invalid", name: "username-invalid", rules: {
                            required: 'Required field',
                            minLength: {
                                value: 5,
                                message: 'Usernames must be at least 5 characters long',
                            },
                            validate: validateUserName,
                        } },
                        React.createElement(FormInputLabel, null, "Username"),
                        React.createElement(FormInputTextField, { size: 'small' }),
                        React.createElement(FormInputAssistiveText, null, "Assistive Text")))),
            React.createElement(Cell, { xs: 12, sm: 6 },
                React.createElement(React.Fragment, null,
                    React.createElement(Block, { spaceStack: "space050" },
                        React.createElement(LabelFlag, null, "Disabled")),
                    React.createElement(FormInput, { name: "password-disbled", state: "disabled" },
                        React.createElement(FormInputLabel, null, "Password"),
                        React.createElement(FormInputTextField, { state: "disabled", size: 'small' }),
                        React.createElement(FormInputAssistiveText, null, "Assistive Text")))))); },
    },
    {
        name: 'Headline',
        component: function () { return React.createElement(Headline, { kickerText: "Kicker" }, "Headline text"); },
    },
    {
        name: 'Icon Button',
        component: function () { return (React.createElement(Stack, { spaceInline: "space110", spaceStack: "space060", flow: "horizontal-top", wrap: "wrap" }, buttonPresets.map(function (preset) { return (React.createElement(Stack, { spaceInline: "space050", key: "".concat(preset, "-iconButton") },
            React.createElement(LabelFlag, null, preset),
            React.createElement(Stack, { flow: "horizontal-top", spaceInline: "space090" }, buttonKinds.map(function (kind) { return (React.createElement(Stack, { spaceInline: "space050", key: "".concat(kind, "-iconButton") },
                React.createElement(LabelFlag, { key: "label-flag", prefix: "secondary" }, kind),
                React.createElement(IconButton, { key: "icon-button", "aria-label": "Add icon", overrides: { stylePreset: "iconButton".concat(kind).concat(preset) } },
                    React.createElement(IconFilledAddCircle, { overrides: { size: 'iconSize010' } })))); })))); }))); },
    },
    {
        name: 'Inline Drawer',
        component: function () {
            return React.createElement(function () {
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
                var _a = useActiveState(), isActive = _a[0], open = _a[1], close = _a[2], toggle = _a[3];
                var _b = useState('left'), placement = _b[0], setPlacement = _b[1];
                /* istanbul ignore next */
                var onChangeValue = function (ev) {
                    return setPlacement(ev.target.value);
                };
                return (React.createElement("div", { "data-testid": "scrollable-drawer" },
                    React.createElement(Button, { onClick: toggle, "data-testid": "drawer-open-button" }, "Open Drawer"),
                    React.createElement(Block, { as: "span", paddingBlock: "space030", paddingInline: "space030", onChange: onChangeValue, stylePreset: "inkSubtle" },
                        React.createElement(StyledLabel, { htmlFor: "drawer-inline_top" },
                            React.createElement(StyledInput, { type: "radio", value: "top", id: "drawer-inline_top", name: "placement" }),
                            "Top"),
                        React.createElement(StyledLabel, { htmlFor: "drawer-inline_left" },
                            React.createElement(StyledInput, { type: "radio", value: "left", id: "drawer-inline_left", name: "placement", defaultChecked: true }),
                            "Left"),
                        React.createElement(StyledLabel, { htmlFor: "drawer-inline_bottom" },
                            React.createElement(StyledInput, { type: "radio", value: "bottom", id: "drawer-inline_bottom", name: "placement" }),
                            "Bottom"),
                        React.createElement(StyledLabel, { htmlFor: "drawer-inline_right" },
                            React.createElement(StyledInput, { type: "radio", value: "right", id: "drawer-inline_right", name: "placement" }),
                            "Right")),
                    React.createElement(DrawerContainer, null,
                        React.createElement(Drawer, { "aria-label": "Drawer example", open: isActive, onDismiss: close, inline: true, disableFocusTrap: true, hideOverlay: true, placement: placement, header: React.createElement(P, null, "Drawer Title"), overrides: {
                                panel: { minSize: '20vh', maxSize: '50%' },
                            } },
                            React.createElement(DrawerContent, null)),
                        React.createElement(P, null,
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut aliquet lorem massa, et lacinia ipsum tristique id. Phasellus sed posuere lacus. Pellentesque eu odio",
                            ' ',
                            React.createElement(LinkInline, { href: "/" }, "Test link 1"),
                            " sapien. Donec finibus pellentesque est porta dictum. Suspendisse venenatis vitae augue nec hendrerit. In ut quam tempus, feugiat risus quis, porta eros. Aliquam ultricies ac orci viverra gravida. Ut sodales odio tempor sodales viverra. In condimentum tincidunt fermentum. Nullam imperdiet est vel tincidunt suscipit. Vestibulum vel pulvinar nibh, at molestie lectus. Curabitur ultricies massa eu sem varius volutpat. Ut vitae purus et enim imperdiet finibus. Quisque posuere lacus a nunc tempor accumsan. Aliquam odio nunc, interdum."))));
            });
        },
    },
    {
        name: 'Inline Message',
        component: function (_a) {
            var stylePreset = _a.stylePreset;
            return (React.createElement(Stack, { spaceInline: "space050", key: "".concat(stylePreset, "-inlineMessage") },
                React.createElement(LabelFlag, { key: "label-flag" }, returnLastLetterInCamelCase(stylePreset)),
                React.createElement(InlineMessage, { title: "Inline Message Title", "aria-label": "Inline message with ".concat(stylePreset), icon: React.createElement(IconFilledInfo, { overrides: {
                            size: 'iconSize020',
                        } }), overrides: { stylePreset: stylePreset }, key: "inline-message" }, "Here goes a brief line or two describing the inline message information.")));
        },
    },
    {
        name: 'Inline Modal',
        component: function () {
            return React.createElement(function () {
                var _a = useActiveState(), isActive = _a[0], open = _a[1], close = _a[2];
                return (React.createElement("div", { "data-testid": "scrollable-modal" },
                    React.createElement(ModalWrapper, null,
                        React.createElement(Button, { onClick: open, "data-testid": "modal-open-button" }, "Open Modal"),
                        React.createElement(Box, null,
                            React.createElement(P, null, loremIpsum[0]),
                            React.createElement(P, null, loremIpsum[1])),
                        React.createElement(Modal, { open: isActive, onDismiss: close, header: React.createElement(P, null, "Modal Title"), hideOverlay: true, disableFocusTrap: true, inline: true, overrides: {
                                panel: { maxWidth: '60%' },
                            } }, modalContent))));
            });
        },
    },
    {
        name: 'Link',
        component: function () { return (React.createElement(Stack, { spaceInline: "space110", flow: "horizontal-top" },
            React.createElement(Stack, { spaceInline: "space050" },
                React.createElement(LabelFlag, null, "Inline"),
                React.createElement(LinkInline, { href: "/" }, "Inline link")),
            React.createElement(Stack, { spaceInline: "space050" },
                React.createElement(LabelFlag, null, "Standalone"),
                React.createElement(LinkStandalone, { href: "/" }, "Standalone link")))); },
    },
    {
        name: 'Menu',
        component: function () { return (React.createElement(Stack, { spaceInline: "space110", flow: "horizontal-top", spaceStack: "space060", wrap: "wrap" },
            React.createElement(Stack, { spaceInline: "space050" },
                React.createElement(LabelFlag, null, "Horizontal"),
                React.createElement(Menu, { "aria-label": "Menu ".concat(getSSRId()) },
                    React.createElement(MenuItem, { href: "/" }, "Menu Item 1"),
                    React.createElement(MenuItem, { href: "/" }, "Menu Item 2"),
                    React.createElement(MenuItem, { href: "/" }, "Menu Item 3"))),
            React.createElement(Stack, { spaceInline: "space050" },
                React.createElement(LabelFlag, null, "Vertical"),
                React.createElement(Menu, { vertical: true, "aria-label": "Menu ".concat(getSSRId()) },
                    React.createElement(MenuItem, { href: "/" }, "Menu Item 1"),
                    React.createElement(MenuItem, { href: "/" }, "Menu Item 2"),
                    React.createElement(MenuItem, { href: "/" }, "Menu Item 3"))))); },
    },
    {
        name: 'OrderedList',
        component: function () { return React.createElement(OrderedList, null, listData); },
    },
    {
        name: 'Scroll',
        component: function () { return (React.createElement(Stack, { spaceInline: "space110", flow: "horizontal-top", spaceStack: "space060", wrap: "wrap" },
            React.createElement(Stack, { spaceInline: "space050" },
                React.createElement(LabelFlag, null, "Horizontal"),
                React.createElement(Container, { "data-testid": "horizontal-scroll-component" },
                    React.createElement(Scroll, { controls: "static" },
                        React.createElement(Stack, { flow: "horizontal-center", spaceInline: "space020" }, tags)))),
            React.createElement(Stack, null,
                React.createElement(Container, { "data-testid": "vertical-scroll-component" },
                    React.createElement(Scroll, { vertical: true, controls: "static" },
                        React.createElement(Stack, { flow: "vertical-left", spaceInline: "space040" }, tags)))))); },
    },
    {
        name: 'Select',
        component: function () { return (React.createElement(Select, { overrides: { button: { width: '250px' } } }, listData.map(function (item) { return (React.createElement(SelectOption, { key: item.toString(), value: item }, item)); }))); },
    },
    {
        name: 'Share Bar',
        component: function () { return (React.createElement(Stack, { spaceInline: "space110", flow: "horizontal-top" },
            React.createElement(Stack, { spaceInline: "space050" },
                React.createElement(LabelFlag, null, "Horizontal"),
                React.createElement(ShareBar, { label: "Share", role: "region" }, [
                    ['Faceook', React.createElement(IconFilledFacebook, null)],
                    ['Twitter', React.createElement(IconFilledTwitter, null)],
                    ['Instagram', React.createElement(IconFilledInstagram, null)],
                    ['AddCircle', React.createElement(IconFilledAddCircle, null)],
                ].map(function (_a) {
                    var name = _a[0], icon = _a[1];
                    return (React.createElement(IconButton, { "aria-label": "Share on ".concat(name), overrides: { stylePreset: 'iconButtonMinimalPrimary' }, key: name }, icon));
                }))),
            React.createElement(Stack, { spaceInline: "space050" },
                React.createElement(LabelFlag, null, "Vertical"),
                React.createElement(ShareBar, { vertical: true, label: "Share", role: "region", "aria-label": "share bar with vertical items and label" }, [
                    ['Faceook', React.createElement(IconFilledFacebook, null)],
                    ['Twitter', React.createElement(IconFilledTwitter, null)],
                    ['Instagram', React.createElement(IconFilledInstagram, null)],
                    ['AddCircle', React.createElement(IconFilledAddCircle, null)],
                ].map(function (_a) {
                    var name = _a[0], icon = _a[1];
                    return (React.createElement(IconButton, { "aria-label": "Share on ".concat(name), overrides: { stylePreset: 'iconButtonMinimalPrimary' }, key: name }, icon));
                }))))); },
    },
    {
        name: 'Slider',
        component: function () { return (React.createElement(Stack, { spaceInline: "space110", flow: "horizontal-top", spaceStack: "space060", wrap: "wrap" },
            React.createElement(Stack, { spaceInline: "space050" },
                React.createElement(LabelFlag, { key: "label-flag" }, "With Labels"),
                React.createElement(Container, { key: "container" },
                    React.createElement(StatefulSlider, { values: [50], max: 100, min: 0, minLabel: "Label", maxLabel: "Label" }))),
            React.createElement(Stack, { spaceInline: "space050" },
                React.createElement(LabelFlag, { key: "label-flag" }, "Without labels"),
                React.createElement(Container, { key: "container" },
                    React.createElement(StatefulSlider, { values: [50], max: 100, min: 0 }))))); },
    },
    {
        name: 'Structured List',
        component: function () { return (React.createElement(StructuredList, { ariaLabel: "list" },
            listItemWithThreeCells,
            listItemWithThreeCells,
            listItemWithThreeCells)); },
    },
    {
        name: 'Tabs',
        component: function () { return (React.createElement(Stack, { spaceInline: "space110", flow: "horizontal-top", spaceStack: "space060", wrap: "wrap" },
            React.createElement(Stack, { spaceInline: "space050" },
                React.createElement(LabelFlag, null, "Horizontal"),
                React.createElement(Container, null,
                    React.createElement(Tabs, { divider: true, distribution: "equal" },
                        React.createElement(Tab, { label: "Tab 1" },
                            React.createElement(P, null, "Lorem ipsum")),
                        React.createElement(Tab, { label: "Tab 2" },
                            React.createElement(P, null, "Consectetur adipiscing")),
                        React.createElement(Tab, { label: "Tab 3" },
                            React.createElement(P, null, "Magna"))))),
            React.createElement(Stack, { spaceInline: "space050" },
                React.createElement(LabelFlag, null, "Vertical"),
                React.createElement(Container, { height: "400px" },
                    React.createElement(Tabs, { vertical: true, divider: true, distribution: "equal" },
                        React.createElement(Tab, { label: "Tab 1" },
                            React.createElement(P, null, "Lorem ipsum")),
                        React.createElement(Tab, { label: "Tab 2" },
                            React.createElement(P, null, "Consectetur adipiscing")),
                        React.createElement(Tab, { label: "Tab 3" },
                            React.createElement(P, null, "Magna"))))))); },
    },
    {
        name: 'Tag',
        component: function () { return (React.createElement(Stack, { spaceInline: "space110", flow: "horizontal-top", spaceStack: "space060", wrap: "wrap" },
            React.createElement(Stack, { spaceInline: "space050" },
                React.createElement(LabelFlag, null, "Default"),
                React.createElement(Tag, { href: "http://example.com" }, "Tag")),
            React.createElement(Stack, { spaceInline: "space050" },
                React.createElement(LabelFlag, null, "Disabled"),
                React.createElement(Tag, { href: "http://example.com", disabled: true }, "Disabled")))); },
    },
    {
        name: 'Text Block',
        component: function () { return (React.createElement(Container, { border: true },
            React.createElement(TextBlock, { stylePreset: "inkSubtle" }, "Telling the stories that matter, seeding ideas and stirring emotion. Capturing moments, meaning and magic. Making sense of the world. On the shoulders of giants, in the thick of it, behind the scenes and fighting the good fight."))); },
    },
    {
        name: 'Text Field',
        component: function () { return (React.createElement(Grid, null, textFieldStates.map(function (_a) {
            var id = _a[0], state = _a[1].state;
            return (React.createElement(Cell, { xs: 12, sm: 6, key: "".concat(id, "-textField") },
                React.createElement(Block, { spaceStack: "space050" },
                    React.createElement(LabelFlag, null, id)),
                React.createElement(Label, { htmlFor: id }, "Label"),
                React.createElement(TextField, { state: state, "aria-describedby": "".concat(id, "-at"), id: id, placeholder: "Enter your username" })));
        }))); },
    },
    {
        name: 'Title Bar',
        component: function () { return (React.createElement(React.Fragment, null,
            React.createElement(Block, { spaceStack: "space090" },
                React.createElement(Block, { spaceStack: "space050" },
                    React.createElement(LabelFlag, null, "Default")),
                React.createElement(TitleBar, null, "Title bar")),
            React.createElement(Block, null,
                React.createElement(Block, { spaceStack: "space050" },
                    React.createElement(LabelFlag, null, "With Standalone Link")),
                React.createElement(Container, { width: "80%" },
                    React.createElement(TitleBar, { actionItem: function () { return (React.createElement(LinkStandalone, { href: "/" }, "Standalone Link")); } }, "Title Bar"))))); },
    },
    {
        name: 'Toast',
        component: function (_a) {
            var stylePreset = _a.stylePreset;
            return (React.createElement(Stack, { spaceInline: "space070", key: "".concat(stylePreset, "-toast") },
                React.createElement(Stack, { spaceInline: "space050" },
                    React.createElement(LabelFlag, { key: "label-flag" }, returnLastLetterInCamelCase(stylePreset)),
                    React.createElement(Toast, { overrides: { stylePreset: stylePreset, maxWidth: '100%' }, key: "toast", actions: function () { return (React.createElement(Button, { size: "small", overrides: { stylePreset: 'buttonMinimalInverse' } }, "Undo")); }, icon: React.createElement(IconFilledError, { overrides: {
                                size: 'iconSize020',
                            } }) }, "Here goes a brief line or two describing the toast information."))));
        },
    },
    {
        name: 'Tooltip',
        component: function () { return (React.createElement(Stack, { spaceInline: "space110", flow: "horizontal-top" },
            React.createElement(Stack, { spaceInline: "space050" },
                React.createElement(LabelFlag, null, "With Icon Button Right Placement"),
                React.createElement(Tooltip, { content: "Share", asLabel: true, placement: "right", trigger: ['focus', 'hover'] },
                    React.createElement(IconButton, { size: "small", overrides: { stylePreset: 'iconButtonOutlinedPrimary' } },
                        React.createElement(IconFilledTwitter, null)))),
            React.createElement(Stack, { spaceInline: "space050" },
                React.createElement(LabelFlag, null, "With Inline Link Bottom Placement"),
                React.createElement(Tooltip, { content: "Lorem ipsum dolor sit amet", placement: "bottom", trigger: ['focus', 'hover'] },
                    React.createElement(LinkInline, { href: "/" }, "Inline link"))),
            React.createElement(Stack, { spaceInline: "space050" },
                React.createElement(LabelFlag, null, "With Button Top Placement"),
                React.createElement(Tooltip, { content: "Lorem ipsum dolor sit amet", placement: "top", trigger: ['focus', 'hover'] },
                    React.createElement(Button, { size: "small", overrides: { stylePreset: 'buttonOutlinedPrimary' } }, "Button"))))); },
    },
    {
        name: 'UnorderedList',
        component: function () { return (React.createElement(Stack, { spaceInline: "space110", flow: "horizontal-top" },
            React.createElement(Stack, { spaceInline: "space050" },
                React.createElement(LabelFlag, null, "Horizontal"),
                React.createElement(UnorderedList, { listItemMarker: IconFilledAddCircle }, listData)),
            React.createElement(Stack, { spaceInline: "space050" },
                React.createElement(LabelFlag, null, "Without marker"),
                React.createElement(UnorderedList, null, listData)))); },
    },
    {
        name: 'Volume Control',
        component: function () {
            return React.createElement(function () {
                var _a = useState(0), stateVolume = _a[0], setVolume = _a[1];
                var _b = useState(0), stateVerticalVolume = _b[0], setVerticalVolume = _b[1];
                return (React.createElement(Stack, { spaceInline: "space110", flow: "horizontal-top", spaceStack: "space060", wrap: "wrap" },
                    React.createElement(Stack, { spaceInline: "space050" },
                        React.createElement(LabelFlag, null, "Horizontal"),
                        React.createElement(Container, null,
                            React.createElement(VolumeControl, { volume: stateVolume, onChange: 
                                /* istanbul ignore next */ function (newValues) {
                                    /* istanbul ignore next */
                                    setVolume(newValues);
                                } }))),
                    React.createElement(Stack, { spaceInline: "space050" },
                        React.createElement(LabelFlag, null, "Vertical"),
                        React.createElement(Container, { height: "300px" },
                            React.createElement(VolumeControl, { vertical: true, volume: stateVerticalVolume, onChange: 
                                /* istanbul ignore next */ function (newValues) {
                                    /* istanbul ignore next */
                                    setVerticalVolume(newValues);
                                } })))));
            });
        },
    },
];
//# sourceMappingURL=scenarios.js.map