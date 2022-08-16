import { AppDataSource } from '../ormconfig';

global.beforeEach(async () => {
  await AppDataSource.initialize();
  await AppDataSource.dropDatabase();
});
