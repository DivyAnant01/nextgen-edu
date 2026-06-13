import {
LayoutDashboard,
Users,
UserCheck,
GraduationCap,
BookOpen,
FileText,
Settings,
LogOut,
} from "lucide-react";

import {
NavLink,
Outlet,
useNavigate,
} from "react-router-dom";

export default function AdminLayout() {
const navigate =
useNavigate();

const logout = () => {
localStorage.removeItem(
"adminToken"
);

```
navigate(
  "/admin/login"
);
```

};

const menuClass = ({
isActive,
}) =>
isActive
? `         flex
        items-center
        gap-3
        p-3
        rounded-xl
        bg-cyan-500
        text-white
      `
: `         flex
        items-center
        gap-3
        p-3
        rounded-xl
        hover:bg-white/10
        transition
      `;

return ( <div className="min-h-screen flex">

```
  {/* Sidebar */}

  <aside
    className="
    w-72
    bg-black/40
    border-r
    border-white/10
    p-6
    flex
    flex-col
    "
  >
    <h1
      className="
      text-3xl
      font-bold
      mb-10
      "
    >
      NextGen CRM
    </h1>

    <nav className="flex flex-col gap-3">

      <NavLink
        to="/admin"
        end
        className={menuClass}
      >
        <LayoutDashboard size={18} />
        Dashboard
      </NavLink>

      <NavLink
        to="/admin/leads"
        className={menuClass}
      >
        <Users size={18} />
        Leads
      </NavLink>

      <NavLink
        to="/admin/counsellors"
        className={menuClass}
      >
        <UserCheck size={18} />
        Counsellors
      </NavLink>

      <NavLink
        to="/admin/universities"
        className={menuClass}
      >
        <GraduationCap size={18} />
        Universities
      </NavLink>

      <NavLink
        to="/admin/courses"
        className={menuClass}
      >
        <BookOpen size={18} />
        Courses
      </NavLink>

      <NavLink
        to="/admin/blogs"
        className={menuClass}
      >
        <FileText size={18} />
        Blogs
      </NavLink>

      <NavLink
        to="/admin/settings"
        className={menuClass}
      >
        <Settings size={18} />
        Settings
      </NavLink>

    </nav>

    <div className="mt-auto">

      <button
        onClick={logout}
        className="
        w-full
        flex
        items-center
        gap-3
        p-3
        rounded-xl
        bg-red-500
        hover:bg-red-600
        transition
        "
      >
        <LogOut size={18} />
        Logout
      </button>

    </div>

  </aside>

  {/* Main Area */}

  <div className="flex-1">

    {/* Topbar */}

    <header
      className="
      h-20
      border-b
      border-white/10
      flex
      items-center
      justify-between
      px-8
      "
    >
      <h2
        className="
        text-2xl
        font-semibold
        "
      >
        Admin Dashboard
      </h2>

      <div
        className="
        bg-white/10
        px-4
        py-2
        rounded-xl
        "
      >
        Super Admin
      </div>
    </header>

    {/* Page */}

    <main className="p-8">
      <Outlet />
    </main>

  </div>

</div>

);
}
