// import { NavLink } from 'react-router-dom';

import BackgroundBottom from 'components/BackgroundBottom/BackgroundBottom';
import { BalanceForm } from 'components/BalanceForm';
import ButtonToHome from 'components/ButtonToHome';
import CurrentMonth from 'components/CurrentMonth/CurrentMonth';
import IncomeList from 'components/Income/IncomeList';

import styles from './ReportPage.module.css';

const IncomeReportPage = () => {
  return (
    // <>
    //   <li>
    //     <NavLink to='/trans' state={{ from: 'income' }}>
    //       ExpensesReportPage
    //     </NavLink>
    //     ;
    //   </li>
    // </>
    <BackgroundBottom>
      <div className={styles.reportWrapper}>
        <ButtonToHome />
        <div className={styles.reportFlexbox}>
          <BalanceForm />
          <CurrentMonth />
        </div>
      </div>
      <IncomeList />
    </BackgroundBottom>
  );
};

export default IncomeReportPage;
