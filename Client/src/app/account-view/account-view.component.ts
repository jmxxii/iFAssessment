import { Component, OnInit, NgModule } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-account-view',
  templateUrl: './account-view.component.html',
  styleUrls: ['./account-view.component.scss'],
})
export class AccountViewComponent implements OnInit {

  user = {};
  userid = '5d88c55781b95d1f09a9cc2a';
  balance = 0;
  creditLimit = 0;
  availableFunds = 0;
  withdrawOpen = false;
  amountToWithdraw = 0;
  error = false;
  errorMessage = '';

  constructor(private data: DataService) { }

  ngOnInit() {
    this.getAccountInfo();
  }

  withdraw() {
    this.withdrawOpen = !this.withdrawOpen;
  }

  calculateFunds(user) {
    this.balance = user.balance;
    this.creditLimit = user.creditLimit;
    this.availableFunds = user.creditLimit - user.balance;
  }

  onChange(e) {
    const regex = new RegExp('^[0-9]');
    this.amountToWithdraw = e.target.value;
  }

  sendWithDrawAmount(e) {
    e.preventDefault();

    if (Number(this.amountToWithdraw) > Number(this.availableFunds)) {
      this.errorMessageAlert('You can not withdraw more than your available funds.');
    } else {
      console.log(Number(this.amountToWithdraw));
      if (Number(this.amountToWithdraw) <= 0) {
        this.errorMessageAlert('Funds need to be greater than 0.');
      } else {
        const data = { Balance: Number(this.amountToWithdraw) + Number(this.balance), Id: this.userid };
        this.data.sendWithdraw(data).subscribe(update => {
          this.withdraw();
          this.getAccountInfo();
        });
      }
    }
  }

  getAccountInfo() {
    this.data.getAccountInfo(this.userid).subscribe(user => {
      this.user = user;
      this.calculateFunds(this.user);
    });
  }

  errorMessageAlert(message) {
    this.error = true;
    this.errorMessage = message;
    setTimeout(() => {
      this.error = false;
      this.errorMessage = '';
    }, 3000);
  }

}
