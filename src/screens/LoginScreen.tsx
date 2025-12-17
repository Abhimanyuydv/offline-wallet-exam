import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native';
import { useDispatch } from 'react-redux';
import { loginApi } from '../api/authApi';
import { saveAuth } from '../storage/secureStorage';
import { restoreAuth } from '../store/authSlice';


const LoginScreen = () => {
    const dispatch = useDispatch();

    const [loading, setLoading] = useState(false);

    const onLogin = async () => {
        setLoading(true);
        const res = await loginApi('user', 'pass');
        await saveAuth(res);
        dispatch(restoreAuth(res));
        setLoading(false);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login</Text>
            <TouchableOpacity style={styles.button} onPress={onLogin}>
                {loading ? <ActivityIndicator size="small" color="white" /> : <Text style={styles.buttonText}>Login</Text>}
            </TouchableOpacity>
        </View>
    );
};

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    button: {
        marginTop: 20,
        width: '90%',
        height: 50,
        backgroundColor: 'blue',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
});
