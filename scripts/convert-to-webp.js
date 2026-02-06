const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const imagesDir = path.join(process.cwd(), 'assets', 'images');
const outputDir = imagesDir; // Same directory, WebP versions

// Get all image files
const imageFiles = fs.readdirSync(imagesDir).filter(file =>
    /\.(jpg|jpeg|png)$/i.test(file) && !file.includes('.webp')
);

console.log(`Found ${imageFiles.length} images to convert...\n`);

// Quality settings based on image type
const getQuality = (filename) => {
    // Hero and critical images: higher quality
    if (filename.includes('hero') || filename.includes('logo')) return 85;
    // Gallery and amenities: balanced
    if (filename.includes('gallery') || filename.includes('amenities')) return 75;
    // Default
    return 80;
};

// Resize settings for large images
const getResizeOptions = (filename, metadata) => {
    // Don't resize logos or small icons
    if (filename.includes('logo') || filename.includes('icon') || filename.includes('bullet') || filename.includes('divider')) {
        return null;
    }

    // Limit max dimensions for performance
    const maxWidth = 1920;
    const maxHeight = 1200;

    if (metadata.width > maxWidth || metadata.height > maxHeight) {
        return {
            width: Math.min(metadata.width, maxWidth),
            height: Math.min(metadata.height, maxHeight),
            fit: 'inside',
            withoutEnlargement: true
        };
    }
    return null;
};

async function convertImage(filename) {
    const inputPath = path.join(imagesDir, filename);
    const outputFilename = filename.replace(/\.(jpg|jpeg|png)$/i, '.webp');
    const outputPath = path.join(outputDir, outputFilename);

    try {
        const image = sharp(inputPath);
        const metadata = await image.metadata();
        const quality = getQuality(filename);
        const resizeOptions = getResizeOptions(filename, metadata);

        let pipeline = image;

        if (resizeOptions) {
            pipeline = pipeline.resize(resizeOptions);
        }

        await pipeline
            .webp({ quality, effort: 6 })
            .toFile(outputPath);

        const originalSize = fs.statSync(inputPath).size;
        const newSize = fs.statSync(outputPath).size;
        const savings = ((1 - newSize / originalSize) * 100).toFixed(1);

        console.log(`✓ ${filename} → ${outputFilename}`);
        console.log(`  ${(originalSize / 1024).toFixed(0)}KB → ${(newSize / 1024).toFixed(0)}KB (${savings}% smaller)`);

        return { filename, originalSize, newSize, savings: parseFloat(savings) };
    } catch (err) {
        console.error(`✗ ${filename}: ${err.message}`);
        return null;
    }
}

async function main() {
    console.log('='.repeat(60));
    console.log('WebP Image Conversion Script');
    console.log('='.repeat(60));
    console.log();

    const results = [];

    for (const file of imageFiles) {
        const result = await convertImage(file);
        if (result) results.push(result);
    }

    console.log();
    console.log('='.repeat(60));
    console.log('SUMMARY');
    console.log('='.repeat(60));

    const totalOriginal = results.reduce((sum, r) => sum + r.originalSize, 0);
    const totalNew = results.reduce((sum, r) => sum + r.newSize, 0);
    const totalSavings = ((1 - totalNew / totalOriginal) * 100).toFixed(1);

    console.log(`Images converted: ${results.length}`);
    console.log(`Original total: ${(totalOriginal / 1024 / 1024).toFixed(2)} MB`);
    console.log(`New total: ${(totalNew / 1024 / 1024).toFixed(2)} MB`);
    console.log(`Total savings: ${totalSavings}% (${((totalOriginal - totalNew) / 1024 / 1024).toFixed(2)} MB saved)`);
}

main().catch(console.error);
