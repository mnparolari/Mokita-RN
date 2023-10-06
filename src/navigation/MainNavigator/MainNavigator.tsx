import React, { useEffect } from 'react';
import AuthNavigator from '../AuthNavigator/AuthNavigator';
import BottomTabNavigator from '../ButtomTabNavigator/ButtomTabNavigator';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store';
import { useGetProfileImageQuery } from '../../services/shopApi';
import { setCameraImage } from '../../features/Auth/AuthSlice';

const MainNavigator = () => {
    const { user, localId } = useSelector((state: RootState) => state.auth);
    const dispatch = useDispatch<AppDispatch>();
    const { data, error, isLoading } = useGetProfileImageQuery(localId);

    useEffect(() => {
        if (data) {
            dispatch(setCameraImage(data.image))
        }
    }, [data])


    return user ? <BottomTabNavigator /> : <AuthNavigator />
}

export default MainNavigator