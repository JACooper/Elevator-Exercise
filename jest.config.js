module.exports = {
  moduleNameMapper: {
    "\\.(css|scss)$": "identity-obj-proxy"
  },
  testMatch: [ "tests/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[jt]s?(x)" ],
  transform: {
		'^.+\\.(js|ts)x?$': 'babel-jest',
	}
};