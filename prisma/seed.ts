
import { PrismaClient } from '@prisma/client';

// initialize Prisma Client
const prisma = new PrismaClient();

async function main() {
  await prisma.article.deleteMany()

  // create two dummy articles
  const post1 = await prisma.article.upsert({
    where: { title: 'The first article' },
    update: {},
    create: {
      title: 'The first article',
      description: "Excitement and challenges of first-time writing.",
      body: "Explore the excitement and challenges of writing your very first article. From brainstorming ideas to crafting a compelling narrative, the journey of a new writer can be both daunting and rewarding. However, with determination and perseverance, anyone can develop the skills and confidence necessary to create a piece that resonates with readers. So take a deep breath, grab a pen, and start writing - the world is waiting to hear your story.",
      published: false,
    },
  });

  const post2 = await prisma.article.upsert({
    where: { title: "Another second article" },
    update: {},
    create: {
      title: "Another second article",
      description: "Challenges of writing a follow-up article.",
      body: "Let's delves into the process of writing a follow-up piece after the success of a first article. While it can be tempting to recreate the same formula that worked previously, it's important to challenge oneself and take risks in order to continue growing as a writer. Whether it's experimenting with a new style or tackling a different topic altogether, the key is to stay authentic and true to your voice. So embrace the journey and keep pushing boundaries - the next great article is just waiting to be written.",
      published: true,
    },
  });

  console.info([post1.title, post2.title]);
}

// execute the main function
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // close Prisma Client at the end
    await prisma.$disconnect();
  });
