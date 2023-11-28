import { CardList, Menu } from "@/imports";
import { useRouter } from "next/router";

const BlogPage = () => {
  const router = useRouter()
  const category = router.query.category
  const page = parseInt(router.query.page) || 1
    return (
      <div>
        <h2 className="text-center text-[1.6rem] font-bold bg-[#ff7f50] rounded-md text-white py-1.5 px-2 capitalize">{category} blog</h2>
        <div className="flex gap-[50px]">
          <CardList page={page} cat={category} showFullText={false} />
          <Menu />
        </div>
      </div>
    );
};

export default BlogPage;
