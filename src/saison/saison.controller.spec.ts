import { Test, TestingModule } from '@nestjs/testing';
import { SaisonController } from './saison.controller';
import { SaisonService } from './saison.service';

describe('SaisonController', () => {
  let controller: SaisonController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SaisonController],
      providers: [SaisonService],
    }).compile();

    controller = module.get<SaisonController>(SaisonController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
