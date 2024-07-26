const Converter = require('./converter');

test('Converts Fahrenheit to Celsius', () => {
    expect(Converter.fahrenheitToCelsius(32)).toBeCloseTo(0, 1);
    expect(Converter.fahrenheitToCelsius(212)).toBeCloseTo(100, 1);
});

test('Converts Celsius to Fahrenheit', () => {
    expect(Converter.celsiusToFahrenheit(0)).toBeCloseTo(32, 1);
    expect(Converter.celsiusToFahrenheit(100)).toBeCloseTo(212, 1);
});
