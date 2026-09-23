const Jimp = require('jimp');

async function processLogo() {
  const inputPath = 'C:/Users/HAMMAD JATOI/.gemini/antigravity-ide/brain/bab4f9c6-fbc8-4f1a-8121-5dc40163ec41/.user_uploaded/media_1790021888919.png';
  const outputPath = 'public/login-logo-white.png';

  try {
    const image = await Jimp.read(inputPath);
    
    image.scan(0, 0, image.bitmap.width, image.bitmap.height, function (x, y, idx) {
      const red   = this.bitmap.data[idx + 0];
      const green = this.bitmap.data[idx + 1];
      const blue  = this.bitmap.data[idx + 2];
      const alpha = this.bitmap.data[idx + 3];

      // If the pixel is close to white (background), make it transparent
      if (red > 200 && green > 200 && blue > 200) {
        this.bitmap.data[idx + 3] = 0; // Transparent
      } else if (alpha > 0) {
        // If it's part of the logo (not white background), make it solid white
        this.bitmap.data[idx + 0] = 255;
        this.bitmap.data[idx + 1] = 255;
        this.bitmap.data[idx + 2] = 255;
      }
    });

    await image.writeAsync(outputPath);
    console.log('Logo processed and saved to', outputPath);
  } catch (error) {
    console.error('Error processing logo:', error);
  }
}

processLogo();
