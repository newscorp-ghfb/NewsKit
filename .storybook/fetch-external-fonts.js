const fs = require("fs");
const path = require("path");
const { promisify } = require("util");
const mkdirp = promisify(require("mkdirp"));
const fetch = require("node-fetch");

const fontCdnTheSun = "https://www.thesun.co.uk/assets/fonts/the-sun"
const fontCdnTheTimes = "https://www.thetimes.co.uk/d/fonts";
const fontDir = `${process.cwd()}/.storybook/private-fonts`;

const fonts = [
  {
    fontName: "TheSun-HeavyNarrow",
    fileName: "TheSun-HeavyNarrow",
    fontFamily: "TheSun-HeavyNarrow",
    sources: [
      `${fontCdnTheSun}/TheSun-HeavyNarrow.woff2`,
      `${fontCdnTheSun}/TheSun-HeavyNarrow.woff`,
      `${fontCdnTheSun}/TheSun-HeavyNarrow.ttf`
    ]
  },
  {
    fontName: "TheSun-Bold",
    fileName: "TheSun-Bold",
    fontFamily: "TheSun-Bold",
    sources: [
      `${fontCdnTheSun}/TheSun-Bold.woff2`,
      `${fontCdnTheSun}/TheSun-Bold.woff`,
      `${fontCdnTheSun}/TheSun-Bold.ttf`
    ]
  },
  {
    fontName: "TheSun-Medium",
    fileName: "TheSun-Medium",
    fontFamily: "TheSun-Medium",
    sources: [
      `${fontCdnTheSun}/TheSun-Medium.woff2`,
      `${fontCdnTheSun}/TheSun-Medium.woff`,
      `${fontCdnTheSun}/TheSun-Medium.ttf`
    ]
  },
  {
    fontName: "TheSun-Regular",
    fileName: "TheSun-Regular",
    fontFamily: "TheSun-Regular",
    sources: [
      `${fontCdnTheSun}/TheSun-Regular.woff2`,
      `${fontCdnTheSun}/TheSun-Regular.woff`,
      `${fontCdnTheSun}/TheSun-Regular.ttf`
    ]
  },
  {
    fontName: "TimesModern-Bold",
    fileName: "TimesModern-Bold",
    fontFamily: "TimesModern-Bold",
    sources: [
      `${fontCdnTheTimes}/TimesModern/TimesModern-Bold-62eb027e67.woff2`,
      `${fontCdnTheTimes}/TimesModern/TimesModern-Bold-828aec4ccd.woff`,
      `${fontCdnTheTimes}/TimesModern/TimesModern-Bold-e960fb2b2c.ttf`
    ]
  },
  {
    fontName: "TimesModern-Regular",
    fileName: "TimesModern-Regular",
    fontFamily: "TimesModern-Regular",
    sources: [
      `${fontCdnTheTimes}/TimesModern/TimesModern-Regular-f3419df85d.woff2`,
      `${fontCdnTheTimes}/TimesModern/TimesModern-Regular-39c619f4ef.woff`,
      `${fontCdnTheTimes}/TimesModern/TimesModern-Regular-e47b8c277b.ttf`
    ]
  },
  {
    fontName: "TimesDigitalW04-Regular",
    fileName: "TimesDigitalW04-Regular",
    fontFamily: "TimesDigitalW04-Regular",
    sources: [
      `${fontCdnTheTimes}/TimesDigital/TimesDigitalW04-Regular-dca82eac02.woff2`,
      `${fontCdnTheTimes}/TimesDigital/TimesDigitalW04-Regular-c93f4e13dd.woff`,
      `${fontCdnTheTimes}/TimesDigital/TimesDigitalW04-Regular-bf4b850ffb.ttf`
    ]
  },
  {
    fontName: "GillSansMTStd-Medium",
    fileName: "GillSansMTStd-Medium",
    fontFamily: "GillSansMTStd-Medium",
    sources: [
      `${fontCdnTheTimes}/GillSans/GillSansMTStd-Medium-ff809aff43.woff2`,
      `${fontCdnTheTimes}/GillSans/GillSansMTStd-Medium-f147e4bbf2.woff`,
      `${fontCdnTheTimes}/GillSans/GillSansMTStd-Medium-45ad758029.ttf`
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
console.log(`Downloaded and saved private external fonts in ./.storybook 📝`)
