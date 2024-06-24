import colors from './colors';

type Colors = {
    text: string;
    textAccent: string;
    background: string;
};

export const lightModeColors = {
    backgroundPrimary: colors.purewhite,
    backgroundSecondary: colors.pureblack,
    textPrimary: colors.pureblack,
    textSecondary: colors.purewhite,
};

export const darkModeColors = {
    backgroundPrimary: colors.pureblack,
    backgroundSecondary: colors.purewhite,
    textPrimary: colors.purewhite,
    textSecondary: colors.pureblack,
};
