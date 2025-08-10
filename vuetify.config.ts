import { defineVuetifyConfiguration } from 'vuetify-nuxt-module/custom-configuration'

export default defineVuetifyConfiguration({
  theme: {
    defaultTheme: 'light',
      themes: {
        light: {
          colors: {
            primary: '#6495ED',
            secondary: '#6495ED',
          },
        },
        dark: {
          dark: true,
          colors: {
            primary: '#6495ED',
            secondary: '#6495ED',
          },
        },
      },
  },
})
