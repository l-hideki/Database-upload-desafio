import { getCustomRepository } from 'typeorm';
import { isUuid } from 'uuidv4';
import TransactionsRepository from '../repositories/TransactionsRepository';
import AppError from '../errors/AppError';

class DeleteTransactionService {
  public async execute(id: string): Promise<void> {
    // TODO

    if (!isUuid(id)) {
      throw new AppError('Transaction Id not found');
    }

    const transactionsRepository = getCustomRepository(TransactionsRepository);
    const findTransaction = await transactionsRepository.findOne(id);

    if (!findTransaction) {
      throw new AppError('Transaction Id not found');
    }
    await transactionsRepository.remove(findTransaction);
  }
}
export default DeleteTransactionService;
