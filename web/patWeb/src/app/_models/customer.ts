export enum IdentityDocumentType {
    southAfricanIdNumber = 1,
    foreignPasswportNumber = 2
}

export class Customer {
    id: number;
    personIdentintyNUmber: string;
    identityDocumentType: IdentityDocumentType;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    homeAddress: string;
}