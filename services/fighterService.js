const { FighterRepository } = require('../repositories/fighterRepository');
const { fighter } = require('../models/fighter');

class FighterService {
    // TODO: Implement methods to work with fighters
    create(fighterData) {
        const newFighter = { ...fighter, ...fighterData };
        const item = FighterRepository.create(newFighter);
        if (!item) {
            return null;
        }
        return item;
    }
    findAll() {
        const result = [];
        /* const items = FighterRepository
            .getAll()
            .forEach((el) => {
                result.push({
                    name: el.name,
                    h: el.health,
                    power: el.power
                })

            }) */
        console.log(result);
        if (!items) {
            return null;
        }
        return result;
    }
}

module.exports = new FighterService();