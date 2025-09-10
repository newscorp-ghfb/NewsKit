"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkInline = void 0;
var with_default_props_1 = require("../utils/with-default-props");
var internal_link_1 = require("./internal-link");
var utils_1 = require("./utils");
exports.LinkInline = (0, utils_1.withLinkTheme)((0, with_default_props_1.withDefaultProps)(internal_link_1.InternalLink, { noCrop: true }, 'link'));
exports.LinkInline.displayName = 'LinkInline';
//# sourceMappingURL=link-inline.js.map