import React, {useState, useEffect, use} from 'react'
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Image, View, Text, TextInput, ToastAndroid, TouchableOpacity, KeyboardAvoidingView, Platform, } from 'react-native';
import { RoundedButton } from '../../../Presentation/components/RoundedButton';
import {StackNavigationProp, StackScreenProps} from '@react-navigation/stack'
import { RootStackParamList } from '../../../../App';
import useViewModel from './ViewModel';
import styles from './Styles';
import  CustomTextInput  from '../../components/CustomTextInput';

interface Props extends StackScreenProps<RootStackParamList, 'HomeScreen'>{};

const HomeScreen = ({navigation, route}: Props) => {
    
    const{email, password, errorMessage, user, onChange, login} = useViewModel();
   

    useEffect(() => {
        if (errorMessage !== '') {
            ToastAndroid.show(errorMessage, ToastAndroid.LONG);
        }
    }, [errorMessage]);

    useEffect(() => {
        if (user?.id !== null && user?.id !== undefined) {
            navigation.replace('ProfileInfoScreen');
        }
    }, [user]);

    return (
    //Columna
    <KeyboardAvoidingView 
        style={styles.container}
         behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <Image
        source={require('../../../../assets/chef3.jpg')}
        style={styles.imageBackground}
        />

        <View style={styles.logoContainer}>
        <Image
            source={require('../../../../assets/green/forkgreen.png')}
            style={styles.logoImage}
        />
        <Text style={styles.logoText}>FOOD APP</Text>
        </View>

        <View style={ styles.form}>
        
            <Text style={styles.formText}>INGRESAR</Text>

            <CustomTextInput 
                image={ require('../../../../assets/green/mensajegreen.png')}
                placeholder='Correo electrónico'
                keyboardType='email-address'
                property='email'
                onChangeText={ onChange}
                value= { email }
            />  

             <CustomTextInput 
                image={ require('../../../../assets/green/cerrar.png')}
                placeholder='Contraseña'
                keyboardType='default'
                property='password'
                onChangeText={ onChange}
                value= { password }
                secureTextEntry= { true }
            />  


            <View style={{marginTop: 30}}>
                <RoundedButton text= 'ENTRAR' onPress={ () => login()} />
            </View>

            <View style={styles.formRegister}>
                <Text>¿No tienes cuenta?</Text> 
                <TouchableOpacity onPress={ () => navigation.navigate('RegisterScreen')}>
                    <Text style={styles.formRegisterText}>Registrate</Text> 
                </TouchableOpacity>
            </View>
            
        </View>

    </KeyboardAvoidingView>
    );
}


export default HomeScreen;
