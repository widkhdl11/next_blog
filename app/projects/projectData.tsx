import Link from "next/link";

export const projectData = [
  {
    name: "NextJS 블로그",
    image: "project1.png",
    comp: (
      <div>
        <div className="font-bold">[프로젝트명]</div>
        <h1>NextJS 블로그</h1>
        <div className="font-bold mt-4">[프로젝트 설명]</div>
        <h3 className="">
          <div>
            Next.js의 SSG(Static Site Generation)를 활용하여 제작한
            블로그입니다. <br /> <br />이 블로그는 Markdown 파일을 통해 글을
            입력, 수정, 삭제할 수 있는 기본적인 기능을 갖춘 블로그로, 내용의
            간결함과 직관성을 중요시하여 제작되었습니다. <br /> <br />
            <span className="text-black font-semibold">주요 기능 및 특징</span>:
            SSG (정적 사이트 생성): 블로그의 페이지들은 빌드 시점에서 생성되어
            정적 파일로 제공되어, 빠른 로딩 속도와 효율적인 성능을 제공합니다.
            <br /> <br />
            <span className="text-black font-semibold">Markdown 파일 관리</span>
            : 글은 간단한 Markdown 문법을 사용하여 작성됩니다. 이를 통해
            텍스트의 가독성을 높이고 포맷팅을 쉽게 적용할 수 있습니다.
            <br />
            <br /> 이 블로그는 주로 내용의 질과 사용자 경험에 중점을 두어
            제작되었으며, 기술적인 부분에서는 Next.js와 SSG의 강점을 최대한
            활용하고 있습니다.
          </div>
        </h3>
        <div className="font-bold mt-4">[기술 스택]</div>
        <ul>
          <li>- NextJS(13버전)</li>
          <li>- ReactJS</li>
          <li>- Contentlayer</li>
          <li>- Tailwind CSS</li>
          <li>- Vercel(프론트엔트 배포)</li>
        </ul>
        <div className="font-bold mt-4">[Link]</div>
        <h5 className="text-xs md:text-base">
          배포 -{" "}
          <Link
            className="text-blue-600 hover:text-blue-800 underline"
            href={"https://www.jaewons.com/"}
            target="_blank"
          >
            https://www.jaewons.com/
          </Link>
        </h5>
        <h5 className="text-xs md:text-base">
          GitHub -{" "}
          <Link
            className=" text-blue-600 hover:text-blue-800 underline"
            href={"https://github.com/widkhdl11/next_blog_proceeding"}
            target="_blank"
          >
            https://github.com/widkhdl11/next_blog_proceeding
          </Link>
        </h5>
      </div>
    ),
  },
  {
    name: "Express+ReactJS 게시판",
    image: "project2.png",
    comp: (
      <div>
        <div className="font-bold">[프로젝트명]</div>
        <h1>Express + ReactJS 게시판</h1>
        <div className="font-bold mt-4">[프로젝트 설명]</div>
        <h3 className="">
          <div>
            ExpressJS와 ReactJS를 결합하여 구현한 게시판입니다.
            <br /> <br /> 프로젝트는 CRUD(Create, Read, Update, Delete) 기능을
            갖추고 있으며, 사용자 인증을 위해 JWT(Json Web Token)를 활용하여
            간단한 로그인 기능을 구현하였습니다.
            <br /> <br />{" "}
            <span className="text-black font-semibold">주요 기능 및 특징 </span>
            : ExpressJS와 ReactJS 통합: 서버 측에서 ExpressJS를, 클라이언트
            측에서 ReactJS를 사용하여 각각의 강점을 살려 프로젝트를
            구성하였습니다.
            <br /> <br />
            <span className="text-black font-semibold">CRUD 기능 구현</span>:
            게시판은 글 작성, 조회, 수정, 삭제 기능을 포함하고 있어 사용자들이
            쉽게 게시글을 관리할 수 있습니다.{" "}
            <span className="text-black font-semibold">
              JWT를 활용한 로그인 기능
            </span>
            : 사용자 인증은 JWT를 이용하여 구현되었으며, 로그인한 사용자만이
            게시글을 작성하고 수정할 수 있습니다. <br /> <br />이 프로젝트는
            ExpressJS와 ReactJS를 연동하여 간편하게 게시판을 구현한 것에 중점을
            두고 있습니다.
          </div>
        </h3>
        <div className="font-bold mt-4">[기술 스택]</div>
        <ul>
          <li>Back-end</li>
          <li>- ExpressJS</li>
          <li>- MySQL</li>
          <li>- Prisma</li>
          <li>- Planetscale(cloud DB)</li>
          <li>- Heroku(Deploy)</li>
          <li>Front-end</li>
          <li>- ReactJS</li>
          <li>- Tailwind CSS</li>
          <li>- Axios(XML Requests)</li>
          <li>- Vercel(Deploy)</li>
        </ul>
        <div className="font-bold mt-4">[Link]</div>
        <h5 className="text-xs md:text-base">
          배포 -{" "}
          <Link
            className=" text-blue-600 hover:text-blue-800 underline"
            href={"https://sns-clone-exporess.versel.app"}
            target="_blank"
          >
            https://sns-clone-exporess.versel.app
          </Link>
        </h5>
        <h5 className="text-xs md:text-base">
          GitHub -{" "}
          <Link
            className=" text-blue-600 hover:text-blue-800 underline"
            href={"https://sns-clone-exporess.versel.app"}
            target="_blank"
          >
            https://github.com/widkhdl11/sns-clone-express
          </Link>
        </h5>
      </div>
    ),
  },
];
