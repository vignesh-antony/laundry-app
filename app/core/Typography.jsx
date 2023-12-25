import React, { useMemo } from "react";
import { StyleSheet, Text } from "react-native";

import { DEFAULT_FONTS, FONT_FAMILY_WEIGHT_MAP } from "../constants";

const TypographyStyles = (props) => {
    const {
        variant = "body",
        weight = "400",
        size = 14,
        lineHeight = 21,
        textCase = "none",
        color = "#000000",
    } = props || {};

    const getFontStyles = (variant) => {
        switch (variant) {
            case "h1": {
                return {
                    fontFamily: DEFAULT_FONTS.BOLD,
                    fontSize: 32,
                    lineHeight: 48,
                };
            }
            case "h2": {
                return {
                    fontFamily: DEFAULT_FONTS.BOLD,
                    fontSize: 24,
                    lineHeight: 36,
                };
            }
            case "h3": {
                return {
                    fontFamily: DEFAULT_FONTS.BOLD,
                    fontSize: 18,
                    lineHeight: 27,
                };
            }
            case "h4": {
                return {
                    fontFamily: DEFAULT_FONTS.BOLD,
                    fontSize: 16,
                    lineHeight: 24,
                };
            }
            case "h5": {
                return {
                    fontFamily: DEFAULT_FONTS.BOLD,
                    fontSize: 14,
                    lineHeight: 21,
                };
            }
            case "h6": {
                return {
                    fontFamily: DEFAULT_FONTS.BOLD,
                    fontSize: 12,
                    lineHeight: 18,
                };
            }
            case "small": {
                return {
                    fontFamily: DEFAULT_FONTS.REGULAR,
                    fontSize: 10,
                    lineHeight: 15,
                };
            }
            case "body": {
                return {
                    fontFamily:
                        FONT_FAMILY_WEIGHT_MAP[weight] || DEFAULT_FONTS.REGULAR,
                    fontSize: size || 14,
                    lineHeight: lineHeight || 21,
                };
            }
            default: {
                return {
                    fontFamily: DEFAULT_FONTS.REGULAR,
                    fontSize: size,
                };
            }
        }
    };
    const fontStyles = getFontStyles(variant) || {};
    return StyleSheet.create({
        text: {
            ...fontStyles,
            textTransform: textCase,
            color,
        },
    });
};

const Typography = ({
    variant = "body",
    weight = 400,
    size = 14,
    lineHeight = 21,
    textCase = "none",
    color = "#000000",
    numberOfLines = 0,
    children = null,
}) => {
    const styles = useMemo(
        () =>
            TypographyStyles({
                variant,
                weight,
                size,
                lineHeight,
                textCase,
                color,
            }),
        [variant],
    );
    return (
        <Text
            style={styles.text}
            numberOfLines={numberOfLines}
            ellipsizeMode="tail"
        >
            {children || ""}
        </Text>
    );
};

export default Typography;
