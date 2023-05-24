import { View, StyleSheet, StatusBar } from 'react-native'
import colors from '../constants/colors'

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.blue,
        flex: 1
    }
})

export default function Home() {
    return (
        <View style={styles.container}>
            <StatusBar barStyle='default' />
        </View>
    )
}