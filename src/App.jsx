import React from "react";
import "./App.css";
import { FaBars } from "react-icons/fa";

import { Tabs, TabsList, TabsTrigger } from "./components/ui/Tabs";
import Timeline from "./components/TimeLine";
const App = () => {
  return (
    <>
      <div className="card">
        <div className="card-header">
          <div>
            <h3 className="headerName">Burman Hospitality Pvt. Ltd.</h3>
            <p className="subtext">
              Delhi • Central Delhi • 110002 | Created on : 1 Jul 2022 |
              <span className="postpaid">POSTPAID</span>
            </p>
          </div>
          <div>
            <FaBars size={24} color="#007bff" className="FaBars" />
            <button className="raise-query-btn">+ Raise Query</button>
          </div>
        </div>
        <hr />
        <div className="card-stats">
          <div>
            <p>10,00,000</p>
            <p className="label">Total Revenue</p>
          </div>
          <div>
            <p>7,00,000</p>
            <p className="label green">Payment Received</p>
          </div>
          <div>
            <p>1,00,000</p>
            <p className="label blue">Not Yet Due</p>
          </div>
          <span className="divider"></span>
          <p className="label red">Payment Overdue</p>
          <div className="overdue-amounts">
            <div className="amount-block">
              <p>20,000</p>
              <span className="badge">A</span>
            </div>
            <div className="amount-block">
              <p>50,000</p>
              <span className="badge">B</span>
            </div>
            <div className="amount-block">
              <p>50,000</p>
              <span className="badge">C</span>
            </div>
            <div className="amount-block">
              <p>30,000</p>
              <span className="badge">D</span>
            </div>
          </div>
        </div>
        <hr />
        <div className="card-footer">
          <div>
            <span className="footer-label">Lead Category - Source</span>
            <p>
              <strong>Others - References</strong>
            </p>
          </div>
          <div>
            <span className="footer-label">Latest Category - Lead source</span>
            <p>-</p>
          </div>
          <div>
            <span className="footer-label">Last Updated</span>
            <p>
              <strong>07 Nov 2023</strong>
            </p>
          </div>
          <div>
            <span className="footer-label">Total Outstanding</span>
            <p className="red">
              <strong>10,00,000</strong>
            </p>
          </div>
          <div>
            <span className="footer-label">Last Order Date</span>
            <p className="red">
              <strong>10 Dec 2023 03:30 PM</strong>
            </p>
          </div>
        </div>
      </div>

      <Tabs defaultValue="sites">
        <TabsList>
          {["Sites", "Orders", "VRs", "Reports", "Invoices", "PI"].map(
            (tab) => (
              <TabsTrigger key={tab} value={tab.toLowerCase()}>
                {tab}
              </TabsTrigger>
            )
          )}
        </TabsList>
      </Tabs>

      <div className="tblTimeLineContainer">
        <div className="table-container">
          <div className="table">
            <div className="table-header">
              <span>Site Name</span>
              <span>State</span>
              <span>City</span>
              <span>Revenue</span>
              <span>Total Orders</span>
              <span>Last Order</span>
            </div>
            {Array(5)
              .fill(0)
              .map((_, i) => (
                <div className="table-row" key={i}>
                  <span>-</span>
                  <span>-</span>
                  <span>-</span>
                  <span>-</span>
                  <span>-</span>
                  <span>-</span>
                </div>
              ))}
          </div>
        </div>

        <div className="timeline-wrapper">
          <Timeline />
        </div>
      </div>
    </>
  );
};

export default App;
