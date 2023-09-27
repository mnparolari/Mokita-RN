import React, { Component } from 'react';
import { Animated, Easing, StyleSheet, View } from 'react-native';
import { colors } from '../../constants/colors';

interface State {
    spinValue: Animated.Value;
}

class RotatingVinyl extends Component<{}, State> {
    constructor(props: {}) {
        super(props);
        this.state = {
            spinValue: new Animated.Value(0),
        };
    }

    componentDidMount() {
        this.spin();
    }

    spin() {
        this.state.spinValue.setValue(0);
        Animated.timing(this.state.spinValue, {
            toValue: 1,
            duration: 11000,
            easing: Easing.linear,
            useNativeDriver: true,
        }).start(() => this.spin());
    }

    render() {
        const spin = this.state.spinValue.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '360deg'],
        });

        return (
            <View style={styles.container}>
                <Animated.Image
                    style={[
                        styles.image,
                        {
                            transform: [{ rotate: spin }],
                        },
                    ]}
                    source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/npm-la-casa-del-vinilo.appspot.com/o/rpmLogo.png?alt=media&token=a4e5ad4e-9f9f-4334-821d-756ce415f42c' }} // Reemplaza con la ruta de tu imagen
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: 900,
        backgroundColor: colors.quaternary,
        justifyContent: 'center',
        alignItems: 'center', 
        padding: 10,
    },
    image: {
        width: 150,
        height: 150,
    },
});

export default RotatingVinyl;