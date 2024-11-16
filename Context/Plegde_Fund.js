import React, { useState, useEffect } from "react";
import Wenb3Modal from "web3modal";
import { ethers } from "ethers";

// internal import
import { Pledge_Fund_ABI, Pledge_Fund_Address } from "./contants";

// Fetch Smart Conract
const fetchContract = (signerOrProvider) =>
    new ethers.Contract(Pledge_Fund_Address, Pledge_Fund_ABI, signerOrProvider);

export const Pledge_Fund_Context = React.createContext();

export const Pledge_Fund_Provider = ({ children }) => {
    const titleData = "Pledge Fund Contract"
    const [currentAccount, setCurrentAccount] = useState("");

    const createCampaign  = async (campaign) =>{
        const {tilte, description, amount, deadline} = campaign;
        const web3Modal = new Wenb3Modal();
        const connection = await web3Modal.connect();
        const provider = new ethers.providers.Web3Provider(connection);
        const signer = provider.getSigner();
        const contract = fetchContract(signer);

        console.log(currentAccount);
        try{
            const transaction = await contract.createCampaign(
                currentAccount, //owner
                title, //tilte
                description, //description
                ether.utils.parseUnits(amount, 18),
                new Date(deadline).getTime() //deadline
            );

            await transaction.wait();

            console.log("Contract Call Success", transaction);
        }
        
        catch (error) {
            console.log("Contract Call Failiure", error);
        }
    };  

    const getCampaigns = async () => {
        const provider = new ether.providers.JsonRpcProvider();
        const contract = fetchContract(provider);

        const campaigns = await contract.getCampaigns();
        
        const parsedCampaigns = campaigns.map((campaign, i) => ({
            owner: campaign.owner,
            title: campaign.title,
            description: campaign.description,
            target: ethers.utils.formatEther(campaign.target.toString()),
            deadline: campaign.deadline.toNumber(),
            amountCollected: ethers.utils.formatEther(campaign.amountCollected.toString()),
            pId: i,
        }));

        return parsedCampaigns;
    };

    const getUserCampaigns = async () => {
        const provider = new ethers.providers.JsonRpcProvider();
        const contract = fetchContract(provider);

        const allCampaigns = await contract.getCampaigns();

        const accounts = await window.ethereum.request({
            method: "eth_accounts",
        });
        const  currentUser = accounts[0];

        const filteredCampaigns = allCampaigns.filter(
            (campaign) =>
                campaign.owner === "0x5fbdb2315678afecb367f032d93f642f64180aa3"
        );

        const userData = filteredCampaigns.map((campaign, i) => ({
            owner: campaign.owner,
            title: campaign.title,
            description: campaign.description,
            target: ethers.utils.formatEther(campaign.target.toString()),
            deadline: campaign.deadline.toNumber(),
            amountCollected: ethers.utils.formatEther(campaign.amountCollected.toString()),
            pId: i,
        }));

        return userData;
    };

    const donate  = async (pId, amount) => {
        const web3Modal = new Wenb3Modal();
        const connection = await web3Modal.connect();
        const provider = new ethers.providers.Web3Provider(connection);
        const signer = provider.getSigner();
        const contract = fetchContract(signer);

        const campaignData = await contract.donateToCampaign(pId, {
            value: ethers.util.parseEther(amount),
        });

        await campaignData.wait();
        location.reload();

        return campaignData;
    };

    const getDonations = async (pId) => {
        const provider = new ethers.providers.JsonRpcProvider();
        const contract = fetchContract(provider);

        const donations = await contract.getDonations(pId);
        const numberOfDonations = donations[0].length;

        const parsedDonations = [];

        for (let i = 0; i < numberOfDonations; i++){
            parsedDonations.push({
                donator: donations[0][i],
                donation: ethers.utils.formatEther(donations[1][i].tostring()),
            });
        }

        return parsedDonations;
    };

    //Check if Wallet is Connected
    const checkIfWalletConnected = async () => {
        try{
            if (!window.ethereum)
                return setOpenError(true), setError("Install MetaMask");

            const accounts = await window.ethereum.request({
                method: "eth_accounts",
            });

            if (accounts.length){
                setCurrentAccount(accounts[0]);
            } 
            else{
                console.log("No Account Found");
            }
        }

        catch (error) {
            console.log("Something went wrong while connecting t wallet");
        }
    };

    useEffect(() =>{
        checkIfWalletConnected();
    }, []);

    // Connect Wallet Function
    const connectWallet = async () => {
        try{
            if (!window.ethereum) return console.log("Insatall MetaMask");

            const accounts = await window.ethereum.request({
                method: "eth_requestAccounts",
            }); 
            setCurrentAccount(accounts[0]);
        }

        catch (error) {
            console.log("Error while Connecting to Wallet");
        }
    };

    return (
        <Pledge_Fund_Context.Provider
            value={{
                titleData,
                currentAccount,
                createCampaign,
                getCampaigns,
                getUserCampaigns,
                donate,
                getDonations,
                connectWallet,
            }}
        >
            {children}
        </Pledge_Fund_Context.Provider>    
    );
};