import React from "react";
import styles from "./index.module.scss";
import tableLogo from "./../../../assets/icons/googleIcon.png";

const Table = ({ title }) => {
  return (
    <div className={styles.tableWrapper}>
      <div className={styles.header}>
        <h4>{title}</h4>
        <img src={tableLogo} alt="logo-icon" />
      </div>

      <div className={styles.content}>
        <table>
          <thead>
            <tr>
              <th colSpan="2" className={styles.first}>
                Multiple Dimensions
              </th>
              <th>Clicks</th>
              <th>Impression</th>
              <th>Ctr</th>
              <th>Cost</th>
              <th>Conversions</th>
              <th className={styles.last}>All conversions value</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td colSpan="2" className={styles.first}>
                <p>
                  <span>Base Ad group:</span>
                  <span className={styles.value}>E</span>
                </p>
                <p>
                  <span>Campaign:</span>
                  <span className={styles.value}>IGB Core campaign</span>
                </p>
                <p>
                  <span>Device:</span>
                  <span className={styles.value}>Other</span>
                </p>
                <p>
                  <span>Ad network type:</span>
                  <span className={styles.value}>None</span>
                </p>
              </td>
              <td>97</td>
              <td>7,788</td>
              <td>1.52%</td>
              <td>14.34</td>
              <td>42.84</td>
              <td className={styles.last}>$85.30</td>
            </tr>
            <tr>
              <td colSpan="2" className={styles.first}>
                <p>
                  <span>Base Ad group:</span>
                  <span className={styles.value}>E</span>
                </p>
                <p>
                  <span>Campaign:</span>
                  <span className={styles.value}>IGB Core campaign</span>
                </p>
                <p>
                  <span>Device:</span>
                  <span className={styles.value}>Other</span>
                </p>
                <p>
                  <span>Ad network type:</span>
                  <span className={styles.value}>None</span>
                </p>
              </td>
              <td>97</td>
              <td>7,788</td>
              <td>1.52%</td>
              <td>14.34</td>
              <td>42.84</td>
              <td className={styles.last}>$85.30</td>
            </tr>
            <tr>
              <td colSpan="2" className={styles.first}>
                <p>
                  <span>Base Ad group:</span>
                  <span className={styles.value}>E</span>
                </p>
                <p>
                  <span>Campaign:</span>
                  <span className={styles.value}>IGB Core campaign</span>
                </p>
                <p>
                  <span>Device:</span>
                  <span className={styles.value}>Other</span>
                </p>
                <p>
                  <span>Ad network type:</span>
                  <span className={styles.value}>None</span>
                </p>
              </td>
              <td>97</td>
              <td>7,788</td>
              <td>1.52%</td>
              <td>14.34</td>
              <td>42.84</td>
              <td className={styles.last}>$85.30</td>
            </tr>
            <tr>
              <td colSpan="2" className={styles.first}>
                <p>
                  <span>Base Ad group:</span>
                  <span className={styles.value}>E</span>
                </p>
                <p>
                  <span>Campaign:</span>
                  <span className={styles.value}>IGB Core campaign</span>
                </p>
                <p>
                  <span>Device:</span>
                  <span className={styles.value}>Other</span>
                </p>
                <p>
                  <span>Ad network type:</span>
                  <span className={styles.value}>None</span>
                </p>
              </td>
              <td>97</td>
              <td>7,788</td>
              <td>1.52%</td>
              <td>14.34</td>
              <td>42.84</td>
              <td className={styles.last}>$85.30</td>
            </tr>
            <tr>
              <td colSpan="2" className={styles.first}>
                <p>
                  <span>Base Ad group:</span>
                  <span className={styles.value}>E</span>
                </p>
                <p>
                  <span>Campaign:</span>
                  <span className={styles.value}>IGB Core campaign</span>
                </p>
                <p>
                  <span>Device:</span>
                  <span className={styles.value}>Other</span>
                </p>
                <p>
                  <span>Ad network type:</span>
                  <span className={styles.value}>None</span>
                </p>
              </td>
              <td>97</td>
              <td>7,788</td>
              <td>1.52%</td>
              <td>14.34</td>
              <td>42.84</td>
              <td className={styles.last}>$85.30</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
