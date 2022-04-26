import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
    private users: User[] =    [{ id: 0, name: 'HaNb' },
                                { id: 1, name: 'HaNb' },
                                { id: 2, name: 'NgocNt' }];

    // get all user 
    findAll(name?: string): User[] {
        if(name)
        {
            return this.users.filter(user => user.name === name)
        } 

        return this.users;
    }

    // get user by id
    findById(id: number): User {

        const user = this.users.find( user => user.id === id)

        if(!user){
            throw new NotFoundException() ;
        }
        return user ;
    }


    // create new user
    createUser(createUserDto: CreateUserDto): User {
        const newUser = { id: Date.now(), ...createUserDto }
        // with spread operator, it's easy

        this.users.push(newUser)

        return newUser

    }


}

// findAll() 
// {
//     return this.users ;
// }
// findById(userId: number)
// {
//     return this.users.find( user => user.id === userId )
// }