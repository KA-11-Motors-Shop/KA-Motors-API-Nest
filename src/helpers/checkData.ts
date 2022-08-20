import { ConflictException } from '@nestjs/common';

export const checkData = async (dto, repository) => {
  const alreadyExistEmail =
    dto.email == undefined
      ? false
      : await repository.findOneBy({
          email: dto.email,
        });
  const alreadyExistCpf =
    dto.cpf == undefined
      ? false
      : await repository.findOneBy({
          cpf: dto.cpf,
        });
  const alreadyExistPhone =
    dto.celular == undefined
      ? false
      : await repository.findOneBy({
          celular: dto.celular,
        });

  let customMsg = '';

  if (alreadyExistCpf) {
    customMsg = 'cpf';
  } else if (alreadyExistEmail) {
    customMsg = 'email';
  } else if (alreadyExistPhone) {
    customMsg = 'phone';
  }

  return customMsg;
};
