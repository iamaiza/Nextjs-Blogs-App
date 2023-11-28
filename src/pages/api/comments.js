import prisma from "@/utils/prisma";
import { authOptions } from "@/utils/auth";
import { getServerSession } from 'next-auth'


const GET = async (req, res) => {
  const { searchParams } = new URL(req.url, "http://localhost:3000");
  const postSlug = searchParams.get("slug");

  try {
    const comments = await prisma.comment.findMany({
      where: {
        ...(postSlug && { postSlug }),
      },
      include: {
        user: true,
      },
    });
    res.status(200).json(comments);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong" || error });
  }
};

const POST = async (req, res) => {
    const session = await getServerSession(req, res, authOptions);
    if (!session) {
      res.status(401).json({ message: "Unauthorized user." });
      return;
    }

    try {
      const { desc, slug } = req.body;
      const comment = await prisma.comment.create({
        data: { desc, postSlug: slug, userEmail: session.user.email },
      });

      console.log(comment)
      res.status(201).json(comment)
    } catch (error) {
        res.status(500).json({ message: "Something went wrong" || error })
    }
};

const handler = (req, res) => {

  if(req.method === "POST") {
    POST(req, res)
  }
  else {
    GET(req, res)
  }

};

export default handler;
