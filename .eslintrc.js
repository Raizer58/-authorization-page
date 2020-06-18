module.exports = {
  'env': {
    'browser': true,
    'es6': true
  },
  'extends': ['airbnb-base/legacy', 'airbnb/hooks'],
  "plugins": ["react"],
  'globals': {
    'Atomics': 'readonly',
    'SharedArrayBuffer': 'readonly'
  },
  'parserOptions': {
    'ecmaVersion': 2018,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  'rules': {
    'semi': ['error', 'always'],
    'quotes': ['error', 'double'],
    'global-require': 0,
    'linebreak-style': [0, 'error', 'windows']
  }
};
