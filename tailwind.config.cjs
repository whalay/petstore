/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                'herorec': "url('src/assets/images/herorec.svg')"
            }
        },
    },
    plugins: [],
}