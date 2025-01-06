const https = require('https');
const fs = require('fs');
const path = require('path');

const downloadImage = (url, filepath) => {
  return new Promise((resolve, reject) => {
    https.get(url, (response) => {
      if (response.statusCode === 200) {
        response.pipe(fs.createWriteStream(filepath))
                 .on('error', reject)
                 .once('close', () => resolve(filepath));
      } else {
        response.resume();
        reject(new Error(`Request Failed With a Status Code: ${response.statusCode}`));
      }
    });
  });
};

const images = {
  'hero-image.jpg': 'https://images.unsplash.com/photo-1559339352-11d035aa65de',
  'about-image.jpg': 'https://images.unsplash.com/photo-1559339352-11d035aa65de',
  'menu/kahvalti.jpg': 'https://images.unsplash.com/photo-1513442542250-854d436a73f2',
  'menu/eggs-benedict.jpg': 'https://images.unsplash.com/photo-1608039829572-78524f79c4c7',
  'menu/levrek.jpg': 'https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62',
  'menu/antrikot.jpg': 'https://images.unsplash.com/photo-1600891964092-4316c288032e',
  'menu/risotto.jpg': 'https://images.unsplash.com/photo-1534080564583-6be75777b70a',
  'menu/reborn-salata.jpg': 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd',
  'menu/burrata.jpg': 'https://images.unsplash.com/photo-1595587870672-c79b47875c6a',
  'menu/san-sebastian.jpg': 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad',
  'menu/sufle.jpg': 'https://images.unsplash.com/photo-1624353365286-3f8d62daad51',
  'menu/turk-kahvesi.jpg': 'https://images.unsplash.com/photo-1544787219-7f47ccb76574',
  'menu/smoothie-bowl.jpg': 'https://images.unsplash.com/photo-1628557044797-f21a177c37ec',
  'menu/avokado-toast.jpg': 'https://images.unsplash.com/photo-1603046891726-36bfd957e0bf'
};

async function downloadAllImages() {
  const publicDir = path.join(process.cwd(), 'public');
  const menuDir = path.join(publicDir, 'menu');

  // Create directories if they don't exist
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir);
  }
  if (!fs.existsSync(menuDir)) {
    fs.mkdirSync(menuDir);
  }

  for (const [filename, url] of Object.entries(images)) {
    const filepath = path.join(publicDir, filename);
    const dir = path.dirname(filepath);
    
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    try {
      console.log(`Downloading ${filename}...`);
      await downloadImage(url, filepath);
      console.log(`Successfully downloaded ${filename}`);
    } catch (error) {
      console.error(`Error downloading ${filename}:`, error.message);
    }
  }
}

downloadAllImages().then(() => {
  console.log('All images downloaded successfully!');
}).catch((error) => {
  console.error('Error downloading images:', error);
}); 