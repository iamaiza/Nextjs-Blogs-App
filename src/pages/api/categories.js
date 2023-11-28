// import prisma from "@/utils/prisma";
import prisma from "@/utils/prisma";

const handler = async(req, res) => {
    try {
        const categories = await prisma.category.findMany()
        res.status(200).json(categories)
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message || 'Something went wrong' })
    }
}

export default handler