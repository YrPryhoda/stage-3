const { FighterRepository } = require('../repositories/fighterRepository');
const { fighter } = require('../models/fighter');

class FighterService {
    // TODO: Implement methods to work with fighters
    //done
    create(fighterData) {
        const newFighter = { ...fighter, ...fighterData };
        const item = FighterRepository.create(newFighter);
        if (!item) {
            return null;
        }
        delete item.id;
        return item;
    }
    findAll() {
        const items = FighterRepository.getAll();
        if (!items) {
            return null;
        }
        return items;
    }
    findById(id) {
        const item = FighterRepository.getOne({ id });
        if (!item) {
            return null;
        }
        return item;
    }
    update(id, fighter) {
        const updatedFighter = FighterRepository.update(id, fighter);
        if (!updatedFighter) {
            return null;
        }
        delete updatedFighter.id;
        return updatedFighter;
    }
    delete(id) {
        const item = FighterRepository.delete(id);
        if (!item) {
            return null;
        }
        return item;
    }
}


module.exports = new FighterService();