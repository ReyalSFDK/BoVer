import * as ORM from 'typeorm';
import * as DOC from '@nestjs/swagger';

@ORM.Entity()
export class Room {
  @ORM.PrimaryGeneratedColumn()
  @DOC.ApiProperty()
  id: string;

  @ORM.Column()
  @DOC.ApiProperty()
  title: string;

  @ORM.Column()
  @DOC.ApiProperty()
  videoURL: string;
}
