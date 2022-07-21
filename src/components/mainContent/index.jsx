import CoversionsAndDataPeriodBlock from "./CoversionsAndDataPeriodBlock";
import styles from "./index.module.scss";
import DraggableContent from "./DraggableContent/index.jsx";
import ConversionDiagramBlock from "./ConversionDiagramBlock/index.jsx";
import Table from "./Table/index.jsx";

const MainContent = () => {
  return (
    <div className={styles.mainContent}>
      <div className={styles.titleRow}>
        <h1>Google Ads Performance Report</h1>
        <span>This year: Jan 1, 2021 - Aug 3, 2021</span>
      </div>

      <CoversionsAndDataPeriodBlock />
      <DraggableContent />
      <ConversionDiagramBlock />
      <Table title="Top Compain" />
      <Table title="Top Ad Group" />
    </div>
  );
};

export default MainContent;
