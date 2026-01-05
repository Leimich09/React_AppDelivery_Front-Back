import React, { useEffect, useState } from 'react'
import { Image, View, Text, KeyboardAvoidingView, Platform, ScrollView, ToastAndroid, TouchableOpacity, } from 'react-native';
import RoundedButton from '../../../Presentation/components/RoundedButton';
import useViewModel from './ViewModel';
import CustomTextInput from '../../components/CustomTextInput';
import styles from './Styles'
import ModalPickImage from '../../components/ModalPickImage';

export const RegisterScreen = () => {

    const { name, lastname, email, image, phone, password, confirmPassword, errorMessage, onChange, register, pickImage, takePhoto } = useViewModel();
    const [modalVisible, setModalVisible] = useState(false);

    useEffect(() => {
        if(errorMessage != ''){
            ToastAndroid.show(errorMessage, ToastAndroid.LONG);
        }
    }, [errorMessage])

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
            <TouchableOpacity onPress={() =>setModalVisible(true)}>
                {
                    image == ''
                    ? <Image
                        source={require('../../../../assets/user_image.png')}
                        style={styles.logoImage}
                    />
                    : <Image
                        source={{ uri: image}}
                        style={styles.logoImage}
                    />
                }
            </TouchableOpacity>
            <Text style={styles.logoText}>SELECCIONA UNA IMAGEN</Text>
        </View>

        <View style={ styles.form}>
        
            <ScrollView>

                <Text style={styles.formText}>REGISTRARSE</Text>

                <CustomTextInput 
                    placeholder='Nombres'
                    keyboardType='default'
                    image= {require('../../../../assets/green/perfil.png')}
                    property= 'name'
                    onChangeText= {  onChange}
                    value= { name}
                />

                <CustomTextInput 
                    placeholder='Apellidos'
                    keyboardType='default'
                    image= {require('../../../../assets/green/perfil1.png')}
                    property= 'lastname'
                    onChangeText= {  onChange}
                    value= { lastname}
                />

                <CustomTextInput 
                    placeholder='Correo eletrónico'
                    keyboardType='email-address'
                    image= {require('../../../../assets/green/mensajegreen.png')}
                    property= 'email'
                    onChangeText= {  onChange}
                    value= { email}
                />

                <CustomTextInput 
                    placeholder='Teléfono'
                    keyboardType='numeric'
                    image= {require('../../../../assets/green/llamada.png')}
                    property= 'phone'
                    onChangeText= {  onChange}
                    value= { phone}
                />

                <CustomTextInput 
                    placeholder='Contraseña'
                    keyboardType='default'
                    image= {require('../../../../assets/green/cerrar.png')}
                    property= 'password'
                    onChangeText= {  onChange}
                    value= { password }
                    secureTextEntry= {true}
                />

                <CustomTextInput 
                    placeholder='Confirmar Contraseña'
                    keyboardType='default'
                    image= {require('../../../../assets/green/key.png')}
                    property= 'confirmPassword'
                    onChangeText= {  onChange}
                    value= { confirmPassword }
                    secureTextEntry= {true}
                />


                <View style={{marginTop: 30}}>
                    <RoundedButton text= 'CONFIRMAR' onPress={ () => register()} />
                </View>

            </ScrollView>
        
        </View>

       <ModalPickImage
         openGallery={ pickImage}
         openCamera={ takePhoto }
         modalUseState= { modalVisible }
         setModalUseState={ setModalVisible }
       />
    </KeyboardAvoidingView>
    );
}
  
export default RegisterScreen
