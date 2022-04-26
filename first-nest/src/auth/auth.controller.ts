import { Body, Controller, ParseIntPipe, Post, Req, UsePipes, ValidationPipe } from "@nestjs/common";
import { Request } from "express";
import { AuthService } from "./auth.service";
import { AuthDto } from "./dto";

@Controller('auth')
export class AuthController{

    constructor(private authService: AuthService){}

    // dang ky : register
    @Post('signup')
    //@UsePipes(new ValidationPipe())
        signup(@Body() dto: AuthDto)
        {
        
                return this.authService.signup(dto);
        }
        // signup(
        //         @Body('email') email: string,

        //         @Body('password',ParseIntPipe) password: string  // validator password : int
        // )
        // {
        //         console.log({
        //                 email,
        //                 typeOfEmail: typeof email,
        //                 password: typeof password,
        //                 typeOfPassword: typeof password
        //         });
        // }



    // dang nhap: login
    @Post('signin')
    signin(@Body() dto: AuthDto)
    {
            return this.authService.signin(dto) ;
    }
}