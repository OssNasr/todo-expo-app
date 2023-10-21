import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { FontAwesome5, Entypo } from '@expo/vector-icons';
import { textColor } from '../../globals/globalStyles';
import styles from './Header.styles';
import { selectedListAtom } from '../../globals/globalState';
import { useRecoilValue } from 'recoil';

export default function Header({ navigation }) {

    const { header, barsIcon, headerText, row, buttonIcon } = styles;

    const selectedList = useRecoilValue( selectedListAtom );

    return (
        <View style={header}>
            
            <View style={row}>
                <TouchableOpacity onPress={navigation.openDrawer} style={barsIcon}>
                    <FontAwesome5 name="bars" color={textColor} size={28} />
                </TouchableOpacity>

                <Text style={headerText}>{ selectedList }</Text>
            </View>

            <View style={row}>
                <TouchableOpacity style={buttonIcon}>
                    <FontAwesome5 name="user-plus" color={textColor} size={20} />
                </TouchableOpacity>
                <TouchableOpacity style={buttonIcon}>
                    <Entypo name="dots-three-horizontal" color={textColor} size={20} />
                </TouchableOpacity>
            </View>

        </View>
    );
}

