const plugin = require('tailwindcss/plugin');

module.exports = plugin(function ({ addUtilities }) {
  addUtilities({
    // Estilos para modo claro (light mode)
    '.glass': {
      'background': 'rgba(255, 255, 255, 0.25)',  // Fondo semitransparente claro
      'box-shadow': '0 8px 32px 0 rgba(100, 100, 100, 0.37)',  // Sombra gris clara
      'backdrop-filter': 'blur(4px)',  // Desenfoque en el fondo
      '-webkit-backdrop-filter': 'blur(4px)',  // Desenfoque para WebKit
      'border-radius': '10px',  // Bordes redondeados
      'border': '1px solid rgba(255, 255, 255, 0.18)',  // Borde semitransparente
    },
    '.glass-lg': {
      'background': 'rgba(255, 255, 255, 0.45)',  // Fondo más claro
      'box-shadow': '0 8px 32px 0 rgba(31, 38, 135, 0.37)',  // Sombra más profunda
      'backdrop-filter': 'blur(9px)',  // Desenfoque más fuerte
      '-webkit-backdrop-filter': 'blur(9px)',  // Desenfoque para WebKit
      'border-radius': '10px',  // Bordes redondeados
      'border': '1px solid rgba(255, 255, 255, 0.18)',  // Borde semitransparente
    },

    // Estilos para modo oscuro (dark mode)
    '@media (prefers-color-scheme: dark)': {
      '.glass': {
        'background': 'rgba(30, 30, 30, 0.25)',  // Fondo más oscuro
        'box-shadow': '0 8px 32px 0 rgba(0, 0, 0, 0.5)',  // Sombra más oscura
        'backdrop-filter': 'blur(4px)',  // Desenfoque en el fondo
        '-webkit-backdrop-filter': 'blur(4px)',  // Desenfoque para WebKit
        'border-radius': '10px',  // Bordes redondeados
        'border': '1px solid rgba(255, 255, 255, 0.1)',  // Borde más tenue
      },
      '.glass-lg': {
        'background': 'rgba(50, 50, 50, 0.35)',  // Fondo más oscuro
        'box-shadow': '0 8px 32px 0 rgba(0, 0, 0, 0.6)',  // Sombra más fuerte
        'backdrop-filter': 'blur(9px)',  // Desenfoque más fuerte
        '-webkit-backdrop-filter': 'blur(9px)',  // Desenfoque para WebKit
        'border-radius': '10px',  // Bordes redondeados
        'border': '1px solid rgba(255, 255, 255, 0.15)',  // Borde más tenue
      }
    },

    // Otras sombras personalizadas
    '.shadow-down': {
      'box-shadow': 'rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset',
    },
    '.shadow-up': {
      'box-shadow': 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px',
    },
    '.shadow-mac': {
      'box-shadow': 'rgba(0, 0, 0, 0.56) 0px 22px 70px 4px',
    },
    '.shadow-mac-sm': {
      'box-shadow': 'rgba(0, 0, 0, 0.2) 0px 20px 30px',
    },
    '.shadow-mat': {
      'box-shadow': 'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px',
    },
    '.shadow-cube': {
      'box-shadow': 'rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset',
    }
  });
});
