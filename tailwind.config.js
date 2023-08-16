/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["index.html"],
  theme: {


      backgroundImage: {
        'wolf': "url('/asset/img/2.png')",
        'footer-texture': "url('/img/footer-texture.png')",
      },


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