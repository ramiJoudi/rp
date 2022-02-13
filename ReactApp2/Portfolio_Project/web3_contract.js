
// Source code to interact with smart contract

const Web3 = require("web3");
var w3 = new Web3(new Web3.providers.HttpProvider('http://127.0.0.1:8545'));

//connection with node
var fs = require('fs');
var jsonFile = "/home/maroua/Portfolio_Project/Verification_Diploma/build/contracts/Validation.json";
var parsed= JSON.parse(fs.readFileSync(jsonFile));
var abi = parsed.abi;

// contractAddress and abi are setted after contract deploy
var address_count = "0xF1dB7d50052CbcA2d232C2faF4590037512701e6"
var contract_address = "0xC0D90a7Fb088a3b3e09D456f9b04F30B8B60899e";

//web3.eth.defaultAccount = web3.eth.accounts[0];
//contract instance
var contract = new w3.eth.Contract(abi, contract_address);
console.log(w3.eth.net.isListening());

var account;
w3.eth.getAccounts(function(err, accounts) {
  if (err != null) {
    console.log("Error retrieving accounts.");
    return;
  }
  if (accounts.length == 0) {
    console.log(("No account found! Make sure the Ethereum client is configured properly."));
    return;
  }
  account = accounts[0];
  console.log('Account: ' + account);
  w3.eth.defaultAccount = account;
});

// Smart contract functions
 

/*contract.methods.getData('aa7b076857f53ef75e20c9ab2f0cc4cedaa3f6e2bf1c1bfbd327ade410cce324').call().then(console.log);*/
$("#button").click(function() {
  let id = CryptoJS.SHA256(JSON.stringify($('#CIN').val())).toString();
  contract.generateCertificate(id, $("#Given_name").val(), $("#Family_name").val(), $("#CIN").val(), $("#birth").val(),
                               $("#Scientific_discipline").val(), $("#Diploma_issued_by").val(), $("#Diploma_issue_date").val()).send({from: '0x02ED178714c51c93B4Ede74B56e1fA87803a8115', gas: 800000}).then(console.log);
  console.log('your generated unique Id:', id);
  document.getElementById("demo").innerHTML = id;
  
  $("#Given_name").val("");
  $("#Family_name").val("");
  $("#CIN").val("");
  $("#birth").val("");
  $("#Scientific_discipline").val("");
  $("#Diploma_issue_date").val("");
  $("#Diploma_issued_by").val("");

});
