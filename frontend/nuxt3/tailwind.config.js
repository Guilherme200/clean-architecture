import daisyui from 'daisyui';

module.exports = {
  config: {
    content: [
      './components/**/*.{js,vue,ts}',
      './layouts/**/*.vue',
      './pages/**/*.vue',
      './plugins/**/*.{js,ts}',
      './nuxt.config.{js,ts}',
    ],
    plugins: [(daisyui)],
    daisyui: {
      themes: ['dark'],
    },
  },
}
