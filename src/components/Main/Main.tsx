import React from "react";
import {
  ContainerSC,
  WrapperSC,
  DescriptionSC,
  LinksContainerSC,
  LinkFirstSC,
  LinkSecondSC,
  BackSC,
} from "./style";
import { Colors, Typography } from "../../ui";
import { TypographyVariants } from "../../enums";
import Picture from "../../assets/main2.webp";
import { Header } from "../Header";

export const Main = () => {
  return (
    <WrapperSC id="main">
      <Header />
      <ContainerSC>
        <BackSC>
          <picture>
            <source srcSet={Picture} type="image/webp" />
            <img src={Picture} alt="Description" />
          </picture>
        </BackSC>
        <DescriptionSC>
          <Typography
            variant={TypographyVariants.paragraphLBold}
            color={Colors.SECONDARY}
          >
            АВТОРСКИЙ ИНТЕНСИВ
          </Typography>
          <Typography variant={TypographyVariants.h2} color={Colors.SECONDARY}>
            ПО ИЗМЕНЕНИЮ <br /> ОБРАЗА ЖИЗНИ
          </Typography>

          <Typography
            variant={TypographyVariants.paragraphS}
            color={Colors.TEXTLIGHT}
          >
            Хочешь узнать о том, как улучшить свое тело и состояние, не отделяя
            физическое и телесное состояние от всех сфер жизни, а работая
            комлесно? Тогда жду тебя на интенсиве <span> 5 февраля</span>
          </Typography>

          <LinksContainerSC>
            <LinkFirstSC href="/"> Участвовать</LinkFirstSC>
            <LinkSecondSC to="programm" smooth={true} duration={500}>
              Программа
            </LinkSecondSC>
          </LinksContainerSC>
        </DescriptionSC>
      </ContainerSC>
    </WrapperSC>
  );
};
