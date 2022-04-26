type EmployeeName = string;
type EmployeeStatus = 'active' | 'inactive' | 'new';
type EmployeeBirthDate = Date | number | string;

interface Vendor {
  id: number;
  name: EmployeeName;
  birthDate?: EmployeeBirthDate;
  status?: EmployeeStatus;
}

let vendorContact: Vendor = {
  id: 324,
  name: 'Bob Cobb',
  status: 'active',
};

type VendorFields = keyof Vendor;

function getValue<T, U extends keyof T>(source: T, propertyName: U) {
  return source[propertyName];
}

const value = getValue(vendorContact, 'status');
const newValue = getValue({ min: 2, max: 10 }, 'min');

function sayHello(string: nameValue): string {
  let greeting = `Hello ${nameValue}!`;
  return greeting;
}