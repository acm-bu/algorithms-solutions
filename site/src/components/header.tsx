import Link from 'next/link';

export function Header() {
  return (
    <div className="navbar bg-base-200 shadow-md">
      <div className="flex-1">
        <Link href="/" className="text-xl ml-2 font-bold">
          ACM@BU
        </Link>
      </div>

      <div className="flex flex-row gap-4">
        <div className="hidden md:flex items-center gap-6 mr-4">
          <Link href="/meetings" className="link link-hover">
            Meetings
          </Link>
          <Link href="/solutions" className="link link-hover">
            Solutions
          </Link>
        </div>
      </div>
    </div>
  )
}
