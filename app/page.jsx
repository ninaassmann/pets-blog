import prisma from "@/lib/prisma";

async function getBreeds() {
  const breeds = await prisma.breed.findMany();
  return breeds;
}

export default async function Home() {
  const breeds = await getBreeds();
  console.log(breeds);
  return (
    <main>
      <h1>Breeds</h1>
    </main>
  );
}
