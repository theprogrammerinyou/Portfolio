import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";

export default function Hamburger({
  className,
  links,
}: {
  className?: string;
  links: { label: string; link: string }[];
}) {
  return (
    <div className={className}>
      <Menu as="div" className="relative inline-block text-left">
        <Menu.Button className="inline-flex items-center rounded-full border border-white/20 p-2 text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </Menu.Button>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 mt-2 w-40 origin-top-right rounded-2xl border border-white/10 bg-[#10121a] p-1 shadow-xl focus:outline-none">
            {links.map((link) => (
              <Menu.Item key={link.label}>
                {({ active }) => (
                  <a
                    href={link.link}
                    className={`${
                      active ? "bg-lime text-ink" : "text-white"
                    } block rounded-xl px-3 py-2 text-sm`}
                  >
                    {link.label}
                  </a>
                )}
              </Menu.Item>
            ))}
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}
