import { faker } from "@faker-js/faker";

interface User {
  userId: string;
  username: string;
  email: string;
  avatar: string;
  gender: string;
  password: string;
}

export function createRandomUser(): User {
  return {
    userId: faker.datatype.uuid(),
    username: faker.internet.userName(),
    email: faker.internet.email(),
    avatar: faker.image.avatar(),
    gender: faker.name.sex(), // Add gender attribute
    password: faker.internet.password(),
  };
}

export const Data: User[] = Array.from({ length: 100 }, createRandomUser);
