const fs = require("fs").promises;
const path = require('path');

const asyncReadCreateFile = async (_) => {
  const content = await fs.readFile("words.txt");

  const data = content.toString().split(/r?\n/);

  await fs.writeFile(path.join(__dirname,'../src/constants/words.js'), JSON.stringify(data, null, 1));
};

asyncReadCreateFile();
