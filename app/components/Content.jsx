import React from "react";
import { ScrollView, StyleSheet } from "react-native";

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
            <Typography>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo
                qui dicta ab. Blanditiis exercitationem repellendus quaerat
                magnam alias amet aliquam molestiae doloribus nisi? Eaque
                numquam ipsam perspiciatis laboriosam! Dignissimos, odio.
                Similique repellendus, officiis officia, consectetur quos
                eveniet, autem debitis beatae distinctio ducimus labore
                perferendis tempora dolorem! Mollitia officiis, porro vitae id
                velit, sed eveniet molestias similique dolorum ipsa debitis
                expedita? Nulla rerum eaque id neque adipisci, quibusdam tempore
                minus perspiciatis reprehenderit eveniet.
            </Typography>
        </ScrollView>
    );
};

export default Content;
