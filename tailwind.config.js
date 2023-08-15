/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    fontFamily: {
      'sans': ['ui-sans-serif', 'system-ui', ],
      'serif': ['ui-serif', 'Georgia',],
      'mono': ['ui-monospace', 'SFMono-Regular', ],
      'display': ['Oswald', ],
      'body': ['"Open Sans"', ],
      'tetsuya': ['Righteous',],
      'logo' : ['Gloria Hallelujah'],
      'japan': ['Aoboshi One'],
      'japan2' : ['Tsukimi Rounded']
    }
  },
  plugins: [
    require('tailwindcss-animated')
  ],
}