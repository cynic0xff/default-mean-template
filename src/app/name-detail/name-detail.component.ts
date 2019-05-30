import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Name } from '../model/name';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-name-detail',
  templateUrl: './name-detail.component.html',
  styleUrls: ['./name-detail.component.scss']
})
export class NameDetailComponent implements OnInit {

  name: Name = { _id: '', name: '', address: '' };
  isLoading: boolean = true;

  constructor(private route: ActivatedRoute, private api: ApiService, private router: Router) { }

  ngOnInit() {
    console.log(this.route.snapshot.params['id']);
    this.getNameDetails(this.route.snapshot.params['id']);
  }

  getNameDetails(id) {
    this.api.getName(id)
    .subscribe(data => {
      this.name = data;
      console.log(this.name);
      this.isLoading = false;
    })
  }

  //deleteName(id)

}
