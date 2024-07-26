class Converter {
    static fahrenheitToCelsius(f) {
        return (f - 32) * 5.0 / 9.0;
    }

    static celsiusToFahrenheit(c) {
        return (c * 9.0 / 5.0) + 32;
    }
}

module.exports = Converter;
