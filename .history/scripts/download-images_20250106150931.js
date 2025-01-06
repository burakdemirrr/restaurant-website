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
  'hero-image.jpg': 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4',
  'about-image.jpg': 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0',
  'menu/kahvalti.jpg': 'https://images.unsplash.com/photo-1533089860892-a7c6f0a88666',
  'menu/menemen.jpg': 'https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38',
  'menu/levrek.jpg': 'https://images.unsplash.com/photo-1535140728325-a4d3707eee61',
  'menu/bonfile.jpg': 'https://images.unsplash.com/photo-1546964124-0cce460f38ef',
  'menu/kofte.jpg': 'https://images.unsplash.com/photo-1529042410759-befb1204b468',
  'menu/sezar.jpg': 'https://images.unsplash.com/photo-1550304943-4f24f54ddde9',
  'menu/akdeniz.jpg': 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe',
  'menu/kunefe.jpg': 'https://images.unsplash.com/photo-1519676867240-f03562e64548',
  'menu/cheesecake.jpg': 'https://images.unsplash.com/photo-1524351199678-941a58a3df50',
  'menu/turk-kahvesi.jpg': 'https://images.unsplash.com/photo-1541167760496-1628856ab772',
  'menu/portakal.jpg': 'https://images.unsplash.com/photo-1577680716097-9a565ddc2007'
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