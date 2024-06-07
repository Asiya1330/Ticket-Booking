/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {
        backgroundImage: {
          'hero-navbar': "url('./assets/images/stadium.jpg')",
          'hero-section':  "url('./assets/images/stadium-bg.jpg')",
          'ticket-page':  "url('./assets/images/ticketsStadium.webp')",
          'leftMatch': "url('./assets/images/mbappe.png')",
          'rightMatch': "url('./assets/images/messi.png')"
        }
      },
    },
    plugins: [],
  }