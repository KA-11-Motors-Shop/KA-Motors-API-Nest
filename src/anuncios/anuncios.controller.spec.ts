import { Test, TestingModule } from '@nestjs/testing';
import { AnunciosController } from './anuncios.controller';
import { AnunciosService } from './anuncios.service';
import { User } from '../users/entities/user.entity';

describe('AnunciosController', () => {
  let anuncios = [];
  let controller: AnunciosController;
  const mockAnuncioService = {
    create: jest.fn((dto, user) => {
      const createdAnuncio = {
        ...dto,
        id: 1,
        sellerId: user.id
      };
      anuncios.push(createdAnuncio);
      return anuncios[0];
    }),
    findAll: jest.fn(() => anuncios),
    remove: jest.fn((id) => {
      anuncios = anuncios.filter((ad) => ad.id !== id);
      return anuncios;
    }),
  };
  const anuncio = {
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
  const user = {
    id: '1',
  } as User;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AnunciosController],
      providers: [AnunciosService],
    })
      .overrideProvider(AnunciosService)
      .useValue(mockAnuncioService)
      .compile();

    controller = module.get<AnunciosController>(AnunciosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should create a anuncio', () => {
    expect(controller.create(anuncio, user)).toEqual(anuncios[0]);
  });

  it('should return all anuncios', () => {
    expect(controller.findAll()).toEqual(anuncios);
  });

  it('should delete a anuncio', () => {
    expect(controller.remove('1')).toEqual(anuncios);
  });
});
