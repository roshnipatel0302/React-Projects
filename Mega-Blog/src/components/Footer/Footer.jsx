import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo";

function Footer() {
  return (
    <footer className="bg-gray-800 w-full text-white py-8">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-8 md:mb-0">
            <p className="text-gray-400 mt-4 text-sm">
              &copy; {new Date().getFullYear()} DevUI. All Rights Reserved.
            </p>
          </div>

          <div className="w-full md:w-2/3 flex flex-wrap justify-between">
            <div>
              <h3 className="text-white uppercase text-sm font-semibold mb-4">Company</h3>
              <ul>
                <li className="mb-2">
                  <Link className="text-gray-400 hover:text-gray-200 transition" to="/">Features</Link>
                </li>
                <li className="mb-2">
                  <Link className="text-gray-400 hover:text-gray-200 transition" to="/">Pricing</Link>
                </li>
                <li className="mb-2">
                  <Link className="text-gray-400 hover:text-gray-200 transition" to="/">Affiliate Program</Link>
                </li>
                <li>
                  <Link className="text-gray-400 hover:text-gray-200 transition" to="/">Press Kit</Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-white uppercase text-sm font-semibold mb-4">Support</h3>
              <ul>
                <li className="mb-2">
                  <Link className="text-gray-400 hover:text-gray-200 transition" to="/">Account</Link>
                </li>
                <li className="mb-2">
                  <Link className="text-gray-400 hover:text-gray-200 transition" to="/">Help</Link>
                </li>
                <li className="mb-2">
                  <Link className="text-gray-400 hover:text-gray-200 transition" to="/">Contact Us</Link>
                </li>
                <li>
                  <Link className="text-gray-400 hover:text-gray-200 transition" to="/">Customer Support</Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-white uppercase text-sm font-semibold mb-4">Legals</h3>
              <ul>
                <li className="mb-2">
                  <Link className="text-gray-400 hover:text-gray-200 transition" to="/">Terms & Conditions</Link>
                </li>
                <li className="mb-2">
                  <Link className="text-gray-400 hover:text-gray-200 transition" to="/">Privacy Policy</Link>
                </li>
                <li>
                  <Link className="text-gray-400 hover:text-gray-200 transition" to="/">Licensing</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
