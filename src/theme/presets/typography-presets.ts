import {getLineHeight} from '../../utils/font-sizing';
import {TypographyPreset} from './types';

export const typographyPresets: Record<string, TypographyPreset> = {};

// ** EDITORIAL **

// Editorial Display
typographyPresets.editorialDisplay010 = {
  fontFamily: '{{fonts.fontFamily020.fontFamily}}',
  fontSize: '{{fonts.fontSize140}}',
  lineHeight: getLineHeight('fontSize140', 'fontLineHeight020'),
  fontWeight: '{{fonts.fontWeight040}}',
  letterSpacing: '{{fonts.fontLetterSpacing030}}',
};

typographyPresets.editorialDisplay020 = {
  fontFamily: '{{fonts.fontFamily020.fontFamily}}',
  fontSize: '{{fonts.fontSize150}}',
  lineHeight: getLineHeight('fontSize150', 'fontLineHeight020'),
  fontWeight: '{{fonts.fontWeight040}}',
  letterSpacing: '{{fonts.fontLetterSpacing030}}',
};

typographyPresets.editorialDisplay030 = {
  fontFamily: '{{fonts.fontFamily020.fontFamily}}',
  fontSize: '{{fonts.fontSize160}}',
  lineHeight: getLineHeight('fontSize160', 'fontLineHeight020'),
  fontWeight: '{{fonts.fontWeight040}}',
  letterSpacing: '{{fonts.fontLetterSpacing030}}',
};

// Editorial Heading
typographyPresets.editorialHeadline010 = {
  fontFamily: '{{fonts.fontFamily020.fontFamily}}',
  fontSize: '{{fonts.fontSize040}}',
  lineHeight: getLineHeight('fontSize040', 'fontLineHeight020'),
  fontWeight: '{{fonts.fontWeight040}}',
  letterSpacing: '{{fonts.fontLetterSpacing030}}',
};
typographyPresets.editorialHeadline020 = {
  fontFamily: '{{fonts.fontFamily020.fontFamily}}',
  fontSize: '{{fonts.fontSize050}}',
  lineHeight: getLineHeight('fontSize050', 'fontLineHeight020'),
  fontWeight: '{{fonts.fontWeight040}}',
  letterSpacing: '{{fonts.fontLetterSpacing030}}',
};
typographyPresets.editorialHeadline030 = {
  fontFamily: '{{fonts.fontFamily020.fontFamily}}',
  fontSize: '{{fonts.fontSize070}}',
  lineHeight: getLineHeight('fontSize070', 'fontLineHeight020'),
  fontWeight: '{{fonts.fontWeight040}}',
  letterSpacing: '{{fonts.fontLetterSpacing030}}',
};
typographyPresets.editorialHeadline040 = {
  fontFamily: '{{fonts.fontFamily020.fontFamily}}',
  fontSize: '{{fonts.fontSize080}}',
  lineHeight: getLineHeight('fontSize080', 'fontLineHeight020'),
  fontWeight: '{{fonts.fontWeight040}}',
  letterSpacing: '{{fonts.fontLetterSpacing030}}',
};
typographyPresets.editorialHeadline050 = {
  fontFamily: '{{fonts.fontFamily020.fontFamily}}',
  fontSize: '{{fonts.fontSize090}}',
  lineHeight: getLineHeight('fontSize090', 'fontLineHeight020'),
  fontWeight: '{{fonts.fontWeight040}}',
  letterSpacing: '{{fonts.fontLetterSpacing030}}',
};
typographyPresets.editorialHeadline060 = {
  fontFamily: '{{fonts.fontFamily020.fontFamily}}',
  fontSize: '{{fonts.fontSize100}}',
  lineHeight: getLineHeight('fontSize100', 'fontLineHeight020'),
  fontWeight: '{{fonts.fontWeight040}}',
  letterSpacing: '{{fonts.fontLetterSpacing030}}',
};
typographyPresets.editorialHeadline070 = {
  fontFamily: '{{fonts.fontFamily020.fontFamily}}',
  fontSize: '{{fonts.fontSize110}}',
  lineHeight: getLineHeight('fontSize110', 'fontLineHeight020'),
  fontWeight: '{{fonts.fontWeight040}}',
  letterSpacing: '{{fonts.fontLetterSpacing030}}',
};
typographyPresets.editorialHeadline080 = {
  fontFamily: '{{fonts.fontFamily020.fontFamily}}',
  fontSize: '{{fonts.fontSize130}}',
  lineHeight: getLineHeight('fontSize130', 'fontLineHeight020'),
  fontWeight: '{{fonts.fontWeight040}}',
  letterSpacing: '{{fonts.fontLetterSpacing030}}',
};
// Editorial Label
typographyPresets.editorialLabel010 = {
  fontFamily: '{{fonts.fontFamily010.fontFamily}}',
  fontSize: '{{fonts.fontSize010}}',
  lineHeight: getLineHeight('fontSize010', 'fontLineHeight020'),
  fontWeight: '{{fonts.fontWeight030}}',
  letterSpacing: '{{fonts.fontLetterSpacing030}}',
};

