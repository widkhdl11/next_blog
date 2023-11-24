import { FC, useEffect, useState } from "react";

interface MyskillCardProps {
  name: string;
  skill: number;
}

const MySkillCard: FC<MyskillCardProps> = ({ name, skill }) => {
  const [skillComp, setSkillComp] = useState<JSX.Element[]>();

  useEffect(() => {
    let temp = [];

    for (let i = 0; i < skill; i++) {
      temp.push(
        <div
          className="w-3 h-3 bg-gradient-to-tr from-d-green to-d-purple rotate-45 mr-2"
          key={i}
        ></div>
      );
    }
    for (let i = 0; i < 5 - skill; i++) {
      temp.push(
        <div className="w-3 h-3  bg-gray-300 rotate-45 mr-2" key={i + 5}></div>
      );
    }
    setSkillComp(temp);
  }, []);

  return (
    <li className="flex items-center">
      <span className="mr-2">{name}</span>
      {skillComp}
    </li>
  );
};

export default MySkillCard;
