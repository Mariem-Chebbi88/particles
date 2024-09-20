
export enum MembershipStatus {
  Platinum = 'Platinum',
  Gold = 'Gold',
  Silver = 'Silver',
}

export enum Status {
  Active = 'Active',
  Inactive = 'Inactive',
}

export type ClientProfile = {
  clientName: string;
  phone: string;
  email: string;
  visit: number;
  lastVisit: string;
  joined: string;
  membershipStatus: MembershipStatus;
  status: Status;
};