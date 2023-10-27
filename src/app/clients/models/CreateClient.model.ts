import { FinancialData } from './FinancialData.model';
import { AddressData } from './AddressData.model';
import { SecurityData } from './SecurityData.model';

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