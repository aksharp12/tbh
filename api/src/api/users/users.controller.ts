import { Response } from 'express';
import { Get, HttpCode, JsonController, Res } from 'routing-controllers';
import { Service } from 'typedi';
import { UsersService } from './users.service';

@Service()
@JsonController('/users')
export class UsersController {
    constructor(private usersService: UsersService) {}

    @Get()
    @HttpCode(200)
    public async getUsers(@Res() response: Response) {
        return response.status(200).send(await this.usersService.getUsers());
    }
}
