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
  clients = {
      name: '',
      birthDate: '',
      cpf: '',
      email: '',
      phone: '',
    financialData: {
      income: 0,
      patrimony: 0,
    },
    addressData: {
      zipCode: '',
      address: '',
      number: 0,
      district: '',
      city: '',
      state: '',
    },
    securityData: {
      password: '',
      passwordConfirmation: ''
    }
  };

  constructor (private router: Router, private http: HttpClient, private clientDataService: ClientDataService) { }

  ngOnInit() { }

  // Enviando dados do formulário para a base da dados
  onSubmit() {

    const createClient = new CreateClient();

    createClient.name = this.clients.name;
    createClient.cpf = this.clients.cpf;
    createClient.email = this.clients.email;
    createClient.phoneNumber = this.clients.phone;
    createClient.financialData.income = this.clients.financialData.income;
    createClient.financialData.patrimony = this.clients.financialData.patrimony;
    createClient.addressData.zipCode = this.clients.addressData.zipCode;
    createClient.addressData.address = this.clients.addressData.address;
    createClient.addressData.number = this.clients.addressData.number;
    createClient.addressData.district = this.clients.addressData.district;
    createClient.addressData.city = this.clients.addressData.city;
    createClient.addressData.state = this.clients.addressData.state;
    createClient.securityData.password = this.clients.securityData.password;
    createClient.securityData.passwordConfirmation = this.clients.securityData.passwordConfirmation;

    this.clientDataService.sendDataToDatabase(createClient).pipe(
      tap(() => {
        // A ação de navegação ocorrerá aqui após o sucesso
        this.router.navigate(['new-client']);
      })
    )
    .subscribe(
      (response) => {
        // Sucesso da operação
      },
      (error) => {
        alert('Ocorreu um erro!');
      }
    );
  }

  searchZipCode() {
    const zipCode = this.clients.addressData.zipCode;
  
    if (zipCode) {
      // Fazer uma solicitação HTTP para a API do Cep Rápido
      this.http.get(`https://ceprapido.com/api/addresses/${zipCode}`).subscribe((data: any) => {
        this.clients.addressData.address = data[0].addressName;
        this.clients.addressData.number = 0;
        this.clients.addressData.district = data[0].districtName;
        this.clients.addressData.city = data[0].cityName;
        this.clients.addressData.state = data[0].stateCode;
      });
    }
  } 
}
