import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity} from 'react-native';

const GoalItem = props => {
    return(
        <TouchableOpacity onPress={props.onDelete.bind(this, props.text)}>
            <View key={props.key} style={styles.item}>
                <Text>{props.text}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    item: {
        padding: 10,
        marginVertical: 5,
        borderColor: 'black',
        borderWidth: 1,
        backgroundColor: '#ccc'
    }
});
export default GoalItem;