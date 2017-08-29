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
        this._balance += amount;
        return "Deposit successful, your new balance is: "+ this._balance;
      }
    }
         balanceInquiry(pin){
        if(pin !== this._password){
          return "Invalid pin Supplied";
        }
        else {
          return "Your balance is: "+ this._balance;
        
      }
    }
  }
  