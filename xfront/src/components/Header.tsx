import Image from 'next/image'
import Link from 'next/link'

export function Header() {
    return (
        <header className="flex items-center justify-between border-b border-white/10 bg-black px-6 py-4">
            <Link href="/" className="flex items-center gap-3">
                <Image
                    src="/x-logo.svg"
                    alt="X Logo"
                    width={28}
                    height={28}
                    priority
                />
            </Link>

            <nav className="flex gap-6 text-white/80">
                <Link href="/">Home</Link>
                <Link href="/">Explore</Link>
                <Link href="/">Profile</Link>
            </nav>
        </header>
    )
}
