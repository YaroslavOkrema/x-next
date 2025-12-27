'use client'

import {useRouter} from "next/navigation";
import {PAGES} from "@/config/pages.config";

export default function ProfileFakePage() {
    const router = useRouter()

    return (
        <div>
            <h1 className="text-3xl font-bold mb-6">Profile fake</h1>
            <button onClick={() => router.push(PAGES.HOME)}>Go to home</button>
        </div>
    )
}