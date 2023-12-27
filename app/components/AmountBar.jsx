import React from "react";
import { StyleSheet, View } from "react-native";

import { COLORS } from "../constants";
import Typography from "../core/Typography";

const styles = StyleSheet.create({
    container: {
        paddingTop: 8,
        paddingBottom: 16,
        flexDirection: "row",
        alignItems: "center",
        gap: 16,
    },
    totalCount: {
        padding: 14,
        borderRadius: 8,
        backgroundColor: COLORS.tertiary[100],
        alignItems: "center",
        justifyContent: "center",
    },
    amount: {
        flex: 1,
        padding: 16,
        borderRadius: 8,
        backgroundColor: COLORS.success[100],
        borderWidth: 0.5,
        borderStyle: "dashed",
        borderColor: COLORS.success[500],
        alignItems: "center",
        justifyContent: "center",
    },
});

const AmountBar = () => {
    return (
        <View style={styles.container}>
            <View style={styles.amount}>
                <Typography
                    size={18}
                    lineHeight={18}
                    weight={700}
                    color={COLORS.success[900]}
                >
                    Total Amount: ₹ 160.00
                </Typography>
            </View>
            <View style={styles.totalCount}>
                <Typography size={22} lineHeight={22} weight={500}>
                    16
                </Typography>
            </View>
        </View>
    );
};

export default AmountBar;
