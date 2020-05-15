const { UserRepository } = require('../repositories/userRepository');

class UserService {
    // TODO: Implement methods to work with user
    // done
    create(userData) {
        const ifUserExcist = UserRepository.getOne({
            email: userData.email
        });
        if (!ifUserExcist) {
            const item = UserRepository.create(userData);
            if (!item) {
                throw Error('Server error');
            }
            return item;
        } else {
            throw Error('Email already excists');
        }
    }
    findAll() {
        const items = UserRepository.getAll();
        if (!items) {
            throw Error('No users found');
        }
        return items;
    }
    search(search) {
        const item = UserRepository.getOne(search);
        if (!item) {
            throw Error('No such found');
        }
        return item;
    }
    update(id, user) {
        const updatedUser = UserRepository.update(id, user);
        if(!updatedUser) {
            throw Error('Can not update user');
        }
        return updatedUser;
    }
    delete(id) {
        const item = UserRepository.delete(id);
        if (!item.length) {
            throw Error('No such user');
        }
        return item;
    }
}

module.exports = new UserService();