import {Component, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import {Video} from '../../video';
import {ActivatedRoute, Router} from '@angular/router';
import {BackendService} from '../backend.service';
import {Customer} from '../../customer';

@Component({
  selector: 'app-reserve',
  templateUrl: './reserve.component.html',
  styleUrls: ['./reserve.component.css']
})
export class ReserveComponent implements OnInit {
  selectedVideo: Video;
  customers: Customer[];
  selectedCustomerId: string;
  error: string;

  constructor(private location: Location, private route: ActivatedRoute, private bService: BackendService, private router: Router) {
  }

  ngOnInit() {
    this.getVideo();
    this.getCustomers();
  }

  getVideo(): void {
    const id = this.route.snapshot.paramMap.get('id');
    // console.log(id);
    this.bService.getVideo(id).subscribe(vid => this.selectedVideo = vid);
  }

  getCustomers(): void {
    this.bService.getCustomersForReserve().subscribe(cs => this.customers = cs);
  }

  goBack() {
    this.location.back();
  }

  reserve() {
    if (!this.selectedCustomerId) {
      this.error = 'You must select a customer';
      return;
    }
    this.error = undefined;
    this.selectedVideo.status = false;
    this.selectedVideo.reservedCustomer = this.customers.find(a => a._id === this.selectedCustomerId);
    this.bService.reserveVideo(this.selectedVideo).subscribe(a => {
      this.router.navigate(['']);
    });
  }

  getActiveCustomers() {
    return this.customers.filter(a => a.status === true);
  }
}
