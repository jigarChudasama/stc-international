"use client";

import { useState } from "react";
import Link from "next/link";
import { customerService } from "@/data/contact";
import { footer } from "@/data/layout/footer";
import { HOME_ROUTE } from "@/lib/formatters";
import BrandLogo from "./BrandLogo";

function HeroWordmarkIcon({ className = "hero_home_svg", ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="860"
      height="83"
      viewBox="0 0 860 83"
      fill="none"
      className={className}
      aria-label="PixelTheories"
      {...props}
    >
      <path
        d="M0 1.5H38C46.837 1.5 54 8.663 54 17.5V33.5C54 42.337 46.837 49.5 38 49.5H14V81.5H0V1.5ZM14 15.5V35.5H38C40.761 35.5 43 33.261 43 30.5V20.5C43 17.739 40.761 15.5 38 15.5H14Z"
        fill="currentColor"
      />
      <path d="M70 1.5H84V81.5H70V1.5Z" fill="currentColor" />
      <path
        d="M100 1.5H116L130 25.5L144 1.5H160L139 39.5L160 81.5H144L130 54.5L116 81.5H100L121 41.5L100 1.5Z"
        fill="currentColor"
      />
      <path
        d="M176 1.5H226V15.5H190V34.5H220V48.5H190V67.5H226V81.5H176V1.5Z"
        fill="currentColor"
      />
      <path
        d="M242 1.5H256V67.5H292V81.5H242V1.5Z"
        fill="currentColor"
      />
      <path
        d="M318 1.5H372V15.5H352V81.5H338V15.5H318V1.5Z"
        fill="currentColor"
      />
      <path
        d="M388 1.5H402V34.5H430V1.5H444V81.5H430V48.5H402V81.5H388V1.5Z"
        fill="currentColor"
      />
      <path
        d="M460 1.5H510V15.5H474V34.5H504V48.5H474V67.5H510V81.5H460V1.5Z"
        fill="currentColor"
      />
      <g transform="translate(473 0.36)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M111.873 1.04969C107.806 0.0528851 103.704 -0.234885 99.5745 0.190242C95.2108 0.639456 90.9757 1.69885 86.8721 3.36482C82.8419 4.96411 78.9772 7.072 75.2793 9.68563C71.6624 12.2238 68.3893 15.0804 65.463 18.2558C65.4448 18.2737 65.4328 18.2843 65.4265 18.2892L65.2484 18.3793L64.5144 19.1132V19.2408C63.4642 20.4264 62.4932 21.6408 61.6031 22.885C60.6593 24.1434 59.7463 25.4027 58.8648 26.6619L58.8253 26.7186L58.7909 26.7794C58.6351 27.0598 58.4793 27.3405 58.3234 27.6212C58.1675 27.9021 58.0115 28.1831 57.8555 28.4638C57.5332 29.044 57.2149 29.6796 56.8999 30.369C55.95 32.0207 55.1526 33.6506 54.5099 35.2574C54.4476 35.4131 54.3851 35.5688 54.3227 35.7244C54.2601 35.8802 54.1976 36.0359 54.1353 36.1917L54.1019 36.2768L54.0796 36.3648C54.0356 36.5409 53.9635 36.7625 53.8549 37.034L53.7587 37.2739V37.3923C53.6158 37.7924 53.4732 38.1926 53.3305 38.5929C53.1879 38.9931 53.0452 39.3934 52.9023 39.7935L52.8871 39.834L52.875 39.8755C52.6156 40.7835 52.3903 41.7495 52.1978 42.7717C51.4383 46.0093 51.162 48.8614 51.4254 51.2933C51.5574 52.944 51.8545 54.5361 52.3203 56.0663L52.3314 56.1007L52.3435 56.1341C52.8863 57.6267 53.7221 58.9781 54.8318 60.1884C55.3341 61.1246 55.5851 61.9814 55.6315 62.7697L55.6983 62.9495V63.1139C55.6956 63.1056 55.7031 63.1252 55.7104 63.1838C55.7175 63.2398 55.7222 63.3194 55.7226 63.4257C55.5355 66.9451 56.0906 70.1879 57.4182 73.1246C58.5126 75.7238 60.1808 77.7589 62.4321 79.166L62.4453 79.1741L62.4585 79.1812C64.6047 80.4555 66.9494 81.291 69.4808 81.6907C71.99 82.0868 74.5582 82.0861 77.1783 81.6937C79.8091 81.3087 82.2069 80.7277 84.3637 79.9434L84.3799 79.9374C89.1244 78.1421 93.6048 75.6118 97.8192 72.3552L97.8293 72.3481C102 69.0625 105.705 65.6115 108.941 61.9943L108.949 61.9852C111.224 59.3946 113.403 56.6476 115.485 53.7451L115.492 53.7339C117.587 50.7506 119.429 47.6681 121.018 44.4896C122.67 41.2477 124.007 37.9097 125.027 34.4739C126.12 31.0006 126.764 27.4589 126.957 23.8538C127.088 21.3794 126.924 18.9627 126.466 16.6067C126.003 14.2266 125.175 12.0296 123.977 10.0258C122.831 7.9417 121.313 6.15672 119.432 4.67879C117.532 3.12366 115.28 1.98952 112.702 1.26227L112.686 1.25822L111.873 1.04969ZM101.707 8.28764L101.691 8.28866H101.676C99.1976 8.28866 96.6782 8.67159 94.1142 9.44673C91.5001 10.237 89.0108 11.2075 86.6464 12.3591C83.1745 14.0646 80.0489 16.0395 77.2634 18.2801C74.4695 20.5273 71.9166 23.0474 69.6063 25.843C68.8295 26.799 68.1137 27.7845 67.4572 28.7979C66.8518 29.8284 66.246 30.9216 65.6381 32.0767C64.607 34.0176 63.5969 36.2492 62.6143 38.767C61.7488 41.0793 61.1949 43.4127 60.9461 45.7691C60.9545 45.7977 60.963 45.8236 60.9714 45.8471C61.1237 45.7959 61.3324 45.7034 61.6051 45.5495C61.825 45.4061 62.1504 45.0726 62.5243 44.3782L62.5425 44.3448L62.5627 44.3114C63.0731 43.4821 63.5336 42.7892 63.9415 42.2453L63.9496 42.2332L63.9597 42.222C64.643 41.3524 65.295 40.5141 65.9155 39.7075L65.9236 39.6963C66.6316 38.7953 67.4016 37.9279 68.2326 37.0937C72.7336 31.7148 77.5261 27.647 82.6215 24.938C84.6091 23.849 86.6615 22.9189 88.7783 22.1491C90.9179 21.3091 93.1234 20.7262 95.3927 20.4008C96.3265 20.2572 97.244 20.2538 98.1381 20.4008C99.0168 20.536 99.8265 20.7429 100.555 21.0315C101.229 21.2843 101.818 21.6779 102.285 22.22C102.714 22.6544 103.081 23.1291 103.381 23.6463C103.668 24.087 103.882 24.5627 103.992 25.0716C103.996 25.0804 103.999 25.089 104.003 25.0973C104.009 25.1121 104.015 25.1262 104.021 25.1394C104.029 25.159 104.037 25.1762 104.044 25.1911L104.135 25.3378C104.666 26.2222 104.429 27.1661 104.09 27.8433C103.879 28.2661 103.544 28.6965 103.023 28.9568C102.489 29.2241 101.93 29.2261 101.444 29.1046L101.356 29.0823L101.272 29.0489C100.179 28.6118 99.0691 28.397 97.9346 28.397H97.9032L97.8708 28.395C96.6859 28.3386 95.4995 28.4214 94.3095 28.644C90.5256 29.6414 86.6035 31.8782 82.5466 35.4507C78.5539 38.9595 74.7088 43.5856 71.0235 49.3547C70.5734 50.1465 70.2486 50.8883 70.0355 51.5808L70.0193 51.6334L69.9981 51.684C69.8878 51.9598 69.7417 52.3681 69.5577 52.92L69.5415 52.9666C69.4814 53.1268 69.4637 53.2255 69.4595 53.2723L69.4707 53.2986L69.4929 53.3867C69.5203 53.4963 69.5847 53.6253 69.8159 53.7754C70.1971 53.9817 70.4828 54.0462 70.6895 54.0518C71.4853 53.9935 72.2888 53.8335 73.1008 53.5628L73.1119 53.5588L73.1241 53.5547C74.0406 53.2683 74.9301 52.8961 75.7925 52.4362L75.8573 52.4017L75.9261 52.3744C76.1826 52.2718 76.3374 52.1873 76.4211 52.1325C76.6798 51.9422 76.9471 51.7747 77.2219 51.6304C78.6365 50.6837 79.9297 49.6525 81.104 48.5378C82.2718 47.3675 83.2594 46.1169 84.0701 44.7852L84.0782 44.771C84.3638 44.3141 84.6557 43.7911 84.9518 43.1989L84.9619 43.1776L84.9741 43.1564C85.4235 42.3324 86.0017 41.6326 86.7497 41.1652L86.78 41.147C87.4441 40.7563 88.182 40.4906 88.9575 40.5183C89.7508 40.5467 90.4359 40.8782 90.9831 41.4081C91.8349 42.1889 92.457 43.1041 92.7992 44.1535L92.864 44.3651L92.8721 44.3934L92.8781 44.4228C93.2434 45.9569 93.1789 47.4602 92.6585 48.8971C92.2247 50.1984 91.5128 51.4333 90.5519 52.6001C89.484 53.9939 88.1962 55.2769 86.696 56.4509C85.2308 57.5977 83.7291 58.6195 82.1933 59.5182C80.3932 60.737 78.4978 61.7968 76.5072 62.6958C74.5158 63.5952 72.4871 64.2735 70.4222 64.7306C69.8519 64.9184 69.205 65.103 68.4847 65.2843C67.5545 65.6002 67.034 65.993 66.7557 66.3725C66.4703 66.7848 66.3096 67.2225 66.2607 67.7037C66.268 68.2312 66.3778 68.8085 66.615 69.4428C66.9181 70.0339 67.3208 70.585 67.8318 71.0959L68.1233 71.3875C68.278 71.4968 68.426 71.6142 68.5636 71.7408C69.897 72.6742 71.1772 73.2183 72.4094 73.4283C73.8104 73.5925 75.3504 73.539 77.0376 73.2481L77.0538 73.245C78.422 73.0261 80.4661 72.3128 83.2451 71.0159L83.2552 71.0109C86.0089 69.7537 89.0417 67.8797 92.3548 65.3643L92.3639 65.3572C95.7108 62.8622 99.1387 59.7132 102.646 55.8992L103.295 55.1704C106.519 51.4815 109.517 47.1058 112.284 42.0337L112.29 42.0226L112.297 42.0105C113.263 40.3209 114.173 38.4408 115.027 36.3669C115.876 34.244 116.573 32.0921 117.118 29.9114C117.657 27.6938 117.953 25.5144 118.013 23.372C118.071 21.2794 117.81 19.286 117.238 17.3842C116.955 16.6552 116.653 16.0271 116.333 15.4942L116.319 15.4699L116.306 15.4466C115.968 14.827 115.601 14.2063 115.209 13.584C113.305 11.648 111.234 10.306 108.996 9.52265L108.982 9.51759L108.969 9.51253C106.636 8.63782 104.218 8.22929 101.707 8.28764Z"
          fill="currentColor"
        />
      </g>
      <path
        d="M615 1.5H653C661.837 1.5 669 8.663 669 17.5V31.5C669 38.64 663.629 45.03 656.5 46.5L671 81.5H655L642 47.5H629V81.5H615V1.5ZM629 15.5V33.5H651C653.761 33.5 656 31.261 656 28.5V20.5C656 17.739 653.761 15.5 651 15.5H629Z"
        fill="currentColor"
      />
      <path d="M687 1.5H701V81.5H687V1.5Z" fill="currentColor" />
      <path
        d="M717 1.5H767V15.5H731V34.5H761V48.5H731V67.5H767V81.5H717V1.5Z"
        fill="currentColor"
      />
      <path
        d="M783 17.5C783 8.663 790.163 1.5 799 1.5H843V15.5H801C798.239 15.5 796 17.739 796 20.5V30.5C796 33.261 798.239 35.5 801 35.5H825C833.837 35.5 841 42.663 841 51.5V65.5C841 74.337 833.837 81.5 825 81.5H783V67.5H823C825.761 67.5 828 65.261 828 62.5V54.5C828 51.739 825.761 49.5 823 49.5H799C790.163 49.5 783 42.337 783 33.5V17.5Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function Footer() {
  const [openColumn, setOpenColumn] = useState(null);

  return (
    <footer id="page-footer" className="defer-paint mt-auto bg-brand-header" role="contentinfo">
      <div className="mx-auto flex max-w-[1920px] flex-col bg-brand-header lg:flex-row lg:flex-wrap lg:justify-between">
        <div className="order-2 border-b border-brand-divider px-[15px] lg:order-none lg:basis-full lg:px-6">
          <div className="footer-nav-block grid md:grid-cols-2 lg:grid-cols-3">
            {footer.columns.map((column) => (
              <div key={column.label} className="border-b border-brand-divider md:border-0">
                <button
                  type="button"
                  className="flex w-full items-center justify-between py-4 text-left md:pointer-events-none md:cursor-default"
                  onClick={() =>
                    setOpenColumn(openColumn === column.label ? null : column.label)
                  }
                  aria-expanded={openColumn === column.label || openColumn === null}
                >
                  <span
                    role="heading"
                    aria-level="2"
                    className="column-header text-[0.6875rem] font-bold uppercase tracking-[0.12em]"
                  >
                    {column.label}
                  </span>
                  <span className="md:hidden" aria-hidden="true">
                    {openColumn === column.label ? "−" : "+"}
                  </span>
                </button>
                <ul
                  className={`footer-links-group overflow-hidden transition-all duration-300 md:block md:pb-4 ${openColumn === column.label ? "max-h-[600px] pb-4" : "max-h-0 md:max-h-none"
                    }`}
                  aria-hidden={openColumn !== column.label ? "true" : "false"}
                >
                  {column.items.map((item) => {
                    const isExternal = item.type === "externalLink";
                    const isContactDrawer = item.type === "contactDrawer";
                    const href = item.data || HOME_ROUTE;
                    const linkClass =
                      "text-xs text-brand-gray underline hover:no-underline";

                    return (
                      <li key={`${column.label}-${item.label}`} className="mb-2">
                        {isContactDrawer ? (
                          <button
                            type="button"
                            className={`${linkClass} cursor-pointer border-0 bg-transparent p-0 text-left`}
                            onClick={() => {
                              window.dispatchEvent(new CustomEvent("stc:open-contact"));
                            }}
                          >
                            {item.label}
                          </button>
                        ) : (
                          <Link
                            href={href}
                            className={linkClass}
                            tabIndex={0}
                            {...(isExternal
                              ? { target: "_blank", rel: "noopener noreferrer" }
                              : {})}
                          >
                            {item.label}
                            {isExternal ? (
                              <span className="sr-only">New tab</span>
                            ) : null}
                          </Link>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="here-to-help-block order-1 border-b border-brand-divider px-[15px] py-[30px] pb-[15px] text-[0.75rem] leading-5 lg:order-none lg:flex lg:flex-1 lg:px-6 lg:py-6 lg:pl-6 lg:pr-12">
          <div>
            <span role="heading" aria-level="2" className="heading-4 mb-2 block text-[0.6875rem] font-bold uppercase tracking-[0.12em]">
              Direct contact
            </span>
            {customerService?.callingHours?.map((hours) => (
              <p key={hours.days} className="description-block mb-1 text-[0.75rem] text-brand-gray">
                {hours.days} {hours.openingHours} - {hours.closingHours} {hours.timezone} :
              </p>
            ))}
            <div className="call-us flex flex-col gap-1">
              {customerService?.phones?.map((p) => (
                <a key={p.href} href={p.href} className="text-[0.875rem] underline hover:no-underline">
                  {p.number}
                </a>
              )) ?? (
                <a href={`tel:${customerService?.phone?.replace(/[^\d+]/g, "")}`} className="text-[0.875rem] underline hover:no-underline">
                  {customerService?.phone}
                </a>
              )}
            </div>
            <div className="email-us mt-2">
              <a
                href={`mailto:${customerService?.email}`}
                aria-label="Send an email to customer service"
                className="text-[0.75rem] underline hover:no-underline"
              >
                {customerService?.email}
              </a>
            </div>
          </div>
        </div>

        <div className="logo-block order-4 flex flex-col items-center justify-center gap-3 border-b border-brand-divider px-[15px] py-8 text-center lg:order-none lg:w-[340px] lg:border-b lg:py-6 xl:w-[440px]">
          <BrandLogo variant="footer" />
        </div>


      </div>

      {/* Bottom bar — copyright left, crafted-by right */}
      <div className="mx-auto flex max-w-[1920px] items-center justify-between border-t border-brand-divider/60 px-6 py-3">
        <p className="text-[0.75rem] tracking-wide text-brand-navy">
          © STC International {new Date().getFullYear()}. All rights reserved.
        </p>
        <a
          href="https://pxltheories.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Crafted by PixelTheories"
          className="flex items-center gap-2"
        >
          <span className="text-[0.75rem] tracking-wide text-brand-navy">
            Crafted by
          </span>
          <HeroWordmarkIcon
            className="h-[16px] w-auto text-brand-navy"
            aria-hidden="true"
          />
        </a>
      </div>
    </footer>
  );
}
