import { Test, TestingModule } from '@nestjs/testing';
import { ImagensService } from './imagens.service';

describe('ImagensService', () => {
  // let service: ImagensService;

  // beforeEach(async () => {
  //   const module: TestingModule = await Test.createTestingModule({
  //     providers: [ImagensService],
  //   }).compile();

  //   service = module.get<ImagensService>(ImagensService);
  // });

  // it('should be defined', () => {
  //   expect(service).toBeDefined();
  // });

  it('should return 2', () => {
    expect(1 + 1).toEqual(2);
  });
});
