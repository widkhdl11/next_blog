import Link from "next/link";

export const projectData = [
  {
    name: "NextJS 블로그",
    image: "project1.png",
    comp: (
      <div>
        <div className="font-bold">[프로젝트명]</div>
        <h1>Express + ReactJS 게시판</h1>
        <div className="font-bold mt-4">[프로젝트 설명]</div>
        <h3 className="">
          ExpressJS와 ReactJS를 사용해 CRUD 기능을 구현한 게시판 입니다.
          ExpressJS와 ReactJS를 사용해 CRUD 기능을 구현한 게시판 입니다.
          ExpressJS와 ReactJS를 사용해 CRUD 기능을 구현한 게시판 입니다.
          ExpressJS와 ReactJS를 사용해 CRUD 기능을 구현한 게시판 입니다.
        </h3>
        <div className="font-bold mt-4">[기술 스택]</div>
        <ul>
          <li className="font-semibold">Back-end</li>
          <li>- ExpressJS</li>
          <li>- MySQL</li>
          <li>- Prisma</li>
          <li>- Planetscale(cloud DB)</li>
          <li>- Heroku(Deploy)</li>
          <li className="font-semibold">Front-end</li>
          <li>- ReactJS</li>
          <li>- Tailwind CSS</li>
          <li>- Axios(XML Requests)</li>
          <li>- Vercel(Deploy)</li>
        </ul>
        <div className="font-bold mt-4">[Link]</div>
        <h5>
          배포 -{" "}
          <Link
            className="text-blue-600 hover:text-blue-800 underline"
            href={"https://sns-clone-exporess.versel.app"}
            target="_blank"
          >
            https://sns-clone-exporess.versel.app
          </Link>
        </h5>
        <h5>
          GitHub -{" "}
          <Link
            className="text-blue-600 hover:text-blue-800 underline"
            href={"https://sns-clone-exporess.versel.app"}
            target="_blank"
          >
            https://sns-clone-exporess.versel.app
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
        <h1>Express + ReactJS 게시판 2222222222</h1>
        <div className="font-bold mt-4">[프로젝트 설명]</div>
        <h3 className="">
          ExpressJS와 ReactJS를 사용해 CRUD 기능을 구현한 게시판 입니다.
          ExpressJS와 ReactJS를 사용해 CRUD 기능을 구현한 게시판 입니다.
          ExpressJS와 ReactJS를 사용해 CRUD 기능을 구현한 게시판 입니다.
          ExpressJS와 ReactJS를 사용해 CRUD 기능을 구현한 게시판 입니다.
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
        <h5>
          배포 -{" "}
          <Link
            className="text-blue-600 hover:text-blue-800 underline"
            href={"https://sns-clone-exporess.versel.app"}
            target="_blank"
          >
            https://sns-clone-exporess.versel.app
          </Link>
        </h5>
        <h5>
          GitHub -{" "}
          <Link
            className="text-blue-600 hover:text-blue-800 underline"
            href={"https://sns-clone-exporess.versel.app"}
            target="_blank"
          >
            https://sns-clone-exporess.versel.app
          </Link>
        </h5>
      </div>
    ),
  },
];