typographyPresets.editorialLabel020 = {
  fontFamily: '{{fonts.fontFamily010.fontFamily}}',
  fontSize: '{{fonts.fontSize020}}',
  lineHeight: getLineHeight('fontSize020', 'fontLineHeight020'),
  fontWeight: '{{fonts.fontWeight030}}',
  letterSpacing: '{{fonts.fontLetterSpacing030}}',
};

typographyPresets.editorialLabel030 = {
  fontFamily: '{{fonts.fontFamily010.fontFamily}}',
  fontSize: '{{fonts.fontSize030}}',
  lineHeight: getLineHeight('fontSize030', 'fontLineHeight020'),
  fontWeight: '{{fonts.fontWeight030}}',
  letterSpacing: '{{fonts.fontLetterSpacing030}}',
};

// Editorial Subheading
typographyPresets.editorialSubheadline010 = {
  fontFamily: '{{fonts.fontFamily020.fontFamily}}',
  fontSize: '{{fonts.fontSize050}}',
  lineHeight: getLineHeight('fontSize050', 'fontLineHeight020'),
  fontWeight: '{{fonts.fontWeight040}}',
  letterSpacing: '{{fonts.fontLetterSpacing030}}',
};
typographyPresets.editorialSubheadline020 = {
  fontFamily: '{{fonts.fontFamily020.fontFamily}}',
  fontSize: '{{fonts.fontSize070}}',
  lineHeight: getLineHeight('fontSize070', 'fontLineHeight020'),
  fontWeight: '{{fonts.fontWeight040}}',
  letterSpacing: '{{fonts.fontLetterSpacing030}}',
};
typographyPresets.editorialSubheadline030 = {
  fontFamily: '{{fonts.fontFamily020.fontFamily}}',
  fontSize: '{{fonts.fontSize080}}',
  lineHeight: getLineHeight('fontSize080', 'fontLineHeight020'),
  fontWeight: '{{fonts.fontWeight040}}',
  letterSpacing: '{{fonts.fontLetterSpacing030}}',
};
typographyPresets.editorialSubheadline040 = {
  fontFamily: '{{fonts.fontFamily020.fontFamily}}',
  fontSize: '{{fonts.fontSize090}}',
  lineHeight: getLineHeight('fontSize090', 'fontLineHeight020'),
  fontWeight: '{{fonts.fontWeight040}}',
  letterSpacing: '{{fonts.fontLetterSpacing030}}',
};
typographyPresets.editorialSubheadline050 = {
  fontFamily: '{{fonts.fontFamily020.fontFamily}}',
  fontSize: '{{fonts.fontSize100}}',
  lineHeight: getLineHeight('fontSize100', 'fontLineHeight020'),
  fontWeight: '{{fonts.fontWeight040}}',
  letterSpacing: '{{fonts.fontLetterSpacing030}}',
};
// Editorial Paragraph
typographyPresets.editorialParagraph010 = {
  fontFamily: '{{fonts.fontFamily010.fontFamily}}',
  fontSize: '{{fonts.fontSize020}}',
  lineHeight: getLineHeight('fontSize020', 'fontLineHeight040'),
  fontWeight: '{{fonts.fontWeight020}}',
  letterSpacing: '{{fonts.fontLetterSpacing030}}',
};
typographyPresets.editorialParagraph020 = {
  fontFamily: '{{fonts.fontFamily010.fontFamily}}',
  fontSize: '{{fonts.fontSize030}}',
  lineHeight: getLineHeight('fontSize030', 'fontLineHeight040'),
  fontWeight: '{{fonts.fontWeight020}}',
  letterSpacing: '{{fonts.fontLetterSpacing030}}',
};
typographyPresets.editorialParagraph030 = {
  fontFamily: '{{fonts.fontFamily010.fontFamily}}',
  fontSize: '{{fonts.fontSize040}}',
  lineHeight: getLineHeight('fontSize040', 'fontLineHeight040'),
  fontWeight: '{{fonts.fontWeight020}}',
  letterSpacing: '{{fonts.fontLetterSpacing030}}',
};
// Editorial Quote
typographyPresets.editorialQuote010 = {
  fontFamily: '{{fonts.fontFamily020.fontFamily}}',
  fontSize: '{{fonts.fontSize070}}',
  lineHeight: getLineHeight('fontSize070', 'fontLineHeight030'),
  fontWeight: '{{fonts.fontWeight020}}',
  letterSpacing: '{{fonts.fontLetterSpacing030}}',
};
typographyPresets.editorialQuote020 = {
  fontFamily: '{{fonts.fontFamily020.fontFamily}}',
  fontSize: '{{fonts.fontSize090}}',
  lineHeight: getLineHeight('fontSize090', 'fontLineHeight030'),
  fontWeight: '{{fonts.fontWeight020}}',
  letterSpacing: '{{fonts.fontLetterSpacing030}}',
};
// Editorial Caption
typographyPresets.editorialCaption010 = {
  fontFamily: '{{fonts.fontFamily010.fontFamily}}',
  fontSize: '{{fonts.fontSize020}}',
  lineHeight: getLineHeight('fontSize020', 'fontLineHeight040'),
  fontWeight: '{{fonts.fontWeight020}}',
  letterSpacing: '{{fonts.fontLetterSpacing030}}',
};

