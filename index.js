import cryptoIcons from 'crypto-icons';
import zodiacSigns from 'zodiac-signs';
import { select } from 'd3-selection';
import { createCanvas } from 'canvas';

const generateZodiacCryptoIcon = (zodiacName, currencySymbol, options = {}) => {
  const zodiacDetails = zodiacSigns(zodiacName);
  if (!zodiacDetails) {
    console.error("Invalid zodiac name");
    return;
  }

  const cryptoIcon = cryptoIcons[currencySymbol.toUpperCase()];
  if (!cryptoIcon) {
    console.error("Invalid currency symbol");
    return;
  }

  // Create canvas
  const canvasSize = options.size || 100;
  const canvas = createCanvas(canvasSize, canvasSize);
  const ctx = canvas.getContext('2d');

  // Background
  ctx.fillStyle = options.backgroundColor || '#fff';
  ctx.fillRect(0, 0, canvasSize, canvasSize);

  // Zodiac sign (mock drawing for illustration)
  ctx.fillStyle = '#000';
  ctx.fillText(zodiacDetails.name, 10, 50);

  // Currency symbol (mock drawing for illustration)
  ctx.fillStyle = '#777';
  ctx.fillText(cryptoIcon.symbol, 50, 50);

  return canvas.toDataURL();
};

export { generateZodiacCryptoIcon };
