import test from '../images/favicon.png';
import profile1 from '../images/profile1.png';
import profile2 from '../images/profile2.png';
import profile3 from '../images/profile3.png';
import profile4 from '../images/profile4.png';
import profile5 from '../images/profile5.png';
import writeprofile1 from '../images/writeprofile1.png';
import writeprofile2 from '../images/writeprofile2.png';
import contentprofile from '../images/contentprofile.png';

export const UserData = {
  admin: {
    id: 'Chifuyu',
    username: 'Chifuyu',
    profilephoto: `${test}`,
  },
  username: 'Chifuyu',
  profilephoto: ``,
  ignore: [],
  friendItems: {
    users: [],
  },
  messageBox: [
    {
      msgId: 1,
      recipient: 'hacker',
      sender: '1234567890123456',
      title: '안녕하세요 운영자입니다.',
      content: '경고 1스택',
      msgDate: {
        year: 2020,
        month: '05',
        date: '23',
        day: '목',
        hour: '18',
        min: '00',
        sec: '39',
      },
    },
    {
      msgId: 2,
      recipient: 'ㅁㄴㅇㄻ',
      sender: '이름 모를 사람',
      title: '경고조치합니다',
      content: '무엇',
      msgDate: {
        year: 2020,
        month: '05',
        date: '23',
        day: '목',
        hour: '18',
        min: '00',
        sec: '39',
      },
    },
  ],
};

export let writing = [
  {
    id: 1,
    username: '직원',
    title: '자는 분위기 사무실',
    content: `<img src=${contentprofile} alt=1.jpg /><p>허어억</p>`,
    profile: writeprofile1,
    likeCount: 4,
    writeDate: {
      year: 2020,
      month: '05',
      date: '30',
      day: '토',
      hour: '10',
      min: '20',
      sec: '30',
    },
  },
  {
    id: 2,
    username: '편집자',
    title: '원고 마무리 잘 되가죠?',
    content: `<img src=${profile1} alt=1.jpg /><p>^^7</p>`,
    profile: writeprofile2,
    likeCount: 1,
    writeDate: {
      year: 2020,
      month: '06',
      date: '05',
      day: '금',
      hour: '08',
      min: '16',
      sec: '52',
    },
  },
];

export const comments = [
  {
    postId: 1,
    id: 1,
    username: '치즈덕',
    content: '?',
    profile: profile1,
    writeDate: {
      year: 2020,
      month: '05',
      date: '30',
      day: '토',
      hour: '10',
      min: '22',
      sec: '40',
    },
  },
  {
    postId: 1,
    id: 2,
    username: '슬픈 개구리',
    content: '아..아앗;',
    profile: profile2,
    writeDate: {
      year: 2020,
      month: '05',
      date: '30',
      day: '토',
      hour: '10',
      min: '25',
      sec: '13',
    },
  },
  {
    postId: 2,
    id: 1,
    username: '읭읭이',
    content: 'ㅠㅠㅠㅠ',
    profile: profile3,
    writeDate: {
      year: 2020,
      month: '06',
      date: '05',
      day: '금',
      hour: '08',
      min: '22',
      sec: '37',
    },
  },
  {
    postId: 2,
    id: 2,
    username: '안전읭읭이',
    content: '하구 있어요...;;;;',
    profile: profile4,
    writeDate: {
      year: 2020,
      month: '06',
      date: '05',
      day: '금',
      hour: '08',
      min: '23',
      sec: '06',
    },
  },
  {
    postId: 2,
    id: 3,
    username: '와나나',
    content: '잠수타도 되나요?',
    profile: profile5,
    writeDate: {
      year: 2020,
      month: '06',
      date: '05',
      day: '금',
      hour: '08',
      min: '28',
      sec: '25',
    },
  },
];