// ** UTILITY **

// Utility Heading
typographyPresets.utilityHeading010 = {
  fontFamily: '{{fonts.fontFamily010.fontFamily}}',
  fontSize: '{{fonts.fontSize030}}',
  lineHeight: getLineHeight('fontSize030', 'fontLineHeight020'),
  fontWeight: '{{fonts.fontWeight050}}',
  letterSpacing: '{{fonts.fontLetterSpacing030}}',
};
typographyPresets.utilityHeading020 = {
  fontFamily: '{{fonts.fontFamily010.fontFamily}}',
  fontSize: '{{fonts.fontSize040}}',
  lineHeight: getLineHeight('fontSize040', 'fontLineHeight020'),
  fontWeight: '{{fonts.fontWeight050}}',
  letterSpacing: '{{fonts.fontLetterSpacing030}}',
};
typographyPresets.utilityHeading030 = {
  fontFamily: '{{fonts.fontFamily010.fontFamily}}',
  fontSize: '{{fonts.fontSize050}}',
  lineHeight: getLineHeight('fontSize050', 'fontLineHeight020'),
  fontWeight: '{{fonts.fontWeight050}}',
  letterSpacing: '{{fonts.fontLetterSpacing030}}',
};
typographyPresets.utilityHeading040 = {
  fontFamily: '{{fonts.fontFamily010.fontFamily}}',
  fontSize: '{{fonts.fontSize070}}',
  lineHeight: getLineHeight('fontSize070', 'fontLineHeight020'),
  fontWeight: '{{fonts.fontWeight050}}',
  letterSpacing: '{{fonts.fontLetterSpacing030}}',
};
typographyPresets.utilityHeading050 = {
  fontFamily: '{{fonts.fontFamily010.fontFamily}}',
  fontSize: '{{fonts.fontSize080}}',
  lineHeight: getLineHeight('fontSize080', 'fontLineHeight020'),
  fontWeight: '{{fonts.fontWeight050}}',
  letterSpacing: '{{fonts.fontLetterSpacing030}}',
};

