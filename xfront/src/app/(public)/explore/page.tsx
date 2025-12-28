'use client'

import {useSearchParams} from "next/navigation";
import {Suspense} from "react";

export default function ExplorePage() {
    const searchParams = useSearchParams()
    const tag = searchParams.get('tag')

    return (
        <Suspense>
            <div>
                <h1 className="text-3xl font-bold mb-6">Explore {!!tag && `by #${tag}`}</h1>
            </div>
        </Suspense>
    )
}