import ErrorRepository from '../app';

const myErrors = new ErrorRepository(
  { code: 500, description: 'Внутренняя ошибка сервера' },
  { code: 1020, description: 'Доступ запрещен' },
  { code: 400, description: 'Неверный запрос' },
);

test('correctly error', () => {
  const recieved = myErrors.translate(400);
  const expected = 'Неверный запрос';

  expect(recieved).toBe(expected);
});

test('unknown error', () => {
  const recieved = myErrors.translate(666);
  const expected = 'Unknown error';

  expect(recieved).toBe(expected);
});
