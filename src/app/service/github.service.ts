import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Repo } from '../model/repo';


@Injectable()
export class GitHubService {

    baseURL = "https://api.github.com/";

    constructor(private httpClient: HttpClient) {
    }

    getRepos(userName: string, PageNo: string, SortOn: string): Observable<Repo[]> {


        let params = new HttpParams()
            .set('page', PageNo)
            .set('sort', SortOn);

        console.log(params.toString());

        return this.httpClient.get<Repo[]>(this.baseURL + 'users/' + userName + '/repos', { 'params': params });
    }

}