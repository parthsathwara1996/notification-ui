export interface Status {
  code: string;
  name: string;
}

export interface Data {
  grantorCompanyName: string;
  participationAmountRequested: string;
  issuingBankName: string;
  letterOfCreditGuid: string;
}

export interface NotificationAPIResult {
  guid: string;
  status: Status;
  createdTimestamp: string;
  updatedTimestamp: string;
  icon: string;
  iconColour: string;
  subject: string;
  text: string;
  templateCode: string;
  linkTypeCodes: string[];
  data: Data;
}

export interface NotificationAPIResponse {
  results: NotificationAPIResult[];
}

export interface GroupedNotificationsResponse {
  label: string;
  items: NotificationAPIResult[];
}
