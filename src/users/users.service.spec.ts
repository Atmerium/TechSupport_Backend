import { IsBoolean, IsNumber, IsString } from 'class-validator';
import { PrismaService } from '../prisma.service';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

describe('UsersController', () => {
  let usersController: UsersController;
  let usersService: UsersService;

  beforeEach(() => {
    const prisma = new PrismaService()
    usersService = new UsersService(prisma);
    //usersService = new UsersService();
    usersController = new UsersController(usersService);
  });

  describe('findAll', () => {
    it('should return an array of cats', async () => {
      const result = ['test'];
      jest.spyOn(usersService, 'findAll').mockImplementation( async () => await {IsNumber(), IsString(), IsString(), IsBoolean(), IsBoolean()});

      expect(await usersController.findAll()).toBe(result);
    });
  });
});
