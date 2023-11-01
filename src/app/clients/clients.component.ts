import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ClientDataService } from '../database-services/client.data-service';
import { HttpErrorResponse } from '@angular/common/http';
import { CreateClient } from './models/create-client.model';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css'],
})

export class ClientsComponent implements OnInit {
  
  ngOnInit() { }
  
}
