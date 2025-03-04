import { memo, useEffect, useRef } from "react";
import { IndicatorWrapper } from "./style";
interface IProps {
  selectIndex: number;
  children?: React.ReactNode;
}

const Indicator = memo((props: IProps) => {
  const { selectIndex } = props;
  const contentRef = useRef(null);
  useEffect(() => {
    const curEl = contentRef?.current?.children[selectIndex];
    const curElOffsetLeft: number = curEl.offsetLeft;
    const curClientWidth: number = curEl.clientWidth;
    const contentScroll: number = contentRef.current.scrollWidth;
    const contentWidth: number = contentRef.current.clientWidth;
    //要移动到中间的距离
    let distance = curElOffsetLeft + 0.5 * curClientWidth - contentWidth * 0.5;

    //特殊情况的处理:当比较靠前的item不需要移动到中间
    if (distance < 0) distance = 0;
    //靠后的item也不需要移动到中间
    const totalDistance = contentScroll - contentWidth;
    if (distance > totalDistance) distance = totalDistance;
    contentRef.current.style.transform = `translate(${-distance}px)`;
  }, [selectIndex]);
  return (
    <IndicatorWrapper>
      <div className="i-content" ref={contentRef}>
        {props.children}
      </div>
    </IndicatorWrapper>
  );
});

export default Indicator;
