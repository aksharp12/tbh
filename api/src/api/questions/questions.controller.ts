import { Response } from 'express';
import { Get, HttpCode, JsonController, Params, Res } from 'routing-controllers';
import { Service } from 'typedi';
import { GetQuestionsRequest } from './questions.model';
import { QuestionsService } from './questions.service';

@Service()
@JsonController('/questions')
export class QuestionsController {
    constructor(private questionsService: QuestionsService) {}

    @Get('/:userId')
    @HttpCode(200)
    public async getQuestions(@Params() params: GetQuestionsRequest, @Res() response: Response) {
        return response.status(200).send(await this.questionsService.getQuestions(params));
    }
}
