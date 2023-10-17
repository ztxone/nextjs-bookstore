import { NextApiRequest, NextApiResponse } from "next";
import prismadb from "@/libs/prismadb";
import serverAuth from "@/libs/serverAuth";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (req.method !== "GET") {
      return res.status(405).end();
    }

    await serverAuth(req, res);

    const booksCount = await prismadb.book.count();
    const randomIndex = Math.floor(Math.random() * booksCount);

    const randomBooks = await prismadb.book.findMany({
      take: 1,
      skip: randomIndex,
    });

    return res.status(200).json(randomBooks[0]);
  } catch (error) {
    console.log(error);

    return res.status(500).end();
  }
}
