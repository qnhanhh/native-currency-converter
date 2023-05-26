import { TouchableOpacity, StyleSheet, Image, Text } from "react-native"
import colors from '../constants/colors'

const styles = StyleSheet.create({
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20
    },
    buttonIcon: {
        width: 20,
        height: 20,
        marginRight: 10
    },
    buttonText: {
        color: colors.white,
        fontSize: 16
    }
})

export const Button = ({ text, onPress }) => {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Image style={styles.buttonIcon} resizeMode="contain" source={require('../assets/images/reverse.png')} />
            <Text style={styles.buttonText}>{text}</Text>
        </TouchableOpacity>
    )
}