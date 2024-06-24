import React from 'react'
import {
    View,
    Text,
    Button,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity,
} from 'react-native'
import HomeIcon from '../../../assets/svg/home.svg'
import { useDemoHook } from '../../Hooks/useDemoHook';
import { useNavigationHook } from '../../Hooks/useNavigationHook';

const Home = () => {
    const {
        testState,
        increase,
        decrease
    } = useDemoHook();

    const { goBack } = useNavigationHook();

    return (
        <SafeAreaView style={styles.main}>
            <Text style={styles.homeText}>Home</Text>
            <TouchableOpacity onPress={goBack}>
                <HomeIcon width={64} height={64} />
            </TouchableOpacity>
            <View style={styles.rower}>
                <Button
                    title="+"
                    onPress={increase}
                />
                <Text style={styles.stateText}>{testState}</Text>
                <Button
                    title="-"
                    onPress={decrease}
                />
            </View>
        </SafeAreaView>
    )
}

export default Home

const styles = StyleSheet.create({
    main: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    rower: {
        width: '50%',
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    homeText: {
        fontSize: 24,
        fontFamily: 'OpenSans-Bold',
        marginVertical: 20
    },
    stateText: {
        fontSize: 18,
        fontFamily: 'OpenSans-Regular',
    }
})