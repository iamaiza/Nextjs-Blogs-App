import prisma from "@/utils/prisma";

const handler = async (req, res) => {
    const slug = req.query.slug;
    try {
        const post = await prisma.post.findUnique({
            where: { slug },
            include: { user: true }
        });
        const updatePost = await prisma.post.update({
            where: { slug },
            data: { views: { increment: 1 } },
            include: { user: true }
        })

        res.status(200).json(post, updatePost)
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Something went wrong" || error })
    }
}

export default handler;