import { View, StyleSheet, Image } from "react-native";

import Logo from "../../assets/icons/logo.png";
import Typography from "../core/Typography";

const styles = StyleSheet.create({
    container: {
        padding: 16,
        flexDirection: "row",
        alignItems: "center",
        gap: 16,
    },
    logo: {
        width: 28,
        height: 28,
    },
});

const Header = () => {
    return (
        <View style={styles.container}>
            <Image source={Logo} style={styles.logo} />
            <Typography variant="h3">Laundry</Typography>
        </View>
    );
};

export default Header;
