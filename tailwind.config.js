/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        "./src/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#7857FF',
                btn: '#7856FF',
                green: '#166448',
                heading: '#0B0C14',
                stroke: '#E2E4E9',
                danger: '#FE4333',
                gray: '#858585'
            }
        },
        container: {
            center: true,
        },
        screens: {
            'xs': '390px',
            'sm': '414px',
            'md': '768px',
            'lg': '992px',
            'xl': '1200px',
            '2xl': '1320px',
            '3xl': '1440px',
            '4xl': '1560px',
        },
        fontFamily: {
            inter: `"Inter", sans-serif;`
        },
    },
    darkMode: "class",
    plugins: [],
}