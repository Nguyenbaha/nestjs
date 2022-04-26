import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm'

@Injectable()
export class AppService {

  constructor(@InjectRepository(User) private usersResponsitory: Repository<User>) { }


  getAll(): Promise<User[]> {
    return this.usersResponsitory.find();
    // tuong duong select * from tblUser
  }


  // select * from user where userID = id ;
   async getOneById(id: number): Promise<User> {
    try {
      const user = await this.usersResponsitory.findOneOrFail(id); 
      return user ;
    }
    catch(err) {
      {
          throw err ;
      }
    }
  }
 
  

  // update info
  async updateUser(id: number, name: string): Promise<User> {
    const user = await this.getOneById(id) ;

    user.name = name ;
    
    return this.usersResponsitory.save(user) ;

  }



  // delete
  async deleteUser(id: number): Promise<User>
  {

    const user = await this.getOneById(id) ;

    return this.usersResponsitory.remove(user) ; 


   }


    createUser(name: string): Promise<User>{
      const newUser = this.usersResponsitory.create({name}) ;
      return this.usersResponsitory.save(newUser) ;
    }
  


  getHello(): string {
    return 'Hello World!';
  }
}
