import React from "react";
import { StyleSheet, View, StatusBar } from "react-native";

import Content from "./components/Content";
import Footer from "./components/Footer";
import Header from "./components/Header";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: StatusBar.currentHeight || 40,
    },
});

const LaundryApp = () => {
    return (
        <View style={styles.container}>
            <Header />
            <Content />
            <Footer />
        </View>
    );
};

export default LaundryApp;
