import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    Container: {
        width: '100%',
        borderColor: '#ededed',
        borderWidth: 1,
        marginTop: 15,
        flexDirection: 'row'
    },
    Banner: {
        width: 100,
        height: 100
    },
    TextContainer: {
        flexDirection: 'column',
        marginLeft: 10,
        marginTop: 5
    },
    ItemName: {
        fontSize: 22,
    },
    ItemLocation: {
        fontSize: 18,
        color: '#826DFA',
        marginTop: 4,
        marginBottom: 4
    },
    ItemDate: {
        fontSize: 16
    }
});

export default styles;