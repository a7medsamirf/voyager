// https://tailwindcss.com/docs/customizing-spacing/#default-spacing-scale

module.exports = {
    prefix: '',
    important: false,
    separator: ':',
    theme: {
      extend: {
        spacing: {
          '0.5': '0.125rem',
          '1.5': '0.375rem',
          '2.5': '0.625rem',
          '3.5': '0.875rem',
          '72': '18rem',
          '80': '20rem',
        },
        boxShadow: {
          'dark-lg': ' 0 10px 15px -3px rgba(170, 170, 170, .1), 0 4px 6px -2px rgba(170, 170, 170, .05)',
        }
      },
      maxHeight: {
        '0': '0',
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
        'full': '100%',
      },
      minHeight: {
        '1': '0.25rem',
        '2': '0.5rem',
        '4': '1rem',
        '8': '2rem',
      },
    },
    variants: {
      alignContent: ['responsive'],
      alignItems: ['responsive'],
      alignSelf: ['responsive'],
      appearance: ['responsive'],
      backgroundAttachment: ['responsive'],
      backgroundColor: ['dark', 'dark-hover', 'dark-group-hover', 'responsive', 'hover', 'focus'],
      backgroundPosition: ['responsive'],
      backgroundRepeat: ['responsive'],
      backgroundSize: ['responsive'],
      borderCollapse: ['responsive'],
      borderColor: ['dark', 'dark-focus', 'dark-focus-within', 'responsive', 'hover', 'focus'],
      borderRadius: ['responsive'],
      borderStyle: ['responsive'],
      borderWidth: ['responsive'],
      boxShadow: ['responsive', 'hover', 'focus'],
      cursor: ['responsive'],
      display: ['responsive'],
      fill: ['responsive'],
      flex: ['responsive'],
      flexDirection: ['responsive'],
      flexGrow: ['responsive'],
      flexShrink: ['responsive'],
      flexWrap: ['responsive'],
      float: ['responsive'],
      fontFamily: ['responsive'],
      fontSize: ['responsive'],
      fontSmoothing: ['responsive'],
      fontStyle: ['responsive'],
      fontWeight: ['responsive', 'hover', 'focus'],
      height: ['responsive'],
      inset: ['responsive'],
      justifyContent: ['responsive'],
      letterSpacing: ['responsive'],
      lineHeight: ['responsive'],
      listStylePosition: ['responsive'],
      listStyleType: ['responsive'],
      margin: ['responsive'],
      maxHeight: ['responsive'],
      maxWidth: ['responsive'],
      minHeight: ['responsive'],
      minWidth: ['responsive'],
      objectFit: ['responsive'],
      objectPosition: ['responsive'],
      opacity: ['responsive'],
      order: ['responsive'],
      outline: ['responsive', 'focus'],
      overflow: ['responsive'],
      padding: ['responsive'],
      pointerEvents: ['responsive'],
      position: ['responsive'],
      resize: ['responsive'],
      stroke: ['responsive'],
      tableLayout: ['responsive'],
      textAlign: ['responsive'],
      textColor: ['dark', 'dark-hover', 'dark-active', 'responsive', 'hover', 'focus'],
      textDecoration: ['responsive', 'hover', 'focus'],
      textTransform: ['responsive'],
      userSelect: ['responsive'],
      verticalAlign: ['responsive'],
      visibility: ['responsive'],
      whitespace: ['responsive'],
      width: ['responsive'],
      wordBreak: ['responsive'],
      zIndex: ['responsive'],
    },
    corePlugins: {},
    plugins: [
      require('tailwindcss-dark-mode')()
    ],
  }