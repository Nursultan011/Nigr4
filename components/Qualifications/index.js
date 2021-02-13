import styles from "./Qualifications.module.css";
import { withNamespaces } from "react-i18next";

import cn from "classnames";

const Qualifications = ({ t }) => {
  return (
    <section className={styles.qualifications}>
      <div className={styles.left}>
        <div className={styles.title}>
          <img src={`/img/icons/codesandbox.svg`} />

          <span>{t("qualifications")}</span>
        </div>
      </div>

      <div className={styles.eduProgram}>
        <div className={styles.text}>
          Образовательная программа курсов повышения квалификации педагогов
          «Научно-методологические основы предмета «Самопознание» (далее –
          Программа) предназначена для руководителей организаций образования, их
          заместителей.
        </div>
        {/* <div className={styles.button}>График курсов</div> */}

        <div className={styles.text}>
          Программа направлена на получение руководителями, заместителями
          руководителей организаций образования знаний по организации
          деятельности в рамках программы нравственно-духовного образования
          «Самопознание» в организациях образования.
        </div>
        <div className={styles.eduProgramButton}>
          <svg
            width="auto"
            height="auto"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.33341 1.33331H4.00008C3.64646 1.33331 3.30732 1.47379 3.05727 1.72384C2.80722 1.97389 2.66675 2.31302 2.66675 2.66665V13.3333C2.66675 13.6869 2.80722 14.0261 3.05727 14.2761C3.30732 14.5262 3.64646 14.6666 4.00008 14.6666H12.0001C12.3537 14.6666 12.6928 14.5262 12.9429 14.2761C13.1929 14.0261 13.3334 13.6869 13.3334 13.3333V5.33331L9.33341 1.33331Z"
              stroke="#81CEFF"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M9.33325 1.33331V5.33331H13.3333"
              stroke="#81CEFF"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M10.6666 8.66669H5.33325"
              stroke="#81CEFF"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M10.6666 11.3333H5.33325"
              stroke="#81CEFF"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M6.66658 6H5.99992H5.33325"
              stroke="#81CEFF"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <span>Образовательные программы</span>
        </div>
      </div>
    </section>
  );
};

export default withNamespaces()(Qualifications);
