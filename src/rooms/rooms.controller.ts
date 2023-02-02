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

  @NEST.Get('lastTeen')
  @DOC.ApiOkResponse({
    type: Room,
    isArray: true,
  })
  findAll(): Promise<Room[]> {
    return this.roomsService.findLastTeen();
  }

  @NEST.Get(':id')
  @DOC.ApiOkResponse({
    type: Room,
  })
  @DOC.ApiNotFoundResponse()
  async findOne(@NEST.Param('id') id: string) {
    if (!id) {
      throw new NEST.NotFoundException(404, 'ID is Empty');
    }

    const room = await this.roomsService.findOne(id);

    if (!room) {
      throw new NEST.NotFoundException(404, 'Room not found');
    }

    return room;
  }
}
