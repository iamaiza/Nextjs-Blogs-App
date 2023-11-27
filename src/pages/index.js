import React, { Fragment } from "react";
import { CardList, CategoryList, Featured, Menu } from "../imports";
import { useRouter } from "next/router";

export default function Home() {
    const router = useRouter()
    const page = parseInt(router.query.page, 10) || 1
    // console.log(page);
    return (
        <Fragment>
            <Featured />
            <CategoryList />
            <div className="flex gap-[50px]">
                <CardList page={page} showFullText={false} />
                <Menu />
            </div>
        </Fragment>
    );
}
