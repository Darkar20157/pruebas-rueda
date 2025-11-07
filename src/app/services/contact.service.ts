import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private apiUrl = `${environment.apiUrl}/testingreso/contacts`;

  constructor(private http: HttpClient) {}

  private getAuthHeaders(): HttpHeaders {
    const token = localStorage.getItem('token');
    return new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    });
  }

  getContacts(): Observable<any> {
    return this.http.get<any[]>(this.apiUrl, { headers: this.getAuthHeaders() });
  }

  addContact(contact: any): Observable<any> {
    return this.http.post(this.apiUrl, contact, { headers: this.getAuthHeaders() });
  }

  bulkImport(rows: any[]): Observable<any> {
    const body = { rows };
    return this.http.post(`${this.apiUrl}/bulk`, body, { headers: this.getAuthHeaders() });
  }
}
