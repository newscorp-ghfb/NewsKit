import * as React from 'react';

import {
  Menu,
  Facebook,
  Twitter,
  WhatsApp,
  SaveActive,
  SaveInactive,
  Email,
  Comment,
  GitHub,
  Bookmark,
  CopyLink,
  Circle,
} from '..';

export const name = 'icons';

export const component = () => (
  <React.Fragment>
    <div>
      <Menu $size="iconSize030" />
      <Menu $size="iconSize040" />
      <Menu $size="iconSize050" />
      <Menu $color="semanticNegative" $size="iconSize050" />
      <Menu $color="semanticPositive" $size="iconSize050" />
      <Menu $color="semanticNotice" $size="iconSize050" />
      <Menu $color="semanticInformative" $size="iconSize050" />
    </div>
    <div>
      <SaveActive $size="iconSize030" />
      <SaveActive $size="iconSize040" />
      <SaveActive $size="iconSize050" />
      <SaveActive $color="semanticNegative" $size="iconSize050" />
      <SaveActive $color="semanticPositive" $size="iconSize050" />
      <SaveActive $color="semanticNotice" $size="iconSize050" />
      <SaveActive $color="semanticInformative" $size="iconSize050" />
    </div>
    <div>
      <SaveInactive $size="iconSize030" />
      <SaveInactive $size="iconSize040" />
      <SaveInactive $size="iconSize050" />
      <SaveInactive $color="semanticNegative" $size="iconSize050" />
      <SaveInactive $color="semanticPositive" $size="iconSize050" />
      <SaveInactive $color="semanticNotice" $size="iconSize050" />
      <SaveInactive $color="semanticInformative" $size="iconSize050" />
    </div>
    <div>
      <Email $size="iconSize030" />
      <Email $size="iconSize040" />
      <Email $size="iconSize050" />
      <Email $color="semanticNegative" $size="iconSize050" />
      <Email $color="semanticPositive" $size="iconSize050" />
      <Email $color="semanticNotice" $size="iconSize050" />
      <Email $color="semanticInformative" $size="iconSize050" />
    </div>
    <div>
      <Comment $size="iconSize030" />
      <Comment $size="iconSize040" />
      <Comment $size="iconSize050" />
      <Comment $color="semanticNegative" $size="iconSize050" />
      <Comment $color="semanticPositive" $size="iconSize050" />
      <Comment $color="semanticNotice" $size="iconSize050" />
      <Comment $color="semanticInformative" $size="iconSize050" />
    </div>
    <div>
      <Bookmark $size="iconSize030" />
      <Bookmark $size="iconSize040" />
      <Bookmark $size="iconSize050" />
      <Bookmark $color="semanticNegative" $size="iconSize030" />
      <Bookmark $color="semanticPositive" $size="iconSize040" />
      <Bookmark $color="semanticNotice" $size="iconSize050" />
    </div>
    <div>
      <CopyLink $size="iconSize030" />
      <CopyLink $size="iconSize040" />
      <CopyLink $size="iconSize050" />
      <CopyLink $color="semanticNegative" $size="iconSize030" />
      <CopyLink $color="semanticPositive" $size="iconSize040" />
      <CopyLink $color="semanticNotice" $size="iconSize050" />
    </div>
    <div>
      <Circle $size="iconSize030" />
      <Circle $size="iconSize040" />
      <Circle $size="iconSize050" />
      <Circle $color="semanticNegative" $size="iconSize030" />
      <Circle $color="semanticPositive" $size="iconSize040" />
      <Circle $color="semanticNotice" $size="iconSize050" />
    </div>
    <div>
      <Facebook $size="iconSize030" />
      <Facebook $size="iconSize040" />
      <Facebook $size="iconSize050" />
    </div>
    <div>
      <Twitter $size="iconSize030" />
      <Twitter $size="iconSize040" />
      <Twitter $size="iconSize050" />
    </div>
    <div>
      <WhatsApp $size="iconSize030" />
      <WhatsApp $size="iconSize040" />
      <WhatsApp $size="iconSize050" />
    </div>
    <div>
      <GitHub $size="iconSize030" />
      <GitHub $size="iconSize040" />
      <GitHub $size="iconSize050" />
    </div>
  </React.Fragment>
);
