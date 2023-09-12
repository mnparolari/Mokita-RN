import { StyleSheet, ViewStyle } from 'react-native';
import { colors } from '../../constants/colors';

interface Styles {
    container: ViewStyle;
}

const styles = StyleSheet.create<Styles>({
    container: {
        backgroundColor: colors.secondary,
        shadowColor: '#2F7864ff',
        shadowOffset: { height: 5, width: 3 },
        elevation: 10,
        shadowOpacity: 1,
        shadowRadius: 1
    }
})

export default styles;