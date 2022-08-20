const numberOfStudents = 15;
const numberOfMentors = 8;
const total = numberOfStudents + numberOfMentors;
const porcentajeStudents = numberOfStudents*100/total;
const porcentajMentors =numberOfMentors*100/total;
console.log("Porcentaje de estudidiantes " + Math.round(porcentajeStudents));
console.log("Porcentaje de Mentores " + Math.round(porcentajMentors));