import React from "react";
import { StyleSheet, View } from "react-native";

import Item from "./Item";
import { COLORS } from "../constants";
import Typography from "../core/Typography";

const styles = StyleSheet.create({
    container: {
        padding: 16,
        borderRadius: 8,
        backgroundColor: "#ffffff",
        marginTop: 16,
    },
});

const ItemList = () => {
    return (
        <View style={styles.container}>
            <View>
                <Typography
                    textCase="uppercase"
                    size={12}
                    weight={700}
                    color={COLORS.tertiary[500]}
                >
                    Laundry Items
                </Typography>
                <Typography size={12} color={COLORS.tertiary[500]}>
                    Created at 25-12-2023 11: 21 PM
                </Typography>
            </View>
            <Item />
            <Item />
            <Item />
        </View>
    );
};

export default ItemList;
