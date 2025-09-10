"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPaginationItemAria = exports.getPaginationItemsLayout = void 0;
var appendSiblings = function (layout, fromSibling, toSibling) {
    for (var pageNumber = fromSibling; pageNumber <= toSibling; pageNumber++) {
        layout.push(pageNumber);
    }
};
var appendBoundariesAtStart = function (layout, boundaries, fromSibling) {
    if (boundaries && fromSibling > 1) {
        var extreme = fromSibling - 1;
        var toBoundaryAtStart = Math.min(boundaries, extreme);
        for (var pageNumber = 1; pageNumber <= toBoundaryAtStart; pageNumber++) {
            layout.push(pageNumber);
        }
        if (toBoundaryAtStart < extreme) {
            layout.push('-');
        }
    }
};
var appendBoundariesAtEnd = function (layout, boundaries, toSibling, lastPage) {
    if (boundaries && toSibling < lastPage) {
        var extreme = toSibling + 1;
        var fromBoundaryAtEnd = Math.max(lastPage - boundaries + 1, extreme);
        if (fromBoundaryAtEnd > extreme) {
            layout.push('-');
        }
        for (var page = fromBoundaryAtEnd; page <= lastPage; page++) {
            layout.push(page);
        }
    }
};
var getPaginationItemsLayout = function (_a) {
    var page = _a.page, lastPage = _a.lastPage, truncation = _a.truncation, siblings = _a.siblings, boundaries = _a.boundaries;
    var layout = [];
    if (page < 1 || lastPage < 1) {
        return layout;
    }
    if (truncation) {
        if (siblings >= 0) {
            var fromSibling = Math.max(1, page - siblings);
            var toSibling = Math.min(page + siblings, lastPage);
            appendBoundariesAtStart(layout, boundaries, fromSibling);
            appendSiblings(layout, fromSibling, toSibling);
            appendBoundariesAtEnd(layout, boundaries, toSibling, lastPage);
        }
    }
    else {
        for (var pageNumber = 1; pageNumber <= lastPage; pageNumber++) {
            layout.push(pageNumber);
        }
    }
    return layout;
};
exports.getPaginationItemsLayout = getPaginationItemsLayout;
var getPaginationItemAria = function (_a) {
    var itemType = _a.itemType, pageNumber = _a.pageNumber, selected = _a.selected, disabled = _a.disabled;
    var ariaProps = {};
    switch (itemType) {
        case 'paginationItemFirst':
            if (!disabled) {
                ariaProps['aria-label'] = 'go to first page';
            }
            break;
        case 'paginationItemPrev':
            if (!disabled) {
                ariaProps['aria-label'] = 'go to previous page';
            }
            break;
        case 'paginationItemNext':
            if (!disabled) {
                ariaProps['aria-label'] = 'go to next page';
            }
            break;
        case 'paginationItemLast':
            if (!disabled) {
                ariaProps['aria-label'] = 'go to last page';
            }
            break;
        case 'paginationItemTruncation':
            if (!disabled) {
                ariaProps['aria-label'] = 'dots';
            }
            break;
        default:
            if (pageNumber) {
                ariaProps['aria-label'] = selected
                    ? "current page, page ".concat(pageNumber)
                    : "go to page ".concat(pageNumber);
            }
            if (selected) {
                ariaProps['aria-current'] = 'page';
            }
            break;
    }
    if (disabled) {
        ariaProps['aria-disabled'] = 'true';
    }
    return ariaProps;
};
exports.getPaginationItemAria = getPaginationItemAria;
//# sourceMappingURL=utils.js.map