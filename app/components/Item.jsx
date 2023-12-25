import React from "react";
import { Image, StyleSheet, View } from "react-native";

import Moon from "../../assets/icons/shirt.png";
import { COLORS } from "../constants";
import Typography from "../core/Typography";

const styles = StyleSheet.create({
    container: {
        paddingVertical: 16,
        flexDirection: "row",
        alignItems: "center",
        gap: 16,
    },
    itemIconContainer: {
        borderRadius: 12,
        borderWidth: 1,
        borderColor: COLORS.tertiary[300],
        padding: 10,
    },
    itemIcon: {
        width: 36,
        height: 36,
    },
    itemInfo: {
        flex: 1,
    },
    itemCount: {
        maxWidth: 200,
        padding: 16,
    },
});

const Item = () => {
    return (
        <View style={styles.container}>
            <View style={styles.itemIconContainer}>
                <Image
                    source={Moon}
                    resizeMode="contain"
                    style={styles.itemIcon}
                />
            </View>
            <View style={styles.itemInfo}>
                <Typography size={18} numberOfLines={1}>
                    Readymade Shirts
                </Typography>
                <Typography size={14} color={COLORS.tertiary[500]}>
                    $10.00
                </Typography>
            </View>
            <View style={styles.itemCount}>
                <Typography size={22} lineHeight={22} weight={500}>
                    12
                </Typography>
            </View>
        </View>
    );
};

export default Item;
