const name = "İbrahim Sezer";
const department = "Software Enginner";
const salary = 4000;

// const a = "İsim: " + name + "\n" + "Department: " + department + "\n" + "Salary: " + salary;

// Yukarıda ki ifadeyi hammmal gibi yazacağına Template Litarel sayesinde aşşadaki gibi yazabilirsin
// const b = `İsim: ${name}\nDepartment: ${department}\nSalary: ${salary}`;



// Eskiden böyle uzun uzun yazılırdı
// const html = "<ul> " +
//              "<li>" + name + "</li>" +
//              "<li>" + department + "</li>" +
//              "<li>" + salary + "</li>" +
//              "</ul>";

// document.body.innerHTML = html;



// template literal sayesinde kısaltılmış bi şekilde yazılabilir

const html = `<ul> <li> ${name} </li> <li> ${department} </li> <li> ${salary} </li> </ul>`; // şeklinde daha kolay yazılabilir

// bize bu şekilde yazma kolaylığı sunuyor
document.body.innerHTML = html;
