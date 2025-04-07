const students = ["John", "Jane", "Alex", "Max"];
const tableData = document.getElementById("tableData");
tableData.innerHTML = students
  .map((student) => {
    console.log(student);
    return `<tr><td>${student}</td></tr>`;
  })
  .join("");
