import Image from "next/image";
import VisaIcon from "../public/Visa.svg";
import ApplePayIcon from "../public/Apple-Pay.svg";
import CreditCardIcon from "../public/Credit-Card.svg";
import GooglePayIcon from "../public/Google-Pay.svg";
import MasterCardIcon from "../public/Mastercard.svg";

const FooterBottom = () => {
  return (
    <div className="mt-12">

      {/* Divider */}
      <div className="border-t border-black/15" />

      {/* Bottom Row */}
      <div className="flex justify-between items-center 
                      py-8 text-xs tracking-widest uppercase
                      max-md:flex-col max-md:gap-6">

        {/* LEFT - Copyright */}
        <p className="opacity-70">
          © {new Date().getFullYear()} Nivora Living. All rights reserved.
        </p>

        {/* RIGHT - Payment Icons */}
        <div className="flex items-center gap-3">

        <Image
            src={VisaIcon}
            alt="Visa"
            className="h-6 w-auto"
        />

        <Image
            src={MasterCardIcon}
            alt="Mastercard"
            className="h-6 w-auto"
        />

        <Image
            src={ApplePayIcon}
            alt="Apple Pay"
            className="h-6 w-auto"
        />

        <Image
            src={CreditCardIcon}
            alt="Credit Card"
            className="h-6 w-auto"
        />

        <Image
            src={GooglePayIcon}
            alt="Google Pay"
            className="h-6 w-auto"
        />

        </div>

      </div>

    </div>
  );
};

export default FooterBottom;