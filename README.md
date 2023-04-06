# 4주차 기업과제

> 원티드에서 진행하는 4주차 [스위치원](http://www.switchwon.com/ko/index.html) 기업과제 입니다.

<br/>

## [🔗 배포 URL](https://pre-onboarding-9th-4-9.vercel.app)

<br/>

## ⚙️ 프로젝트의 실행 방법

> 💡주의 : 해당 프로젝트의 데이터는 mock-data 입니다.

**Install**

```bash
npm install
```

**Start**

```bash
npm start
```
**Test**

```bash
npm run test
```

<br/>

## ✅ 요구사항

#### Assignment 1

> 주문목록 테이블 

- 주문에 대한 모든 정보를 표 형태로 확인할 수 있도록 구현
- 페이지네이션 구현(한 페이지에 50건의 주문이 보이도록)
- 오늘의 거래 건만 보여지도록 구현(2023-03-08)

#### Assignment 2

> 주문목록 테이블 정렬

- 기본 표 정렬은 ID 기준 오름차순으로 구현
- 표에서 주문번호, 거래일 & 거래시간 버튼을 누르면 각각 내림차순 정렬이 되도록 구현

#### Assignment 3

> 주문목록 상태에 따른 필터링 

- 주문 처리 상태에 따라 filtering 기능 구현

#### Assignment 4

> 주문목록 검색기능구현  

- 고객 이름을 검색시 해당 표에서 확인할 수 있도록 구현

#### Assignment 5
> 주문목록 데이터 최신화 

- 서버에 들어온 주문을 5초마다 최신화
- 서버 API가 구현되어 있다는 가정 하에 구현

#### Assignment 5
> 테스트 코드 작성

- 컴포넌트에 대한 테스트 코드

<br />

## 📽️ 데모 영상
![ezgif com-video-to-gif](https://user-images.githubusercontent.com/90454621/230387730-f4e4c60a-fc7c-4eb5-82ba-490266f3de9b.gif)


## 📚 구현 방법


> ###  **페이지네이션**
1. 프롭스로 최대 페이지수를 받아 페이지 컴포넌트 구성

<br/>

> ###  **필터 / 정렬 / 검색**
1.  useFilter 커스텀 훅으로 관심사 분리
2. 대소문자 구분 없이 고객 정보를 검색하여 사용자가 효율적으로 고객 데이터를 검색할수 있도록 구현

<br/>

> ###  **데이터 최신화**
1. React-query의 refetchInterval속성값을 5초로 설정함

<br/>



## ⚙️ 기술 스택
`TypeScript` `React-Testing-Library` `axios` `react-router-dom` `lodash` `react-query` `styled-components`

<br/>

## 🗂️ 폴더구조

```bash
ㄴ 📁 public
   ㄴ 📁 mock
      ㄴ 📄 mock_data.json
ㄴ 📁 src
   ㄴ 📁 apis
      ㄴ 📄 instance.ts
   ㄴ 📁 components
      ㄴ 📄 Button.tsx
      ㄴ 📄 Footer.tsx
      ㄴ 📄 Header.tsx
      ㄴ 📄 Paging.tsx
      ㄴ 📄 Search.tsx
      ㄴ 📄 TableItem.test.tsx
      ㄴ 📄 TableItem.tsx
   ㄴ 📁 hooks
      ㄴ 📄 useFilter.tsx
      ㄴ 📄 useGetOrders.tsx
   ㄴ 📁 images
      ㄴ 📄 github_white.png
      ㄴ 📄 logo.png
   ㄴ 📁 pages
      ㄴ 📄 MainPage.test.tsx  
      ㄴ 📄 MainPage.tsx   
   ㄴ 📁 shared
      ㄴ 📄 Router.tsx
   ㄴ 📁 styles
      ㄴ 📄 GlobalStyle.tsx
   ㄴ 📁 types
      ㄴ 📄 mockDataTypes.ts
      ㄴ 📄 type.d.ts
   ㄴ 📄 App.tsx
   ㄴ 📄 index.tsx
```

<br/>

## 🕖 타임라인

**_2023.03.19 ~ 2023.03.23 (5일)_**
| 기간 | 진행 사항 |
|------|------|
|2023/03/19| 사용 기술 스택 및 라이브러리 선정,git convention 및 폴더 구조 작성 |
|2023/03/20| 기능구현 (#3) (#4)|
|2023/03/21| 기능구현 (#5) (#6)|
|2023/03/22| 기능구현 (#7) (#8)|
|2023/03/23| 코드 리뷰 , best practice 선정 , 코드 개선  |

<br/>

## 🧑🏻‍🏫 협업 방법

1. 빠른 소통과 업무 협업을 위해 `슬랙` 채널을 사용합니다.
2. 이슈별로 기능 구현 후 PR을 생성합니다.
3. `코드 리뷰`를 통해 `Best practice` 선정 후 develop에 merge합니다.
4. 추가 리팩토링 실시 후 배포합니다.

<br/>

## 📖 Commit Message Prefix

- `Feat`: 새로운 기능 추가
- `Fix`: 버그 수정
- `Docs`: 문서 수정, 파일 추가 및 삭제, 파일명 변경
- `Style`: 스타일 관련 기능(코드 포맷팅, 세미콜론 누락 등)
- `Refactor`: 코드 리팩토링
- `Test`: 테스트 코드, 리펙토링 테스트 코드 추가
- `Chore`: 빌드 업무 수정, 패키지 매니저 수정(.gitignore 수정 등)
- `Init`: 초기셋팅 (esLint 적용 등)

<br/>

## 📖 Git Flow

- **master(main)** : 배포하는 브랜치
- **develop** : 개발 브랜치
- **feature** : 단위 기능을 개발하는 브랜치
- **hotfix** : master 브랜치로 배포를 했는데 버그가 생겼을 때 긴급 수정하는 브랜치 입니다.


<br/>

## 📖 Git Convention

- 안쓰는 코드들(콘솔, 주석)은 쌓아두지 말고 지워주세요!
- Pull → Commit → Push 순서로 작업해주세요!
- Push 전 코드를 실행하여 에러를 먼저 확인한 후, PR해요!
- PR을 거쳐 모든 팀원들이 승인 및 코드리뷰 후, merge 합니다. conflict 해결은 모든 팀원이 함께 참여해요!
- PR승인 후 squash and merge 를 하여 커밋을 합쳐주세요 > merge 된 branch는 꼭 삭제 해주세요!
  (\*develop branch는 개발 branch입니다. 삭제하지 말아주세요)

<br/>

## 🥸 팀원 소개

<table>
<tbody>
<tr>
<td  align="center">
<a  href="https://github.com/minhyeonhong"><img  src="https://avatars.githubusercontent.com/u/90454621?v=4(https://avatars.githubusercontent.com/u/90454621?v=4)"  width="100px;"  alt=""/>
<br  /><sub><b>민현홍</b></sub></a><br  /></td>

<td  align="center"><a  href="https://github.com/Hwang-Junsu"><img  src="https://avatars.githubusercontent.com/u/80745897?v=4(https://avatars.githubusercontent.com/u/80745897?v=4)"  width="100px;"  alt=""/><br  /><sub><b>황준수</b></sub></a><br  /></td>

<td  align="center"><a  href="https://github.com/eunrain"><img  src="https://avatars.githubusercontent.com/u/113877276?v=4(https://avatars.githubusercontent.com/u/113877276?v=4)"  width="100px;"  alt=""/><br  /><sub><b>고은비</b></sub></a><br  /></td>

<td  align="center"><a  href="https://github.com/yeon-kk"><img  src="https://avatars.githubusercontent.com/u/86847564?v=4(https://avatars.githubusercontent.com/u/86847564?v=4)"  width="100px;"  alt=""/><br  /><sub><b>곽연경</b></sub></a><br  /></td>

<td  align="center"><a  href="https://github.com/whl5105"><img  src="https://avatars.githubusercontent.com/u/73993670?v=4(https://avatars.githubusercontent.com/u/73993670?v=4)"  width="100px;"  alt=""/><br  /><sub><b>최수인</b></sub></a><br  /></td>

<td  align="center"><a  href="https://github.com/minhyeonhong"><img  src="https://avatars.githubusercontent.com/u/90454621?v=4(https://avatars.githubusercontent.com/u/90454621?v=4)"  width="100px;"  alt=""/><br  /><sub><b>김민영</b></sub></a><br  /></td>

</tbody>
</table>


