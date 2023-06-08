import { ImageURISource } from "react-native";

export interface MissionData {
  id: number;
  title: string;
  comment: string;
  method: string | string[];
  desc: string;
  bgImage: ImageURISource;
  type: number;
}

export const editedMissions = [
  {
    id: 1,
    title: "책 읽기",
    comment: "어떤 책을 읽든,\n얼마나 읽든 다 괜찮아요.",
    desc: "항상 가까이 하려고 하지만\n생각처럼 잘 안되는 책읽기,\n오늘 칠링챌링에서 해보는 건 어때요?\n\n꼭 한 권을 다 읽지 않아도 괜찮아요.\n어떤 책이라도 상관 없어요.\n그저 시끄러운 바깥 세상과 떨어져,\n고요한 책속 세상에 잠시 머물러봐요.",
    method: "책을 다 읽었다면\n책의 표지나, 마음에 드는 구절을\n찍어 올려주세요.\n당신의 마음이 조금이라도\n평화로워지는 시간이었길 바라요.",
    bgImage: require("../assets/illustrations/logo_1.png"),
    type: 1,
  },
  {
    id: 2,
    title: "셀프 선물하기",
    comment: "당신의 취향을 가장 잘 아는 건\n바로 당신이니까",
    desc: "",
    method: "",
    bgImage: require("../assets/illustrations/logo_2.png"),
    type: 1,
  },
  {
    id: 3,
    title: "예쁜 구름 찾기",
    comment: "구름처럼 몽글몽글해지는\n마음",
    desc: "",
    method: "",
    bgImage: require("../assets/illustrations/logo_3.png"),
    type: 1,
  },
  {
    id: 4,
    title: "하늘 사진 찍어오기",
    comment: "가만히 하늘을 바라보아요.\n오늘의 날씨는 어떤가요?",
    desc: "",
    method: "",
    bgImage: require("../assets/illustrations/logo_4.png"),
    type: 1,
  },
  {
    id: 5,
    title: "만보 걷기",
    comment: "걷기는 최고의 운동,\n생각보다 힘들 지도!",
    desc: "",
    method: "",
    bgImage: require("../assets/illustrations/logo_5.png"),
    type: 1,
  },
  {
    id: 6,
    title: "영화관에서 영화보기",
    comment: "영화관에서만 느낄 수 있는\n분위기가 있잖아요.",
    desc: "",
    method: "",
    bgImage: require("../assets/illustrations/logo_6.png"),
    type: 1,
  },
  {
    id: 7,
    title: "나만의 공간 꾸미기",
    comment: "나만의 취향을 가득 담은\n공간을 만들어 가요.",
    desc: "",
    method: "",
    bgImage: require("../assets/illustrations/logo_7.png"),
    type: 1,
  },
  {
    id: 8,
    title: "30분 동안 산책하기",
    comment: "맑은 공기를 마시며\n마음 속의 걱정을 덜어요.",
    desc: "",
    method: "",
    bgImage: require("../assets/illustrations/logo_8.png"),
    type: 1,
  },
  {
    id: 9,
    title: "맘에 드는\n카페 탐방하기",
    comment: "좋아하는 카페나\n새로운 카페를 소개해주세요.",
    desc: "",
    method: "",
    bgImage: require("../assets/illustrations/logo_9.png"),
    type: 1,
  },
  {
    id: 10,
    title: "이불 정리하기",
    comment: "하루의 시작을 상쾌하게 만드는\n아주 사소한 일",
    desc: "",
    method: "",
    bgImage: require("../assets/illustrations/logo_10.png"),
    type: 1,
  },
  {
    id: 11,
    title: "집 청소하기",
    comment: "깨끗한 방은 곧\n정돈된 마음가짐이 될 거예요.",
    desc: "",
    method: "",
    bgImage: require("../assets/illustrations/logo_11.png"),
    type: 1,
  },
  {
    id: 12,
    title: "한 달 후의\n나에게 편지 쓰기",
    comment: "미래의 나에게\n하고 싶은 말이 있나요?",
    desc: "",
    method: "",
    bgImage: require("../assets/illustrations/logo_12.png"),
    type: 2,
  },
  {
    id: 13,
    title: "좋아하는 시 필사하기",
    comment: "당신에게 위안을 가져다 준\n시가 있나요?",
    desc: "",
    method: "",
    bgImage: require("../assets/illustrations/logo_13.png"),
    type: 2,
  },
  {
    id: 14,
    title: "스스로에게\n응원의 문구 쓰기",
    comment: "스스로 하는 응원은\n큰 힘이 된답니다.",
    desc: "",
    method: "",
    bgImage: require("../assets/illustrations/logo_14.png"),
    type: 2,
  },
  {
    id: 15,
    title: "감정일기 쓰기",
    comment: "언제, 어떤 감정을,\n얼마나 느끼나요?",
    desc: "",
    method: "",
    bgImage: require("../assets/illustrations/logo_15.png"),
    type: 3,
  },
  {
    id: 16,
    title: "행복일기 쓰기",
    comment: "행복은 언제나 가까이\n있다는 걸 잊지 말아요.",
    desc: "",
    method: "",
    bgImage: require("../assets/illustrations/logo_16.png"),
    type: 3,
  },
  {
    id: 17,
    title: "걱정하는 시간 갖기",
    comment: "걱정을 다스리는\n아이러니한 방법",
    desc: "",
    method: "",
    bgImage: require("../assets/illustrations/logo_17.png"),
    type: 3,
  },
  {
    id: 18,
    title: "부정적인 생각 바꿔쓰기",
    comment: "당신도 모르게 스쳐 지나가는\n생각들을 되짚어 보아요.",
    desc: "",
    method: "",
    bgImage: require("../assets/illustrations/logo_18.png"),
    type: 3,
  },
];
