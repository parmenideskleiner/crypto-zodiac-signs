# crypto-zodiac-signs

`crypto-zodiac-signs` is a JavaScript library that combines the world of cryptocurrencies with the mystique of zodiac signs. This library utilizes `crypto-icons` for cryptocurrency symbols, `zodiac-signs` for zodiac information, and the `canvas` API to generate unique visual representations that merge a zodiac sign with a cryptocurrency symbol, customizable with various options.

## Features

- Generate images combining zodiac signs with cryptocurrency symbols.
- Customizable options for image size and background color.
- Easy integration with web and Node.js projects.

## Installation

Install `crypto-zodiac-signs` using npm:

```
npm install crypto-zodiac-signs
```

or using yarn:

```
yarn add crypto-zodiac-signs
```

## Usage

First, import the `generateZodiacCryptoIcon` function from the library:

```javascript
import { generateZodiacCryptoIcon } from 'crypto-zodiac-signs';
```

Then, you can generate an image by specifying the zodiac name, currency symbol, and optional settings:

```javascript
const imageDataUrl = generateZodiacCryptoIcon('leo', 'BTC', {
size: 200, // Optional: Image size (default is 100)
backgroundColor: '#f0f0f0' // Optional: Background color (default is '#fff')
});

// Use the imageDataUrl for displaying the image, e.g., setting it as the src for an <img> element
```

## API Reference

### `generateZodiacCryptoIcon(zodiacName, currencySymbol, options)`

- `zodiacName` (String): The name of the zodiac sign.
- `currencySymbol` (String): The symbol of the cryptocurrency.
- `options` (Object): Optional settings for the image generation.
    - `size` (Number): The size of the generated canvas. Default is 100.
    - `backgroundColor` (String): The background color of the canvas. Default is '#fff'.

## Contributing

Contributions are always welcome! Please read the contribution guidelines first.

## License

[MIT](LICENSE)

