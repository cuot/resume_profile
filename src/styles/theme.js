const margins = {
  xs: "0.688rem",
  sm: "0.813rem",
  md: "1rem",
  lg: "1.063rem",
  xl: "1.188rem",
};

const paddings = {
  xs: "0.688rem",
  sm: "0.813rem",
  md: "1rem",
  lg: "1.063rem",
  xl: "1.188rem",
  title: "1.438rem",
};

const fonts = {
  family: {
    // base: `'Noto Sans KR','SUIT', 'Malgun Gothic', '나눔고딕', 'Roboto', serif, sans-serif;`,
    // base: `"Noto Sans KR","Malgun Gothic","맑은 고딕","Nanum Gothic","나눔 고딕","돋움",dotum,sans-serif`,
    base: `'Noto Sans KR','Pretendard', 'Apple SD Gothic Neo', 'Malgun Gothic','Nanum Gothic', 'Noto Sans', '나눔고딕', 'Roboto', 'serif', 'sans-serif'`,
    title: `'Merriweather', serif`,
  },
  size: {
    xs: "0.688rem",
    sm: "0.825rem",
    md: "1rem",
    lg: "1.063rem",
    xl: "1.188rem",
    title: "1.438rem",
    modalTitle: "1.563rem",
  },
  weight: {
    xxs: 100,
    xs: 200,
    sm: 300,
    md: 400,
    lg: 500,
    xl: 700,
    xxl: 900,
  },
};

const colors = {
  main: "#499DF3",
  red: "#EC222A",
  yellow: "#ffff4d",
  orange: "#fbb62b",
  blue: "#499DF3",
  deepBlue: "#50667F",
  lightBlue: "#e0e3e7",
  green: "#33c77d",
  black: "#000000",
  bgGray: "#f8fafc",
  gray: "#DDDDDD",
  deepGray: "#777777",
  white: "#fff",
  tableBg: "#F8FAFC",
  background: "#F1F3F9",

  adminMain: "#da2550",
  adminRed: "#da2550",
  adminOrange: "#fbb62b",
  adminBlue: "#4368f5",
  adminPurple: "#e0e3e7",
  adminGreen: "#33c77d",
  adminBlack: "#1c1c38",
  adminGray: "#e0e3e7",
  adminGray2: "#999",
  adminTable: "#9293a1",
  adminBackground: "#f6f7fb",

  styleBlueMain: "#234E70",
  styleBlueSub: "#FBF8BE",
  styleRedMain: "#9A161F",
  styleRedSub: "#F4EFEA",
  styleGreenMain: "#9FC131",
  styleGreenSub: "#EEDFE2",
};

const size = {
  fold: "374px",
  smMobile: "375px",
  mobile: "425px",
  lgMobile: "640px",
  xlMobile: "718px",
  smTablet: "1000px",
  tablet: "1024px",
  smDesktop: "1000px",
  desktop: "1440px",
};


const boxshadow = {
  xxs: `rgba(0, 0, 0, 0.1) 0px 1px 4px;`,
  xs: `rgba(0, 0, 0, 0.04) 0px 3px 5px;`,
  sm: `rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;`,
  md: `rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em;`,
  lg: `rgba(149, 157, 165, 0.2) 0px 8px 24px`,
};

// 미디어 쿼리의 중복 코드를 줄이기위해 정의된 변수입니다
const device = {
  fold: `@media only screen and (max-width: ${size.fold})`,
  smMobile: `@media only screen and (max-width: ${size.smMobile})`,
  mobile: `@media only screen and (max-width: ${size.mobile})`,
  lgMobile: `@media only screen and (max-width: ${size.lgMobile})`,
  xlMobile: `@media only screen and (max-width: ${size.xlMobile})`,
  smTablet: `@media only screen and (max-width: ${size.smTablet})`,
  tablet: `@media only screen and (max-width: ${size.tablet})`,
  smDesktop: `@media only screen and (max-width: ${size.smDesktop})`,
  desktop: `@media only screen and (max-width: ${size.desktop})`,
};


const defalutTheme = {
  margins,
  paddings,
  fonts,
  device,
  size,
  boxshadow,
};

// 각 테마는 공통 변수와 함께, 각기 다른 색상 값들을 갖습니다.

export const theme = {
  ...defalutTheme,
  colors,
};
