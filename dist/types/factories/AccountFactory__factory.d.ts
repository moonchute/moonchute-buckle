import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { AccountFactory, AccountFactoryInterface } from "../AccountFactory";
type AccountFactoryConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class AccountFactory__factory extends ContractFactory {
    constructor(...args: AccountFactoryConstructorParams);
    deploy(_entryPoint: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<AccountFactory>;
    getDeployTransaction(_entryPoint: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): AccountFactory;
    connect(signer: Signer): AccountFactory__factory;
    static readonly bytecode = "0x60a06040523480156200001157600080fd5b5060405162002fee38038062002fee833981810160405281019062000037919062000136565b806040516200004690620000aa565b620000529190620001d3565b604051809103906000f0801580156200006f573d6000803e3d6000fd5b5073ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff168152505050620001f0565b611ea7806200114783390190565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000620000ea82620000bd565b9050919050565b6000620000fe82620000dd565b9050919050565b6200011081620000f1565b81146200011c57600080fd5b50565b600081519050620001308162000105565b92915050565b6000602082840312156200014f576200014e620000b8565b5b60006200015f848285016200011f565b91505092915050565b6000819050919050565b6000620001936200018d6200018784620000bd565b62000168565b620000bd565b9050919050565b6000620001a78262000172565b9050919050565b6000620001bb826200019a565b9050919050565b620001cd81620001ae565b82525050565b6000602082019050620001ea6000830184620001c2565b92915050565b608051610f266200022160003960008181610136015281816102090152818161028a01526103830152610f266000f3fe60806040523480156200001157600080fd5b5060043610620000465760003560e01c80630d253d76146200004b57806325e9d73014620000815780635fbfb9cf14620000a3575b600080fd5b620000696004803603810190620000639190620005be565b620000d9565b60405162000078919062000616565b60405180910390f35b6200008b62000207565b6040516200009a91906200069e565b60405180910390f35b620000c16004803603810190620000bb9190620005be565b6200022b565b604051620000d09190620006e0565b60405180910390f35b6000808383604051602001620000f192919062000772565b604051602081830303815290604052805190602001209050620001fe816040518060200162000120906200050b565b6020820181038252601f19601f820116604052507f00000000000000000000000000000000000000000000000000000000000000008760405160240162000168919062000616565b60405160208183030381529060405263c4d66de860e01b6020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050604051602001620001c09291906200083c565b604051602081830303815290604052604051602001620001e2929190620008b2565b60405160208183030381529060405280519060200120620004c9565b91505092915050565b7f000000000000000000000000000000000000000000000000000000000000000081565b60008083836040516020016200024392919062000772565b604051602081830303815290604052805190602001209050600062000352826040518060200162000274906200050b565b6020820181038252601f19601f820116604052507f000000000000000000000000000000000000000000000000000000000000000088604051602401620002bc919062000616565b60405160208183030381529060405263c4d66de860e01b6020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050604051602001620003149291906200083c565b60405160208183030381529060405260405160200162000336929190620008b2565b60405160208183030381529060405280519060200120620004c9565b905060008173ffffffffffffffffffffffffffffffffffffffff163b111562000380578092505050620004c3565b817f000000000000000000000000000000000000000000000000000000000000000063c4d66de860e01b87604051602401620003bd919062000616565b604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff838183161783525050505060405162000428906200050b565b620004359291906200083c565b8190604051809103906000f590508015801562000456573d6000803e3d6000fd5b5092508473ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f33310a89c32d8cc00057ad6ef6274d2f8fe22389a992cf89983e09fc84f6cfff86604051620004b89190620008eb565b60405180910390a350505b92915050565b6000620004d8838330620004e0565b905092915050565b6000604051836040820152846020820152828152600b810160ff815360558120925050509392505050565b6105e8806200090983390190565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006200054b826200051e565b9050919050565b6200055d816200053e565b81146200056957600080fd5b50565b6000813590506200057d8162000552565b92915050565b6000819050919050565b620005988162000583565b8114620005a457600080fd5b50565b600081359050620005b8816200058d565b92915050565b60008060408385031215620005d857620005d762000519565b5b6000620005e8858286016200056c565b9250506020620005fb85828601620005a7565b9150509250929050565b62000610816200053e565b82525050565b60006020820190506200062d600083018462000605565b92915050565b6000819050919050565b60006200065e6200065862000652846200051e565b62000633565b6200051e565b9050919050565b600062000672826200063d565b9050919050565b6000620006868262000665565b9050919050565b620006988162000679565b82525050565b6000602082019050620006b560008301846200068d565b92915050565b6000620006c88262000665565b9050919050565b620006da81620006bb565b82525050565b6000602082019050620006f76000830184620006cf565b92915050565b60008160601b9050919050565b60006200071782620006fd565b9050919050565b60006200072b826200070a565b9050919050565b6200074762000741826200053e565b6200071e565b82525050565b6000819050919050565b6200076c620007668262000583565b6200074d565b82525050565b600062000780828562000732565b60148201915062000792828462000757565b6020820191508190509392505050565b600081519050919050565b600082825260208201905092915050565b60005b83811015620007de578082015181840152602081019050620007c1565b60008484015250505050565b6000601f19601f8301169050919050565b60006200080882620007a2565b620008148185620007ad565b935062000826818560208601620007be565b6200083181620007ea565b840191505092915050565b600060408201905062000853600083018562000605565b8181036020830152620008678184620007fb565b90509392505050565b600081905092915050565b60006200088882620007a2565b62000894818562000870565b9350620008a6818560208601620007be565b80840191505092915050565b6000620008c082856200087b565b9150620008ce82846200087b565b91508190509392505050565b620008e58162000583565b82525050565b6000602082019050620009026000830184620008da565b9291505056fe60806040526040516105e83803806105e883398181016040528101906100259190610351565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610094576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161008b90610430565b60405180910390fd5b60007f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc60001b90508281556000825111156101765760008373ffffffffffffffffffffffffffffffffffffffff16836040516100f09190610497565b600060405180830381855af49150503d806000811461012b576040519150601f19603f3d011682016040523d82523d6000602084013e610130565b606091505b5050905080610174576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161016b90610520565b60405180910390fd5b505b505050610540565b6000604051905090565b600080fd5b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006101bd82610192565b9050919050565b6101cd816101b2565b81146101d857600080fd5b50565b6000815190506101ea816101c4565b92915050565b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b610243826101fa565b810181811067ffffffffffffffff821117156102625761026161020b565b5b80604052505050565b600061027561017e565b9050610281828261023a565b919050565b600067ffffffffffffffff8211156102a1576102a061020b565b5b6102aa826101fa565b9050602081019050919050565b60005b838110156102d55780820151818401526020810190506102ba565b60008484015250505050565b60006102f46102ef84610286565b61026b565b9050828152602081018484840111156103105761030f6101f5565b5b61031b8482856102b7565b509392505050565b600082601f830112610338576103376101f0565b5b81516103488482602086016102e1565b91505092915050565b6000806040838503121561036857610367610188565b5b6000610376858286016101db565b925050602083015167ffffffffffffffff8111156103975761039661018d565b5b6103a385828601610323565b9150509250929050565b600082825260208201905092915050565b7f4549503139363750726f78793a20696d706c656d656e746174696f6e2069732060008201527f746865207a65726f206164647265737300000000000000000000000000000000602082015250565b600061041a6030836103ad565b9150610425826103be565b604082019050919050565b600060208201905081810360008301526104498161040d565b9050919050565b600081519050919050565b600081905092915050565b600061047182610450565b61047b818561045b565b935061048b8185602086016102b7565b80840191505092915050565b60006104a38284610466565b915081905092915050565b7f4549503139363750726f78793a20636f6e7374727563746f722063616c6c206660008201527f61696c6564000000000000000000000000000000000000000000000000000000602082015250565b600061050a6025836103ad565b9150610515826104ae565b604082019050919050565b60006020820190508181036000830152610539816104fd565b9050919050565b609a8061054e6000396000f3fe60806040526000600c6033565b90503660008037600080366000845af43d6000803e8060008114602e573d6000f35b3d6000fd5b6000807f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc60001b905080549150509056fea2646970667358221220388bcbb27d5b065c1b785d1b94666d7f301b338574b92c716035a8fc03df3d4064736f6c63430008120033a2646970667358221220157d7c145e2796fd4ef415ef8fe416c171a6b1f78300334fa458dfdd22de1c8c64736f6c6343000812003360a06040523480156200001157600080fd5b5060405162001ea738038062001ea7833981810160405281019062000037919062000186565b808073ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff168152505060016200007e620000c760201b60201c565b60000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050506200022c565b60008060017f439ffe7df606b78489639bc0b827913bd09e1246fa6802968a5b3694c53e0dd960001c620000fc9190620001f1565b60001b90508091505090565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006200013a826200010d565b9050919050565b60006200014e826200012d565b9050919050565b620001608162000141565b81146200016c57600080fd5b50565b600081519050620001808162000155565b92915050565b6000602082840312156200019f576200019e62000108565b5b6000620001af848285016200016f565b91505092915050565b6000819050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000620001fe82620001b8565b91506200020b83620001b8565b9250828203905081811115620002265762000225620001c2565b5b92915050565b608051611c4a6200025d6000396000818161040501528181610568015281816107fb01526109e20152611c4a6000f3fe6080604052600436106100a05760003560e01c8063940d3c6011610064578063940d3c60146101b7578063b0d691fe146101e0578063bc197c811461020b578063c4d66de814610248578063d087d28814610271578063f23a6e611461029c576100a7565b8063150b7a02146100ac5780631626ba7e146100e95780633659cfe6146101265780633a871cdd1461014f578063893d20e81461018c576100a7565b366100a757005b600080fd5b3480156100b857600080fd5b506100d360048036038101906100ce9190610fd6565b6102d9565b6040516100e09190611099565b60405180910390f35b3480156100f557600080fd5b50610110600480360381019061010b919061122b565b6102ee565b60405161011d9190611099565b60405180910390f35b34801561013257600080fd5b5061014d60048036038101906101489190611287565b610403565b005b34801561015b57600080fd5b50610176600480360381019061017191906112d9565b610564565b6040516101839190611357565b60405180910390f35b34801561019857600080fd5b506101a16107c6565b6040516101ae9190611381565b60405180910390f35b3480156101c357600080fd5b506101de60048036038101906101d991906113c1565b6107f9565b005b3480156101ec57600080fd5b506101f56109e0565b60405161020291906114a8565b60405180910390f35b34801561021757600080fd5b50610232600480360381019061022d9190611519565b610a04565b60405161023f9190611099565b60405180910390f35b34801561025457600080fd5b5061026f600480360381019061026a9190611287565b610a1c565b005b34801561027d57600080fd5b50610286610b03565b6040516102939190611357565b60405180910390f35b3480156102a857600080fd5b506102c360048036038101906102be91906115f5565b610b16565b6040516102d09190611099565b60405180910390f35b600063150b7a0260e01b905095945050505050565b6000806102f9610b2c565b90506103058484610b6b565b73ffffffffffffffffffffffffffffffffffffffff168160000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff160361036b57631626ba7e60e01b9150506103fd565b600061037685610b92565b905060006103848286610b6b565b90508073ffffffffffffffffffffffffffffffffffffffff168360000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16036103ef57631626ba7e60e01b93505050506103fd565b63ffffffff60e01b93505050505b92915050565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614806104b35750610460610b2c565b60000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16145b6104f2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104e990611712565b60405180910390fd5b60007f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc60001b90508181558173ffffffffffffffffffffffffffffffffffffffff167fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b60405160405180910390a25050565b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146105f4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105eb9061177e565b60405180910390fd5b60006105ff84610b92565b90506000610660828780610140019061061891906117ad565b8080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050610b6b565b9050600061066c610b2c565b90508173ffffffffffffffffffffffffffffffffffffffff168160000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16146106d157600193505050506107bf565b60008780604001906106e391906117ad565b9050036107405786602001358160010160008154809291906107049061183f565b919050551461073f576040517f756688fe00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5b60008511156107b75760003373ffffffffffffffffffffffffffffffffffffffff168660405161076f906118b8565b60006040518083038185875af1925050503d80600081146107ac576040519150601f19603f3d011682016040523d82523d6000602084013e6107b1565b606091505b50509050505b600093505050505b9392505050565b60006107d0610b2c565b60000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614806108a95750610856610b2c565b60000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16145b6108e8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108df90611712565b60405180910390fd5b600060606001808111156108ff576108fe6118cd565b5b836001811115610912576109116118cd565b5b03610972576109658786868080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050610bc2565b80925081935050506109ca565b6109c1878787878080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050610bf8565b80925081935050505b816109d757805160208201fd5b50505050505050565b7f000000000000000000000000000000000000000000000000000000000000000081565b600063bc197c8160e01b905098975050505050505050565b600073ffffffffffffffffffffffffffffffffffffffff16610a3c610b2c565b60000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614610ab6576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610aad90611948565b60405180910390fd5b80610abf610b2c565b60000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b6000610b0d610b2c565b60010154905090565b600063f23a6e6160e01b90509695505050505050565b60008060017f439ffe7df606b78489639bc0b827913bd09e1246fa6802968a5b3694c53e0dd960001c610b5f9190611968565b60001b90508091505090565b6000806000610b7a8585610c30565b91509150610b8781610c81565b819250505092915050565b600081604051602001610ba59190611a14565b604051602081830303815290604052805190602001209050919050565b60006060600080845160208601875af491503d604051602082018101604052818152816000602083013e80925050509250929050565b6000606060008084516020860187895af191503d604051602082018101604052818152816000602083013e8092505050935093915050565b6000806041835103610c715760008060006020860151925060408601519150606086015160001a9050610c6587828585610de7565b94509450505050610c7a565b60006002915091505b9250929050565b60006004811115610c9557610c946118cd565b5b816004811115610ca857610ca76118cd565b5b0315610de45760016004811115610cc257610cc16118cd565b5b816004811115610cd557610cd46118cd565b5b03610d15576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d0c90611a86565b60405180910390fd5b60026004811115610d2957610d286118cd565b5b816004811115610d3c57610d3b6118cd565b5b03610d7c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d7390611af2565b60405180910390fd5b60036004811115610d9057610d8f6118cd565b5b816004811115610da357610da26118cd565b5b03610de3576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610dda90611b84565b60405180910390fd5b5b50565b6000807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a08360001c1115610e22576000600391509150610ec0565b600060018787878760405160008152602001604052604051610e479493929190611bcf565b6020604051602081039080840390855afa158015610e69573d6000803e3d6000fd5b505050602060405103519050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603610eb757600060019250925050610ec0565b80600092509250505b94509492505050565b6000604051905090565b600080fd5b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610f0882610edd565b9050919050565b610f1881610efd565b8114610f2357600080fd5b50565b600081359050610f3581610f0f565b92915050565b6000819050919050565b610f4e81610f3b565b8114610f5957600080fd5b50565b600081359050610f6b81610f45565b92915050565b600080fd5b600080fd5b600080fd5b60008083601f840112610f9657610f95610f71565b5b8235905067ffffffffffffffff811115610fb357610fb2610f76565b5b602083019150836001820283011115610fcf57610fce610f7b565b5b9250929050565b600080600080600060808688031215610ff257610ff1610ed3565b5b600061100088828901610f26565b955050602061101188828901610f26565b945050604061102288828901610f5c565b935050606086013567ffffffffffffffff81111561104357611042610ed8565b5b61104f88828901610f80565b92509250509295509295909350565b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b6110938161105e565b82525050565b60006020820190506110ae600083018461108a565b92915050565b6000819050919050565b6110c7816110b4565b81146110d257600080fd5b50565b6000813590506110e4816110be565b92915050565b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b611138826110ef565b810181811067ffffffffffffffff8211171561115757611156611100565b5b80604052505050565b600061116a610ec9565b9050611176828261112f565b919050565b600067ffffffffffffffff82111561119657611195611100565b5b61119f826110ef565b9050602081019050919050565b82818337600083830152505050565b60006111ce6111c98461117b565b611160565b9050828152602081018484840111156111ea576111e96110ea565b5b6111f58482856111ac565b509392505050565b600082601f83011261121257611211610f71565b5b81356112228482602086016111bb565b91505092915050565b6000806040838503121561124257611241610ed3565b5b6000611250858286016110d5565b925050602083013567ffffffffffffffff81111561127157611270610ed8565b5b61127d858286016111fd565b9150509250929050565b60006020828403121561129d5761129c610ed3565b5b60006112ab84828501610f26565b91505092915050565b600080fd5b600061016082840312156112d0576112cf6112b4565b5b81905092915050565b6000806000606084860312156112f2576112f1610ed3565b5b600084013567ffffffffffffffff8111156113105761130f610ed8565b5b61131c868287016112b9565b935050602061132d868287016110d5565b925050604061133e86828701610f5c565b9150509250925092565b61135181610f3b565b82525050565b600060208201905061136c6000830184611348565b92915050565b61137b81610efd565b82525050565b60006020820190506113966000830184611372565b92915050565b600281106113a957600080fd5b50565b6000813590506113bb8161139c565b92915050565b6000806000806000608086880312156113dd576113dc610ed3565b5b60006113eb88828901610f26565b95505060206113fc88828901610f5c565b945050604086013567ffffffffffffffff81111561141d5761141c610ed8565b5b61142988828901610f80565b9350935050606061143c888289016113ac565b9150509295509295909350565b6000819050919050565b600061146e61146961146484610edd565b611449565b610edd565b9050919050565b600061148082611453565b9050919050565b600061149282611475565b9050919050565b6114a281611487565b82525050565b60006020820190506114bd6000830184611499565b92915050565b60008083601f8401126114d9576114d8610f71565b5b8235905067ffffffffffffffff8111156114f6576114f5610f76565b5b60208301915083602082028301111561151257611511610f7b565b5b9250929050565b60008060008060008060008060a0898b03121561153957611538610ed3565b5b60006115478b828c01610f26565b98505060206115588b828c01610f26565b975050604089013567ffffffffffffffff81111561157957611578610ed8565b5b6115858b828c016114c3565b9650965050606089013567ffffffffffffffff8111156115a8576115a7610ed8565b5b6115b48b828c016114c3565b9450945050608089013567ffffffffffffffff8111156115d7576115d6610ed8565b5b6115e38b828c01610f80565b92509250509295985092959890939650565b60008060008060008060a0878903121561161257611611610ed3565b5b600061162089828a01610f26565b965050602061163189828a01610f26565b955050604061164289828a01610f5c565b945050606061165389828a01610f5c565b935050608087013567ffffffffffffffff81111561167457611673610ed8565b5b61168089828a01610f80565b92509250509295509295509295565b600082825260208201905092915050565b7f6163636f756e743a206e6f742066726f6d20656e747279706f696e74206f722060008201527f6f776e6572000000000000000000000000000000000000000000000000000000602082015250565b60006116fc60258361168f565b9150611707826116a0565b604082019050919050565b6000602082019050818103600083015261172b816116ef565b9050919050565b7f6163636f756e743a206e6f742066726f6d20656e747279706f696e7400000000600082015250565b6000611768601c8361168f565b915061177382611732565b602082019050919050565b600060208201905081810360008301526117978161175b565b9050919050565b600080fd5b600080fd5b600080fd5b600080833560016020038436030381126117ca576117c961179e565b5b80840192508235915067ffffffffffffffff8211156117ec576117eb6117a3565b5b602083019250600182023603831315611808576118076117a8565b5b509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600061184a82610f3b565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff820361187c5761187b611810565b5b600182019050919050565b600081905092915050565b50565b60006118a2600083611887565b91506118ad82611892565b600082019050919050565b60006118c382611895565b9150819050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b7f416c726561647920696e697469616c697a656400000000000000000000000000600082015250565b600061193260138361168f565b915061193d826118fc565b602082019050919050565b6000602082019050818103600083015261196181611925565b9050919050565b600061197382610f3b565b915061197e83610f3b565b925082820390508181111561199657611995611810565b5b92915050565b600081905092915050565b7f19457468657265756d205369676e6564204d6573736167653a0a333200000000600082015250565b60006119dd601c8361199c565b91506119e8826119a7565b601c82019050919050565b6000819050919050565b611a0e611a09826110b4565b6119f3565b82525050565b6000611a1f826119d0565b9150611a2b82846119fd565b60208201915081905092915050565b7f45434453413a20696e76616c6964207369676e61747572650000000000000000600082015250565b6000611a7060188361168f565b9150611a7b82611a3a565b602082019050919050565b60006020820190508181036000830152611a9f81611a63565b9050919050565b7f45434453413a20696e76616c6964207369676e6174757265206c656e67746800600082015250565b6000611adc601f8361168f565b9150611ae782611aa6565b602082019050919050565b60006020820190508181036000830152611b0b81611acf565b9050919050565b7f45434453413a20696e76616c6964207369676e6174757265202773272076616c60008201527f7565000000000000000000000000000000000000000000000000000000000000602082015250565b6000611b6e60228361168f565b9150611b7982611b12565b604082019050919050565b60006020820190508181036000830152611b9d81611b61565b9050919050565b611bad816110b4565b82525050565b600060ff82169050919050565b611bc981611bb3565b82525050565b6000608082019050611be46000830187611ba4565b611bf16020830186611bc0565b611bfe6040830185611ba4565b611c0b6060830184611ba4565b9594505050505056fea26469706673582212201237269f3f08578d0fcc345e4c82a32a9b70cc218eab11b017579a603514103c64736f6c63430008120033";
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "contract IEntryPoint";
            readonly name: "_entryPoint";
            readonly type: "address";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "constructor";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "owner";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "index";
            readonly type: "uint256";
        }];
        readonly name: "AccountCreated";
        readonly type: "event";
    }, {
        readonly inputs: readonly [];
        readonly name: "accountTemplate";
        readonly outputs: readonly [{
            readonly internalType: "contract MinimalAccount";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_owner";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "_index";
            readonly type: "uint256";
        }];
        readonly name: "createAccount";
        readonly outputs: readonly [{
            readonly internalType: "contract EIP1967Proxy";
            readonly name: "proxy";
            readonly type: "address";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_owner";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "_index";
            readonly type: "uint256";
        }];
        readonly name: "getAccountAddress";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }];
    static createInterface(): AccountFactoryInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): AccountFactory;
}
export {};
