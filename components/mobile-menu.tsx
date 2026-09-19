"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

type MenuLink = { href: string; label: string };

export function MobileMenu({ links }: { links: MenuLink[] }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("menu-open", open);
    return () => document.body.classList.remove("menu-open");
  }, [open]);

  useEffect(() => {
    const close = () => setOpen(false);
    window.addEventListener("resize", close);
    return () => window.removeEventListener("resize", close);
  }, []);

  return (
    <div className="mobile-menu">
      <button
        className="mobile-menu-toggle"
        type="button"
        aria-label={open ? "Menüyü kapat" : "Menüyü aç"}
        aria-expanded={open}
        aria-controls="mobile-navigation"
        onClick={() => setOpen((value) => !value)}
      >
        {open ? <X /> : <Menu />}
      </button>
      {open && <><button className="mobile-menu-backdrop" aria-label="Menüyü kapat" onClick={() => setOpen(false)} />
      <div id="mobile-navigation" className="mobile-menu-panel is-open">
        <div className="mobile-menu-kicker">CANPOLAT OTO KURTARMA</div>
        <nav aria-label="Mobil menü">
          {links.map((link, index) => (
            <Link href={link.href} key={link.href} onClick={() => setOpen(false)}>
              <span>{String(index + 1).padStart(2, "0")}</span>{link.label}
            </Link>
          ))}
        </nav>
      </div></>}
    </div>
  );
}
