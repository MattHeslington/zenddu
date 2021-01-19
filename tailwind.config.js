module.exports = {
    purge: ['./pages/**/*.js', './components/**/*.js'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        screens: {
            'sm': '640px',
            'md': '768px',
            'lg': '1024px',
            'xl': '1180px',
        },
        extend: {
            colors:{
                "primary":"#25C8C7",
                "footer":"#282828",
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
