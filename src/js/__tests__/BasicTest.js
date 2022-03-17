import GameSavingLoader from '../GameSavingLoader.js';

const gamasav = new GameSavingLoader()

test('should work with promise', async () => {
     const data = await gamasav.load()
     const obj = {
        "id":9,
        "created":1546300800,
        "userInfo": {
            "id":1,
            "name":"Hitman",
            "level":10,
            "points":2000
        }
     }
     expect(data).toEqual(obj);
     });