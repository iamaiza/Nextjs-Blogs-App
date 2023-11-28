import { authOptions } from "@/utils/auth";
import prisma from "@/utils/prisma";
import { getServerSession } from "next-auth";

const GET = async(req, res) => {
    const { searchParams } = new URL(req.url, `http://localhost:3000`);
    const page = searchParams.get("page");
    const cat = searchParams.get("category")

    const POST_PER_PAGE = 2;
    const query = {
        take: POST_PER_PAGE,
        skip: POST_PER_PAGE * (page - 1),
        where: {
            ...(cat && { catSlug: cat })
        }
        }
        
        try {
        const [posts, count] = await prisma.$transaction([
            prisma.post.findMany(query),
            prisma.post.count({ where: query.where })
        ])
        
        res.status(200).json({ posts, count });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({
            message: "Something went wrong" || error.message,
        });
    }
}

const POST = async(req, res) => {
    const session = await getServerSession(req, res, authOptions);
    if (!session) {
      res.status(401).json({ message: "Unauthorized user." });
      return;
    }

    try {
    const { title, img, catSlug, desc, slug } = req.body;
    console.log(req.body);
      const post = await prisma.post.create({
        data: { title, img, desc, catSlug, slug, userEmail: session.user.email },
      });

      console.log(post)
      res.status(201).json(post)
    } catch (error) {
        res.status(500).json({ message: "Something went wrong" || error })
    }
}

const handler = (req, res) => {
    if(req.method === 'POST') {
        POST(req, res)
    }
    else {
        GET(req, res)
    }
};

export default handler;
