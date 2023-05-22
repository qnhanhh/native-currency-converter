import { SafeAreaView } from 'react-native'
import { Entypo } from '@expo/vector-icons'
import colors from '../constants/colors'
import { RowItem, RowSeparator } from '../components/RowItem'

export default function Options() {
    return (
        <SafeAreaView>
            <RowItem
                text="Themes"
                onPress={() => alert("press")}
                rightIcon={
                    <Entypo name='chevron-right' size={20} color={colors.blue} />
                } />

            <RowSeparator />

            <RowItem
                text="React Native Basics"
                onPress={() => alert("press")}
                rightIcon={
                    <Entypo name='export' size={20} color={colors.blue} />
                } />

            <RowSeparator />

            <RowItem
                text="React Native by Example"
                onPress={() => alert("press")}
                rightIcon={
                    <Entypo name='export' size={20} color={colors.blue} />
                } />
        </SafeAreaView>
    )
}