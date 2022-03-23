import GameSavingLoader from '../GameSavingLoader.js';

const gamasav = new GameSavingLoader()

test('Проверка промис без async / await ', () => {
    const data = gamasav.load()
    const obj = {
        "id": 9,
        "created": 1546300800,
        "userInfo": {
            "id": 1,
            "name": "Hitman",
            "level": 10,
            "points": 2000
        }
    }
    return expect(data).resolves.toEqual(obj);
});
