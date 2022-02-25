import { StyleSheet } from "react-native";
const Styles = StyleSheet.create({

    List: {
        // flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        flexWrap: 'wrap',
        width: '100%',
        height: '100%',
    },
    item: {
        height: 200,
        width: 150,
        alignItems: 'center',
        backgroundColor: 'white',
        borderWidth: 1,
        justifyContent: 'center',
        marginBottom: 20,
        borderColor: 'lightgray',
    }
})
export default Styles