import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Insurance, InsuranceService } from './insurance.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})


export class AppComponent implements OnInit{
  title = 'insurance-payment';
  policies: Insurance[] = [];
  selectedPolicyNumber: string = '';
  premiumAmount: number = 10000;
  policy: Insurance | undefined;
  isPremiumCalculated: boolean = false;

  constructor(
    private insuranceService: InsuranceService
  ) {
  }

  ngOnInit(): void {
    this.policies = this.insuranceService.getPolicies();
  }

  calculatePremium(): void {
    const worker = new Worker(new URL('./app.worker', import.meta.url));
    this.policy = this.insuranceService.getPolicyByNumber(this.selectedPolicyNumber);
    var self= this;
    worker.onmessage = ({ data }) => {
      self.premiumAmount = data;
      self.isPremiumCalculated = true; 
      alert(`calculated Premium : ${data}`);
      console.log(`calculated Premium : ${data}`);
    };
    worker.postMessage(this.policy?.premiumAmount);

  }

  payPremium(): void {
    alert("Premium paid successfully")
  }

}
