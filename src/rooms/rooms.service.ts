import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { CreateRoomDto } from './dto';
import { Room } from './entities/room.entity';

@Injectable()
export class RoomsService {
  constructor(
    @InjectRepository(Room)
    private roomRepository: Repository<Room>,
  ) {}
  create(createRoomDto: CreateRoomDto): Promise<Room> {
    const newRoom = this.roomRepository.create(createRoomDto);

    return this.roomRepository.save(newRoom);
  }

  findAll() {
    return this.roomRepository.find();
  }

  findLastTeen() {
    return this.roomRepository.find({
      order: {
        id: 'DESC',
      },
      take: 10,
      skip: 0,
    });
  }

  async findOne(id: string) {
    return this.roomRepository.findOneBy({ id });
  }
}
