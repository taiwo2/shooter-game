module.exports = {
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['babel-polyfill', 'babel-polyfill/dist/polyfill.min.js'],
          ['helper', './utils/helper'],
          ['material-ui/DatePicker', '../custom/DatePicker'],
          ['material-ui', 'material-ui-ie10']
        ],
        extensions: ['.ts', '.js', '.jsx', '.json']
      }
    }
  }
};