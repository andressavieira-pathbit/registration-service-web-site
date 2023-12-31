import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ClientDataService } from '../database-services/client.data-service';
import { CreateClient } from '../clients/models/create-client.model';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.css']
})

export class ClientFormComponent  implements OnInit {
  clients = {
      name: '',
      birthDate: new Date(''),
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
    createClient.birthDate = this.clients.birthDate;
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
        // O usuário será redirecionado para uma nova página
        this.router.navigate(['under-analysis']);
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
    else {
      alert('Ocorreu um erro ao consultar o CEP, tente novamente.')
    }
  } 
}