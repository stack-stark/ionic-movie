import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { baseUrl } from '../config';

@Injectable()
export class HotShowingService {
    constructor(
        private http: HttpClient,
    ) { }

    getInitData(start: number, count: number) {
        const url = `${baseUrl}/movie/in_theaters?start=${start}&count=${count}`;
        return this.http.get(url);
    }

}