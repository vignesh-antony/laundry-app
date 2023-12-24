import {
    IBMPlexSans_100Thin,
    IBMPlexSans_100Thin_Italic,
    IBMPlexSans_200ExtraLight,
    IBMPlexSans_200ExtraLight_Italic,
    IBMPlexSans_300Light,
    IBMPlexSans_300Light_Italic,
    IBMPlexSans_400Regular,
    IBMPlexSans_400Regular_Italic,
    IBMPlexSans_500Medium,
    IBMPlexSans_500Medium_Italic,
    IBMPlexSans_600SemiBold,
    IBMPlexSans_600SemiBold_Italic,
    IBMPlexSans_700Bold,
    IBMPlexSans_700Bold_Italic,
} from "@expo-google-fonts/ibm-plex-sans";
import { useFonts } from "expo-font";
import { hideAsync } from "expo-splash-screen";
import React, { useCallback } from "react";
import { SafeAreaView, View, StyleSheet, Text } from "react-native";

import LaundryApp from "./app/index";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    loading: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});

export default function App() {
    const [fontsLoaded] = useFonts({
        IBMPlexSans_100Thin,
        IBMPlexSans_100Thin_Italic,
        IBMPlexSans_200ExtraLight,
        IBMPlexSans_200ExtraLight_Italic,
        IBMPlexSans_300Light,
        IBMPlexSans_300Light_Italic,
        IBMPlexSans_400Regular,
        IBMPlexSans_400Regular_Italic,
        IBMPlexSans_500Medium,
        IBMPlexSans_500Medium_Italic,
        IBMPlexSans_600SemiBold,
        IBMPlexSans_600SemiBold_Italic,
        IBMPlexSans_700Bold,
        IBMPlexSans_700Bold_Italic,
    });

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
            await hideAsync();
        }
    }, [fontsLoaded]);

    if (!fontsLoaded) {
        return (
            <View style={styles.loading}>
                <Text>Please wait, loading your app...</Text>
            </View>
        );
    }

    return (
        <SafeAreaView style={styles.container} onLayout={onLayoutRootView}>
            <LaundryApp />
        </SafeAreaView>
    );
}
