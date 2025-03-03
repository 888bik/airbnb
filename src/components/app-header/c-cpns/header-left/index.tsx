import { memo } from "react";
import { LeftWrapper } from "./style";
import IconLogo from "@/assets/svg/icon_logo";
import { useNavigate } from "react-router-dom";
const HeaderLeft = memo(() => {
  const navigate = useNavigate();
  function logoBtnClick() {
    navigate("/home")
  }
  return (
    <LeftWrapper>
      <div className="logo" onClick={logoBtnClick}>
        <IconLogo />
      </div>
    </LeftWrapper>
  );
});

export default HeaderLeft;
