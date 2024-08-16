import React from 'react'
import styled from 'styled-components'
import Suit from "assets/images/suit.jpg";
export default function index() {
  return (
    <>
      <ProfileArea>
        <PhotoArea />
        <ContentWrap>
          <Job>웹 개발자</Job>
          <Name>김홍주 (Kim Hongju)</Name>
          <div>
            Contact.
            <br />
            Email : <a href="mailto:deoret35@gmai.com">deoret35@gmail.com</a>
            <br />
            Location : 서울, 대한민국
          </div>
        </ContentWrap>
      </ProfileArea>
      <AreaLine/>
      <ContactArea>
        <SubTitle>Introduce.</SubTitle>
        <SubContent>            
          웹 및 소프트웨어 개발에 3년이상 경험이 있는 열정적인 개발자입니다.
          React.js, Java, Node.js, ASP .NET (C#), ASP 를 통해 프로덕션 서비스를 개발 및 운영한 경험이 있으며
          네트워크 업무 경험을 통한 실제 서버 설치, 처리, 관리를 바탕으로 서버 관련 문제 파악 속도가 빠릅니다.
          자체 플랫폼 개발 및 다량의 사용자 처리 경험이 있어 SQL 최적화 및 서버 성능 개선에도 자신 있습니다.
          <br /><br />
          주도적으로 업무를 하는 것을 좋아하며 완성된 결과물에 대해서 성취감을 좋아합니다.
          현재 빠르게 기술이 변하는 시대인 만큼 새로운 기술을 항상 공부하며 기술에 늦춰지지 않도록 노력하는 개발자가 되고싶습니다.
        </SubContent>
      </ContactArea>
      <AreaLine/>
      <SubTitle>Experience.</SubTitle>
      <ExperienceArea>
        <table>
          <colgroup>
            <col style={{ width: "25%" }} />
            <col style={{ width: "75%" }} />
          </colgroup>
          <tbody>
            <tr>
              <td>
                <div>플랫포머스</div>
                <div>Web Developer</div>
                <div>2022.03 ~ 2024.07</div>
              </td>
              <td>
                <ol>
                  <li>
                    채용대행 사이트를 만들어 타사 및 공공기관에 대여 및 유지보수를 해주는 업무 및 이력서 데이터 처리 및 면접, 서류 평가 시스템 개발 및 운영
                    [https://uniqlo.scout.co.kr]
                  </li>
                  <li>
                    회사의 대표 메인 사이트 개편으로 10만명의 유저 사이트를 ASP에서 React.js 및 JAVA로 변경 이력서에 맞는 AI추천 및 유저가 지원자를 추천할 수 있는 비즈니스 로직 추가 및 전반적인 프론트 엔드 개발을 맡음 [https://scout.co.kr]
                  </li>
                  <li>
                    사내 업무 중 단순, 반복 업무를 자동화 및 효율화 하는 관리사이트 기획, 개발하여 업무시간을 주당 30시간이상 줄임
                  </li>
                  <li>
                    기존에 채용대행 사이트를 만들어 주던 업무에서 비효율적인 업무시간의 효율을 늘리기 위한 템플릿형 사이트 제작 및 자동화 채용진행 사이트 제작의 전반적인 프론트 엔드 개발을 맡음
                  </li>
                  <li>
                    Jira와 Slack을 활용한 업무 협업
                  </li>
                  <li>
                    주기적인 서버 점검 및 IDC 방문 점검
                  </li>
                  <li>
                    청소 및 일용직 플랫폼, 사이트 및 안드로이드 앱 기능 추가 및 유지보수 
                    [https://clenaveteran.co.kr]
                  </li>
                </ol>
              </td>
            </tr>
            <tr>
              <td>
                <div>현성솔루션</div>
                <div>Network Engineer</div>
                <div>2021.07 ~ 2024.02</div>
              </td>
              <td>
                <ol>
                  <li>
                    네트워크 보안팀으로서 공공기관, 금융, 기업, 교육단체 등 보안환경 구축
                  </li>
                  <li>
                    네트워크 장비 L2, L3, WAF, NAC 관리 및 클라이언트 회사 유지보수
                  </li>
                  <li>
                    이벤트성 긴급 문제 발생시 처리 및 사후 처리
                  </li>
                </ol>
              </td>
            </tr>
            <tr>
              <td>
                <div>옴니센스</div>
                <div>System Developer</div>
                <div>2017.11 ~ 2018.06</div>
              </td>
              <td>
                <ol>
                  <li>
                    초미세먼지 측정장비에서 얻은 데이터를 처리 및 활용하기 위해 PCB 엔지니어와 협업, Modbus, RS-232 통신규격으로 PC 소프트웨어 제작 (C#)
                  </li>
                  <li>
                    측정 샘플링 데이터 시각화, 가공 처리
                  </li>
                  <li>
                    외부 노이즈 데이터 보정 및 로직 개선
                  </li>
                </ol>
              </td>
            </tr>
          </tbody>
        </table>
      </ExperienceArea>
      설명, 내가 한 일, 나의 기술 스텍

      <SubTitle>Skill.</SubTitle>
    </>
  )
};

const ProfileArea = styled.div`
  display: flex;
  gap: 3rem;
`;

const PhotoArea = styled.span`
  padding: 110px;
  background: url(${Suit}) no-repeat center / 250px;
  border-radius: 1000px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
`;

const ContentWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;
`;

const Job = styled.div`
  opacity: 0.7;
  font-size: 25px;
`

const Name = styled.div`
  font-weight: bold;
  font-size: 40px;
`;

const AreaLine = styled.div`
  padding: 25px;
  margin-bottom: 50px;
  height: 1px;
  border-bottom: 1px solid #D8D8D8;
`;

const SubTitle = styled.div`
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 15px;
  width: 200px;

`;

const SubContent = styled.div`
  opacity: 0.7;
  font-size: 22px;
  > ol {
    line-height: 2rem;
  }
`;

const ContactArea = styled.div`
  /* display: flex; */
  /* gap: 100px;
  line-height: 2rem; */
  > div {
    vertical-align: top;
    display: inline-block;
    line-height: 2rem;
    width: calc(100% - 250px);
  }
  > div:first-child {
    width: 200px;
    margin-right: 4%;
  }
`;

const ExperienceArea = styled.div`
  margin-top: 60px;
  line-height: 2rem;
  table {
    width: 100%;
  }
  tr > td:first-child {
    text-align: right;
    opacity: .6;
    color: #A0A0A0;
    /* font-size: 12px; */
  }
  tr > td > div:first-child {
    color: black;
    font-weight: bold;
    font-size: 25px;
  }
  tr > td:nth-child(2) {
    padding-left: 100px;
    padding-bottom: 50px;
  }
  ol > li {
    list-style: square;
  }
`;
