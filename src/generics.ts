interface Member {
  id: number;
  name: string;
}

interface CompanyMember {
  id: number;
  name: string;
  department: string;
}

function recreate<T1, T2>(source: T1): T2 {
  return Object.apply({}, source);
}

const firstMember: Member = { id: 1, name: 'John' };
const secondMember = recreate<Member, CompanyMember>(firstMember);

const dateRange = { start: Date.now(), end: new Date() };
const dateRangeCopy = recreate(dateRange);
