//Разработка функции возведения в степень — «pow»: спецификация

describe("pow", function () {
  it("возводит в степень n", function () {
    assert.equal(pow(2, 3), 8);
  });
});

//Давайте напишем простую реализацию функции pow, чтобы пройти тесты.
function pow(x, n) {
  return 8; // :) сжульничаем!
}

describe("pow", function () {
  it("2 в степени 3 будет 8", function () {
    assert.equal(pow(2, 3), 8);
  });

  it("3 в степени 4 будет 81", function () {
    assert.equal(pow(3, 3), 27);
  });
});

//Давайте напишем что-то более похожее на функцию возведения в степень, чтобы заставить тесты проходить.
function pow(x, n) {
  let result = 1;

  for (let i = 0; i < n; i++) {
    result *= x;
  }

  return result;
}

//Чтобы убедиться, что эта реализация работает нормально, давайте протестируем её на большем количестве значений. Чтобы не писать вручную каждый блок it, мы можем генерировать их в цикле for:
describe("pow", function () {
  function makeTest(x) {
    let expected = x * x * x;
    it(`${x} в степени 3 будет ${expected}`, function () {
      assert.equal(pow(x, 3), expected);
    });
  }

  for (let x = 1; x <= 5; x++) {
    makeTest(x);
  }
});

//Для обозначения математических ошибок функции JavaScript обычно возвращают NaN. Давайте делать также для некорректных значений n.Сначала давайте опишем это поведение в спецификации.

describe("pow", function () {
  // ...

  it("для отрицательных n возвращает NaN", function () {
    assert.isNaN(pow(2, -1));
  });

  it("для дробных n возвращает NaN", function () {
    assert.isNaN(pow(2, 1.5));
  });
});

//Новые тесты падают, потому что наша реализация не поддерживает их. Так работает BDD. Сначала мы добавляем тесты, которые падают, а уже потом пишем под них реализацию. Итак, нам нужно добавить пару строчек в функцию pow:
function pow(x, n) {
  if (n < 0) return NaN;
  if (Math.round(n) != n) return NaN;

  let result = 1;

  for (let i = 0; i < n; i++) {
    result *= x;
  }

  return result;
}
