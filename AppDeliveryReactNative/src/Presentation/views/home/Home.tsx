import React, {useState, useEffect} from 'react'
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Image, View, Text, TextInput, ToastAndroid, TouchableOpacity, KeyboardAvoidingView, Platform, } from 'react-native';
import { RoundedButton } from '../../../Presentation/components/RoundedButton';
import {StackNavigationProp} from '@react-navigation/stack'
import { RootStackParamList } from '../../../../App';
import useViewModel from './ViewModel';
import styles from './Styles';
import CustomTextInput from '../../components/CustomTextInput';

const HomeScreen = () => {
    
    const{email, password, errorMessage, onChange, login} = useViewModel();
    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

    useEffect(() => {
        if (errorMessage !== '') {
            ToastAndroid.show(errorMessage, ToastAndroid.LONG);
        }
    }, [errorMessage]);


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
