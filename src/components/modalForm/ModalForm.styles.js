import { StyleSheet } from 'react-native';
 
export default StyleSheet.create({
    modal: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#999c',
    },
    modalContent: {
        width: '85%',
        backgroundColor: '#fffc',
        padding: 20,
        borderRadius: 8,
    },
    modalTitle: {
        fontSize: 24,
    },
    modalInput: {
        borderBottomWidth: 1,
        borderBottomColor: 'gray',
        padding: 8,
        marginVertical: 8,
        fontSize: 20
    },
    modalFooter: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginTop: 16
    },
    modalButton: {
        borderRadius: 8,
        padding: 8,
        margin: 8,
        width: 80,
        textAlign: 'center',
    },
    cancle: {
        color: 'white',
        backgroundColor: 'gray',
    },
    submit: {
        color: 'white',
        backgroundColor: '#0069d9',
    },
}); 
