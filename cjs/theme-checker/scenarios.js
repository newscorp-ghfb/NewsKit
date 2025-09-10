"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.scenarios = exports.radioButtonStates = exports.switchStates = exports.checkboxStates = void 0;
var tslib_1 = require("tslib");
/* istanbul ignore file */
var react_1 = tslib_1.__importStar(require("react"));
var styled_1 = require("./styled");
var tag_1 = require("../tag");
var link_1 = require("../link");
var icon_button_1 = require("../icon-button");
var button_1 = require("../button");
var icons_1 = require("../icons");
var stack_1 = require("../stack");
var assistive_text_1 = require("../assistive-text");
var banner_1 = require("../banner");
var utils_1 = require("../utils");
var byline_1 = require("../byline");
var caption_1 = require("../caption");
var block_1 = require("../block");
var text_block_1 = require("../text-block");
var headline_1 = require("../headline");
var date_time_1 = require("../date-time");
var divider_1 = require("../divider");
var stack_child_1 = require("../stack-child");
var email_input_1 = require("../email-input");
var fieldset_1 = require("../fieldset");
var checkbox_1 = require("../checkbox");
var switch_1 = require("../switch");
var flag_1 = require("../flag");
var image_1 = require("../image");
var form_1 = require("../form");
var text_field_1 = require("../text-field");
var inline_message_1 = require("../inline-message");
var menu_1 = require("../menu");
var ordered_list_1 = require("../ordered-list");
var scroll_1 = require("../scroll");
var select_1 = require("../select");
var share_bar_1 = require("../share-bar");
var slider_1 = require("../slider");
var tabs_1 = require("../tabs");
var title_bar_1 = require("../title-bar");
var toast_1 = require("../toast");
var unordered_list_1 = require("../unordered-list");
var audio_player_1 = require("../audio-player");
var volume_control_1 = require("../volume-control");
var drawer_1 = require("../drawer");
var modal_1 = require("../modal");
var typography_1 = require("../typography");
var helper_1 = require("./helper");
var structured_list_1 = require("../structured-list");
var grid_1 = require("../grid");
var label_1 = require("../label");
var radio_button_1 = require("../radio-button");
var index_1 = require("../audio-player-composable/index");
var utils_2 = require("../audio-player-composable/components/time-display/utils");
var grid_layout_1 = require("../grid-layout");
var tooltip_1 = require("../tooltip");
exports.checkboxStates = [
    ['default', {}],
    ['checked', { checked: true }],
    ['disabled', { state: 'disabled' }],
    ['checked-disabled', { checked: true, state: 'disabled' }],
    ['invalid', { state: 'invalid' }],
    ['invalid-checked', { state: 'invalid', checked: true }],
    ['valid', { state: 'valid' }],
    ['valid-checked', { state: 'valid', checked: true }],
];
exports.switchStates = [
    ['default', {}],
    ['checked', { checked: true }],
    ['disabled', { state: 'disabled' }],
    ['checked-disabled', { checked: true, state: 'disabled' }],
];
exports.radioButtonStates = [
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
].map(function (item) { return react_1.default.createElement(tag_1.Tag, { key: item }, item); });
var loremIpsum = [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quis erat sed velit tincidunt tincidunt. Sed gravida erat sit amet vulputate euismod. In id quam et sem dignissim mattis. Nullam sit amet ex maximus, egestas ligula vitae, pulvinar magna. Quisque nisi elit, mollis ut mauris dapibus, efficitur aliquam dui. Quisque auctor volutpat feugiat. Maecenas pretium elit ex, at condimentum leo luctus eu. Vivamus eget facilisis dolor, eu semper elit. Etiam rhoncus semper ex tincidunt ultrices. Nulla libero orci, egestas sed lectus ac, laoreet lacinia ipsum.',
];
var DrawerContent = function () { return (react_1.default.createElement(react_1.default.Fragment, null,
    react_1.default.createElement(typography_1.P, null,
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id scelerisque sapien. Praesent mollis vestibulum nunc at blandit. Donec vitae venenatis mi. Aenean ut ornare diam, non facilisis diam. Pellentesque consequat mi in imperdiet ultrices. Sed vitae erat ac urna",
        ' ',
        react_1.default.createElement(link_1.LinkInline, { href: "/" }, "Test link"),
        " rutrum aliquet eu mattis ligula. Sed dapibus, enim sed tristique gravida, nisl dolor malesuada lacus, quis auctor dui mauris eu odio. Vivamus eu augue et enim varius viverra. Vivamus ut tellus iaculis, ullamcorper ligula sit amet, posuere ipsum."),
    react_1.default.createElement("div", null,
        react_1.default.createElement(button_1.Button, null, "Remind me later"),
        react_1.default.createElement(button_1.Button, null, "Ok")))); };
var modalContent = (react_1.default.createElement(stack_1.Stack, { flow: "vertical-center", stackDistribution: "center", spaceInline: "space020" },
    react_1.default.createElement(typography_1.H1, null, "You need an account"),
    react_1.default.createElement(typography_1.P, null, "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam. (Double click for more text :) )")));
var arrowIcon = (react_1.default.createElement(stack_1.Stack, { stackDistribution: "flex-end", flow: "horizontal-center" },
    react_1.default.createElement(icons_1.IconOutlinedArrowForwardIos, { overrides: {
            size: 'iconSize010',
            stylePreset: 'inkContrast',
        } })));
