import Link from "next/link";

export default function NotFound() {
  return (
    <div className="w-full my-16 flex flex-col">
      <p className="mx-auto text-4xl">404 - Page not found</p>
      <Link className="mx-auto text-xl my-8 link" href="/">Back to home page</Link>
    </div>
  )
}
