import React, {useState} from 'react';
import { ApiDelivery } from '../../../Data/sources/remote/api/ApiDelivery';
import { RegisterAuthUseCase } from '../../../Domain/useCases/auth/RegisterAuth';
import { useStateForPath } from '@react-navigation/native';
RegisterAuthUseCase

const RegisterViewModel = () => {

    const [errorMessage, setErrorMessage] = useState('');
    const [values, setValues] = useState({
        name: '',
        lastname:'',
        email: '',
        phone:'',
        password:'',
        confirmPassword:'',
    })

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
      errorMessage
    }
}

export default RegisterViewModel;
