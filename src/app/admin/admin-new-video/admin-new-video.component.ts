import {Component, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import {BackendService} from '../../backend.service';
import {Video} from '../../../video';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-admin-new-video',
  templateUrl: './admin-new-video.component.html',
  styleUrls: ['./admin-new-video.component.css']
})
export class AdminNewVideoComponent implements OnInit {
  resetVar = false;
  afuConfig = {
    uploadAPI: {
      url: 'http://127.0.0.1:3000/api/upload'

    },
  };
  imageUrl = '';
  selectedVideo: Video;
  id = '-1';
  error: string;
  genres: string[] = ['Comedy', 'Science-Fiction', 'Horror', 'Romance', 'Action', 'Drama',
    'Mystery', 'Crime', 'Animation', 'Adventure', 'Fantasy', 'SuperHero'];
  private login: string;

  constructor(private location: Location, private bService: BackendService, private route: ActivatedRoute, private router: Router) {
  }

  afterUpload(vent) {
    this.imageUrl = vent.responseText;
  }

  getVideo() {


    const routeId = this.route.snapshot.paramMap.get('id');
    if (routeId != null) {
      this.id = routeId;
      this.bService.getVideo(this.id).subscribe(v => this.selectedVideo = v);
    } else {
      this.selectedVideo = new Video();
    }
  }

  getLoginName() {
    this.login = localStorage.getItem('name');
  }

  ngOnInit() {
    this.getVideo();
    this.getLoginName();
  }

  getBack() {
    this.location.back();
  }

  updateVideo() {
    this.error = undefined;
    if (!this.selectedVideo.title
      || !this.selectedVideo.genre
      || !this.selectedVideo.director
      || !this.selectedVideo.rating
      || !this.selectedVideo.runningTime) {

      this.error = 'You must fill all fields';
      console.log('error');
      return;
    }
    this.selectedVideo.imageUrl = this.imageUrl;
    if (this.selectedVideo._id != null) {
      this.bService.updateVideo(this.selectedVideo).subscribe(a => {
        this.router.navigate(['adminlist']);
      }, er => {
        this.router.navigate(['login']);
      });
    } else {
      this.bService.addVideo(this.selectedVideo).subscribe(a => {
        this.router.navigate(['adminlist']);
      }, er => {
        this.router.navigate(['login']);
      });
    }
  }
}
