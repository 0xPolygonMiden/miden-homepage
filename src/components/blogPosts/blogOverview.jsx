import React from "react";
import { Link } from "react-router-dom";

export default function BlogOverview() {
  return (
    <section className="container mx-auto p-8">
      <h2 className="text-2xl font-bold mb-6 mt-32">Blog Overview</h2>
      
      <div className="flex">
        {/* Blog post links on the left */}
        <div className="w-1/3">
          <ul className="space-y-4 text-primaryBlack text-lg font-medium">
            <li>
              <Link to="/initial" className="hover:underline">
                Ethereum, extended
              </Link>
            </li>
            <li>
              <Link to="/transactions" className="hover:underline">
                A new transaction model
              </Link>
            </li>
            <li>
              <Link to="/assets" className="hover:underline">
                How every asset is native
              </Link>
            </li>
            <li>
              <Link to="/privacyPost" className="hover:underline">
                Privacy scales better
              </Link>
            </li>
            <li>
              <Link to="/state" className="hover:underline">
                Everything that is the case
              </Link>
            </li>
          </ul>
        </div>

        {/* Right section (empty for now) */}
        <div className="w-2/3"></div>
      </div>
    </section>
  );
}
