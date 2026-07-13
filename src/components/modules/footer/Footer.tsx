import Link from "next/link";
import Image from "next/image";

const SHOP_LINKS = ["All Collections", "Winter Edition", "Discount"] as const;
const COMPANY_LINKS = ["About Us", "Contact", "Affiliates"] as const;
const SUPPORT_LINKS = ["FAQs", "Cookie Policy", "Terms of Use"] as const;

const PAYMENT_METHODS = [
  { label: "MASTERCARD", accent: "#e87070", src: "/master-card.png" },
  { label: "VISA", accent: "#7b88c9", src: "/visa.png" },
  { label: "PAYPAL", accent: "#5bbde8", src: "/paypal.png" },
] as const;

export default function Footer() {
  return (
    <footer className="w-full bg-footer-bg self-end">
      <div className="max-w-[calc(100vw-300px)] mx-auto px-10 pt-12 pb-6">
        <div className="grid grid-cols-5 gap-8 pb-10">
          <div className="flex flex-col gap-7">
            <Link
              href="/"
              aria-label="Jordan home"
              className="flex flex-col items-start gap-1"
            >
              <Image
                src="/jordan-logo-black.png"
                alt="Jordan Jumpman logo"
                width={65}
                height={65}
              />
            </Link>
            <p className="text-sm leading-relaxed text-footer-tagline max-w-50">
              Specializes in providing high-quality, stylish products for your
              wardrobe
            </p>
          </div>

          <div className="flex flex-col gap-5">
            <p className="text-sm font-black uppercase tracking-widest text-footer-heading">
              Shop
            </p>
            <ul className="flex flex-col gap-2">
              {SHOP_LINKS.map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-sm text-footer-link hover:text-footer-link-hover transition-colors duration-150"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-5">
            <p className="text-sm font-black uppercase tracking-widest text-footer-heading">
              Company
            </p>
            <ul className="flex flex-col gap-2">
              {COMPANY_LINKS.map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-sm text-footer-link hover:text-footer-link-hover transition-colors duration-150"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-5">
            <p className="text-sm font-black uppercase tracking-widest text-footer-heading">
              Support
            </p>
            <ul className="flex flex-col gap-2">
              {SUPPORT_LINKS.map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-sm text-footer-link hover:text-footer-link-hover transition-colors duration-150"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-3">
            <p className="text-sm font-black uppercase tracking-widest text-footer-heading">
              Payment Methods
            </p>
            <div className="flex items-center gap-4 mt-1">
              {PAYMENT_METHODS.map(({ label, accent, src }) => (
                <img
                  src={src}
                  alt={label}
                  className="w-12 h-7 border rounded-xs "
                  style={{ borderColor: `${accent}` }}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-footer-divider pt-5">
          <p className="text-center text-sm text-footer-copyright">
            Copyright &copy; 2026 Scarpe. All right reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
