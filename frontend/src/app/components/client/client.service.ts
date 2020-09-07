import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar'
import { HttpClient } from '@angular/common/http';

import { Client } from './client.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  baseUrl = "http://localhost:3001/cliente"

  constructor(private snackBar: MatSnackBar,
    private http: HttpClient) { }

  showMessage(msg: string): void {
    this.snackBar.open(msg, '', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }

  create(client: Client): Observable<Client> {
    return this.http.post<Client>(this.baseUrl, client)
  }
}
