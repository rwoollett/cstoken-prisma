import { createTestContext } from './__helpers';

const ctx = createTestContext({ portRange: { from: 4000, to: 6000 } });

import { NexusGenFieldTypes } from '../../generated/nexus-typegen';

it('returns list of clients', async () => {
  // Create two client
  await ctx.prisma.requestParent.create({
    data: {
      clientIp: "5510",
    }
  });
  await ctx.prisma.requestParent.create({
    data: {
      clientIp: "5520",
    }
  });
  await ctx.prisma.client.create({
    data: {
      ip: "5520",
      name: "Lemon",
      connected: false,
      parentIp: "5520"
    }
  });
  await ctx.prisma.client.create({
    data: {
      ip: "5510",
      name: "Pear",
      connected: false,
      parentIp: "5510"
    }
  });

  const amount = await ctx.prisma.client.count();
  expect(amount).toMatchInlineSnapshot(`14`);

});
