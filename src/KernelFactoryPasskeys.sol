// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "openzeppelin-contracts/contracts/utils/Create2.sol";
import "./factory/EIP1967Proxy.sol";
import "./KernelPasskeys.sol";

contract KernelFactoryPasskeys {
    KernelPasskeys public immutable kernelTemplate;

    event AccountCreated(address indexed account, address indexed owner, uint256 index);

    constructor(IEntryPoint _entryPoint) {
        kernelTemplate = new KernelPasskeys(_entryPoint);
    }

    function createAccount(
        address _owner, 
        uint256 passkeysPublicKeyX,
        uint256 passkeysPublicKeyY,
        string calldata origin,
        bytes calldata authData,
        uint256 _index 
    ) external returns (EIP1967Proxy proxy) {
        bytes32 salt = keccak256(abi.encodePacked(_owner, _index));
        address addr = Create2.computeAddress(
            salt,
            keccak256(
                abi.encodePacked(
                    type(EIP1967Proxy).creationCode,
                    abi.encode(address(kernelTemplate), abi.encodeCall(KernelPasskeys.initialize, (_owner, passkeysPublicKeyX, passkeysPublicKeyY, origin, authData)))
                )
            )
        );
        if (addr.code.length > 0) {
            return EIP1967Proxy(payable(addr));
        }
        proxy =
        new EIP1967Proxy{salt: salt}(address(kernelTemplate), abi.encodeWithSelector(KernelPasskeys.initialize.selector, _owner, passkeysPublicKeyX, passkeysPublicKeyY, origin, authData));
        emit AccountCreated(address(proxy), _owner, _index);
    }

    function getAccountAddress(
        address _owner, 
        uint256 passkeysPublicKeyX,
        uint256 passkeysPublicKeyY,
        string calldata origin,
        bytes calldata authData,
        uint256 _index 
    ) public view returns (address) {
        bytes32 salt = keccak256(abi.encodePacked(_owner, _index));
        return Create2.computeAddress(
            salt,
            keccak256(
                abi.encodePacked(
                    type(EIP1967Proxy).creationCode,
                    abi.encode(address(kernelTemplate), abi.encodeCall(KernelPasskeys.initialize, (_owner, passkeysPublicKeyX, passkeysPublicKeyY, origin, authData)))
                )
            )
        );
    }
}
