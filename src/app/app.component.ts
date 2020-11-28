import { Component } from '@angular/core';
import { Repo } from './model/repo';
import { GitHubService } from './service/github.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'httpclient-query-param-app';

  userName = 'tektutorialshub';
  pageNo = '1';
  sortOn = 'description';

  repos: Repo[] | undefined;

  loading = false;
  errorMessage = '';

  constructor(private githubService: GitHubService) {
  }

  public getRepos() {
    this.loading = true;
    this.errorMessage = '';
    this.githubService.getRepos(this.userName, this.pageNo, this.sortOn)
      .subscribe((response) => { this.repos = response; },
        (error) => {
          this.errorMessage = error.message; this.loading = false;
        },
        () => { this.loading = false; })

  }
}
