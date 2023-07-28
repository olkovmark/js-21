console.clear();
/*
 * Клас: Musician
 * Статичні поля:
 * ------------------------
 * | Поле   |  Значення   |
 * |--------|-------------|
 * | count  |  0          |
 *
 * Властивості:
 * --------------------------------------
 * | Властивість  |  Тип                |
 * |--------------|---------------------|
 * | #name        |  String             |
 * | #instrument  |  String             |
 *
 * Гетери:
 * ---------------------
 * | Гетер    |  Повертає |
 * |----------|-----------|
 * | name     |  string   |
 * | instrument | string  |
 *
 * Методи:
 * --------------------------
 * | Метод   |  Дія         |
 * |---------|--------------|
 * | play()  | Виводить рядок в консоль |
 */

class Musician {
  static count = 0;
  #name;
  #instrument;
  constructor(name, instrument) {
    this.#name = name;
    this.#instrument = instrument;
    this.count++;
  }

  get name() {
    return this.#name;
  }

  get instrument() {
    return this.#instrument;
  }

  set name(newName) {
    this.#name = newName;
  }

  set instrument(newInstrument) {
    this.#instrument = newInstrument;
  }

  play() {
    console.log(`${this.#name} грає на ${this.#instrument}`);
  }
}

/*
 * Клас: Guitarist
 * Наслідується від: Musician
 *
 * Властивості:
 * ---------------------------------
 * | Властивість |  Тип           |
 * |-------------|----------------|
 * | #name       |  String        |
 * | #instrument |  String        |
 * | #band       |  String        |
 *
 * Гетери:
 * ---------------------
 * | Гетер  |  Повертає  |
 * |--------|------------|
 * | name   |  string    |
 * | band   |  string    |
 *
 * Сетери:
 * ---------------------
 * | Сетер  |  Очікує   |
 * |--------|-----------|
 * | name   |  string   |
 * | band   |  string   |
 *
 * Методи:
 * --------------------------
 * | Метод     |  Дія       |
 * |-----------|------------|
 * | play()    | Виводить рядок в консоль |
 * | joinBand()| Змінює значення #band |
 */

class Guitarist extends Musician {
  #band;
  constructor(name, instrument, band) {
    super(name, instrument);
    this.#band = band;
  }

  get band() {
    return this.#band;
  }

  set band(band) {
    this.#band = band;
  }

  joinBand(band) {
    this.#band = band;
  }

  play() {
    console.log(
      `${super.name} грає на ${super.instrument} в групі ${this.#band}`
    );
  }
}

/*
 * Клас: Bassist
 * Наслідується від: Musician
 *
 * Властивості:
 * ---------------------------------
 * | Властивість |  Тип           |
 * |-------------|----------------|
 * | #name       |  String        |
 * | #instrument |  String        |
 * | #band       |  String        |
 *
 * Гетери:
 * ---------------------
 * | Гетер  |  Повертає  |
 * |--------|------------|
 * | name   |  string    |
 * | band   |  string    |
 *
 * Сетери:
 * ---------------------
 * | Сетер  |  Очікує   |
 * |--------|-----------|
 * | name   |  string   |
 * | band   |  string   |
 *
 * Методи:
 * --------------------------
 * | Метод     |  Дія       |
 * |-----------|------------|
 * | play()    | Виводить рядок в консоль |
 * | joinBand()| Змінює значення #band |
 */

class Bassist extends Musician {
  #band;
  constructor(name, instrument, band) {
    super(name, instrument);
    this.#band = band;
  }

  get band() {
    return this.#band;
  }

  set band(band) {
    console.log("message");
    this.#band = band;
  }

  joinBand(band) {
    this.#band = band;
  }

  play() {
    console.log(
      `${super.name} грає на ${super.instrument} в групі ${this.#band}`
    );
  }
}

// Тут ми використовуємо Object.defineProperty(), щоб додати сетер band до класу Musician після його створення.

// Перший аргумент - це об'єкт, до якого ми хочемо додати властивість. У цьому випадку це Musician.prototype,

// тому що ми хочемо додати сетер до всіх екземплярів класу Musician.
// Другий аргумент - це ім'я властивості, яку ми хочемо додати. У цьому випадку це 'band'.
// Третій аргумент - це об'єкт, який описує властивість. У цьому випадку ми хочемо додати сетер,
// тому ми вказуємо функцію, яка буде викликатися при спробі встановити властивість 'band'.  this.#band = newBand

