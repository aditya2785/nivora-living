import { HeaderMain, HeaderMainMobile } from "@/components";

const Header = () => {
  return (
    <header className="w-full">
      <HeaderMain />
      <HeaderMainMobile />
    </header>
  );
};

export default Header;