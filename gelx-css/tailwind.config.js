/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [],
    safelist: [
        {
            pattern: /./,
        },
    ],
    theme: {
        extend: {},
    },
    plugins: [require('@tailwindcss/forms'), require('gelx-tailwind-plugin')],
}
