import React, { useEffect } from 'react';
import AuthNavigator from '../AuthNavigator/AuthNavigator';
import BottomTabNavigator from '../ButtomTabNavigator/ButtomTabNavigator';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store';
import { useGetOrdersQuery, useGetProfileImageQuery } from '../../services/shopApi';
import { setCameraImage, setUser } from '../../features/Auth/AuthSlice';
import { fetchSession } from '../../db';
import { SessionType } from '../../models';
import { addUser } from '../../features/Cart/CartSlice';

const MainNavigator = () => {
    const { user, localId } = useSelector((state: RootState) => state.auth);
    const dispatch = useDispatch<AppDispatch>();
    const { data } = useGetProfileImageQuery(localId);
    const { refetch: refetchOrders, data: orderData } = useGetOrdersQuery(user ? user : "");
    
    useEffect(() => {
        if (data) {
            dispatch(setCameraImage(data.image))
        }
        if (user) {
            dispatch(addUser(user));
            refetchOrders();
        }
    }, [data, user, refetchOrders]);

    useEffect(() => {
        (async () => {
            try {
                
                const session = await fetchSession() as SessionType;
                if (session.rows.length) {
                    const user = session.rows._array[0];
                    dispatch(setUser(user));
                }
            } catch (error) {
                if (error instanceof Error) {
                    console.log('Error en obtener usuario', error.message);
                } else {
                    console.log('Error en obtener usuario', 'Error desconocido');
                }
            }
        })()
    }, [])



    return user ? <BottomTabNavigator /> : <AuthNavigator />
}

export default MainNavigator