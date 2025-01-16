import sharp from 'sharp';
import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const config = {
  sourceFile: path.join(__dirname, '../email-open-svgrepo-com.svg'),
  outputDir: path.join(__dirname, '../public/images'),
  background: '#2196f3',
  mainColor: '#ffffff'
};

async function ensureDirectoryExists(dir) {
  try {
    await fs.access(dir);
  } catch {
    await fs.mkdir(dir, { recursive: true });
  }
}

async function generateMetaImage(width, height, outputPath, title, subtitle) {
  // Create base image with background color
  const baseImage = sharp({
    create: {
      width,
      height,
      channels: 4,
      background: config.background
    }
  });

  // Read and resize the logo
  const logoSize = Math.min(width, height) * 0.25; // 25% of the smallest dimension
  const logoSizeInt = Math.round(logoSize); // Ensure integer value
  
  // Read SVG content and replace currentColor with white
  const svgContent = await fs.readFile(config.sourceFile, 'utf-8');
  const whiteSvg = svgContent.replace(/currentColor/g, 'white');
  
  // Create logo buffer with white color
  const logoBuffer = await sharp(Buffer.from(whiteSvg))
    .resize(logoSizeInt, logoSizeInt, { fit: 'contain', background: config.background })
    .toBuffer();

  // Calculate positions
  const logoX = Math.round((width - logoSizeInt) / 2);
  const logoY = Math.round(height * 0.2); // 20% from top
  const titleY = Math.round(height * 0.6); // 60% from top
  const subtitleY = Math.round(height * 0.75); // 75% from top

  // Create text overlays
  const titleSvg = `<svg width="${width}" height="${height}">
    <text x="50%" y="${titleY}" text-anchor="middle" font-family="Arial" font-size="${Math.round(height * 0.08)}px" font-weight="bold" fill="white">${title}</text>
  </svg>`;

  const subtitleSvg = `<svg width="${width}" height="${height}">
    <text x="50%" y="${subtitleY}" text-anchor="middle" font-family="Arial" font-size="${Math.round(height * 0.05)}px" fill="white">${subtitle}</text>
  </svg>`;

  // Composite all elements
  await baseImage
    .composite([
      {
        input: logoBuffer,
        top: logoY,
        left: logoX
      },
      {
        input: Buffer.from(titleSvg),
        top: 0,
        left: 0
      },
      {
        input: Buffer.from(subtitleSvg),
        top: 0,
        left: 0
      }
    ])
    .toFile(outputPath);
}

async function generateAllMetaImages() {
  try {
    await ensureDirectoryExists(config.outputDir);

    // Generate Open Graph image (1200x630)
    await generateMetaImage(
      1200,
      630,
      path.join(config.outputDir, 'og-image.png'),
      'BlinkMail',
      'Secure Temporary Email Service'
    );

    // Generate Twitter image (1200x600)
    await generateMetaImage(
      1200,
      600,
      path.join(config.outputDir, 'twitter-image.png'),
      'BlinkMail',
      'Secure Temporary Email Service'
    );

    // Generate default image (800x600)
    await generateMetaImage(
      800,
      600,
      path.join(config.outputDir, 'default-image.png'),
      'BlinkMail',
      'Secure Temporary Email Service'
    );

    console.log('Meta images generated successfully!');
  } catch (error) {
    console.error('Error generating meta images:', error);
  }
}

// Run the generation
generateAllMetaImages(); 