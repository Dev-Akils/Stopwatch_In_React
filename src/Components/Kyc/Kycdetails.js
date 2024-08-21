import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import styled from "styled-components";
const TabButton = ({ label, isActive, onClick }) => (
  <button
    style={{
      paddingLeft: "2px",
      paddingRight:"2px",
      paddingTop:"8px",
      paddingBottom:"8px",
      cursor: "pointer",
      borderBottom: isActive ? "2px solid blue" : "none",
      fontSize:'14px',
      marginRight:'6px',
      
    }}
    onClick={onClick}
  >
    {label}
  </button>
);

const TabPanel = ({ children, isActive }) => (
  <div style={{ display: isActive ? "block" : "none", padding: "10px" }}>
    {children}
  </div>
);

function Kycdetails({data}) {
  const [activeTab, setActiveTab] = useState(0);
  console.log("DAta",data);

  return (
    <div>
      <div style={{ display: "flex", flexWrap: "wrap" }} className="bg-slate-100 p-2">
        <TabButton
          label="Personal Info"
          isActive={activeTab === 0}
          onClick={() => setActiveTab(0)}
        />
        <TabButton
          label="Security"
          isActive={activeTab === 1}
          onClick={() => setActiveTab(1)}
        />
        <TabButton
          label="Assets"
          isActive={activeTab === 2}
          onClick={() => setActiveTab(2)}
        />
        <TabButton
          label="P2P Wallet"
          isActive={activeTab === 3}
          onClick={() => setActiveTab(3)}
        />
        <TabButton
          label="Swap History"
          isActive={activeTab === 4}
          onClick={() => setActiveTab(4)}
        />
        <TabButton
          label="Wallet History"
          isActive={activeTab === 5}
          onClick={() => setActiveTab(5)}
        />
        <TabButton
          label="Open Orders"
          isActive={activeTab === 6}
          onClick={() => setActiveTab(6)}
        />
        <TabButton
          label="Orders History"
          isActive={activeTab === 7}
          onClick={() => setActiveTab(7)}
        />
        <TabButton
        label="User Activity"
        isActive={activeTab === 8}
          onClick={() => setActiveTab(8)}
        />
         <TabButton
        label="Referral"
        isActive={activeTab === 9}
          onClick={() => setActiveTab(9)}
        />
         <TabButton
        label="Tickets"
        isActive={activeTab === 10}
          onClick={() => setActiveTab(10)}
        />
        <TabButton
        label="Airdrop"
        isActive={activeTab === 11}
          onClick={() => setActiveTab(11)}
        />
         <TabButton
        label="Export History"
        isActive={activeTab === 11}
          onClick={() => setActiveTab(11)}
        />
      </div>

      <TabPanel isActive={activeTab === 0}>
        <Typography variant="h6">
        <div className="mx-auto container">
            <div className="justify-center flex  items-center px-3 mt-3">
                <div className="md:w-1/2 p-3 bg-blue-50 text-[14px] ">
                 {data?.map((e,i)=>{return(
                       <ul key={e.i}>
                        <li>Name:{e.username}</li>
                        <li>Age:</li>
                        <li>Email:{e.email}</li>
                        <li>Phone no:{e.mobile}</li>
                        
                    </ul>

                       )})} 
                </div>
                <div className="md:w-1/2 ">
                        <ul>
                            <li>Adhar Card</li>
                            <li>Passbook</li>
                        </ul>
                </div>
            </div>
            </div>
        </Typography>
      </TabPanel>
      <TabPanel isActive={activeTab === 1}>
        <Typography variant="h6">Content for Tab 2</Typography>
      </TabPanel>
      <TabPanel isActive={activeTab === 2}>
        <Typography variant="h6">Content for Tab 3</Typography>
      </TabPanel>
      <TabPanel isActive={activeTab === 3}>
        <Typography variant="h6">Content for Tab 4</Typography>
      </TabPanel>
      <TabPanel isActive={activeTab === 4}>
        <Typography variant="h6">Content for Tab 5</Typography>
      </TabPanel>
      <TabPanel isActive={activeTab === 5}>
        <Typography variant="h6">Content for Tab 6</Typography>
      </TabPanel>
      <TabPanel isActive={activeTab === 6}>
        <Typography variant="h6">Content for Tab 7</Typography>
      </TabPanel>
      <TabPanel isActive={activeTab === 7}>
        <Typography variant="h6">Content for Tab 8</Typography>
      </TabPanel>
    </div>
  );
}

export default Kycdetails;
