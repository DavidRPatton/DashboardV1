import React from "react";

import Exchange from "./Exchange";


const RightContent = (props) => {
    const { connectWallet, userAddress, contractData, walletType } = props;


    return (
        <div className="right-content ps-3 pe-3 pe-md-0 ps-md-0" >
        <
            Exchange connectWallet={connectWallet}
            userAddress={userAddress}
            tokens={props.tokens}
            contractData={contractData}
            walletType={walletType}
        /> 
        

        </div>
        

        );
};

        export default RightContent;