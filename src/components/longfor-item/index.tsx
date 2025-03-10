import { memo } from "react";
import { LongForItemWrapper } from "./style";
import { IRoomInfo } from "@/types/home";

interface IProps {
  itemData: IRoomInfo;
  itemWidth?: string;
}
const LongForItem = memo((props: IProps) => {
  const { itemData } = props;
  return (
    <LongForItemWrapper>
      <div className="inner">
        <div className="item-info">
          <img className="cover" src={itemData.picture_url} alt="" />
          <div className="bg-cover"></div>
          <div className="info">
            <div className="city">{itemData.city}</div>
            <div className="price">均价 {itemData.price}</div>
          </div>
        </div>
      </div>
    </LongForItemWrapper>
  );
});

export default LongForItem;
