import prisma from "@/utils/prisma";

const handler = async (req, res) => {
    const slug = req.query.slug;
    try {
        const post = await prisma.post.findUnique({
            where: { slug },
            include: { user: true }
        })

        res.status(200).json(post)
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Something went wrong" || error })
    }
}

export default handler;