import React from "react";

const Governance = (props) => {
  const { ContractData, balance, userData } = props;
  const GetCat = props.Getcat || "";

  return (
    <div class="GovernanceInfoBox">
      <div class="GovernanceInfoHeader">Donation Pot</div>

      <div className="text-primary sub-header">{GetCat}</div>
    </div>
  );
};

export default Governance;
