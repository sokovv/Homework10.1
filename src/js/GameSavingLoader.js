import json from './parser.js';
import read from './reader.js';

export default class GameSavingLoader {
  load() {
    return new Promise((resolve, reject) => {
      let data = read();
      let value;
      setTimeout(() => {
        data.then(
          function(result) { 
            value = json(result)
          },
        );
      }, 2000);
      setTimeout(() => {
        value.then(
          function(result) { 
            resolve(JSON.parse(result))
          }, 
        );
      }, 4000);
    });
  }
}


