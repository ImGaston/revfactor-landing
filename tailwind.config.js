/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                bone: '#DDDAD3',
                moss: '#5D6D59',
                cedar: '#13342D',
                walnut: '#76574C',
                tobacco: '#3F261F',
                onyx: '#161910',
                primary: {
                    DEFAULT: '#13342D', // cedar
                    foreground: '#DDDAD3' // bone
                },
                secondary: {
                    DEFAULT: '#5D6D59', // moss
                    foreground: '#DDDAD3'
                },
                background: '#DDDAD3', // bone
                foreground: '#161910', // onyx
                muted: {
                    DEFAULT: '#DDDAD3',
                    foreground: '#76574C' // walnut
                },
                accent: {
                    DEFAULT: '#5D6D59', // moss
                    foreground: '#DDDAD3'
                },
                destructive: {
                    DEFAULT: '#3F261F', // tobacco
                    foreground: '#DDDAD3'
                },
                border: '#13342D', // cedar
                input: '#13342D', // cedar
                ring: '#13342D', // cedar
                card: {
                    DEFAULT: '#DDDAD3', // bone
                    foreground: '#161910' // onyx
                },
                popover: {
                    DEFAULT: '#DDDAD3',
                    foreground: '#161910'
                }
            },
            fontFamily: {
                serif: ['Cormorant Garamond', 'serif'],
                sans: ['Inter', 'sans-serif']
            },
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)'
            }
        }
    },
    plugins: [require("tailwindcss-animate")],
}
