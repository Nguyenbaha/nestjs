import { Body, Controller, Get, Param, ParseIntPipe, Post, Query } from '@nestjs/common';
import { ApiBadRequestResponse, ApiCreatedResponse, ApiNotFoundResponse, ApiOkResponse, ApiQuery, ApiTags } from '@nestjs/swagger';

import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import { UsersService } from './users.service';




@ApiTags('Users')
@Controller('users')
export class UsersController {

    constructor(private usersService: UsersService){}



    @ApiOkResponse({type: User, isArray: true})
    @ApiQuery({name: 'name', required: false})
    @Get()
    getUsers(@Query('name') name?: string):User[]
    {
        return this.usersService.findAll(name) ;
    }



    @ApiOkResponse({ type: User, description: 'theUser: '})
    @ApiNotFoundResponse()
    @Get(':id') 
    getUserById(@Param('id', ParseIntPipe) id: number): User
    {
        console.log('id', typeof id) ;
        
        return this.usersService.findById(Number(id)) ;
    }
    



    @ApiCreatedResponse({type: User})
    @ApiBadRequestResponse()
    @Post()
    createUser(@Body() body: CreateUserDto): User {
        return this.usersService.createUser(body) ;
    }
    // @Get(':id')
    // getUserNameById(@Param('id') id: string): any{
    //     return this.usersService.findById(Number(id)) ;
    // }

    // @Get()
    // getUserss(): any{
    //     return this.usersService.findAll() ;
    // }
}


// @Get()
// getUsers(): any {
//    this.usersService.findAll() ;
// }

// @Get(':id')
// getUserById(@Param('id') id: string): any  {
//     this.usersService.findById(Number(id))
// }