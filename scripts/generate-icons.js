import sharp from 'sharp';
import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get __dirname equivalent in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ICON_SIZES = [
  16,   // favicon-16x16.png
  32,   // favicon-32x32.png
  180,  // apple-touch-icon.png
  192,  // icon-192x192.png (PWA)
  256,  // icon-256x256.png (PWA)
  384,  // icon-384x384.png (PWA)
  512   // icon-512x512.png (PWA)
];

// Configuration for icon generation
const config = {
  sourceFile: path.join(__dirname, '../email-open-svgrepo-com.svg'),
  outputDir: path.join(__dirname, '../public'),
  background: { r: 255, g: 255, b: 255, alpha: 0 }, // Transparent background
  mainColor: '#2196f3' // Primary brand color
};

async function ensureDirectoryExists(directory) {
  try {
    await fs.access(directory);
  } catch {
    await fs.mkdir(directory, { recursive: true });
  }
}

async function generateIcon(size, outputPath, options = {}) {
  console.log(`Generating ${size}x${size} icon...`);
  
  try {
    const pipeline = sharp(config.sourceFile)
      .resize(size, size, {
        fit: 'contain',
        background: config.background
      });

    // Apply any additional options
    if (options.roundedCorners) {
      pipeline.composite([{
        input: Buffer.from(`<svg><rect x="0" y="0" width="${size}" height="${size}" rx="${size/4}" ry="${size/4}"/></svg>`),
        blend: 'dest-in'
      }]);
    }

    if (options.padding) {
      const padding = Math.floor(size * 0.1); // 10% padding
      pipeline.extend({
        top: padding,
        bottom: padding,
        left: padding,
        right: padding,
        background: config.background
      });
    }

    await pipeline.toFile(outputPath);
    console.log(`Generated: ${path.basename(outputPath)}`);
  } catch (error) {
    console.error(`Error generating ${outputPath}:`, error);
  }
}

async function generateAllIcons() {
  try {
    await ensureDirectoryExists(config.outputDir);

    // Generate favicons
    await generateIcon(16, path.join(config.outputDir, 'favicon-16x16.png'));
    await generateIcon(32, path.join(config.outputDir, 'favicon-32x32.png'));

    // Generate Apple Touch Icon (with rounded corners)
    await generateIcon(180, path.join(config.outputDir, 'apple-touch-icon.png'), {
      roundedCorners: true
    });

    // Generate PWA icons (with padding)
    const pwaSizes = [192, 256, 384, 512];
    for (const size of pwaSizes) {
      await generateIcon(size, path.join(config.outputDir, `icon-${size}x${size}.png`), {
        padding: true
      });
    }

    // Ensure shortcuts directory exists
    await ensureDirectoryExists(path.join(config.outputDir, 'shortcuts'));

    // Generate shortcut icons
    await generateIcon(192, path.join(config.outputDir, 'shortcuts/generate.png'), {
      padding: true
    });
    await generateIcon(192, path.join(config.outputDir, 'shortcuts/inbox.png'), {
      padding: true
    });

    // Generate favicon.ico (multi-size)
    console.log('Generating favicon.ico...');
    const faviconSizes = [16, 32, 48];
    const faviconBuffers = await Promise.all(
      faviconSizes.map(size => 
        sharp(config.sourceFile)
          .resize(size, size)
          .toBuffer()
      )
    );

    await sharp(faviconBuffers[0])
      .toFile(path.join(config.outputDir, 'favicon.ico'));

    console.log('All icons generated successfully!');
  } catch (error) {
    console.error('Error generating icons:', error);
  }
}

// Generate screenshot placeholders
async function generateScreenshots() {
  const screenshotSizes = {
    width: 1280,
    height: 720
  };

  try {
    // Create screenshots directory
    const screenshotsDir = path.join(config.outputDir, 'screenshots');
    await ensureDirectoryExists(screenshotsDir);

    // First, create a resized version of the logo
    const logoSize = 200;
    const logoBuffer = await sharp(config.sourceFile)
      .resize(logoSize, logoSize, {
        fit: 'contain',
        background: config.background
      })
      .toBuffer();

    // Generate placeholder screenshots
    const screenshots = ['home', 'inbox'];
    for (const screen of screenshots) {
      await sharp({
        create: {
          width: screenshotSizes.width,
          height: screenshotSizes.height,
          channels: 4,
          background: { r: 33, g: 150, b: 243, alpha: 0.1 }
        }
      })
      .composite([{
        input: logoBuffer,
        top: Math.floor(screenshotSizes.height / 2 - logoSize / 2),
        left: Math.floor(screenshotSizes.width / 2 - logoSize / 2)
      }])
      .toFile(path.join(screenshotsDir, `${screen}.png`));
      
      console.log(`Generated screenshot: ${screen}.png`);
    }

    console.log('All screenshots generated successfully!');
  } catch (error) {
    console.error('Error generating screenshots:', error);
  }
}

// Run the generation
(async () => {
  await generateAllIcons();
  await generateScreenshots();
})(); 