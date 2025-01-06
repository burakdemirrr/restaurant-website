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
  'hero-image.jpg': 'https://source.unsplash.com/1600x900/?restaurant,interior',
  'about-image.jpg': 'https://source.unsplash.com/800x600/?restaurant,food',
  'menu/kahvalti.jpg': 'https://source.unsplash.com/800x600/?turkish,breakfast',
  'menu/menemen.jpg': 'https://source.unsplash.com/800x600/?menemen',
  'menu/levrek.jpg': 'https://source.unsplash.com/800x600/?grilled,fish',
  'menu/bonfile.jpg': 'https://source.unsplash.com/800x600/?steak',
  'menu/kofte.jpg': 'https://source.unsplash.com/800x600/?meatballs',
  'menu/sezar.jpg': 'https://source.unsplash.com/800x600/?caesar,salad',
  'menu/akdeniz.jpg': 'https://source.unsplash.com/800x600/?mediterranean,salad',
  'menu/kunefe.jpg': 'https://source.unsplash.com/800x600/?kunefe,dessert',
  'menu/cheesecake.jpg': 'https://source.unsplash.com/800x600/?cheesecake',
  'menu/turk-kahvesi.jpg': 'https://source.unsplash.com/800x600/?turkish,coffee',
  'menu/portakal.jpg': 'https://source.unsplash.com/800x600/?orange,juice'
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