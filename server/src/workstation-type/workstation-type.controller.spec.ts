import { Test, TestingModule } from '@nestjs/testing';
import { WorkstationTypeController } from './workstation-type.controller';
import { WorkstationTypeService } from './workstation-type.service';

describe('WorkstationTypeController', () => {
  let controller: WorkstationTypeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WorkstationTypeController],
      providers: [WorkstationTypeService],
    }).compile();

    controller = module.get<WorkstationTypeController>(WorkstationTypeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
