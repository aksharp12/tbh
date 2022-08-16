import { Service } from 'typedi';
import { Logger, LoggerInterface } from '../../decorators/logger';
import { users } from '../fake.data';

@Service()
export class UsersService {
    constructor(@Logger(__filename) logger: LoggerInterface) {}

    public async getUsers() {
        return users;
    }
}
