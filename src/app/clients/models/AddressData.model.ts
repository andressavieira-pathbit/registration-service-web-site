export class AddressData {
    public address: string;
    public number: number;
    public district: string;
    public city: string;
    public state: string;
    public zipCode: string;

    constructor() {
        this.address = '';
        this.number = 0;
        this.district = '';
        this.city = '';
        this.state = '';
        this.zipCode = '';
    }
}