import Link from "next/link";

export default function DashboardNavBar() {
  const navItems = [
    { label: "Home", href: "/dashboard" },
    { label: "Profile", href: "/dashboard/profile" },
    { label: "Settings", href: "/dashboard/settings" },
  ];

  return (
    <nav className="bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo / Branding */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/dashboard">
              <p className="text-xl font-semibold text-indigo-600">Finnect</p>
            </Link>
          </div>
          {/* Nav Links */}
          <div className="hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8">
            {navItems.map((item) => {
              return (
                <Link key={item.href} href={item.href}>
                  {item.label}
                </Link>
              );
            })}
          </div>
          {/* Right Actions */}
          <div className="flex items-center">
            <button
              //   onClick={handleLogout}
              className="text-sm font-medium text-red-600 hover:text-red-800"
            >
              Logout
            </button>
          </div>
          {/* Mobile menu button (hidden for now) */}
        </div>
      </div>
    </nav>
  );
}
