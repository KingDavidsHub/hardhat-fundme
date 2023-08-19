// // import 
// //main function
// //calling of main function

const { network } = require("hardhat")
const { networkConfig } = require('../helper-hardhat-config')
// function deployFunc(){
//     console.log("Hi!")
// }

// module.exports.default = deployFunc()

// hre - hardhat runntime environment
module.exports = async ({getNamedAccounts, deployments}) => {
    const {deploy, log} = deployments
    const {deployer} = await getNamedAccounts()
    const chainId = network.config.chainId

    // if chainId is X use address Y
    //if chainId is Y use address X

    const ethUsdPriceFeedAddress = networkConfig[chainId]["ethUsdPriceFeed"]
    // when going for localhost or hardhat network, we use a mock
    const fundMe = await deploy("FundMe", {
        from: deployer,
        args:[address], // put price feed address
        log: true,
    })
}