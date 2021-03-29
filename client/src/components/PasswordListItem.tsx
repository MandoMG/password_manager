import React from 'react';
import {StyleSheet, View, Text} from "react-native";
import {ListItem} from "react-native-elements";
import Clipboard from '@react-native-clipboard/clipboard';

interface PasswordListItemProps {
    accountName: string;
    userName: string;
    password: string;
}

const onPress = (password: string) => {
    Clipboard.setString(password);
    console.log('Copied password: ', password)
};

const PasswordListItem = (props: PasswordListItemProps) => {
    const {accountName, userName, password} = props;
    return (
        <ListItem>
            <ListItem.Content>
                <ListItem.Title>{accountName}</ListItem.Title>
                <View style={styles.subtitleView}>
                    <Text style={styles.ratingText}>{userName}</Text>
                </View>
            </ListItem.Content>
            <ListItem.Chevron color='#007AFF' name='edit' type='font-awesome-5' onPress={() => onPress(password)} />
            <ListItem.Chevron color='#007AFF' name='copy' type='font-awesome-5' onPress={() => onPress(password)} />
        </ListItem>
    );
};

const styles = StyleSheet.create({
    subtitleView: {
        flexDirection: 'row',
        paddingTop: 5
    },
    ratingImage: {
        height: 19.21,
        width: 100
    },
    ratingText: {
        color: 'grey'
    }
})

export default PasswordListItem;
