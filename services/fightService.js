const { FightRepository } = require('../repositories/fightRepository');

class FightService {
    // OPTIONAL TODO: Implement methods to work with fights
    //done
    getAll() {
        const logs = FightRepository.getAll();
        if(!logs.length) {
            throw Error('no logs')
        }
        return logs; 
    }
    getLogById(id) {
        const log = FightRepository.getOne({id});
        if(!log) {
            throw Error('Log not found')
        }
        return log; 
    }
    writeLog(data) {
        const log = FightRepository.create(data);
        if(!log) {
            throw Error('Error writting')
        }
        return log;
    }
    delete(id) {
        const item = FightRepository.delete(id);
        if (!item) {
            return null;
        }
        return item;
    }
}

module.exports = new FightService();