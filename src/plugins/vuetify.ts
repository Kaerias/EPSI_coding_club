/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import { createVuetify, ThemeDefinition } from 'vuetify'

const myCustomLightTheme: ThemeDefinition  = {
  dark: false,
  colors: {
    bleuprimaire: '004a8f',
    rougeprimaire: '#424242',
    grisprimaire: '#424242',
    blancprimaire: '#ffffff',
    orangedark: '#f36f35',
    orangemedium: '#f6a937',
    orangelight: '#f3c752',
    rosedark: '#ce1a85',
    rosemedium: '#e86095',
    roselight: '#f4b3c1',
    violetdark: '#6f3089',
    violetmedium: '#a33787',
    violetlight: '#bba3c9',
    bleudark: '#5865a6',
    bleumedium: '#009fdb',
    bleulight: '#75caef',
    vertdark: '#1bb694',
    vertmedium: '#8cc541',
    vertlight: '#bdcc48',
    grisdark: '#696985',
    grismedium: '#b3ada9',
    grislight: '#bdcccc'
  }
}

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    defaultTheme: "myCustomLightTheme",
    themes: {
      myCustomLightTheme
    },
  },
})
