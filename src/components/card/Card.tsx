import React, { useRef, useState } from "react";
import { Card as AntCard, Icon } from "antd";
import { CardProps } from "antd/lib/card";
interface iProps extends CardProps {
  children: React.ReactNode;
  visible?: boolean;
}
const Card = (props: iProps) => {
  const ref = useRef<HTMLDivElement>(null);
  let {
    visible: visibleTmp,
    title,
    children,
    bodyStyle = { padding: "5px" }
  } = props;
  const [visible, setVisible] = useState(
    typeof visibleTmp == "undefined" ? true : visibleTmp
  );
  let toggleShowCard = () => {
    let { parentElement } = ref.current;
    let { style } = parentElement;
    style.display = !visible ? "block" : "none";
    setVisible(!visible);
  };
  let getTitleNode = (title: string) => {
    return (
      <div onClick={toggleShowCard}>
        <Icon type={`caret-${visible?'down':'right'}`} theme="filled" />
        {title}
      </div>
    );
  };
  if (typeof title == "string") {
    title = getTitleNode(title);
  }
  return (
    <AntCard {...{ ...props, title, bodyStyle }}>
      <div ref={ref}>{children}</div>
    </AntCard>
  );
};
Card.Grid = AntCard.Grid;
export default Card;
