import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    ActivityIndicator,
} from 'react-native';
import colors from '../etc./colors';

interface LoadingComponentProps {
    visible: boolean;
    isFullScreen?: boolean;
    backgroundColor?: string;
    disableText?: boolean;
    titleText?: string;
    titleColor?: string;
    indicatorColor?: string;
    indicatorSize?: 'small' | 'large';
    marginBetweenTextAndIndicator?: number;
}

const LoadingComponent = ({
    visible,
    isFullScreen,
    backgroundColor,
    disableText,
    titleText,
    titleColor,
    indicatorColor,
    indicatorSize,
    marginBetweenTextAndIndicator,
}: LoadingComponentProps) => {
    return (
        <>
            {visible ? (
                <View
                    style={
                        isFullScreen === true
                            ? [styles.fullscreenLoading, { backgroundColor: backgroundColor }]
                            : [styles.partlyLoading, { backgroundColor: backgroundColor }]
                    }>
                    <ActivityIndicator
                        size={indicatorSize ? indicatorSize : 'large'}
                        color={indicatorColor ? indicatorColor : colors.lightred} />
                    {
                        disableText === true
                            ? null
                            :
                            <View style={styles.textLimiter}>
                                <Text
                                    style={
                                        [
                                            styles.loadingText,
                                            {
                                                color: titleColor,
                                                marginTop: marginBetweenTextAndIndicator ? marginBetweenTextAndIndicator : 10,
                                            }
                                        ]
                                    }>
                                    {
                                        titleText
                                            ? titleText
                                            : 'Loading...'
                                    }
                                </Text>
                            </View>
                    }
                </View>
            ) : null}
        </>
    );
};

export default LoadingComponent;

const styles = StyleSheet.create({
    fullscreenLoading: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        width: '100%',
    },
    partlyLoading: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        width: '100%',
    },
    loadingText: {
        fontSize: 16,
        fontWeight: '400',
        marginTop: 10,
        fontFamily: 'Nunito-Regular',
        textAlign: 'center',
    },
    textLimiter: {
        height: 100,
        width: 200,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
    }
});
