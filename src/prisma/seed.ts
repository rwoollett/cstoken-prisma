import { PrismaClient, Prisma } from "@prisma/client";

(async () => {
  const prismaTest = new PrismaClient({
    datasources: {
      db: {
        url: process.env.DATABASE_TEST_URL
      }
    }
  });

  await prismaTest.$executeRaw`
  TRUNCATE TABLE "Client" RESTART IDENTITY CASCADE;
  `;

  await prismaTest.$executeRaw` INSERT INTO public."Client"(	ip, name, connected)	VALUES (5010, 'Lemon', false);  `;
  await prismaTest.$executeRaw` INSERT INTO public."Client"(	ip, name, connected)	VALUES (5020, 'Orange', false);  `;
  await prismaTest.$executeRaw` INSERT INTO public."Client"(	ip, name, connected)	VALUES (5030, 'Pear', false);  `;
  await prismaTest.$executeRaw` INSERT INTO public."Client"(	ip, name, connected)	VALUES (5040, 'Lime', false);  `;
  await prismaTest.$executeRaw` INSERT INTO public."Client"(	ip, name, connected)	VALUES (5050, 'Strawberry', false);  `;
  await prismaTest.$executeRaw` INSERT INTO public."Client"(	ip, name, connected)	VALUES (5060, 'Grape', false);  `;
  await prismaTest.$executeRaw` INSERT INTO public."Client"(	ip, name, connected)	VALUES (5070, 'Manderine', false);  `;
  await prismaTest.$executeRaw` INSERT INTO public."Client"(	ip, name, connected)	VALUES (5080, 'Apple', false);  `;
  await prismaTest.$executeRaw` INSERT INTO public."Client"(	host, ip, name, connected)	VALUES ('hostmachine', 7010, 'netproc7010', false);  `;
  await prismaTest.$executeRaw` INSERT INTO public."Client"(	host, ip, name, connected)	VALUES ('hostmachine', 7020, 'netproc7020', false);  `;
  await prismaTest.$executeRaw` INSERT INTO public."Client"(	host, ip, name, connected)	VALUES ('hostmachine', 7030, 'netproc7030', false);  `;
  await prismaTest.$executeRaw` INSERT INTO public."Client"(	host, ip, name, connected)	VALUES ('hostmachine', 7040, 'netproc7040', false);  `;

  const values = [];
  for (let i = 7070; i <= 7098; i += 2) {
    values.push(
      Prisma.sql`('hostmachine', ${i}, ${`netproc${i}`}, false)`
    );
  }

  await prismaTest.$executeRaw`
    INSERT INTO public."Client"
      (host, ip, name, connected)
    VALUES
      ${Prisma.join(values)};
  `;

  prismaTest.$disconnect();

})();

export { };