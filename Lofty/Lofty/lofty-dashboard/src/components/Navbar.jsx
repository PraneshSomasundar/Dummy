import {
    Users,
    ArrowRightLeft,
    CalendarDays,
    Home,
    Megaphone,
    BarChart3,
    Globe,
    Store,
    Settings,
    Search,
    Bell,
  } from 'lucide-react'
  
  const navItems = [
    { label: 'People', icon: Users },
    { label: 'Transactions', icon: ArrowRightLeft },
    { label: 'Calendar', icon: CalendarDays },
    { label: 'Listings', icon: Home },
    { label: 'Marketing', icon: Megaphone },
    { label: 'Reporting', icon: BarChart3 },
    { label: 'Website', icon: Globe },
    { label: 'Marketplace', icon: Store },
    { label: 'Settings', icon: Settings },
  ]
  
  export default function Navbar({ activeNav, setActiveNav }) {
    return (
      <header
        className="sticky top-0 z-50"
        style={{
          background: 'white',
          borderBottom: '1px solid #E5E7EB',
          boxShadow: '0 1px 3px rgba(0,0,0,0.03)',
        }}
      >
        <div className="flex items-center justify-between px-6 py-0 max-w-360 mx-auto">
          {/* Logo */}
          <div className="flex items-center gap-2.5 py-3.5 shrink-0">
            <div
              className="w-8 h-8 rounded-xl flex items-center justify-center"
              style={{
                background: 'linear-gradient(135deg, #3B82F6, #1D4ED8)',
                boxShadow: '0 2px 8px rgba(59,130,246,0.35)',
              }}
            >
              <Home size={16} color="white" strokeWidth={2.5} />
            </div>
            <span className="text-lg font-bold tracking-tight text-gray-800">Lofty</span>
            <span
              className="text-xs font-semibold px-2 py-0.5 rounded-md ml-0.5"
              style={{
                background: 'linear-gradient(135deg, #EEF2FF, #DBEAFE)',
                color: '#3B82F6',
                border: '1px solid #BFDBFE',
              }}
            >
              AI
            </span>
          </div>
  
          {/* Nav links */}
          <nav className="flex items-center gap-1 overflow-x-auto">
            {navItems.map(({ label, icon: Icon }) => (
              <button
                key={label}
                onClick={() => setActiveNav(label)}
                className={`nav-item flex items-center gap-1.5 px-3 py-4 text-sm font-medium whitespace-nowrap bg-transparent border-none cursor-pointer transition-colors ${
                  activeNav === label ? 'active' : ''
                }`}
                style={{ color: activeNav === label ? '#3B82F6' : '#64748B' }}
              >
                <Icon size={15} strokeWidth={activeNav === label ? 2.2 : 1.8} />
                {label}
              </button>
            ))}
          </nav>
  
          {/* Right controls */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              className="w-9 h-9 rounded-xl flex items-center justify-center hover:bg-gray-100 transition-colors"
              style={{ border: '1px solid #E5E7EB' }}
            >
              <Search size={16} color="#64748B" />
            </button>
            <button
              className="w-9 h-9 rounded-xl flex items-center justify-center hover:bg-gray-100 transition-colors relative"
              style={{ border: '1px solid #E5E7EB' }}
            >
              <Bell size={16} color="#64748B" />
              <span
                className="absolute -top-0.5 -right-0.5 w-3 h-3 rounded-full"
                style={{ background: '#EF4444', border: '2px solid white' }}
              />
            </button>
            <div
              className="w-9 h-9 rounded-xl flex items-center justify-center text-xs font-bold cursor-pointer"
              style={{
                background: 'linear-gradient(135deg, #3B82F6, #6366F1)',
                color: 'white',
              }}
            >
              JR
            </div>
          </div>
        </div>
      </header>
    )
  }