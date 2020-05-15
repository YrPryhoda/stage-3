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
            delete item.id;
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
            throw Error('No such user found');
        }
        delete item.id;
        return item;
    }
    update(id, user) {
        const item = UserRepository.getOne({ id });
        if (!item) {
            throw Error('User not found');
        }
        let fieldToUpdate = {}
        for (let param in user) {
            !!user[param] && (fieldToUpdate[param] = user[param])
        }
        console.log(fieldToUpdate);
        const updatedUser = UserRepository.update(id, fieldToUpdate);
        if (!updatedUser) {
            throw Error('Can not update user');
        }
        delete updatedUser.id;
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