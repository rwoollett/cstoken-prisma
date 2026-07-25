import { createTestContext } from './__helpers';

const ctx = createTestContext({ portRange: { from: 4000, to: 6000 } });

it('returns list of clients', async () => {
  // Create two client
  await ctx.prisma.client.create({
    data: {
      ip: "5520",
      name: "Lemon",
      connected: false
    }
  });
  await ctx.prisma.client.create({
    data: {
      ip: "5510",
      name: "Pear",
      connected: false
    }
  });

  const amount = await ctx.prisma.client.count();
  expect(amount).toMatchInlineSnapshot(`18`);

});
