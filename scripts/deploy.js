const hre = require ("hardhat");
//0x5fbdb2315678afecb367f032d93f642f64180aa3
async function main() {
    const Pledge_Fund = await hre.ethers.getContractFactory("Pledge_Fund");
    const pledge_Fund = await Pledge_Fund.deploy();

    await pledge_Fund.deployed();

    console.log(
        `Pledge_Fund deployed to ${pledge_Fund.address}`
    );
} 

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});