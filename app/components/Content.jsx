import React from "react";
import { ScrollView, StyleSheet } from "react-native";

import ItemList from "./ItemList";
import { COLORS } from "../constants";
import Typography from "../core/Typography";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: COLORS.tertiary[100],
    },
});

const Content = () => {
    return (
        <ScrollView style={styles.container}>
            <Typography variant="h2">Hi, Vignesh 👋</Typography>
            <ItemList />
        </ScrollView>
    );
};

export default Content;