// Utility Subheading
typographyPresets.utilitySubheading010 = {
  fontFamily: '{{fonts.fontFamily010.fontFamily}}',
  fontSize: '{{fonts.fontSize020}}',
  lineHeight: getLineHeight('fontSize020', 'fontLineHeight020'),
  fontWeight: '{{fonts.fontWeight020}}',
  letterSpacing: '{{fonts.fontLetterSpacing030}}',
};
typographyPresets.utilitySubheading020 = {
  fontFamily: '{{fonts.fontFamily010.fontFamily}}',
  fontSize: '{{fonts.fontSize030}}',
  lineHeight: getLineHeight('fontSize030', 'fontLineHeight020'),
  fontWeight: '{{fonts.fontWeight020}}',
  letterSpacing: '{{fonts.fontLetterSpacing030}}',
};
typographyPresets.utilitySubheading030 = {
  fontFamily: '{{fonts.fontFamily010.fontFamily}}',
  fontSize: '{{fonts.fontSize040}}',
  lineHeight: getLineHeight('fontSize040', 'fontLineHeight020'),
  fontWeight: '{{fonts.fontWeight020}}',
  letterSpacing: '{{fonts.fontLetterSpacing030}}',
};
typographyPresets.utilitySubheading040 = {
  fontFamily: '{{fonts.fontFamily010.fontFamily}}',
  fontSize: '{{fonts.fontSize050}}',
  lineHeight: getLineHeight('fontSize050', 'fontLineHeight020'),
  fontWeight: '{{fonts.fontWeight020}}',
  letterSpacing: '{{fonts.fontLetterSpacing030}}',
};
typographyPresets.utilitySubheading050 = {
  fontFamily: '{{fonts.fontFamily010.fontFamily}}',
  fontSize: '{{fonts.fontSize070}}',
  lineHeight: getLineHeight('fontSize070', 'fontLineHeight020'),
  fontWeight: '{{fonts.fontWeight020}}',
  letterSpacing: '{{fonts.fontLetterSpacing030}}',
};
// Utility Body
typographyPresets.utilityBody010 = {
  fontFamily: '{{fonts.fontFamily010.fontFamily}}',
  fontSize: '{{fonts.fontSize020}}',
  lineHeight: getLineHeight('fontSize020', 'fontLineHeight040'),
  fontWeight: '{{fonts.fontWeight020}}',
  letterSpacing: '{{fonts.fontLetterSpacing030}}',
};
typographyPresets.utilityBody020 = {
  fontFamily: '{{fonts.fontFamily010.fontFamily}}',
  fontSize: '{{fonts.fontSize030}}',
  lineHeight: getLineHeight('fontSize030', 'fontLineHeight040'),
  fontWeight: '{{fonts.fontWeight020}}',
  letterSpacing: '{{fonts.fontLetterSpacing030}}',
};
typographyPresets.utilityBody030 = {
  fontFamily: '{{fonts.fontFamily010.fontFamily}}',
  fontSize: '{{fonts.fontSize040}}',
  lineHeight: getLineHeight('fontSize040', 'fontLineHeight040'),
  fontWeight: '{{fonts.fontWeight020}}',
  letterSpacing: '{{fonts.fontLetterSpacing030}}',
};
// Utility Label
typographyPresets.utilityLabel010 = {
  fontFamily: '{{fonts.fontFamily010.fontFamily}}',
  fontSize: '{{fonts.fontSize010}}',
  lineHeight: getLineHeight('fontSize010', 'fontLineHeight040'),
  fontWeight: '{{fonts.fontWeight030}}',
  letterSpacing: '{{fonts.fontLetterSpacing030}}',
};
typographyPresets.utilityLabel020 = {
  fontFamily: '{{fonts.fontFamily010.fontFamily}}',
  fontSize: '{{fonts.fontSize020}}',
  lineHeight: getLineHeight('fontSize020', 'fontLineHeight040'),
  fontWeight: '{{fonts.fontWeight030}}',
  letterSpacing: '{{fonts.fontLetterSpacing030}}',
};
typographyPresets.utilityLabel030 = {
  fontFamily: '{{fonts.fontFamily010.fontFamily}}',
  fontSize: '{{fonts.fontSize030}}',
  lineHeight: getLineHeight('fontSize030', 'fontLineHeight040'),
  fontWeight: '{{fonts.fontWeight030}}',
  letterSpacing: '{{fonts.fontLetterSpacing030}}',
};
// Meta
typographyPresets.utilityMeta010 = {
  fontFamily: '{{fonts.fontFamily010.fontFamily}}',
  fontSize: '{{fonts.fontSize010}}',
  lineHeight: getLineHeight('fontSize010', 'fontLineHeight040'),
  fontWeight: '{{fonts.fontWeight030}}',
  letterSpacing: '{{fonts.fontLetterSpacing050}}',
};
typographyPresets.utilityMeta020 = {
  fontFamily: '{{fonts.fontFamily010.fontFamily}}',
  fontSize: '{{fonts.fontSize020}}',
  lineHeight: getLineHeight('fontSize020', 'fontLineHeight040'),
  fontWeight: '{{fonts.fontWeight030}}',
  letterSpacing: '{{fonts.fontLetterSpacing030}}',
};
// Button
typographyPresets.utilityButton010 = {
  ...typographyPresets.utilityLabel010,
  letterSpacing: '{{fonts.fontLetterSpacing030}}',
};
typographyPresets.utilityButton020 = {
  ...typographyPresets.utilityLabel020,
  letterSpacing: '{{fonts.fontLetterSpacing030}}',
};
typographyPresets.utilityButton030 = {
  ...typographyPresets.utilityLabel030,
  letterSpacing: '{{fonts.fontLetterSpacing030}}',
};
typographyPresets.editorialDropCap010 = {
  fontSize: '5.625em',
  lineHeight: 0.85,
};
typographyPresets.editorialDropCap020 = {
  fontSize: '5.875em',
  lineHeight: 0.85,
};
typographyPresets.editorialDropCap030 = {
  fontSize: '6em',
  lineHeight: 0.85,
};
