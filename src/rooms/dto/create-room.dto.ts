import * as DOC from '@nestjs/swagger';
export class CreateRoomDto {
  @DOC.ApiProperty({
    description: 'Room custom title',
    required: true,
  })
  title: string;

  @DOC.ApiProperty({
    description: 'Youtube video URL for play in room',
  })
  videoURL: string;
}
