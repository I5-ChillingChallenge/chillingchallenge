import React from "react";

import Margin from "@components/Margin";
import DescriptionContainer from "@components/onBoarding/DescriptionContainer";
import MediaContainer from "@components/onBoarding/MediaContainer";

interface FirstPageProps {
  setPageStatus: React.Dispatch<React.SetStateAction<number>>;
  activePageIndex: number;
  pageIndex: number;
}

const FirstPage = ({ setPageStatus, activePageIndex, pageIndex }: FirstPageProps) => {
  return (
    <>
      <Margin props={40} />
      <MediaContainer type={1} />
      <Margin props={30} />
      <DescriptionContainer
        headerText="칠링챌링은"
        contentText={`당신의 삶에 조금은 chill하게
힐링을 가져다주는,
그런 챌린지를 함께 해요.`}
        activePageIndex={activePageIndex}
        pageIndex={pageIndex}
      />
    </>
  );
};

export default FirstPage;
