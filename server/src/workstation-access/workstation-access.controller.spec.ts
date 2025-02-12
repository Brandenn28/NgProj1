import { Test, TestingModule } from '@nestjs/testing';
import { WorkstationAccessController } from './workstation-access.controller';
import { WorkstationAccessService } from './workstation-access.service';

describe('WorkstationAccessController', () => {
  let controller: WorkstationAccessController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WorkstationAccessController],
      providers: [WorkstationAccessService],
    }).compile();

    controller = module.get<WorkstationAccessController>(WorkstationAccessController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
