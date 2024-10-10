const plugin = require('tailwindcss/plugin');

module.exports = plugin(function ({ addUtilities }) {
  addUtilities({
    '.glass-1': {
      'background': 'rgba(255, 255, 255, 0.25)',  // Fondo semitransparente
      'box-shadow': '0 8px 32px 0 rgba(100, 100, 100, 0.37)',  // Sombra gris
      'backdrop-filter': 'blur(4px)',  // Desenfoque en el fondo
      '-webkit-backdrop-filter': 'blur(4px)',  // Desenfoque para WebKit
      'border-radius': '10px',  // Bordes redondeados
      'border': '1px solid rgba(255, 255, 255, 0.18)',  // Borde semitransparente
    },
    '.shadow-down': {
      'box-shadow': 'rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset',
    },
    '.shadow-up': {
      'box-shadow': 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px',
    },
    '.shadow-mac': {
      'box-shadow': 'rgba(0, 0, 0, 0.56) 0px 22px 70px 4px',
    }
  });
});
