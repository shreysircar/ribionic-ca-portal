import Link from "next/link"

export default function Home() {
  return (
    <div className="h-screen flex items-center justify-center bg-slate-900 text-white">

      <div className="text-center">

        <h1 className="text-4xl font-bold mb-4">
          Ribionic CA Portal
        </h1>

        <p className="text-slate-400 mb-6">
          Secure access to invoices and GST reports
        </p>

        <Link
          href="/dashboard"
          className="bg-teal-600 hover:bg-teal-700 px-6 py-3 rounded-lg"
        >
          Open Dashboard
        </Link>

      </div>

    </div>
  )
}