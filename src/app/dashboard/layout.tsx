export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex h-screen bg-slate-900 text-white">

      {/* Sidebar */}
      <div className="w-64 bg-slate-800 p-6">

        <h2 className="text-xl font-bold mb-8">
          Ribionic
        </h2>

        <nav className="space-y-4 text-slate-300">

          <a href="/dashboard" className="block hover:text-white">
            Invoices
          </a>

          <a className="block hover:text-white">
            GST Reports
          </a>

          <a className="block hover:text-white">
            Expenses
          </a>

          <a className="block hover:text-white">
            Audit Package
          </a>

        </nav>

      </div>

      {/* Main Content */}
      <div className="flex-1 p-10 overflow-auto">

        {children}

      </div>

    </div>
  )
}