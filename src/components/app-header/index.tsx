import { memo } from "react";
import { HeaderWrapper } from "./style";
import HeaderLeft from "./c-cpns/header-left/header-left";
import HeaderCenter from "./c-cpns/header-center/header-center";
import HeaderRight from "./c-cpns/header-right";

const Header = memo(() => {
  return (
    <HeaderWrapper>
      <h1>哈哈哈哈哈哈</h1>
      <HeaderLeft />
      <HeaderCenter />
      <HeaderRight />
    </HeaderWrapper>
  );
});

export default Header;
