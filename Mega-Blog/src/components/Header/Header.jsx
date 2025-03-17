import React from "react";
import { Container, Logo, LogoutBtn } from "../index";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function Header() {
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();

  const navItems = [
    { name: "Home", slug: "/", active: true },
    { name: "Login", slug: "/login", active: !authStatus },
    { name: "Signup", slug: "/signup", active: !authStatus },
    { name: "All Posts", slug: "/all-posts", active: authStatus },
    { name: "Add Post", slug: "/add-post", active: authStatus },
  ];

  return (
    <header className="sticky top-0 z-50 py-4 shadow-lg bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white">
      <Container>
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <Logo width='70px' />
          </Link>

          {/* Navigation Links */}
          <ul className="hidden md:flex space-x-6">
            {navItems.map(
              (item) =>
                item.active && (
                  <li key={item.name}>
                    <button
                      onClick={() => navigate(item.slug)}
                      className="px-5 py-2 text-sm font-medium transition-all duration-300 rounded-full bg-gray-600 hover:bg-gray-600 hover:text-white"
                    >
                      {item.name}
                    </button>
                  </li>
                )
            )}
          </ul>

          {/* Logout Button */}
          {authStatus && (
            <div className="hidden md:block">
              <LogoutBtn />
            </div>
          )}

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button className="p-2 rounded-full bg-gray-700 hover:bg-blue-600">
              ☰
            </button>
          </div>
        </nav>
      </Container>
    </header>
  );
}

export default Header;
