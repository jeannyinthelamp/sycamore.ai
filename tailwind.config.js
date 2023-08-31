// Importing the required package
const withMT = require("@material-tailwind/react/utils/withMT");

// The shared content array for both configurations
const contentArray = ["./src/**/*.{js,jsx,ts,tsx}"];

// Merging the configurations
module.exports = withMT({
    content: contentArray,
    theme: {
        extend: {
            fontFamily: {
                Rubik: ["Rubik"],
                Gloria: ["Gloria Hallelujah"],
                Poppins: ["Poppins", "sans-serif"],
                Inter: ["Inter", "sans-serif"],
            },
            colors: {
                "base-black": "#424242",
            },
            // Other theme extensions can be added here
        },
    },
    plugins: [],
});
