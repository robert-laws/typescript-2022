type UserName = string;
type UserBirthDate = Date | number | string;
type AddressableUser = Contact & User;

interface User {
  id: number;
  name: UserName;
  birthDate?: UserBirthDate;
  status?: UserStatus;
}

interface UserAddress {
  street: string;
  city: string;
  state: string;
  zipCode: string;
}

type UserStatus = 'active' | 'inactive';

let myUser: User = {
  id: 1,
  name: 'John',
  birthDate: new Date(1980, 1, 1),
  status: 'inactive',
};
