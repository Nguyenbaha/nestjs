import { ApiProperty } from "@nestjs/swagger";

export class User
{
    @ApiProperty()
    id: Number ;
    
    @ApiProperty()
    name: string;
}