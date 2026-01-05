import React, { useState } from 'react'
import { RemoveUserLocalUseCase } from '../../../../Domain/useCases/userLocal/RemoveUserLocal';


const ProfileInfoViewModel = () => {

    const [values, setValues] = useState({
        buscar:''
    });
    const removeSession = async () => {
        await RemoveUserLocalUseCase();
    }

    const onChange = (property: string, value: any) => {
        setValues({ ...values, [property]: value})
    }

    return {
        removeSession,
        ...values,
        onChange,

    }
}

export default ProfileInfoViewModel;
