"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, User, Flame, Images } from "lucide-react"

const navItems = [
  { href: "/",        label: "Home",    icon: Home },
  { href: "/bio",     label: "Bio",     icon: User },
  { href: "/gallery", label: "Gallery", icon: Images },
  { href: "/pray",    label: "Pray",    icon: Flame },
]

export function SideNavbar() {
  const pathname = usePathname()

  return (
    <aside className="fixed left-0 top-0 z-50 h-screen w-16 lg:w-56 bg-sidebar border-r border-sidebar-border flex flex-col">
      {/* Logo / Branding */}
      <div className="p-4 border-b border-sidebar-border">
        <Link href="/" className="flex items-center gap-3">
          <span className="hidden lg:block text-sidebar-foreground font-serif text-sm tracking-wider">
            Remilia Shrine
          </span>
        </Link>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 p-3 space-y-2">
        {navItems.map((item) => {
          const isActive = pathname === item.href
          const Icon = item.icon
          
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-3 py-3 rounded-lg transition-all duration-300 group ${
                isActive
                  ? "bg-sidebar-accent text-sidebar-primary"
                  : "text-sidebar-foreground hover:bg-sidebar-accent/50 hover:text-sidebar-primary"
              }`}
            >
              <Icon className={`w-5 h-5 ${isActive ? "text-primary" : "text-muted-foreground group-hover:text-primary"}`} />
              <span className="hidden lg:block text-sm tracking-wide">
                {item.label}
              </span>
              {isActive && (
                <div className="hidden lg:block ml-auto w-1.5 h-1.5 rounded-full bg-primary" />
              )}
            </Link>
          )
        })}
      </nav>

      {/* Decorative Element */}
      <div className="p-4 border-t border-sidebar-border">
        <div className="hidden lg:flex flex-col items-center gap-2 text-muted-foreground text-xs">
          <div className="w-8 h-px bg-primary/30" />
          <span className="tracking-widest uppercase">Est. 1503</span>
          <div className="w-8 h-px bg-primary/30" />
        </div>
      </div>
    </aside>
  )
}
