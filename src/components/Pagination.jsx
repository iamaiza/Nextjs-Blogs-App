import { useRouter } from "next/router";

const Pagination = ({ page, hasNext, hasPrev }) => {
    const router = useRouter();

    const nextPageHandler = () => {
        const nextPage = (page || 0) + 1;
        router.push(`?page=${nextPage}`);
    };

    const previousPageHandler = () => {
        const previousPage = Math.max((page || 4) - 1, 1);
        router.push(`?page=${previousPage}`);
    };

    return (
        <div className="flex items-center justify-center sm:justify-between gap-2">
            <button
                className="bg-[#dc143c] disabled:bg-[#dc143ca4] text-white py-3 sm:px-4 w-24 sm:w-[100px]"
                disabled={!hasPrev}
                onClick={previousPageHandler}
            >
                Previous
            </button>
            <button
                className="bg-[#dc143c] disabled:bg-[#dc143ca4] text-white py-3 sm:px-4 w-24 sm:w-[100px]"
                disabled={!hasNext}
                onClick={nextPageHandler}
            >
                Next
            </button>
        </div>
    );
};

export default Pagination;
