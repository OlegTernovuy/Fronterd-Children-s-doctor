import React from "react";
import { LineChart } from "../components/LineChart";


import { earningData, recentTransactions } from "../components/links";
import "./ecommerce.css";

export const Ecommerce = () => {
  return (
    <div className="mainDash">
      <div className="earningData">
        {earningData.map((item) => (
          <div key={item.title} className="earning">
            <button
              type="button"
              style={{ color: item.iconColor, backgroundColor: item.iconBg }}
              className="earningBtn"
            >
              {item.icon}
            </button>
            <p className="earningAmount">
              <span className="earningItemAmount">{item.amount}</span>
              <span
                style={{ color: `${item.pcColor}` }}
                className="earningPercentageAmount"
              >
                {item.percentage}
              </span>
            </p>
            <p className="earningTitle">{item.title}</p>
          </div>
        ))}
      </div>
      <div className="salesOverview">
        <div className="recentTransactions">
          <div className="TransactionsTitle">
            <p>Нещодавні транзакції</p>
          </div>
          <div className="lastTransactions">
            {recentTransactions.map((item) => (
              <div key={item.title} className="oneTransaction">
                <div className="iconTransaction">
                  <button
                    type="button"
                    style={{
                      color: item.iconColor,
                      backgroundColor: item.iconBg,
                    }}
                    className="transactionBtn"
                  >
                    {item.icon}
                  </button>
                  <div>
                    <p className="transactionMiniTitle">{item.title}</p>
                    <p className="transactionMiniDesc">{item.desc}</p>
                  </div>
                </div>
                <p style={{ color: `${item.pcColor}` }}>{item.amount}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="lineStat">
          <div className="lineTitle">
            <p>Нові Клієнти</p>
            <p>2023</p>
            </div>
          <div className="lineChart">
            <LineChart />
          </div>
        </div>
      </div>
    </div>
  );
};
