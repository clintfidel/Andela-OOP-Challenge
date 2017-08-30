
class bankAccount{
    constructor(name, accountNumber, pin, bankName, accountType){
      this.name = name;
      this.accountNumber = accountNumber;
      this._password = pin;
      this.bankName = bankName;
      this.accountType = accountType
      this._balance = 0;
  
    }
    
    withdraw(pin, amount){
      if(amount > this._balance){
        return "Insufficient Funds";
      }
      else if(pin !== this._password){
        return "Incorrect Pin";
      }
      else{
        this._balance -= amount;
        return "Please Take your cash!";
      }
    }
    deposit(amount, accountNumber){
      if(accountNumber !== this.accountNumber){
      return "Unidentified Account Details Supplied";
      }
      else if(amount > 0){
        this._balance += amount; //adding up the amount to the current balance 
        return `Deposit successful, your new balance is: ${this._balance}`;
      }
    }
    balanceInquiry(pin){
      if(pin !== this._password){
        return "Invalid pin Supplied";
      }
      else {
        return `Your balance is:  ${this._balance}`;
      
      }  
    }

  }
  //student inherits from the parent class(bankAccount)
class studentAccount extends bankAccount{
  constructor(name, accountNumber, pin, bankName, accountType){
    super(name, accountNumber, pin, bankName, accountType);
  }
  getAccountType(accountType){
  	if(accountType !== this.accountType) {
  		return 'Account not recognized';
  	}
  	else {
      return `select one pls = Deposit: Withdrawal: BalanceInquiry: change pin`;
    }
  }
  deposit(amount, accountNumber){
    if(amount > 150000){
      return "Deposit limit exceeded";
    }
    else if(accountNumber !== this.accountNumber){
    return "Unidentified Account Details Supplied";
    }
    else if(amount > 0){
      this._balance += amount;
      return `Deposit successful, your new balance is: ${this._balance}`;
    }
  }
  withdrawal(pin, amount){
    if(amount > 100000){
      return "Withdrawal limit exceeded";
    }
    if(amount > this._balance){
      return "Insufficient Funds";
    }
    else if(pin !== this._password){
      return "Incorrect Pin";
    }
    else{
      this._balance -= amount;
      return "Please Take your cash!";
    }
  }
  balanceInquiry(pin){
      if(pin !== this._password){
        return "Invalid pin Supplied";
      }
      else {
        return `Your balance is: ${this._balance}`;
      
    }
  }
}
//exporting superclasss and child class for testing
export { bankAccount, studentAccount };
