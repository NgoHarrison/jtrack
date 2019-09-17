import { Component, OnInit, OnDestroy } from '@angular/core';
import { JobApiService} from "./models/job-api.service";
import { job} from "./models/job.model";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy{
  title = 'jtrack';
  joblistsub:Subscription;
  joblist:job[];
  groupedJobs:job[][] =[];
   constructor(private jobsApi: JobApiService) {

  }
    ngOnInit() {
    this.joblistsub = this.jobsApi
      .getJobs()
      .subscribe(res => {
          this.joblist = res;

        },
        console.log
      );
  }

  ngOnDestroy() {
    this.joblistsub.unsubscribe();
  }

}
