import { StatusBar, FlatList, View, StyleSheet } from "react-native"
import { Entypo } from '@expo/vector-icons'
import { useSafeAreaInsets } from "react-native-safe-area-context"
import colors from "../constants/colors"
import currencies from '../data/currencies.json'
import { RowItem, RowSeparator } from "../components/RowItem"
import { useContext } from "react"
import { ConversionContext } from "../util/ConversionContext"

const styles = StyleSheet.create({
    icon: {
        width: 30,
        height: 30,
        backgroundColor: colors.blue,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default function CurrencyList({ navigation, route = {} }) {
    const insets = useSafeAreaInsets()
    const params = route.params || {}
    const { baseCurrency, quoteCurrency, setBaseCurrency, setQuoteCurrency } = useContext(ConversionContext)

    return (
        <View style={{ backgroundColor: colors.white }}>
            <StatusBar barStyle='dark-content' backgroundColor={colors.white} />
            <FlatList
                data={currencies}
                renderItem={({ item }) => {
                    let selected = false
                    if (params.isBaseCurrency && item === baseCurrency || !params.isBaseCurrency && item === quoteCurrency) {
                        selected = true
                    }

                    return <RowItem text={item}
                        onPress={() => {
                            params.isBaseCurrency ? setBaseCurrency(item) : setQuoteCurrency(item)
                            navigation.pop()
                        }}
                        rightIcon={
                            selected &&
                            <View style={styles.icon}>
                                <Entypo name='check' size={20} color={colors.white} />
                            </View>
                        } />
                }}
                keyExtractor={(item) => item}
                ItemSeparatorComponent={() => <RowSeparator />}
                ListFooterComponent={() => <View style={{ paddingBottom: insets.bottom }} />}
            />
        </View>
    )
}