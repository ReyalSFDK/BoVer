import * as NEST from '@nestjs/common';
import * as DOC from '@nestjs/swagger';

import { RoomsService } from './rooms.service';
import { CreateRoomDto } from './dto';
import { Room } from './entities/room.entity';

@NEST.Controller('rooms')
@DOC.ApiTags('rooms')
export class RoomsController {
  constructor(private readonly roomsService: RoomsService) {}

  @NEST.Post()
  @DOC.ApiCreatedResponse({
    description: 'The room has been created',
    type: Room,
  })
  create(@NEST.Body() createRoomDto: CreateRoomDto): Promise<Room> {
    return this.roomsService.create(createRoomDto);
  }

  @NEST.Get()
  @DOC.ApiOkResponse({
    type: Room,
    isArray: true,
  })
  findAll(): Promise<Room[]> {
    return this.roomsService.findAll();
  }

  @NEST.Get(':id')
  @DOC.ApiOkResponse({
    type: Room,
  })
  @DOC.ApiNotFoundResponse()
  findOne(@NEST.Param('id') id: string) {
    return this.roomsService.findOne(id);
  }
}
