module.exports = {
    extends: "universe/native",
    rules: {
        "prettier/prettier": [
            "error",
            {
                /* Windows CRLF prettier issue */
                /* https://stackoverflow.com/questions/53516594 */
                endOfLine: "auto",
            },
        ],
    },
};
