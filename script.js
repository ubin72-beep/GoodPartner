/* 포트폴리오 추가/수정은 아래 projects 배열에서 관리하세요. */
const projects = [
  { name: 'AI사주 천년지기', url: 'https://www.aisaju1000.com/', category: 'AI · 명리학', description: '전통 명리학과 AI를 연결해 사주와 운세 콘텐츠를 제공하는 서비스.', image: 'images/aisaju1000.png', logo: '천년지기', sub: 'AI SAJU · MY DESTINY', bg: '#e8e0d1', color: '#574a37' },
  { name: '멘토라', url: 'https://mentora.co.kr/', category: '교육 · 콘텐츠', description: '배움과 성장을 위한 콘텐츠와 교육 프로젝트를 소개하는 웹사이트.', image: 'images/mentora.png', logo: 'MENTORA', sub: 'LEARN · GROW · INSPIRE', bg: '#dce8e2', color: '#304c40' },
  { name: '운세ON', url: 'https://unseon.co.kr/', category: '운세 · 라이프', description: '일상 속 궁금한 운세를 쉽고 편하게 만나는 온라인 운세 서비스.', image: 'images/unseon.png', logo: '운세ON', sub: 'YOUR DAILY INSIGHT', bg: '#e5def1', color: '#51446d' },
  { name: '심석', url: 'https://simsuk.com/', category: '주얼리 · 쇼핑몰', description: '마음을 엮은 돌, 천연 원석의 매력을 담은 주얼리 브랜드.', image: 'images/simsuk.png', logo: '심석 心石', sub: 'A HEART WOVEN IN STONE', bg: '#e9e6df', color: '#4c5148' },
  { name: '오로라서클', url: 'https://auroralank.co.kr/', category: '커뮤니티 · 문화', description: 'AI와 인문학, 심리와 창작을 함께 나누는 여성 커뮤니티.', image: 'images/auroracircle.png', logo: 'AURORA CIRCLE', sub: 'CREATE · CONNECT · GROW', bg: '#dfe7cf', color: '#3e5135' }
];

// 포트폴리오 카드와 실제 캡처 이미지 5장은 index.html에 직접 포함되어 있습니다.

// 문의 메일 주소를 변경하려면 아래 EMAIL 값을 수정하세요.
// 현재는 운영 중인 심석 사이트에 공개된 이메일을 임시 기본값으로 사용합니다.
const EMAIL = '1topgift@naver.com';
const form = document.querySelector('#inquiryForm');
const feedback = document.querySelector('#formFeedback');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const data = new FormData(form);
  const subject = `[홈페이지 제작 문의] ${data.get('name')}`;
  const body = [
    `성함 또는 업체명: ${data.get('name')}`,
    `연락 방법: ${data.get('contactWay')}`,
    `제작 종류: ${data.get('type')}`,
    `예상 예산: ${data.get('budget')}`,
    '', '문의 내용:', data.get('message')
  ].join('\n');
  feedback.textContent = '이메일 작성 화면을 열고 있습니다. 열리지 않으면 문의 내용을 복사해 이메일로 보내 주세요.';
  window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});

document.querySelector('#year').textContent = new Date().getFullYear();
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
menuToggle.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(open));
  menuToggle.setAttribute('aria-label', open ? '메뉴 닫기' : '메뉴 열기');
});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuToggle.setAttribute('aria-expanded', 'false');
}));
