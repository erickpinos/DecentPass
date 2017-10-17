pragma solidity ^0.4.0;
import "./strings.sol";

contract PassManager {
    using strings for *;

    struct MetaData{
        uint numPassAccounts;
    }

    struct Account{
        uint url;
        uint username;
        uint password;
    }

    mapping (address => MetaData) public user_metaData;
    mapping (address => Account[]) public user_accounts;

    function PassManager(){

    }


    function getUserAccount (uint index) returns (uint[3]) {

        Account storage temp_account = user_accounts[msg.sender][index];

        uint temp_url = temp_account.url;
        uint temp_username = temp_account.username;
        uint temp_password = temp_account.password;
        
        uint[3] return_user_accounts;
        return_user_accounts[0] = temp_url;
        return_user_accounts[1] = temp_username;
        return_user_accounts[2] = temp_password;
//
//        for (uint i=0; i < 74; i++){
//            if (i < 30){
//                return_user_accounts[i] = temp_url[i];
//            }else if (i < 52){
//                return_user_accounts[i] = temp_username[i-30];
//            }else if (i < 74){
//                return_user_accounts[i] = temp_password[i-52];
//            }
//        }

        return return_user_accounts;

    }


    function getNumUserAccounts () constant returns (uint){
        uint num_accounts = user_metaData[msg.sender].numPassAccounts;
        return num_accounts;
    }


    function addUserAccount (uint url_temp, uint username_temp, uint password_temp) {

        //if (user_metaData[msg.sender] == 0){
        //    user_metaData.push(MetaData({numPassAccounts: 0}));
        //}

        //user_metaData[msg.sender].numPassAccounts = 1;
        user_metaData[msg.sender] = MetaData({numPassAccounts: 1});
        user_accounts[msg.sender].push(Account({url: url_temp, username:username_temp, password:password_temp}));


    }
}
