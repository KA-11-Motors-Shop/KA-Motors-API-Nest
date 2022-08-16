import { Test, TestingModule } from '@nestjs/testing';
import { AnunciosService } from './anuncios.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Anuncio } from './entities/anuncio.entity';
import { Imagem } from '../imagens/entities/imagen.entity';

const mockAnuncioRepository = {
  create: jest.fn().mockImplementation((dto) => dto),
  save: jest.fn().mockImplementation((dto) =>
    Promise.resolve({
      id: '1',
      createdAt: '2022-08-15T22:07:22.658Z',
      updatedAt: '2022-08-15T22:07:22.658Z',
      ...dto,
    }),
  ),
};

const mockImagemRepository = {
  create: jest.fn().mockImplementation((dto) => {
    return { id: '1', ...dto };
  }),
  save: jest.fn().mockImplementation((dto) => dto),
};

const request = {
  titulo: 'nissan skyline gtr 32',
  preco: 12000,
  ano: 1996,
  categoria: 'carro',
  quilometragem: 3000,
  descricao: 'um classico',
  tipo: 'venda',
  publicado: true,
  photos: [
    'https://external-preview.redd.it/JIftf-RLWwEKAVwBUO_Y3QzF5Rt6GuXWKENIz2nXo2I.jpg?auto=webp&s=c854500e39dc60ed0ae9e4a1f310450cba003ef3',
    'https://www.japimportsuk.com/wp-content/uploads/2016/08/DSC0156.jpg',
  ],
};

const response = {
  titulo: 'nissan skyline gtr 32',
  preco: 12000,
  ano: 1996,
  categoria: 'carro',
  quilometragem: 3000,
  descricao: 'um classico',
  tipo: 'venda',
  publicado: true,
  imagens: [
    {
      link: 'https://external-preview.redd.it/JIftf-RLWwEKAVwBUO_Y3QzF5Rt6GuXWKENIz2nXo2I.jpg?auto=webp&s=c854500e39dc60ed0ae9e4a1f310450cba003ef3',
      id: '1',
    },
    {
      link: 'https://www.japimportsuk.com/wp-content/uploads/2016/08/DSC0156.jpg',
      id: '1',
    },
  ],
  id: '1',
  createdAt: '2022-08-15T22:07:22.658Z',
  updatedAt: '2022-08-15T22:07:22.658Z',
};
describe('AnunciosService', () => {
  let service: AnunciosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AnunciosService,
        {
          provide: getRepositoryToken(Anuncio),
          useValue: mockAnuncioRepository,
        },
        {
          provide: getRepositoryToken(Imagem),
          useValue: mockImagemRepository,
        },
      ],
    }).compile();

    service = module.get<AnunciosService>(AnunciosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create a anuncio', async () => {
    expect(await service.create(request)).toEqual(response);
  });
});
