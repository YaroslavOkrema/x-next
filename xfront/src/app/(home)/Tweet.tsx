import type { ITweet } from "@/shard/types/tweet.type";
import Image from 'next/image'

type Props = {
    tweet: ITweet
}

export function Tweet({tweet}: Props) {
    return (
        <div className="border border-white/10 rounded-xl p-4 bg-black text-white shadow-md">
            <div className="flex items-center gap-3 mb-2">
                <Image
                    src="/x-logo.svg"
                    alt="X Logo"
                    width={24}
                    height={24}
                />
                <span className="font-semibold">@{tweet.author}</span>
            </div>
            <p className="text-white/90">{tweet.text}</p>
        </div>
    )
}