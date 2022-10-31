const { ethers } = require("hardhat");

async function main() {
  const whitelistContract = await ethers.getContractFactory("Whitelist");
  const deployedWhitelistedContract = await whitelistContract.deploy(10);
  await deployedWhitelistedContract.deployed();
  console.log("Whitelist deployed to:", deployedWhitelistedContract.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

// 0x0ac762b899202a5440BE770967596726756e7c75
