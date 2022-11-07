module.exports = {
    content: ["./public/**/*.{html,js}"],
    theme: {
      extend: {
        backgroundImage: theme => ({
          'wave-pattern': "url('../img/wave-white.png')",
          'wave-pattern-dots': "url('../img/pattern-white-dots.png')"
        })
      },
    },
    variants: {
        extend: {},
    },
    plugins: [],
  }