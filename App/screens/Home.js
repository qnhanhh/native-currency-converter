import { View, StyleSheet, StatusBar, Image, Dimensions, Text, ScrollView, TouchableOpacity } from 'react-native'
import { Entypo } from '@expo/vector-icons'
import { SafeAreaView } from 'react-native-safe-area-context'
import colors from '../constants/colors'
import { ConversionInput } from '../components/ConversionInput'
import { format } from 'date-fns'
import { Button } from '../components/Button'
import { useContext, useState } from 'react'
import { KeyboardSpacer } from '../components/KeyboardSpacer'
import { ConversionContext } from '../util/ConversionContext'

const screen = Dimensions.get('window')

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.blue,
        flex: 1
    },
    header: {
        alignItems: 'flex-end',
        marginHorizontal: 20
    },
    content: {
        paddingTop: screen.height * 0.1
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
    },
    textHeader: {
        color: colors.white,
        fontWeight: 'bold',
        fontSize: 30,
        marginVertical: 20,
        textAlign: 'center'
    },
    text: {
        color: colors.white,
        fontSize: 14,
        textAlign: 'center'
    }
})

export default function Home({ navigation }) {
    const conversionRate = 0.8345
    const date = new Date()

    const { baseCurrency, quoteCurrency, swapCurrency } = useContext(ConversionContext)
    const [scroll, setScroll] = useState(false)
    const [value, setValue] = useState('1000')

    return (
        <View style={styles.container}>
            <ScrollView scrollEnabled={scroll}>
                <StatusBar barStyle='light-content' backgroundColor={colors.blue} />

                <SafeAreaView style={styles.header}>
                    <TouchableOpacity onPress={() => navigation.push('Options')}>
                        <Entypo name='cog' size={32} color={colors.white} />
                    </TouchableOpacity>
                </SafeAreaView>

                <View style={styles.content}>
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

                    <Text style={styles.textHeader}>Currency Converter</Text>

                    <ConversionInput
                        text={baseCurrency}
                        value={value}
                        onButtonPress={() => navigation.push('CurrencyList', {
                            title: 'Base Currency',
                            isBaseCurrency: true
                        })}
                        onChangeText={text => setValue(text)}
                        keyboardType='numeric'
                    />
                    <ConversionInput
                        text={quoteCurrency}
                        value={value && `${(parseFloat(value) * conversionRate).toFixed(2)}`}
                        onButtonPress={() => navigation.push('CurrencyList', {
                            title: 'Quote Currency',
                            isBaseCurrency: false
                        })}
                        keyboardType='numeric'
                        editable={false}
                    />

                    <Text style={styles.text}>
                        {`1 ${baseCurrency} = ${conversionRate} ${quoteCurrency} as of ${format(date, "MMMM do, yyyy")}.`}
                    </Text>

                    <Button text='Reverse currency' onPress={() => swapCurrency()} />

                    <KeyboardSpacer onToggle={(keyboardIsVisible) => setScroll(keyboardIsVisible)} />
                </View>
            </ScrollView>
        </View>
    )
}