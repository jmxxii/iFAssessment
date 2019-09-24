import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})

export class DataService {
    constructor(private http: HttpClient) {}

    getAccountInfo(id) {
        return this.http.get('https://localhost:5001/api/account/' + id);
    }

    sendWithdraw(data) {
        return this.http.put('https://localhost:5001/api/account/', data);
    }

}
