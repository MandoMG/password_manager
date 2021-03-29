import {Card} from "react-native-elements";
import React from 'react';
import {FlatList} from "react-native";
import PasswordListItem from "./PasswordListItem";

interface StoredPassword {
    websiteName: string;
    userName: string;
    password: string;
}

const renderItem = ({ item }: { item: StoredPassword}) => (
    <PasswordListItem accountName={item.websiteName} userName={item.userName} password={item.password} />
);

const keyExtractor = (item: StoredPassword, index: number) => index.toString()


const PasswordList = () => {
    const storedPasswords: StoredPassword[] = [
        {websiteName: 'Facebook', userName: 'mandoFb', password: 'facebookPass'},
        {websiteName: 'Twitter', userName: 'mandoTw', password: 'twitterPass'},
        {websiteName: 'Instagram', userName: 'mandoIg', password: 'instagramPass'},
        {websiteName: 'GMail', userName: 'mandoGm', password: 'gmailPass'},
        {websiteName: 'Facebook', userName: 'mandoFb', password: 'facebookPass'},
        {websiteName: 'Twitter', userName: 'mandoTw', password: 'twitterPass'},
        {websiteName: 'Instagram', userName: 'mandoIg', password: 'instagramPass'},
        {websiteName: 'GMail', userName: 'mandoGm', password: 'gmailPass'},
        {websiteName: 'Facebook', userName: 'mandoFb', password: 'facebookPass'},
        {websiteName: 'Twitter', userName: 'mandoTw', password: 'twitterPass'},
        {websiteName: 'Instagram', userName: 'mandoIg', password: 'instagramPass'},
        {websiteName: 'GMail', userName: 'mandoGm', password: 'gmailPass'}
    ]

    return (
        <Card>
            <FlatList
                data={storedPasswords}
                renderItem={renderItem}
                keyExtractor={keyExtractor}
            />
        </Card>
    );
}

export default PasswordList;