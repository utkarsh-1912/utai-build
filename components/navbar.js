"use client";
import React, { useState, useEffect } from "react";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import _ from "lodash";
import Loader from "./loader";

const navigation = [
  { name: "Services", href: "/services" },
  { name: "Company", href: "/about" },
  { name: "Products", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const [currentPath, setCurrentPath] = useState("");
  const [loading, setLoading] = useState(false);
  const [isSticky, setIsSticky] = useState(false); 
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleLocationChange = () => {
      setLoading(true);
      setCurrentPath(window.location.pathname);
      setTimeout(() => setLoading(false), 500);
    };

    if (typeof window !== "undefined") {
      setCurrentPath(window.location.pathname);
      window.addEventListener("popstate", handleLocationChange);
      return () => window.removeEventListener("popstate", handleLocationChange);
    }
  }, []);

  const handleSearchToggle = () => {
    setIsSearchActive(!isSearchActive);
  };

  const currentItem = _.find(navigation, (item) => item.href === currentPath);

  return (
    <Disclosure as="nav" className={classNames("transition-all duration-400 py-1", isSticky ? "bg-black sticky top-0 z-50 " : "bg-transparent")}>
      {loading && <Loader />}
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="block h-6 w-6 group-data-[open]:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 group-data-[open]:block" />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center justify-evenly sm:justify-between sm:items-stretch">
            <div className="flex flex-shrink-0 items-center">
              <a href="/">
                <img alt="Utkristi AI Labs" src="/logo-dark.png" className="h-12 w-auto" />
              </a>
            </div>

            {/* Large screen search toggle */}
            <div className="hidden sm:ml-6 sm:flex sm:items-center">
              {isSearchActive ? (
                <div className="flex space-x-2">
                  <form className="relative">
                    <input
                      type="search"
                      id="search"
                      placeholder="Search"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="block w-full p-2 ps-2 text-gray-200 border outline-none bg-transparent border-b-2 border-gray-600 rounded-lg focus:border-yellow-600"
                      required
                    />
                    <button
                      type="submit"
                      className="text-white absolute right-1 bottom-1 bg-yellow-600 hover:bg-yellow-500 font-medium rounded-lg text-sm px-4 py-2"
                      onClick={(e) => {
                        e.preventDefault();
                        console.log(searchQuery);
                        setSearchQuery("");
                      }}
                    >
                      <MagnifyingGlassIcon className="h-4 w-4" />
                    </button>
                  </form>
                  <button
                    className="text-gray-400 hover:text-white focus:outline-none"
                    onClick={handleSearchToggle}
                  >
                    <XMarkIcon className="h-6 w-6" />
                  </button>
                </div>
              ) : (
                <div className="flex space-x-4">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      aria-current={currentItem === item ? "page" : undefined}
                      className={classNames(
                        currentItem === item ? "btn-yellow-light" : "text-gray-300 hover:bg-gray-800/60 hover:text-white",
                        "rounded-md px-3 py-2 text-sm font-medium"
                      )}
                    >
                      {item.name}
                    </a>
                  ))}
                  <button
                    onClick={handleSearchToggle}
                    className="ml-4 text-gray-400 hover:text-white focus:outline-none "
                  >
                    <MagnifyingGlassIcon className="h-6 w-6" />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile search option */}
      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2 bg-black">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              aria-current={currentItem === item ? "page" : undefined}
              className={classNames(
                currentItem === item ? "btn-yellow-light shadow-md shadow-yellow-600/50" : "text-gray-300 hover:bg-gray-800/60 hover:text-white",
                "block rounded-md px-3 py-2 text-base font-medium"
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
          <div className="mt-3">
            <form className="relative">
              <input
                type="search"
                id="search"
                className="block w-full p-2 ps-2 text-gray-900 border rounded-lg bg-gray-50 outline-none focus:border-yellow-600"
                placeholder="Search"
                required
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button
                type="submit"
                className="text-white absolute right-1 bottom-1 bg-yellow-600 hover:bg-yellow-500 font-medium rounded-lg text-sm px-4 py-2"
                onClick={(e) => {
                  e.preventDefault();
                  console.log(searchQuery);
                  setSearchQuery("");
                }}
              >
                Search
              </button>
            </form>
          </div>
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}
