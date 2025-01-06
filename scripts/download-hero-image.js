const https = require('https');
const fs = require('fs');
const path = require('path');

// Create the images directory if it doesn't exist
const imagesDir = path.join(process.cwd(), 'public', 'images');
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

// High-quality image URL from a professional restaurant shot
const imageUrl = 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop';

https.get(imageUrl, (response) => {
  const filePath = path.join(imagesDir, 'hero-bg.jpg');
  const fileStream = fs.createWriteStream(filePath);
  
  response.pipe(fileStream);
  
  fileStream.on('finish', () => {
    fileStream.close();
    console.log('Hero image downloaded successfully!');
  });
}).on('error', (err) => {
  console.error('Error downloading hero image:', err.message);
}); 