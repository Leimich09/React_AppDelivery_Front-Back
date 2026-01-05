import React, { useState } from "react";
import { View, Text, Button } from 'react-native'
import useViewModel from './ViewModel'
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../../../../../App";
import CustomTextInput from "../../../components/CustomTextInput";

interface Props extends StackScreenProps<RootStackParamList, 'ProfileInfoScreen'>{};

export const ProfileInfoScreen = ({navigation, route}: Props) => {

    const { removeSession, buscar, onChange } = useViewModel();
    

    return (
         <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>

            <CustomTextInput
                placeholder="Buscar..."
                image={''}  
                keyboardType="default"
                property="buscar"
                value={buscar}
                onChangeText={onChange}
            />

            <Button 
                onPress={() =>  {
                    removeSession();
                    navigation.navigate('HomeScreen');
                }} 
                title='Cerrar sesion'
            />

         </View>
    )
}