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

    const { bookId } = req.query;

    if (typeof bookId !== "string") {
      throw new Error("Invalid Id");
    }

    if (!bookId) {
      throw new Error("Missing Id");
    }

    const books = await prismadb.book.findUnique({
      where: {
        id: bookId,
      },
    });

    return res.status(200).json(books);
  } catch (error) {
    console.log(error);
    return res.status(500).end();
  }
}
