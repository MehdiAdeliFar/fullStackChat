import {Component, OnInit} from '@angular/core';
import {BackendService} from '../../backend.service';
import {Video} from '../../../video';
import {Router} from '@angular/router';

@Component({
  selector: 'app-admin-list',
  templateUrl: './admin-list.component.html',
  styleUrls: ['./admin-list.component.css']
})
export class AdminListComponent implements OnInit {
  videos: Video[];
  searchQuery = '';
  private login: string;

  constructor(private bService: BackendService, private router: Router) {
  }

  getVideos() {
    this.bService.getAdminVideos().subscribe(vid => this.videos = vid, er => {
      this.router.navigate(['login']);
    });
  }

  getFilteredVideos() {
    if (this.videos) {
      return this.videos.filter(vid => vid.title.includes(this.searchQuery)
        || vid.genre.includes(this.searchQuery)
        || vid.director.includes(this.searchQuery)
        || vid.rating.toString().includes(this.searchQuery)
        || vid.runningTime.toString().includes(this.searchQuery));
    } else {
      return null;
    }
  }
  getLoginName() {
    this.login = localStorage.getItem('name');
  }
  ngOnInit() {
    this.getVideos();
    this.getLoginName();
  }

  deleteVideo(video: Video) {
    this.bService.deleteVideo(video._id).subscribe(a => this.getVideos());
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['login']);
  }
}
