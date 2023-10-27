
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientDataService {
  private apiUrl = 'https://localhost:7158/api/Clients';

  constructor(private http: HttpClient) { }


  // Requisição do tipo POST para o cadastro de clients 
  sendDataToDatabase(clients: any) {
    return this.http.post(this.apiUrl, clients);
  }
}