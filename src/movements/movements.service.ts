import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateMovementDto } from './dto/create-movement.dto';
import { UpdateMovementDto } from './dto/update-movement.dto';
import { Movement } from './schemas/movement.schema';

@Injectable()
export class MovementsService {
  constructor(@InjectModel(Movement.name) private movementModel: Model<Movement>) {}

  create(createMovementDto: CreateMovementDto): Promise<Movement> {
    const createdMovement = new this.movementModel(createMovementDto);
    return createdMovement.save();
  }

  findAll(): Promise<Movement[]> {
    return this.movementModel.find().exec();
  }

  findOne(id: number): Promise<Movement> {
    return this.movementModel.findById(id).exec();
  }

  update(id: number, updateMovementDto: UpdateMovementDto): Promise<Movement> {
    return this.movementModel.findByIdAndUpdate(id, updateMovementDto, { new: true }).exec();
  }

  remove(id: number): Promise<Movement> {
    return this.movementModel.findByIdAndRemove(id).exec();
  }
}
