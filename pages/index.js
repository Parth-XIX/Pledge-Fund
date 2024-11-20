import React, { useEffect, useContext, useState } from "react";
// INTERNAL IMPORT
import { Pledge_Fund_Context } from ". /Context/Pledge_Fund";
import { Hero, Card, PopUp } from ". /Components";
const index = () =>
    const{
      titleData,
      getCampaigns,
      createCampaign,
      donate,
      getUserCampaigns,
      getDonations,
}= useContext (Pledge_Fund_Context);
const [allcampaign, setAllcampaign] = useState();
const [usercampaign, setUsercampaign] = useState();
useEffect ( () => {
  const getCampaignsData = getCampaigns();
  const userCampaignsData = getUserCampaigns();
  return async()=>{
    const allData = await getCampaignsData;
    const userData = await userCampaignsData;
    setAllcampaign(allData);
    setUsercampaign(userData);
  };
},[]);

//DONATE POPUP MODEL
const [openModel, setOpenModel] = useState(false) ;
const [donateCampaign, setDonateCampaign] = useState();
console.log (donateCampaign) ;
return (
<Hero titleData={titleData} createCampaign={createCampaign} />
<Card
  title="All Listed Campaign"
  allcampaign={allcampaign}
  setOpenModel={setOpenModel}
  setDonate={setDonateCampaign}
/>
<Card
  title="Your Created Compaign"
  allcampaign={usercampaign}
  setOpenMode l={setOpenModel}
  setDonate={setDonateCampaign}
/>
    {openModel && (
      <PopUp
        setOpenModel={setOpenModel}
        getDonations={getDonations}
        donate={donateCampaign}
        donateFunction={donate}
     />
    )}
  </>
  );
};
export default index;
