import React from "react";
import { StyleSheet, View } from "react-native";

import Typography from "../core/Typography";

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        padding: 16,
    },
});

const Footer = () => {
    return (
        <View style={styles.container}>
            <Typography>Footer content goes here</Typography>
        </View>
    );
};

export default Footer;
