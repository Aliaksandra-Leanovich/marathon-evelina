import { useEffect, useState } from "react";
import { TypographyVariants } from "../../enums";
import { Colors, Typography } from "../../ui";
import { Burger } from "../Burger";
import { RightNavigation } from "../Navigation/RightNavigation";
import { TopNavigation } from "../Navigation/TopNavigation";
import {
  ContainerSC,
  ContainerTextSC,
  StyledHeaderSC,
  WrapperSC,
} from "./style";

export const Header = () => {
  const [isOpen, setOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <StyledHeaderSC scrollY={scrollY}>
      <WrapperSC>
        <ContainerSC>
          <ContainerTextSC>
            <Typography
              variant={TypographyVariants.subtitle}
              color={Colors.TEXTLIGHT}
            >
              КУРС ОТ <br /> ЭВЕЛИНЫ СКОБЛЯ
            </Typography>
          </ContainerTextSC>
          <TopNavigation isOpen={isOpen} />
          <RightNavigation isOpen={isOpen} />
          <Burger isOpen={isOpen} setOpen={setOpen} />
        </ContainerSC>
      </WrapperSC>
    </StyledHeaderSC>
  );
};
