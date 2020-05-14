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
        const items = FighterRepository
            .getAll()
            .forEach(el => {
                const fighterObj = {};
                for (let key in el) {
                    if (key !== 'createdAt')
                        fighterObj[key] = el[key];
                }
                result.push(fighterObj)
            })
        if (!result) {
            return null;
        }
        return result;
    }
}

module.exports = new FighterService();