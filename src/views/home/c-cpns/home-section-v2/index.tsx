import { memo, useCallback, useState } from "react";
import { HomeSectionV2Wrapper } from "./style";
import SectionHeader from "@/components/section-header";
import SectionTab from "@/components/section-tab";
import SectionRoom from "@/components/section-room";
import SectionFooter from "@/components/section-footer";
import { IBaseSectionInfoV2 } from "@/types/home";

interface IProps {
  infoData: IBaseSectionInfoV2;
}
const HomeSectionV2 = memo((props: IProps) => {
  const { infoData } = props;
  const initialName = Object.keys(infoData.dest_list)[0];
  const [tabName, setTabName] = useState(initialName);
  const tabNames: string[] = infoData.dest_address?.map((item) => item.name);

  const tabClickHandle = useCallback(function (item) {
    setTabName(item);
  }, []);
  return (
    <HomeSectionV2Wrapper>
      <SectionHeader title={infoData.title} subtitle={infoData.subtitle} />
      <SectionTab tabNames={tabNames} tabClickFromP={tabClickHandle} />
      <SectionRoom
        roomList={infoData.dest_list?.[tabName]}
        itemWidth="33.3333%"
      />
      <SectionFooter name={tabName} />
    </HomeSectionV2Wrapper>
  );
});

export default HomeSectionV2;
