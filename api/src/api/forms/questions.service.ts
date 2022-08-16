import { Service } from 'typedi';
import { Logger, LoggerInterface } from '../../decorators/logger';
import { User, UserMap } from '../../models/users';
import { questions, users } from '../fake.data';
import { GetQuestionsRequest } from './questions.model';

@Service()
export class QuestionsService {
    constructor(@Logger(__filename) logger: LoggerInterface) {}

    public async getQuestions(params: GetQuestionsRequest) {
        const user = users.map((user) => {
            return user.id === params.userId;
        });

        return questions.map((question) => {
            return question.constraints.map((constraint) => {
                console.log(constraint.property);
                console.log((user as UserMap)[constraint.property]);
                const val = eval((user as UserMap)[constraint.property] + constraint.comparator + constraint.value);
                return console.log(val);
            });
        });
    }
}
