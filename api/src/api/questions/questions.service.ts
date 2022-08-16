import { Service } from 'typedi';
import { Logger, LoggerInterface } from '../../decorators/logger';
import { Question } from '../../models/questions';
import { User } from '../../models/users';
import { questions, users } from '../fake.data';
import { GetQuestionsRequest } from './questions.model';

@Service()
export class QuestionsService {
    constructor(@Logger(__filename) logger: LoggerInterface) {}

    public async getQuestions(params: GetQuestionsRequest) {
        let questionsToReturn: Question[] = [];
        const user = users.filter((user) => {
            return user.id === params.userId;
        })[0];

        questions.forEach((question) => {
            question.constraints.map((constraint) => {
                const prop = constraint.property as keyof typeof user;
                if (eval(user[prop] + constraint.comparator + constraint.value)) {
                    questionsToReturn.push(question);
                }
            });
        });

        return questionsToReturn;
    }
}
