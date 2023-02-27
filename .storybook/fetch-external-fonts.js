const fs = require("fs");
const path = require("path");
const { promisify } = require("util");
const mkdirp = promisify(require("mkdirp"));
const fetch = require("node-fetch");

const fontCdnTheSun = "https://www.thesun.co.uk/assets/fonts/the-sun"
const fontCdnTheTimes = "https://www.thetimes.co.uk/d/fonts";
const fontCdnWSJ = "https://www.wsj.com/fonts";
const fontDir = `${process.cwd()}/.storybook/private-fonts`;


const fonts = [
  {
    fontName: "TheSun-HeavyNarrow",
    fileName: "TheSun-HeavyNarrow",
    fontFamily: "TheSun-HeavyNarrow",
    sources: [
      `${fontCdnTheSun}/TheSun-HeavyNarrow.woff2`,
      `${fontCdnTheSun}/TheSun-HeavyNarrow.ttf`
    ]
  },
  {
    fontName: "TheSun-Bold",
    fileName: "TheSun-Bold",
    fontFamily: "TheSun-Bold",
    sources: [
      `${fontCdnTheSun}/TheSun-Bold.woff2`,
      `${fontCdnTheSun}/TheSun-Bold.ttf`
    ]
  },
  {
    fontName: "TheSun-Medium",
    fileName: "TheSun-Medium",
    fontFamily: "TheSun-Medium",
    sources: [
      `${fontCdnTheSun}/TheSun-Medium.woff2`,
      `${fontCdnTheSun}/TheSun-Medium.ttf`
    ]
  },
  {
    fontName: "TheSun-Regular",
    fileName: "TheSun-Regular",
    fontFamily: "TheSun-Regular",
    sources: [
      `${fontCdnTheSun}/TheSun-Regular.woff2`,
      `${fontCdnTheSun}/TheSun-Regular.ttf`
    ]
  },
  {
    fontName: "TimesModern-Bold",
    fileName: "TimesModern-Bold",
    fontFamily: "TimesModern-Bold",
    sources: [
      `${fontCdnTheTimes}/TimesModern/TimesModern-Bold-62eb027e67.woff2`,
      `${fontCdnTheTimes}/TimesModern/TimesModern-Bold-e960fb2b2c.ttf`
    ]
  },
  {
    fontName: "TimesModern-Regular",
    fileName: "TimesModern-Regular",
    fontFamily: "TimesModern-Regular",
    sources: [
      `${fontCdnTheTimes}/TimesModern/TimesModern-Regular-f3419df85d.woff2`,
      `${fontCdnTheTimes}/TimesModern/TimesModern-Regular-e47b8c277b.ttf`
    ]
  },
  {
    fontName: "TimesDigitalW04-Regular",
    fileName: "TimesDigitalW04-Regular",
    fontFamily: "TimesDigitalW04-Regular",
    sources: [
      `${fontCdnTheTimes}/TimesDigital/TimesDigitalW04-Regular-dca82eac02.woff2`,
      `${fontCdnTheTimes}/TimesDigital/TimesDigitalW04-Regular-bf4b850ffb.ttf`
    ]
  },
  {
    fontName: "Retina-Book",
    fileName: "Retina-Book",
    fontFamily: "Retina",
    sources: [
      `${fontCdnWSJ}/woffs/retina/Retina-Book.woff2`,
    ]
  },
  {
    fontName: "Retina-BookItalic",
    fileName: "Retina-BookItalic",
    fontFamily: "Retina",
    sources: [
      `${fontCdnWSJ}/woffs/retina/Retina-BookItalic.woff2`,
    ]
  },
  {
    fontName: "Retina-Light",
    fileName: "Retina-Light",
    fontFamily: "Retina",
    sources: [
      `${fontCdnWSJ}/woffs/retina/Retina-Light.woff2`,
    ]
  },
  {
    fontName: "Retina-LightItalic",
    fileName: "Retina-LightItalic",
    fontFamily: "Retina",
    sources: [
      `${fontCdnWSJ}/woffs/retina/Retina-LightItalic.woff2`,
    ]
  },
  {
    fontName: "Retina-Medium",
    fileName: "Retina-Medium",
    fontFamily: "Retina",
    sources: [
      `${fontCdnWSJ}/woffs/retina/Retina-Medium.woff2`,
    ]
  },
  {
    fontName: "Retina-MediumItalic",
    fileName: "Retina-MediumItalic",
    fontFamily: "Retina",
    sources: [
      `${fontCdnWSJ}/woffs/retina/Retina-MediumItalic.woff2`,
    ]
  },
  {
    fontName: "RetinaNarr-Light",
    fileName: "RetinaNarr-Light",
    fontFamily: "Retina",
    sources: [
      `${fontCdnWSJ}/woffs/retina/RetinaNarr-Light.woff2`,
    ]
  },
  {
    fontName: "RetinaNarr-LightItalic",
    fileName: "RetinaNarr-LightItalic",
    fontFamily: "Retina",
    sources: [
      `${fontCdnWSJ}/woffs/retina/RetinaNarr-LightItalic.woff2`,
    ]
  },
  {
    fontName: "RetinaNarr-Book",
    fileName: "RetinaNarr-Book",
    fontFamily: "Retina",
    sources: [
      `${fontCdnWSJ}/woffs/retina/RetinaNarr-Book.woff2`,
    ]
  },
  {
    fontName: "RetinaNarr-BookItalic",
    fileName: "RetinaNarr-BookItalic",
    fontFamily: "Retina",
    sources: [
      `${fontCdnWSJ}/woffs/retina/RetinaNarr-BookItalic.woff2`,
    ]
  },
  {
    fontName: "RetinaNarr-Medium",
    fileName: "RetinaNarr-Medium",
    fontFamily: "Retina",
    sources: [
      `${fontCdnWSJ}/woffs/retina/RetinaNarr-Medium.woff2`,
    ]
  },
  {
    fontName: "RetinaNarr-MediumItalic",
    fileName: "RetinaNarr-MediumItalic",
    fontFamily: "Retina",
    sources: [
      `${fontCdnWSJ}/woffs/retina/RetinaNarr-MediumItalic.woff2`,
    ]
  },
  {
    fontName: "RetinaNarr-Bold",
    fileName: "RetinaNarr-Bold",
    fontFamily: "Retina",
    sources: [
      `${fontCdnWSJ}/woffs/retina/RetinaNarr-Bold.woff2`,
    ]
  },
  {
    fontName: "RetinaNarr-BoldItalic",
    fileName: "RetinaNarr-BoldItalic",
    fontFamily: "Retina",
    sources: [
      `${fontCdnWSJ}/woffs/retina/RetinaNarr-BoldItalic.woff2`,
    ]
  },
  {
    fontName: "Escrow+Display+Condensed+Bold",
    fileName: "Escrow+Display+Condensed+Bold",
    fontFamily: "Escrow Condensed",
    sources: [
      `${fontCdnWSJ}/escrow/Escrow+Display+Condensed+Bold.woff2`,
    ]
  },
  {
    fontName: "Escrow+Display+Condensed+Bold+Italic",
    fileName: "Escrow+Display+Condensed+Bold+Italic",
    fontFamily: "Escrow Condensed",
    sources: [
      `${fontCdnWSJ}/escrow/Escrow+Display+Condensed+Bold+Italic.woff2`,
    ]
  },
  {
    fontName: "Escrow+Display+Condensed+Roman",
    fileName: "Escrow+Display+Condensed+Roman",
    fontFamily: "Escrow Condensed",
    sources: [
      `${fontCdnWSJ}/escrow/Escrow+Display+Condensed+Roman.woff2`,
    ]
  },
  {
    fontName: "Escrow+Display+Condensed+Italic",
    fileName: "Escrow+Display+Condensed+Italic",
    fontFamily: "Escrow Condensed",
    sources: [
      `${fontCdnWSJ}/escrow/Escrow+Display+Condensed+Italic.woff2`,
    ]
  },
  {
    fontName: "Exchange-Book",
    fileName: "Exchange-Book",
    fontFamily: "Exchange",
    sources: [
      `${fontCdnWSJ}/exchange/Exchange-Book.woff2`,
    ]
  },
  {
    fontName: "Exchange-BookItalic",
    fileName: "Exchange-BookItalic",
    fontFamily: "Exchange",
    sources: [
      `${fontCdnWSJ}/exchange/Exchange-BookItalic.woff2`,
    ]
  },
  {
    fontName: "Exchange-Medium",
    fileName: "Exchange-Medium",
    fontFamily: "Exchange",
    sources: [
      `${fontCdnWSJ}/exchange/Exchange-Medium.woff2`,
    ]
  },
  {
    fontName: "Exchange-MediumItalic",
    fileName: "Exchange-MediumItalic",
    fontFamily: "Exchange",
    sources: [
      `${fontCdnWSJ}/exchange/Exchange-MediumItalic.woff2`,
    ]
  },
];

const download = (source, dest) =>
  fetch(source).then(
    res =>
      new Promise((resolve, reject) => {
        const stream = fs.createWriteStream(dest);

        stream.on("finish", resolve);
        stream.on("error", reject);

        res.body.pipe(stream);
      })
  );

mkdirp(fontDir).then(() =>
  Promise.all(
    ...fonts.map(({ sources, fileName }) =>
      sources.map(source => {
        const extension = path.extname(source);
        const dest = `${fontDir}/${fileName}${extension}`;

        if (!fs.existsSync(dest)) {
          return download(source, dest)
        }
        return Promise.resolve();
      })
    )
  )
);
console.log(`Downloaded private external fonts in ./.storybook 📝`)
