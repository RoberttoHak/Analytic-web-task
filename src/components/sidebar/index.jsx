import styles from "./index.module.scss";
import PixisLogoSvg from "../../assets/SVGComponents/PicisLogo";
import GovernanceSvg from "../../assets/SVGComponents/GovernanceSvg";
import TargetingSvg from "../../assets/SVGComponents/Targeting";
import CreativeSvg from "../../assets/SVGComponents/CreativeSvg";
import ArrowBottomSvg from "../../assets/SVGComponents/ArrowBottomSvg";

const sideBarLiItems = [
  {
    name: "Governance AI",
    id: 1,
    icon: <GovernanceSvg />,
  },
  {
    name: "Targeting AI",
    id: 2,
    icon: <TargetingSvg />,
  },
  {
    name: "Creative AI",
    id: 3,
    icon: <CreativeSvg />,
  },
];

const SideBar = () => {
  return (
    <div className={styles.sideBar_wrapper}>
      <h2>AI Optimizer</h2>
      <div className={styles.logoContainer}>
        <PixisLogoSvg />
        <span>Pixi AI</span>
      </div>
      <ul className={styles.unorderedList}>
        {sideBarLiItems.map((item) => (
          <li key={item.id}>
            <div>
              <span>{item.icon}</span>
              <span>{item.name}</span>
            </div>
            <ArrowBottomSvg />
          </li>
        ))}
      </ul>
    </div>
  );
};
export default SideBar;
