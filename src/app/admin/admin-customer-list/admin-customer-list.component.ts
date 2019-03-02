import {Component, OnInit} from '@angular/core';
import {BackendService} from '../../backend.service';
import {Customer} from '../../../customer';
import {Router} from '@angular/router';

@Component({
  selector: 'app-admin-customer-list',
  templateUrl: './admin-customer-list.component.html',
  styleUrls: ['./admin-customer-list.component.css']
})
export class AdminCustomerListComponent implements OnInit {
  searchQuery = '';
  customers: Customer[];
  login: string;

  constructor(private bService: BackendService, private router: Router) {
  }

  getQueryFileteredCustomers(): Customer[] {
    if (this.customers) {
      return this.customers
        .filter(c => c.firstName.includes(this.searchQuery) ||
          c.lastName.includes(this.searchQuery) ||
          c.address.includes(this.searchQuery) ||
          c.city.includes(this.searchQuery) ||
          c.phoneNumber.includes(this.searchQuery)
        );
    } else {
      return [];
    }
  }
  logout() {
    localStorage.clear();
    this.router.navigate(['login']);
  }

  getCustomers() {
    this.bService.getCustomers().subscribe(cs => {

      this.customers = cs;
    }, er => {
      this.router.navigate(['login']);
    });
  }

    getLoginName() {
      this.login = localStorage.getItem('name');
    }

  ngOnInit() {
this.getLoginName();
    this.getCustomers();
  }

}
