const fs = require('fs');
const path = require('path');

const iconsDir = path.join(__dirname, 'icons'); // Path to icons folder
const outputFile = path.join(__dirname, 'icons.json'); // Output JSON file

fs.readdir(iconsDir, (err, files) => {
    if (err) {
        console.error('Error reading icons directory:', err);
        return;
    }

    // Filter for PNG files and exclude those starting with 'Artboard'
    const pngFiles = files.filter(file => {
        return path.extname(file).toLowerCase() === '.png' && !file.startsWith('Artboard');
    });

    fs.writeFile(outputFile, JSON.stringify(pngFiles, null, 2), (err) => {
        if (err) {
            console.error('Error writing icons.json:', err);
            return;
        }
        console.log(`Successfully generated icons.json with ${pngFiles.length} icons.`);
    });
});
