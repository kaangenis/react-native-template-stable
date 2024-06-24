import React from 'react'
import {
    SafeAreaView,
    StyleSheet,
} from 'react-native'
import useColors from '../../etc./useColor';
import LoadingComponent from '../../Components/LoadingComponent';
import { useSplashHook } from './useSplashHook';

const Splash = () => {
    const {
        splashLoading,
    } = useSplashHook();
    const colorTheme = useColors();

    return (
        <SafeAreaView style={[styles.main, { backgroundColor: colorTheme.backgroundPrimary }]}>
            <LoadingComponent
                titleText='Welcome to React Native Template Project.'
                titleColor={colorTheme.textPrimary}
                visible={splashLoading}
                marginBetweenTextAndIndicator={10}
            />
        </SafeAreaView>
    )
}

export default Splash

const styles = StyleSheet.create({
    main: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})