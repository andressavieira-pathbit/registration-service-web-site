import { FinancialData } from './financial-data.model';
import { AddressData } from './address-data.model';
import { SecurityData } from './security-data.model';

export class CreateClient {
    public name: string;
    birthDate?: Date;
    public cpf: string;
    public email: string;
    public phoneNumber: string;
    public financialData: FinancialData;
    public addressData: AddressData;
    public securityData: SecurityData;

    constructor() {
        this.name = '';
        this.birthDate;
        this.cpf = '';
        this.email = '';
        this.phoneNumber = '';
        this.financialData = new FinancialData;
        this.addressData = new AddressData;
        this.securityData = new SecurityData;
    }
}