// Helper function to calculate age from date of birth (dob)
export const calculateAge = (dob) => {
  const birthDate = new Date(dob);
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
};

export const professors = [
  {
    id: 1,
    name: "Jim Gardner",
    department: "Bible",
    dob: "5-23-1949",
    age: calculateAge("5-23-1949"),
    title: "J.D., Ph.D., Dog.D",
    imageUrl: "gardner_james.jpg",
  },
  {
    id: 2,
    name: "Lisa Beene",
    department: "Behavioral Sciences",
    dob: "5-23-1959",
    age: calculateAge("5-23-1959"),
    title: "M.Sw.",
    imageUrl: "beene_lisa.jpg",
  },
  {
    id: 3,
    name: "Kenan Casey",
    department: "Math, Engineering, and Computer Science",
    dob: "4-1-1982",
    age: calculateAge("4-1-1982"),
    title: "Ph.D.",
    imageUrl: "casey_kenan.jpg",
  },
  {
    id: 4,
    name: "Jarred Clayton",
    department: "AVL and Operations",
    dob: "4-1-1981",
    age: calculateAge("4-1-1981"),
    title: "B.S.",
    imageUrl: "clayton_jarred.jpg",
  },
  {
    id: 5,
    name: "Jared Collins",
    department: "Math, Engineering, and Computer Science",
    dob: "4-1-1988",
    age: calculateAge("4-1-1988"),
    title: "Ph.D.",
    imageUrl: "collins_jared.jpg",
  },
  {
    id: 6,
    name: "Jud Davis",
    department: "Photography",
    dob: "4-1-1975",
    age: calculateAge("4-1-1975"),
    title: "MFA.",
    imageUrl: "davis_jud.jpg",
  },
  {
    id: 7,
    name: "LeAnn Davis",
    department: "Chemistry",
    dob: "4-1-1976",
    age: calculateAge("4-1-1976"),
    title: "Ph.D.",
    imageUrl: "davis_leann.jpg",
  },
  {
    id: 8,
    name: "Joe Deweese",
    department: "Chemsitry",
    dob: "4-1-1981",
    age: calculateAge("4-1-1981"),
    title: "Ph.D.",
    imageUrl: "deweese_joe.jpg",
  },
  {
    id: 9,
    name: "Brandyn Graves",
    department: "Theater",
    dob: "4-1-1992",
    age: calculateAge("4-1-1992"),
    title: "MFA",
    imageUrl: "graves_brandyn.jpg",
  },
  {
    id: 10,
    name: "Nathan Judd",
    department: "University Counseling Center",
    dob: "4-1-1984",
    age: calculateAge("4-1-1984"),
    title: "M.S.",
    imageUrl: "judd_nathan.jpg",
  },
  {
    id: 11,
    name: "Lisa Raine",
    department: "Math, Engineering, and Computer Science",
    dob: "4-1-1994",
    age: calculateAge("4-1-1994"),
    title: "M.S.",
    imageUrl: "raine_lisa.jpg",
  },
];
