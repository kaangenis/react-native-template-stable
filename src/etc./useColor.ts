import { useColorScheme } from 'react-native';
import { darkModeColors, lightModeColors } from './themeColors';

const useColors = () => {
    const colorTheme = useColorScheme();
    return colorTheme === 'dark' ? darkModeColors : lightModeColors;
};
export default useColors;
