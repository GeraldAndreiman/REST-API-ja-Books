import { faker } from '@faker-js/faker';
import { Book } from "../../models/book.model";
/**
* Real programming books defined manually (without IDs).
*/
function generateFakeBook(id: number): Book {
    return {
        id,
        title: faker.book.title(),
        publishedYear: faker.number.int({ min: 1970, max: 2024 }),
        author: faker.person.fullName(),
        isbn: faker.commerce.isbn(),
        genres: faker.genre()
    };
}

/**