Object.defineProperty(Musician.prototype, "band", {
  set: function (newBand) {
    console.log("new_band");
    this.band = newBand;
  },
});

class Band {
  #name;
  #members = [];

  constructor(name, members) {
    this.#name = name;
    this.#members = members;
  }

  addMember(member) {
    // Перевіряємо чи Musician є прототипом newMember
    // Ось тут ми використовуємо сетер band класу Musician
    if (member instanceof Musician) {
      this.#members.push(member);
    } else {
      console.log("Новий учасник повинен бути екземпляром класу Musician");
    }
  }
  playMusic() {
    this.#members.forEach((v) => v.play());
  }

  get name() {
    return this.#name;
  }

  get members() {
    return this.#members;
  }

  set name(value) {
    this.#name = value;
  }
}

/*
 * Клас: Performance
 * ---------------------------
 * | Властивість |  Тип       |
 * |-------------|------------|
 * | band        |  Band      |
 * | location    |  string    |
 * | date        |  Date      |
 */
class Performance {
  #band;
  #location;
  #date;
  constructor(band, location, date) {
    this.#band = band;
    this.#location = location;
    this.#date = date;
  }

  get band() {
    return this.#band;
  }
  get location() {
    return this.#location;
  }
  get date() {
    return this.#date;
  }

  info() {
    console.log(
      `Гурт ${this.#band.name} виступить в ${
        this.#location
      } ${this.#date.toLocaleDateString()}`
    );
  }
}

/*
 * Клас: Concert
 * ---------------------------
 * | Властивість |  Тип       |
 * |-------------|------------|
 * | band        |  Band      |
 * | location    |  string    |
 * | date        |  Date      |
 * | ticketPrice |  number    |
 */
class Concert extends Performance {
  #ticketPrice;
  constructor(band, location, date, ticketPrice) {
    super(band, location, date);
    this.#ticketPrice = ticketPrice;
  }

  get ticketPrice() {
    return this.#ticketPrice;
  }

  set ticketPrice(price) {
    this.#ticketPrice = price;
  }

  info() {
    console.log(
      `Гурт ${super.band.name} виступить в ${
        super.location
      } ${super.date.toLocaleDateString()}, ціна квитка ${this.#ticketPrice}`
    );
  }
}

class Vocalist {
  #name;
  #band;

  constructor(name, band) {
    this.#name = name;
    this.#band = band;
  }

  get name() {
    return this.#name;
  }
  set name(value) {
    this.#name = value;
  }

  // Створюємо getter для #name, що повертає приватну властивість #name
  get band() {
    return this.#band;
  }
  set band(value) {
    this.#band = value;
  }

  info() {
    console.log(`Вокаліст ${this.name} є членом гурту ${this.band}`);
  }
  // Визначаємо метод info(), який виводить інформацію про вокаліста
  // Виводимо інформацію у форматі: "Вокаліст ${this.name} є членом гурту ${this.band}"
}

/*
 * Клас: SongWriter
 * ---------------------------
 * | Властивість |  Тип       |
 * |-------------|------------|
 * | #songs       |  array     |
 */
class SongWriter {
  #songs = [];
  constructor(songs) {
    this.#songs = songs;
  }

  get songs() {
    return this.#songs;
  }
  addSong(song) {
    this.#songs.push(song);
  }

  info() {
    console.log(`Написав ${this.songs.length} пісень`);
  }
}

class LeadSinger extends Vocalist {
  constructor(name, band) {
    super(name, band);
  }
}

const musician = new Musician("John", "Guitarist");

const guitarist = new Guitarist("Jimmy Page", "гітара", "Led Zeppelin");

const bassist = new Bassist("Paul McCartney", "бас-гітара", "The Beatles");

const band = new Band("The Beatles", [bassist]);

band.addMember(guitarist);

const vocalist = new Vocalist("Freddie Mercury", "Queen");

const songwriter = new SongWriter(["Yesterday", "Hey Jude", "Let It Be"]);

const performance = new Performance(band, "Liverpool", new Date("2023-08-01"));

Object.assign(LeadSinger.prototype, songwriter);

const concert = new Concert(band, "BBC studios", new Date("1994-07-06"), 100);

const leadSinger = new LeadSinger("Mick Jagger", "The Rolling Stones", [
  "Yesterday",
  "Hey Jude",
  "Let It Be",
]);

// Методи для тестування розкоментувати після виконання всіх завдань
musician.play();
guitarist.play();
bassist.play();
band.playMusic();
performance.info();
concert.info();
vocalist.info();
songwriter.info();
leadSinger.info();
