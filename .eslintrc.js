module.exports = {
    "extends": [
        "airbnb",
        "plugin:redux-saga/recommended"
    ],
    "env": {
        "browser": true,
        "mocha": true,
        "es6": true
    },
    "rules": {
        "indent": ["error", 4],
        "react/jsx-filename-extension": [0, { "extensions": [".js", ".jsx"] }],
        "react/jsx-indent": [1, 4],
        "react/jsx-indent-props": [1, 4],
        "react/prop-types": [0],
    },
    "plugins": [
        "redux-saga"
    ]
};