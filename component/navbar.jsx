import Image from "next/image";
import "../styles/navbar.css";
import "../styles/globals.css";

import Group13 from "../public/images/cont";

const Navbar = () => {
  return (
    <nav className="nav">
      <div className="my-custom-class">
        <Group13
          text=" تواصل معنا"
          className="upDownAnimation a"
          width="130"
          height="100"
          x="70"
        />
        <Group13
          text="اللغة"
          className="upDownAnimation b "
          width="130"
          height="100"
          x="90"
        />
        <Group13
          text="انشاء متجر"
          className="upDownAnimation c"
          width="130"
          x="70"
          height="100"
        />
        <Group13
          text="تسجيل الدخول"
          className="upDownAnimation d"
          width="130"
          height="100"
        />
      </div>

      <div className="split-image-container">
        <div className="split-part left">
          <Image
            src="/images/logo 1.png"
            alt="Left Logo"
            width={50}
            height={50}
            className="animate-left"
          />
        </div>
        <div className="split-part right">
          <Image
            src="/images/logo 2.png"
            alt="Right Logo"
            width={35}
            height={35}
            className="animate-right"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
