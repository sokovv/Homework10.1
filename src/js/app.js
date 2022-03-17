import GameSavingLoader from './GameSavingLoader.js';

const gamasav = new GameSavingLoader()

gamasav.load().then((saving) => {
   console.log(saving)
  }, (error) => {
    // ...
  });
