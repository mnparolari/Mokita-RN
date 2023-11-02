import React, { Component } from 'react';
import { View, Animated, Easing, Image, StyleSheet, ViewStyle, ImageStyle } from 'react-native';

interface RotatingVinylProps {
    containerStyle?: ViewStyle;
    imageStyle?: ImageStyle;
    imageSource: string;
}

interface State {
    spinValue: Animated.Value;
}

class RotatingVinyl extends Component<RotatingVinylProps, State> {
    constructor(props: RotatingVinylProps) {
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
        const { containerStyle, imageStyle, imageSource } = this.props;

        const spin = this.state.spinValue.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '360deg'],
        });

        return (
            <View style={[styles.container, containerStyle]}>
                <Animated.Image
                    style={[
                        styles.image,
                        {
                            transform: [{ rotate: spin }],
                        },
                        imageStyle,
                    ]}
                    source={{ uri: imageSource }}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
    },
    image: {
    },
});

export default RotatingVinyl;



