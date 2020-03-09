export enum IdentityDocumentType {
    southAfricanIdNumber = 1,
    foreignPasswportNumber = 2
}

export enum CustomerType {
    new = 1,
    existing = 2
}

export class Customer {
    id: number;
    personIdentintyNumber: string;
    identityDocumentType: IdentityDocumentType;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    emailAddress: string;
    homeAddress: string;
}