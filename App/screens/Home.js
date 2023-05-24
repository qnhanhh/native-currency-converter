import { View, StyleSheet, StatusBar, Image, Dimensions } from 'react-native'
import colors from '../constants/colors'

const screen = Dimensions.get('window')

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.blue,
        flex: 1,
        justifyContent: 'center'
    },
    logoContainer: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    logoBackground: {
        width: screen.width * 0.45,
        height: screen.width * 0.45
    },
    logo: {
        position: 'absolute',
        width: screen.width * 0.25,
        height: screen.width * 0.25
    }
})

export default function Home() {
    return (
        <View style={styles.container}>
            <StatusBar barStyle='light-content' backgroundColor={colors.blue} />
            <View style={styles.logoContainer}>
                <Image
                    style={styles.logoBackground}
                    source={require('../assets/images/background.png')}
                    resizeMode='contain'
                />
                <Image
                    style={styles.logo}
                    source={require('../assets/images/logo.png')}
                    resizeMode='contain'
                />
            </View>
        </View>
    )
}