var listItemWithThreeCells = (react_1.default.createElement(structured_list_1.StructuredListItem, { ariaLabel: "list item" },
    react_1.default.createElement(structured_list_1.StructuredListCell, null,
        react_1.default.createElement(text_block_1.TextBlock, { stylePreset: "inkContrast", typographyPreset: "utilityHeading010" }, "Label")),
    react_1.default.createElement(structured_list_1.StructuredListCell, null,
        react_1.default.createElement(text_block_1.TextBlock, { stylePreset: "inkSubtle", typographyPreset: "utilityBody020" }, "A short description of the label")),
    react_1.default.createElement(structured_list_1.StructuredListCell, null, arrowIcon)));
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
var onSubmit = function () { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    return tslib_1.__generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, sleep(2000)];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); };
/* istanbul ignore next */
var validateUserName = function (value) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    return tslib_1.__generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, sleep(1000)];
            case 1:
                _a.sent();
                return [2 /*return*/, value !== 'newskit' || 'This username is already taken'];
        }
    });
}); };
exports.scenarios = [
    {
        name: 'Assistive Text',
        component: function () { return (react_1.default.createElement(stack_1.Stack, { spaceInline: "space110", spaceStack: "space060", flow: "horizontal-top", wrap: "wrap" }, textFieldStates.map(function (_a) {
            var id = _a[0], state = _a[1].state;
            return (react_1.default.createElement(stack_1.Stack, { key: "".concat(id, "-assistive-text"), spaceInline: "space050" },
                react_1.default.createElement(helper_1.LabelFlag, null, id),
                react_1.default.createElement(assistive_text_1.AssistiveText, { state: state }, "Assistive Text")));
        }))); },
    },
    {
        name: 'Audio Player',
        component: function () { return (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement(block_1.Block, { spaceStack: "space050" },
                    react_1.default.createElement(helper_1.LabelFlag, null, "Default")),
                react_1.default.createElement(styled_1.AudioPlayerContainer, null,
                    react_1.default.createElement(audio_player_1.AudioPlayer, { src: "https://newskit.co.uk/static/sample.mp3", title: "The Breakfast Show with Giles Coren", captionSrc: "captions.vtt", ariaLandmark: "audio player default" }))),
            react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement(block_1.Block, { spaceStack: "space050" },
                    react_1.default.createElement(helper_1.LabelFlag, null, "Live")),
                react_1.default.createElement(styled_1.AudioPlayerContainer, null,
                    react_1.default.createElement(audio_player_1.AudioPlayer, { src: "https://radio.talkradio.co.uk/stream", title: "The Breakfast Show with Giles Coren", live: true, captionSrc: "captions.vtt", ariaLandmark: "audio player live" }))))); },
    },
    {
        name: 'Audio Player Composable',
        component: function () { return (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement(index_1.AudioPlayerComposable, { src: "https://newskit.co.uk/static/sample.mp3", ariaLandmark: "audio player skip buttons" },
                    react_1.default.createElement(grid_layout_1.GridLayout, { rowGap: "20px", areas: fullAudioPlayerAreas }, function (Areas) { return (react_1.default.createElement(react_1.default.Fragment, null,
                        react_1.default.createElement(Areas.SeekBar, null,
                            react_1.default.createElement(index_1.AudioPlayerSeekBar, null)),
                        react_1.default.createElement(Areas.CurrentTime, null,
                            react_1.default.createElement(index_1.AudioPlayerTimeDisplay, { format: function (_a) {
                                    var currentTime = _a.currentTime;
                                    return (0, utils_2.calculateTime)(currentTime);
                                } })),
                        react_1.default.createElement(Areas.TotalTime, { justifySelf: "end" },
                            react_1.default.createElement(index_1.AudioPlayerTimeDisplay, { format: function (_a) {
                                    var duration = _a.duration;
                                    return (0, utils_2.calculateTime)(duration);
                                } })),
                        react_1.default.createElement(Areas.Volume, { alignSelf: "center", justifySelf: "start" }, "Not yet"),
                        react_1.default.createElement(Areas.Link, { alignSelf: "center", justifySelf: "end" }, "Not yet"),
                        react_1.default.createElement(Areas.Controls, null,
                            react_1.default.createElement(grid_layout_1.GridLayout, { columns: "repeat(5, auto)", columnGap: "20px", justifyContent: "center", alignItems: "center" },
                                react_1.default.createElement(index_1.AudioPlayerSkipPreviousButton, null),
                                react_1.default.createElement(index_1.AudioPlayerReplayButton, null),
                                react_1.default.createElement(index_1.AudioPlayerPlayPauseButton, null),
                                react_1.default.createElement(index_1.AudioPlayerForwardButton, null),
                                react_1.default.createElement(index_1.AudioPlayerSkipNextButton, null))))); }))))); },
    },
    {
        name: 'Banner',
        component: function (_a) {
            var stylePreset = _a.stylePreset;
            return react_1.default.createElement(function () {
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
                var _a = react_1.default.useState(true), isActive = _a[0], setIsActive = _a[1];
                /* istanbul ignore next */
                var close = function () { return setIsActive(false); };
                /* istanbul ignore next */
                var action = function () {
                    /* istanbul ignore next */
                    console.log('CTA Called!');
                };
                return (react_1.default.createElement(stack_1.Stack, { spaceInline: "space050", key: "".concat(stylePreset, "-banner") },
                    react_1.default.createElement(helper_1.LabelFlag, null, (0, helper_1.returnLastLetterInCamelCase)(stylePreset)),
                    react_1.default.createElement(banner_1.Banner, { "aria-label": "Banner with ".concat(stylePreset), title: "Banner title", icon: react_1.default.createElement(icons_1.IconFilledInfo, { overrides: {
                                size: 'iconSize020',
                                stylePreset: 'inkInverse',
                            } }), actions: [
                            function () { return (react_1.default.createElement(react_1.default.Fragment, null,
                                react_1.default.createElement(styled_1.StyledFullWidthVisible, { xs: true, sm: true },
                                    react_1.default.createElement(helper_1.CTABtn, { onClick: 
                                        /* istanbul ignore next */ function () {
                                            action();
                                        } }, "CTA button")),
                                react_1.default.createElement(styled_1.StyledFullWidthVisible, { md: true, lg: true, xl: true },
                                    react_1.default.createElement(helper_1.CTABtn, { size: "small", onClick: 
                                        /* istanbul ignore next */ function () {
                                            action();
                                        } }, "CTA button")))); },
                        ], onClose: close, overrides: { stylePreset: stylePreset } }, "Here goes a brief line or two describing the toast information.")));
            });
        },
    },
    {
        name: 'Block',
        component: function () { return (react_1.default.createElement(styled_1.Container, { border: true, height: "15px" },
            react_1.default.createElement(block_1.Block, { stylePreset: "inkSubtle" }, "Block default without padding or margin"))); },
    },
    {
        name: 'Button',
        component: function () { return (react_1.default.createElement(stack_1.Stack, { spaceInline: "space110", spaceStack: "space060", flow: "horizontal-top", wrap: "wrap" }, buttonPresets.map(function (preset) { return (react_1.default.createElement(stack_1.Stack, { spaceInline: "space050", key: "".concat(preset, "-button") },
            react_1.default.createElement(helper_1.LabelFlag, null, preset),
            react_1.default.createElement(stack_1.Stack, { flow: "horizontal-top", spaceInline: "space090" }, buttonKinds.map(function (kind) { return (react_1.default.createElement(stack_1.Stack, { spaceInline: "space050", key: "".concat(kind, "-button") },
                react_1.default.createElement(helper_1.LabelFlag, { key: "flag", prefix: "secondary" }, kind),
                react_1.default.createElement(button_1.Button, { key: "button", overrides: { stylePreset: "button".concat(kind).concat(preset) } }, "Button"))); })))); }))); },
    },
    {
        name: 'Byline',
        component: function () { return (react_1.default.createElement(byline_1.Byline, { bylineData: [
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
        component: function () { return (react_1.default.createElement(stack_1.Stack, { flow: "horizontal-top", spaceInline: "space110", spaceStack: "space060", wrap: "wrap" },
            react_1.default.createElement(stack_1.Stack, { spaceInline: "space020" },
                react_1.default.createElement(image_1.Image, { src: "/placeholder-3x2.png", alt: "Example Image", overrides: { width: '300px', height: '200px' }, placeholderIcon: true }),
                react_1.default.createElement(caption_1.Caption, { creditText: "Credit text" }, "Image with Caption")),
            react_1.default.createElement(stack_1.Stack, { spaceInline: "space020" },
                react_1.default.createElement(image_1.Image, { src: "/placeholder-3x2.png", alt: "Example Image", overrides: { width: '300px', height: '200px' }, placeholderIcon: true }),
                react_1.default.createElement(caption_1.Caption, { creditText: "Credit text", overrides: {
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
        component: function () { return (react_1.default.createElement(stack_1.Stack, { spaceInline: "space050" },
            react_1.default.createElement(stack_1.Stack, { spaceInline: "space050" },
                react_1.default.createElement(helper_1.LabelFlag, null, "Vertical"),
                react_1.default.createElement(grid_1.Grid, { xsMargin: "space000" },
                    react_1.default.createElement(grid_1.Cell, { xs: 12, sm: 6, md: 5 },
                        react_1.default.createElement(stack_1.Stack, { spaceInline: "space050" },
                            react_1.default.createElement(helper_1.LabelFlag, { prefix: "secondary" }, "Default"),
                            (0, helper_1.renderCard)('vertical'))),
                    react_1.default.createElement(grid_1.Cell, { xs: 12, sm: 6, md: 5 },
                        react_1.default.createElement(stack_1.Stack, { spaceInline: "space050" },
                            react_1.default.createElement(helper_1.LabelFlag, { prefix: "secondary" }, "Inset"),
                            (0, helper_1.renderCardInset)('vertical'))))),
            react_1.default.createElement(stack_1.Stack, { spaceInline: "space050" },
                react_1.default.createElement(helper_1.LabelFlag, null, "Horizontal"),
                react_1.default.createElement(grid_1.Grid, { xsMargin: "space000" },
                    react_1.default.createElement(grid_1.Cell, { xs: 12, sm: 6, md: 5 },
                        react_1.default.createElement(stack_1.Stack, { spaceInline: "space050" },
                            react_1.default.createElement(helper_1.LabelFlag, { prefix: "secondary" }, "Default"),
                            (0, helper_1.renderCard)('horizontal'))),
                    react_1.default.createElement(grid_1.Cell, { xs: 12, sm: 6, md: 5 },
                        react_1.default.createElement(stack_1.Stack, { spaceInline: "space050" },
                            react_1.default.createElement(helper_1.LabelFlag, { prefix: "secondary" }, "Inset"),
                            (0, helper_1.renderCardInset)('horizontal'))))),
            react_1.default.createElement(stack_1.Stack, { spaceInline: "space050" },
                react_1.default.createElement(helper_1.LabelFlag, null, "Reverse"),
                react_1.default.createElement(grid_1.Grid, { xsMargin: "space000" },
                    react_1.default.createElement(grid_1.Cell, { xs: 12, sm: 6, md: 5 }, (0, helper_1.renderCard)('horizontal-reverse')))))); },
    },
    {
        name: 'Checkbox',
        component: function () { return (react_1.default.createElement(stack_1.Stack, { spaceInline: "space100", spaceStack: "space060", flow: "horizontal-top", wrap: "wrap" }, exports.checkboxStates.map(function (_a) {
            var id = _a[0], _b = _a[1], checked = _b.checked, props = tslib_1.__rest(_b, ["checked"]);
            return (react_1.default.createElement(stack_1.Stack, { key: "".concat(id, "-checkbox"), spaceInline: "space050" },
                react_1.default.createElement(helper_1.LabelFlag, null, id[0].toUpperCase() + id.slice(1)),
                react_1.default.createElement(checkbox_1.Checkbox, tslib_1.__assign({}, props, { defaultChecked: checked, label: id, size: "medium" }))));
        }))); },
    },
    {
        name: 'Switch',
        component: function () { return (react_1.default.createElement(stack_1.Stack, { spaceInline: "space100", spaceStack: "space060", flow: "horizontal-top", wrap: "wrap" }, exports.switchStates.map(function (_a) {
            var id = _a[0], _b = _a[1], checked = _b.checked, props = tslib_1.__rest(_b, ["checked"]);
            return (react_1.default.createElement(stack_1.Stack, { key: "".concat(id, "-checkbox"), spaceInline: "space050" },
                react_1.default.createElement(helper_1.LabelFlag, null, id[0].toUpperCase() + id.slice(1)),
                react_1.default.createElement(switch_1.Switch, tslib_1.__assign({}, props, { defaultChecked: checked, label: id, size: "medium" }))));
        }))); },
    },
    {
        name: 'RadioButton',
        component: function () { return (react_1.default.createElement(stack_1.Stack, { spaceInline: "space100", spaceStack: "space060", flow: "horizontal-top", wrap: "wrap" }, exports.radioButtonStates.map(function (_a) {
            var id = _a[0], _b = _a[1], checked = _b.checked, props = tslib_1.__rest(_b, ["checked"]);
            return (react_1.default.createElement(stack_1.Stack, { key: "".concat(id, "-radiobutton"), spaceInline: "space050" },
                react_1.default.createElement(helper_1.LabelFlag, null, id[0].toUpperCase() + id.slice(1)),
                react_1.default.createElement(radio_button_1.RadioButton, tslib_1.__assign({}, props, { checked: checked, label: id, size: "medium" }))));
        }))); },
    },
    {
        name: 'Date Time',
        component: function () { return (react_1.default.createElement(stack_1.Stack, { spaceInline: "space110", spaceStack: "space060", flow: "horizontal-top", wrap: "wrap" },
            react_1.default.createElement(stack_1.Stack, { spaceInline: "space050" },
                react_1.default.createElement(helper_1.LabelFlag, null, "Default"),
                react_1.default.createElement(date_time_1.DateTime, { date: "2017-01-01T04:32:00.000Z" })),
            react_1.default.createElement(stack_1.Stack, { spaceInline: "space050" },
                react_1.default.createElement(helper_1.LabelFlag, null, "Prefix"),
                react_1.default.createElement(date_time_1.DateTime, { date: "2017-01-01T04:32:00.000Z", prefix: "Updated:" })),
            react_1.default.createElement(stack_1.Stack, { spaceInline: "space050" },
                react_1.default.createElement(helper_1.LabelFlag, null, "Suffix"),
                react_1.default.createElement(date_time_1.DateTime, { date: "2017-01-01T04:32:00.000Z", suffix: "The Times" })),
            react_1.default.createElement(stack_1.Stack, { spaceInline: "space050" },
                react_1.default.createElement(helper_1.LabelFlag, null, "Prefix and Suffix"),
                react_1.default.createElement(date_time_1.DateTime, { date: "2017-01-01T04:32:00.000Z", suffix: "The Times", prefix: "Updated:" })))); },
    },
    {
        name: 'Divider',
        component: function () { return (react_1.default.createElement(stack_1.Stack, { spaceInline: "space110", flow: "horizontal-top", wrap: "wrap" },
            react_1.default.createElement(stack_1.Stack, { spaceInline: "space050" },
                react_1.default.createElement(helper_1.LabelFlag, null, "Horizontal"),
                react_1.default.createElement(styled_1.Container, { border: true, height: "50px", width: "" },
                    react_1.default.createElement(stack_1.Stack, { stackDistribution: "center", flow: "vertical-center" },
                        react_1.default.createElement(icons_1.IconFilledAddCircle, { overrides: { size: 'iconSize030' } }),
                        react_1.default.createElement(divider_1.Divider, null),
                        react_1.default.createElement(icons_1.IconFilledAddCircle, { overrides: { size: 'iconSize030' } })))),
            react_1.default.createElement(stack_1.Stack, { spaceInline: "space050" },
                react_1.default.createElement(helper_1.LabelFlag, null, "Vertical"),
                react_1.default.createElement(styled_1.Container, { border: true, width: "50px" },
                    react_1.default.createElement(stack_1.Stack, { flow: "horizontal-center", stackDistribution: "center" },
                        react_1.default.createElement(icons_1.IconFilledAddCircle, { overrides: { size: 'iconSize030' } }),
                        react_1.default.createElement(stack_child_1.StackChild, { alignSelf: "stretch" },
                            react_1.default.createElement(divider_1.Divider, { vertical: true })),
                        react_1.default.createElement(icons_1.IconFilledAddCircle, { overrides: { size: 'iconSize030' } })))))); },
    },
    {
        name: 'Email Input',
        component: function () { return (react_1.default.createElement(stack_1.Stack, { spaceInline: "space110", flow: "horizontal-top", spaceStack: "space060", wrap: "wrap" },
            react_1.default.createElement(stack_1.Stack, { spaceInline: "space050" },
                react_1.default.createElement(helper_1.LabelFlag, null, "Default"),
                react_1.default.createElement(email_input_1.EmailInput, { label: "Email address", placeholder: "Enter your email address.", assistiveText: "Assistive text", icon: react_1.default.createElement(icons_1.IconFilledEmail, { overrides: {
                            size: 'iconSize020',
                            stylePreset: 'inkSubtle',
                        } }), overrides: {
                        width: '360px',
                    } })),
            react_1.default.createElement(stack_1.Stack, { spaceInline: "space050" },
                react_1.default.createElement(helper_1.LabelFlag, null, "Submit validation"),
                react_1.default.createElement(form_1.Form, { onSubmit: onSubmit },
                    react_1.default.createElement(block_1.Block, { spaceStack: "space050" },
                        react_1.default.createElement(email_input_1.EmailInput, { label: "Email address", name: "email", assistiveText: "Assistive text", icon: react_1.default.createElement(icons_1.IconFilledEmail, { overrides: {
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
                    react_1.default.createElement(button_1.Button, { type: "submit" }, "Submit"))))); },
    },
    {
        name: 'Fieldset',
        component: function () { return (react_1.default.createElement(stack_1.Stack, { spaceInline: "space110", flow: "horizontal-top", spaceStack: "space060", wrap: "wrap" },
            react_1.default.createElement(stack_1.Stack, { spaceInline: "space050" },
                react_1.default.createElement(helper_1.LabelFlag, null, "Small"),
                react_1.default.createElement(fieldset_1.Fieldset, { legend: "Legend", size: "small" },
                    react_1.default.createElement(checkbox_1.Checkbox, { label: "Label", overrides: { spaceStack: 'space030' } }),
                    react_1.default.createElement(assistive_text_1.AssistiveText, null, "Assistive Text"))),
            react_1.default.createElement(stack_1.Stack, { spaceInline: "space050" },
                react_1.default.createElement(helper_1.LabelFlag, null, "Medium"),
                react_1.default.createElement(fieldset_1.Fieldset, { legend: "Legend", size: "medium" },
                    react_1.default.createElement(checkbox_1.Checkbox, { label: "Label", overrides: { spaceStack: 'space030' } }),
                    react_1.default.createElement(assistive_text_1.AssistiveText, null, "Assistive Text"))),
            react_1.default.createElement(stack_1.Stack, { spaceInline: "space050" },
                react_1.default.createElement(helper_1.LabelFlag, null, "Large"),
                react_1.default.createElement(fieldset_1.Fieldset, { legend: "Legend", size: "large" },
                    react_1.default.createElement(checkbox_1.Checkbox, { label: "Label", overrides: { spaceStack: 'space030' } }),
                    react_1.default.createElement(assistive_text_1.AssistiveText, null, "Assistive Text"))))); },
    },
    {
        name: 'Flag',
        component: function () { return (react_1.default.createElement(stack_1.Stack, { spaceInline: "space110", spaceStack: "space060", flow: "horizontal-top", wrap: "wrap" }, flagPresets.map(function (preset) { return (react_1.default.createElement(stack_1.Stack, { spaceInline: "space050", key: "".concat(preset, "-flag") },
            react_1.default.createElement(helper_1.LabelFlag, null, preset),
            react_1.default.createElement(stack_1.Stack, { flow: "horizontal-top", spaceInline: "space090" }, flagKinds.map(function (kind) { return (react_1.default.createElement(stack_1.Stack, { spaceInline: "space050", key: "".concat(kind, "-flag") },
                react_1.default.createElement(helper_1.LabelFlag, { key: "label-flag", prefix: "secondary" }, kind),
                react_1.default.createElement(flag_1.Flag, { key: "flag", overrides: { stylePreset: "flag".concat(kind).concat(preset) } }, "Flag"))); })))); }))); },
    },
    {
        name: 'FormInput',
        component: function () { return (react_1.default.createElement(grid_1.Grid, { xsMargin: "space000", smColumnGutter: "space100" },
            react_1.default.createElement(grid_1.Cell, { xs: 12, sm: 6 },
                react_1.default.createElement(react_1.default.Fragment, null,
                    react_1.default.createElement(block_1.Block, { spaceStack: "space050" },
                        react_1.default.createElement(helper_1.LabelFlag, null, "Default")),
                    react_1.default.createElement(form_1.FormInput, { name: "username-default", rules: {
                            required: 'Required field',
                            minLength: {
                                value: 5,
                                message: 'Usernames must be at least 5 characters long',
                            },
                            validate: validateUserName,
                        } },
                        react_1.default.createElement(form_1.FormInputLabel, null, "Username"),
                        react_1.default.createElement(form_1.FormInputTextField, { size: 'small' }),
                        react_1.default.createElement(form_1.FormInputAssistiveText, null, "Assistive Text")))),
            react_1.default.createElement(grid_1.Cell, { xs: 12, sm: 6 },
                react_1.default.createElement(react_1.default.Fragment, null,
                    react_1.default.createElement(block_1.Block, { spaceStack: "space050" },
                        react_1.default.createElement(helper_1.LabelFlag, null, "Valid")),
                    react_1.default.createElement(form_1.FormInput, { state: "valid", name: "email-valid", rules: {
                            required: 'Required field',
                            pattern: {
                                // eslint-disable-next-line no-useless-escape
                                value: /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
                                message: 'Please provide a valid email',
                            },
                        } },
                        react_1.default.createElement(form_1.FormInputLabel, null, "E-mail"),
                        react_1.default.createElement(form_1.FormInputTextField, { size: 'small' }),
                        react_1.default.createElement(form_1.FormInputAssistiveText, null, "Assistive Text")))),
            react_1.default.createElement(grid_1.Cell, { xs: 12, sm: 6 },
                react_1.default.createElement(react_1.default.Fragment, null,
                    react_1.default.createElement(block_1.Block, { spaceStack: "space050" },
                        react_1.default.createElement(helper_1.LabelFlag, null, "Invalid")),
                    react_1.default.createElement(form_1.FormInput, { state: "invalid", name: "username-invalid", rules: {
                            required: 'Required field',
                            minLength: {
                                value: 5,
                                message: 'Usernames must be at least 5 characters long',
                            },
                            validate: validateUserName,
                        } },
                        react_1.default.createElement(form_1.FormInputLabel, null, "Username"),
                        react_1.default.createElement(form_1.FormInputTextField, { size: 'small' }),
                        react_1.default.createElement(form_1.FormInputAssistiveText, null, "Assistive Text")))),
            react_1.default.createElement(grid_1.Cell, { xs: 12, sm: 6 },
                react_1.default.createElement(react_1.default.Fragment, null,
                    react_1.default.createElement(block_1.Block, { spaceStack: "space050" },
                        react_1.default.createElement(helper_1.LabelFlag, null, "Disabled")),
                    react_1.default.createElement(form_1.FormInput, { name: "password-disbled", state: "disabled" },
                        react_1.default.createElement(form_1.FormInputLabel, null, "Password"),
                        react_1.default.createElement(form_1.FormInputTextField, { state: "disabled", size: 'small' }),
                        react_1.default.createElement(form_1.FormInputAssistiveText, null, "Assistive Text")))))); },
    },
    {
        name: 'Headline',
        component: function () { return react_1.default.createElement(headline_1.Headline, { kickerText: "Kicker" }, "Headline text"); },
    },
    {
        name: 'Icon Button',
        component: function () { return (react_1.default.createElement(stack_1.Stack, { spaceInline: "space110", spaceStack: "space060", flow: "horizontal-top", wrap: "wrap" }, buttonPresets.map(function (preset) { return (react_1.default.createElement(stack_1.Stack, { spaceInline: "space050", key: "".concat(preset, "-iconButton") },
            react_1.default.createElement(helper_1.LabelFlag, null, preset),
            react_1.default.createElement(stack_1.Stack, { flow: "horizontal-top", spaceInline: "space090" }, buttonKinds.map(function (kind) { return (react_1.default.createElement(stack_1.Stack, { spaceInline: "space050", key: "".concat(kind, "-iconButton") },
                react_1.default.createElement(helper_1.LabelFlag, { key: "label-flag", prefix: "secondary" }, kind),
                react_1.default.createElement(icon_button_1.IconButton, { key: "icon-button", "aria-label": "Add icon", overrides: { stylePreset: "iconButton".concat(kind).concat(preset) } },
                    react_1.default.createElement(icons_1.IconFilledAddCircle, { overrides: { size: 'iconSize010' } })))); })))); }))); },
    },
    {
        name: 'Inline Drawer',
        component: function () {
            return react_1.default.createElement(function () {
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
                var _a = (0, helper_1.useActiveState)(), isActive = _a[0], open = _a[1], close = _a[2], toggle = _a[3];
                var _b = (0, react_1.useState)('left'), placement = _b[0], setPlacement = _b[1];
                /* istanbul ignore next */
                var onChangeValue = function (ev) {
                    return setPlacement(ev.target.value);
                };
                return (react_1.default.createElement("div", { "data-testid": "scrollable-drawer" },
                    react_1.default.createElement(button_1.Button, { onClick: toggle, "data-testid": "drawer-open-button" }, "Open Drawer"),
                    react_1.default.createElement(block_1.Block, { as: "span", paddingBlock: "space030", paddingInline: "space030", onChange: onChangeValue, stylePreset: "inkSubtle" },
                        react_1.default.createElement(styled_1.StyledLabel, { htmlFor: "drawer-inline_top" },
                            react_1.default.createElement(styled_1.StyledInput, { type: "radio", value: "top", id: "drawer-inline_top", name: "placement" }),
                            "Top"),
                        react_1.default.createElement(styled_1.StyledLabel, { htmlFor: "drawer-inline_left" },
                            react_1.default.createElement(styled_1.StyledInput, { type: "radio", value: "left", id: "drawer-inline_left", name: "placement", defaultChecked: true }),
                            "Left"),
                        react_1.default.createElement(styled_1.StyledLabel, { htmlFor: "drawer-inline_bottom" },
                            react_1.default.createElement(styled_1.StyledInput, { type: "radio", value: "bottom", id: "drawer-inline_bottom", name: "placement" }),
                            "Bottom"),
                        react_1.default.createElement(styled_1.StyledLabel, { htmlFor: "drawer-inline_right" },
                            react_1.default.createElement(styled_1.StyledInput, { type: "radio", value: "right", id: "drawer-inline_right", name: "placement" }),
                            "Right")),
                    react_1.default.createElement(styled_1.DrawerContainer, null,
                        react_1.default.createElement(drawer_1.Drawer, { "aria-label": "Drawer example", open: isActive, onDismiss: close, inline: true, disableFocusTrap: true, hideOverlay: true, placement: placement, header: react_1.default.createElement(typography_1.P, null, "Drawer Title"), overrides: {
                                panel: { minSize: '20vh', maxSize: '50%' },
                            } },
                            react_1.default.createElement(DrawerContent, null)),
                        react_1.default.createElement(typography_1.P, null,
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut aliquet lorem massa, et lacinia ipsum tristique id. Phasellus sed posuere lacus. Pellentesque eu odio",
                            ' ',
                            react_1.default.createElement(link_1.LinkInline, { href: "/" }, "Test link 1"),
                            " sapien. Donec finibus pellentesque est porta dictum. Suspendisse venenatis vitae augue nec hendrerit. In ut quam tempus, feugiat risus quis, porta eros. Aliquam ultricies ac orci viverra gravida. Ut sodales odio tempor sodales viverra. In condimentum tincidunt fermentum. Nullam imperdiet est vel tincidunt suscipit. Vestibulum vel pulvinar nibh, at molestie lectus. Curabitur ultricies massa eu sem varius volutpat. Ut vitae purus et enim imperdiet finibus. Quisque posuere lacus a nunc tempor accumsan. Aliquam odio nunc, interdum."))));
            });
        },
    },
    {
        name: 'Inline Message',
        component: function (_a) {
            var stylePreset = _a.stylePreset;
            return (react_1.default.createElement(stack_1.Stack, { spaceInline: "space050", key: "".concat(stylePreset, "-inlineMessage") },
                react_1.default.createElement(helper_1.LabelFlag, { key: "label-flag" }, (0, helper_1.returnLastLetterInCamelCase)(stylePreset)),
                react_1.default.createElement(inline_message_1.InlineMessage, { title: "Inline Message Title", "aria-label": "Inline message with ".concat(stylePreset), icon: react_1.default.createElement(icons_1.IconFilledInfo, { overrides: {
                            size: 'iconSize020',
                        } }), overrides: { stylePreset: stylePreset }, key: "inline-message" }, "Here goes a brief line or two describing the inline message information.")));
        },
    },
    {
        name: 'Inline Modal',
        component: function () {
            return react_1.default.createElement(function () {
                var _a = (0, helper_1.useActiveState)(), isActive = _a[0], open = _a[1], close = _a[2];
                return (react_1.default.createElement("div", { "data-testid": "scrollable-modal" },
                    react_1.default.createElement(styled_1.ModalWrapper, null,
                        react_1.default.createElement(button_1.Button, { onClick: open, "data-testid": "modal-open-button" }, "Open Modal"),
                        react_1.default.createElement(styled_1.Box, null,
                            react_1.default.createElement(typography_1.P, null, loremIpsum[0]),
                            react_1.default.createElement(typography_1.P, null, loremIpsum[1])),
                        react_1.default.createElement(modal_1.Modal, { open: isActive, onDismiss: close, header: react_1.default.createElement(typography_1.P, null, "Modal Title"), hideOverlay: true, disableFocusTrap: true, inline: true, overrides: {
                                panel: { maxWidth: '60%' },
                            } }, modalContent))));
            });
        },
    },
    {
        name: 'Link',
        component: function () { return (react_1.default.createElement(stack_1.Stack, { spaceInline: "space110", flow: "horizontal-top" },
            react_1.default.createElement(stack_1.Stack, { spaceInline: "space050" },
                react_1.default.createElement(helper_1.LabelFlag, null, "Inline"),
                react_1.default.createElement(link_1.LinkInline, { href: "/" }, "Inline link")),
            react_1.default.createElement(stack_1.Stack, { spaceInline: "space050" },
                react_1.default.createElement(helper_1.LabelFlag, null, "Standalone"),
                react_1.default.createElement(link_1.LinkStandalone, { href: "/" }, "Standalone link")))); },
    },
    {
        name: 'Menu',
        component: function () { return (react_1.default.createElement(stack_1.Stack, { spaceInline: "space110", flow: "horizontal-top", spaceStack: "space060", wrap: "wrap" },
            react_1.default.createElement(stack_1.Stack, { spaceInline: "space050" },
                react_1.default.createElement(helper_1.LabelFlag, null, "Horizontal"),
                react_1.default.createElement(menu_1.Menu, { "aria-label": "Menu ".concat((0, utils_1.getSSRId)()) },
                    react_1.default.createElement(menu_1.MenuItem, { href: "/" }, "Menu Item 1"),
                    react_1.default.createElement(menu_1.MenuItem, { href: "/" }, "Menu Item 2"),
                    react_1.default.createElement(menu_1.MenuItem, { href: "/" }, "Menu Item 3"))),
            react_1.default.createElement(stack_1.Stack, { spaceInline: "space050" },
                react_1.default.createElement(helper_1.LabelFlag, null, "Vertical"),
                react_1.default.createElement(menu_1.Menu, { vertical: true, "aria-label": "Menu ".concat((0, utils_1.getSSRId)()) },
                    react_1.default.createElement(menu_1.MenuItem, { href: "/" }, "Menu Item 1"),
                    react_1.default.createElement(menu_1.MenuItem, { href: "/" }, "Menu Item 2"),
                    react_1.default.createElement(menu_1.MenuItem, { href: "/" }, "Menu Item 3"))))); },
    },
    {
        name: 'OrderedList',
        component: function () { return react_1.default.createElement(ordered_list_1.OrderedList, null, listData); },
    },
    {
        name: 'Scroll',
        component: function () { return (react_1.default.createElement(stack_1.Stack, { spaceInline: "space110", flow: "horizontal-top", spaceStack: "space060", wrap: "wrap" },
            react_1.default.createElement(stack_1.Stack, { spaceInline: "space050" },
                react_1.default.createElement(helper_1.LabelFlag, null, "Horizontal"),
                react_1.default.createElement(styled_1.Container, { "data-testid": "horizontal-scroll-component" },
                    react_1.default.createElement(scroll_1.Scroll, { controls: "static" },
                        react_1.default.createElement(stack_1.Stack, { flow: "horizontal-center", spaceInline: "space020" }, tags)))),
            react_1.default.createElement(stack_1.Stack, null,
                react_1.default.createElement(styled_1.Container, { "data-testid": "vertical-scroll-component" },
                    react_1.default.createElement(scroll_1.Scroll, { vertical: true, controls: "static" },
                        react_1.default.createElement(stack_1.Stack, { flow: "vertical-left", spaceInline: "space040" }, tags)))))); },
    },
    {
        name: 'Select',
        component: function () { return (react_1.default.createElement(select_1.Select, { overrides: { button: { width: '250px' } } }, listData.map(function (item) { return (react_1.default.createElement(select_1.SelectOption, { key: item.toString(), value: item }, item)); }))); },
    },
    {
        name: 'Share Bar',
        component: function () { return (react_1.default.createElement(stack_1.Stack, { spaceInline: "space110", flow: "horizontal-top" },
            react_1.default.createElement(stack_1.Stack, { spaceInline: "space050" },
                react_1.default.createElement(helper_1.LabelFlag, null, "Horizontal"),
                react_1.default.createElement(share_bar_1.ShareBar, { label: "Share", role: "region" }, [
                    ['Faceook', react_1.default.createElement(icons_1.IconFilledFacebook, null)],
                    ['Twitter', react_1.default.createElement(icons_1.IconFilledTwitter, null)],
                    ['Instagram', react_1.default.createElement(icons_1.IconFilledInstagram, null)],
                    ['AddCircle', react_1.default.createElement(icons_1.IconFilledAddCircle, null)],
                ].map(function (_a) {
                    var name = _a[0], icon = _a[1];
                    return (react_1.default.createElement(icon_button_1.IconButton, { "aria-label": "Share on ".concat(name), overrides: { stylePreset: 'iconButtonMinimalPrimary' }, key: name }, icon));
                }))),
            react_1.default.createElement(stack_1.Stack, { spaceInline: "space050" },
                react_1.default.createElement(helper_1.LabelFlag, null, "Vertical"),
                react_1.default.createElement(share_bar_1.ShareBar, { vertical: true, label: "Share", role: "region", "aria-label": "share bar with vertical items and label" }, [
                    ['Faceook', react_1.default.createElement(icons_1.IconFilledFacebook, null)],
                    ['Twitter', react_1.default.createElement(icons_1.IconFilledTwitter, null)],
                    ['Instagram', react_1.default.createElement(icons_1.IconFilledInstagram, null)],
                    ['AddCircle', react_1.default.createElement(icons_1.IconFilledAddCircle, null)],
                ].map(function (_a) {
                    var name = _a[0], icon = _a[1];
                    return (react_1.default.createElement(icon_button_1.IconButton, { "aria-label": "Share on ".concat(name), overrides: { stylePreset: 'iconButtonMinimalPrimary' }, key: name }, icon));
                }))))); },
    },
    {
        name: 'Slider',
        component: function () { return (react_1.default.createElement(stack_1.Stack, { spaceInline: "space110", flow: "horizontal-top", spaceStack: "space060", wrap: "wrap" },
            react_1.default.createElement(stack_1.Stack, { spaceInline: "space050" },
                react_1.default.createElement(helper_1.LabelFlag, { key: "label-flag" }, "With Labels"),
                react_1.default.createElement(styled_1.Container, { key: "container" },
                    react_1.default.createElement(slider_1.StatefulSlider, { values: [50], max: 100, min: 0, minLabel: "Label", maxLabel: "Label" }))),
            react_1.default.createElement(stack_1.Stack, { spaceInline: "space050" },
                react_1.default.createElement(helper_1.LabelFlag, { key: "label-flag" }, "Without labels"),
                react_1.default.createElement(styled_1.Container, { key: "container" },
                    react_1.default.createElement(slider_1.StatefulSlider, { values: [50], max: 100, min: 0 }))))); },
    },
    {
        name: 'Structured List',
        component: function () { return (react_1.default.createElement(structured_list_1.StructuredList, { ariaLabel: "list" },
            listItemWithThreeCells,
            listItemWithThreeCells,
            listItemWithThreeCells)); },
    },
    {
        name: 'Tabs',
        component: function () { return (react_1.default.createElement(stack_1.Stack, { spaceInline: "space110", flow: "horizontal-top", spaceStack: "space060", wrap: "wrap" },
            react_1.default.createElement(stack_1.Stack, { spaceInline: "space050" },
                react_1.default.createElement(helper_1.LabelFlag, null, "Horizontal"),
                react_1.default.createElement(styled_1.Container, null,
                    react_1.default.createElement(tabs_1.Tabs, { divider: true, distribution: "equal" },
                        react_1.default.createElement(tabs_1.Tab, { label: "Tab 1" },
                            react_1.default.createElement(typography_1.P, null, "Lorem ipsum")),
                        react_1.default.createElement(tabs_1.Tab, { label: "Tab 2" },
                            react_1.default.createElement(typography_1.P, null, "Consectetur adipiscing")),
                        react_1.default.createElement(tabs_1.Tab, { label: "Tab 3" },
                            react_1.default.createElement(typography_1.P, null, "Magna"))))),
            react_1.default.createElement(stack_1.Stack, { spaceInline: "space050" },
                react_1.default.createElement(helper_1.LabelFlag, null, "Vertical"),
                react_1.default.createElement(styled_1.Container, { height: "400px" },
                    react_1.default.createElement(tabs_1.Tabs, { vertical: true, divider: true, distribution: "equal" },
                        react_1.default.createElement(tabs_1.Tab, { label: "Tab 1" },
                            react_1.default.createElement(typography_1.P, null, "Lorem ipsum")),
                        react_1.default.createElement(tabs_1.Tab, { label: "Tab 2" },
                            react_1.default.createElement(typography_1.P, null, "Consectetur adipiscing")),
                        react_1.default.createElement(tabs_1.Tab, { label: "Tab 3" },
                            react_1.default.createElement(typography_1.P, null, "Magna"))))))); },
    },
    {
        name: 'Tag',
        component: function () { return (react_1.default.createElement(stack_1.Stack, { spaceInline: "space110", flow: "horizontal-top", spaceStack: "space060", wrap: "wrap" },
            react_1.default.createElement(stack_1.Stack, { spaceInline: "space050" },
                react_1.default.createElement(helper_1.LabelFlag, null, "Default"),
                react_1.default.createElement(tag_1.Tag, { href: "http://example.com" }, "Tag")),
            react_1.default.createElement(stack_1.Stack, { spaceInline: "space050" },
                react_1.default.createElement(helper_1.LabelFlag, null, "Disabled"),
                react_1.default.createElement(tag_1.Tag, { href: "http://example.com", disabled: true }, "Disabled")))); },
    },
    {
        name: 'Text Block',
        component: function () { return (react_1.default.createElement(styled_1.Container, { border: true },
            react_1.default.createElement(text_block_1.TextBlock, { stylePreset: "inkSubtle" }, "Telling the stories that matter, seeding ideas and stirring emotion. Capturing moments, meaning and magic. Making sense of the world. On the shoulders of giants, in the thick of it, behind the scenes and fighting the good fight."))); },
    },
    {
        name: 'Text Field',
        component: function () { return (react_1.default.createElement(grid_1.Grid, null, textFieldStates.map(function (_a) {
            var id = _a[0], state = _a[1].state;
            return (react_1.default.createElement(grid_1.Cell, { xs: 12, sm: 6, key: "".concat(id, "-textField") },
                react_1.default.createElement(block_1.Block, { spaceStack: "space050" },
                    react_1.default.createElement(helper_1.LabelFlag, null, id)),
                react_1.default.createElement(label_1.Label, { htmlFor: id }, "Label"),
                react_1.default.createElement(text_field_1.TextField, { state: state, "aria-describedby": "".concat(id, "-at"), id: id, placeholder: "Enter your username" })));
        }))); },
    },
    {
        name: 'Title Bar',
        component: function () { return (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement(block_1.Block, { spaceStack: "space090" },
                react_1.default.createElement(block_1.Block, { spaceStack: "space050" },
                    react_1.default.createElement(helper_1.LabelFlag, null, "Default")),
                react_1.default.createElement(title_bar_1.TitleBar, null, "Title bar")),
            react_1.default.createElement(block_1.Block, null,
                react_1.default.createElement(block_1.Block, { spaceStack: "space050" },
                    react_1.default.createElement(helper_1.LabelFlag, null, "With Standalone Link")),
                react_1.default.createElement(styled_1.Container, { width: "80%" },
                    react_1.default.createElement(title_bar_1.TitleBar, { actionItem: function () { return (react_1.default.createElement(link_1.LinkStandalone, { href: "/" }, "Standalone Link")); } }, "Title Bar"))))); },
    },
    {
        name: 'Toast',
        component: function (_a) {
            var stylePreset = _a.stylePreset;
            return (react_1.default.createElement(stack_1.Stack, { spaceInline: "space070", key: "".concat(stylePreset, "-toast") },
                react_1.default.createElement(stack_1.Stack, { spaceInline: "space050" },
                    react_1.default.createElement(helper_1.LabelFlag, { key: "label-flag" }, (0, helper_1.returnLastLetterInCamelCase)(stylePreset)),
                    react_1.default.createElement(toast_1.Toast, { overrides: { stylePreset: stylePreset, maxWidth: '100%' }, key: "toast", actions: function () { return (react_1.default.createElement(button_1.Button, { size: "small", overrides: { stylePreset: 'buttonMinimalInverse' } }, "Undo")); }, icon: react_1.default.createElement(icons_1.IconFilledError, { overrides: {
                                size: 'iconSize020',
                            } }) }, "Here goes a brief line or two describing the toast information."))));
        },
    },
    {
        name: 'Tooltip',
        component: function () { return (react_1.default.createElement(stack_1.Stack, { spaceInline: "space110", flow: "horizontal-top" },
            react_1.default.createElement(stack_1.Stack, { spaceInline: "space050" },
                react_1.default.createElement(helper_1.LabelFlag, null, "With Icon Button Right Placement"),
                react_1.default.createElement(tooltip_1.Tooltip, { content: "Share", asLabel: true, placement: "right", trigger: ['focus', 'hover'] },
                    react_1.default.createElement(icon_button_1.IconButton, { size: "small", overrides: { stylePreset: 'iconButtonOutlinedPrimary' } },
                        react_1.default.createElement(icons_1.IconFilledTwitter, null)))),
            react_1.default.createElement(stack_1.Stack, { spaceInline: "space050" },
                react_1.default.createElement(helper_1.LabelFlag, null, "With Inline Link Bottom Placement"),
                react_1.default.createElement(tooltip_1.Tooltip, { content: "Lorem ipsum dolor sit amet", placement: "bottom", trigger: ['focus', 'hover'] },
                    react_1.default.createElement(link_1.LinkInline, { href: "/" }, "Inline link"))),
            react_1.default.createElement(stack_1.Stack, { spaceInline: "space050" },
                react_1.default.createElement(helper_1.LabelFlag, null, "With Button Top Placement"),
                react_1.default.createElement(tooltip_1.Tooltip, { content: "Lorem ipsum dolor sit amet", placement: "top", trigger: ['focus', 'hover'] },
                    react_1.default.createElement(button_1.Button, { size: "small", overrides: { stylePreset: 'buttonOutlinedPrimary' } }, "Button"))))); },
    },
    {
        name: 'UnorderedList',
        component: function () { return (react_1.default.createElement(stack_1.Stack, { spaceInline: "space110", flow: "horizontal-top" },
            react_1.default.createElement(stack_1.Stack, { spaceInline: "space050" },
                react_1.default.createElement(helper_1.LabelFlag, null, "Horizontal"),
                react_1.default.createElement(unordered_list_1.UnorderedList, { listItemMarker: icons_1.IconFilledAddCircle }, listData)),
            react_1.default.createElement(stack_1.Stack, { spaceInline: "space050" },
                react_1.default.createElement(helper_1.LabelFlag, null, "Without marker"),
                react_1.default.createElement(unordered_list_1.UnorderedList, null, listData)))); },
    },
    {
        name: 'Volume Control',
        component: function () {
            return react_1.default.createElement(function () {
                var _a = (0, react_1.useState)(0), stateVolume = _a[0], setVolume = _a[1];
                var _b = (0, react_1.useState)(0), stateVerticalVolume = _b[0], setVerticalVolume = _b[1];
                return (react_1.default.createElement(stack_1.Stack, { spaceInline: "space110", flow: "horizontal-top", spaceStack: "space060", wrap: "wrap" },
                    react_1.default.createElement(stack_1.Stack, { spaceInline: "space050" },
                        react_1.default.createElement(helper_1.LabelFlag, null, "Horizontal"),
                        react_1.default.createElement(styled_1.Container, null,
                            react_1.default.createElement(volume_control_1.VolumeControl, { volume: stateVolume, onChange: 
                                /* istanbul ignore next */ function (newValues) {
                                    /* istanbul ignore next */
                                    setVolume(newValues);
                                } }))),
                    react_1.default.createElement(stack_1.Stack, { spaceInline: "space050" },
                        react_1.default.createElement(helper_1.LabelFlag, null, "Vertical"),
                        react_1.default.createElement(styled_1.Container, { height: "300px" },
                            react_1.default.createElement(volume_control_1.VolumeControl, { vertical: true, volume: stateVerticalVolume, onChange: 
                                /* istanbul ignore next */ function (newValues) {
                                    /* istanbul ignore next */
                                    setVerticalVolume(newValues);
                                } })))));
            });
        },
    },
];
//# sourceMappingURL=scenarios.js.map