import { Controller, Get, Post } from "@nestjs/common";

@Controller('users')
export class UserController {
    @Get()
    getAllUsers() {
        return [
            {
                name: 'John',
                age: 30
            },
            {
                name: 'John',
                age: 30
            }
        ];
    }

    @Post()
    createUser() {
        return {
            name: 'Ben',
            age : 30
        }
    }
}