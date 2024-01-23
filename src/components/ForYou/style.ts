import styled from "@emotion/styled";
import { Colors, media } from "../../ui";

export const ContainerSC = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  width: 100%;
  display: grid;
  grid-template-columns: 1.3fr 1fr;
  flex-direction: row;

  h2 {
    text-align: left;
  }

  ${media.TABLET} {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
  }
`;

export const WrapperSC = styled.div`
  background-color: ${Colors.TEXTLIGHT};
`;

export const RateSC = styled.div`
  width: 100%;
  display: flex;
  align-items: baseline;
  flex-direction: column;
  justify-content: center;
  row-gap: 20px;

  p {
    font-weight: 400;
  }

  span {
    font-weight: 700;
    color: ${Colors.SECONDARY};
  }

  ${media.PHONE} {
    width: 100%;
    row-gap: 10px;

    p {
      font-size: 12px;
      line-height: 14px;
    }
  }
`;

export const ContainerRatesSC = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 20px;
  row-gap: 20px;

  ${media.TABLET} {
    width: 80%;
    row-gap: 10px;
    padding: 10px;
  }
`;

export const ContainterImageSC = styled.div`
  width: 100%;
  position: relative;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  ${media.TABLET} {
    width: 86%;
  }
`;

interface BackSCProps {
  imageUrl: string;
}

export const ImageSC = styled.div<BackSCProps>`
  padding-top: 76px;
  height: 100%;
  position: absolute;
  background-image: url(${(props) => props.imageUrl});
  background-position: 100% 40%;
  background-size: cover;
  top: 0;
  left: 0;
  z-index: 0;
  margin: 0 auto;
  width: 100%;

  ${media.TABLET} {
    background-position: 70% 6%;
  }
`;

export const ContainerWhiteSC = styled.div`
  width: 400px;
  height: 400px;
  background-color: ${Colors.TEXTLIGHT};
  padding: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 3;
  position: relative;
`;

export const ImageSecondSC = styled.div<BackSCProps>`
  height: 100%;
  position: absolute;
  background-image: url(${(props) => props.imageUrl});
  background-position: 100% 10%;
  background-size: cover;
  z-index: 0;
  margin: 0 auto;
  width: 100%;

  ${media.TABLET} {
    background-position: 70% 6%;
  }
`;
