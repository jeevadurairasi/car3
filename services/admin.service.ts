import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  private apiUrl = 'http://localhost:5000/api/admins';

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, { username, password });
  }

  getAdmins(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  createAdmin(adminData: any): Observable<any> {
    return this.http.post(this.apiUrl, adminData);
  }

  updateAdmin(id: string, adminData: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, adminData);
  }

  deleteAdmin(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}