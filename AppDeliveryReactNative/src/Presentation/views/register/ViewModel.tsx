import React, {useState} from 'react';
import { ApiDelivery } from '../../../Data/sources/remote/api/ApiDelivery';
import { RegisterAuthUseCase } from '../../../Domain/useCases/auth/RegisterAuth';
import { useStateForPath } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker';

RegisterAuthUseCase

const RegisterViewModel = () => {

    const [errorMessage, setErrorMessage] = useState('');
    const [values, setValues] = useState({
        name: '',
        lastname:'',
        email: '',
        image: '',
        phone:'',
        password:'',
        confirmPassword:'',
    })

    const [file, setFile] = useState<ImagePicker.ImagePickerAsset | null>(null);

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ['images'],
            allowsEditing: true,
            quality: 1
        });

        if (!result.canceled) {
            onChange('image', result.assets[0].uri);
            setFile(result.assets[0]);
        }
    }

    const takePhoto = async () => {
        let result = await ImagePicker.launchCameraAsync({
            mediaTypes: ['images'],
            allowsEditing: true,
            quality: 1
        });

        if (!result.canceled) {
            onChange('image', result.assets[0].uri);
            setFile(result.assets[0]);
        }
    }

    const onChange = (property: string, value: any) => {
        setValues({ ...values, [property]: value})
    }

    const register = async () => {
        if (isValidForm()) {
            const response = await RegisterAuthUseCase(values);
            console.log('RESULT: ' + JSON.stringify(response));
        }
    }

    const isValidForm = (): boolean => {
        if(values.name === '') {
            setErrorMessage('Ingresa tu nombre');
            return false;
        }

        if(values.lastname === '') {
            setErrorMessage('Ingresa tu Apellido');
            return false;
        }

        if(values.email === '') {
            setErrorMessage('Ingresa tu correo electrónico');
            return false;
        }

        if(values.phone === '') {
            setErrorMessage('Ingresa tu teléfono');
            return false;
        }

        if(values.password === '') {
            setErrorMessage('Ingresa la contraseña');
            return false;
        }

        if(values.confirmPassword === '') {
            setErrorMessage('Ingresa la confirmación de la contraseña');
            return false;
        }
        if(values.password !== values.confirmPassword){
            setErrorMessage('Las contraseñas no coinciden');
        }

        return true;   
    }

    return {
      ...values,
      onChange,
      register,
      pickImage,
      takePhoto,
      errorMessage
    }
}

export default RegisterViewModel;
