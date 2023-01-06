/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                'herorec': "url('src/assets/images/herorec.svg')",
                'bannerb': "url('src/assets/images/bannerb1.svg')",
                'banner': "url('src/assets/images/bannerb.svg')"
            }
        },
    },
    plugins: [],
}