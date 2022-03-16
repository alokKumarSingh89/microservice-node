import { Test, TestingModule } from '@nestjs/testing';
import { SessionSerializerService } from './session-serializer.service';

describe('SessionSerializerService', () => {
  let service: SessionSerializerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SessionSerializerService],
    }).compile();

    service = module.get<SessionSerializerService>(SessionSerializerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
