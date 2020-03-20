class GradeTable {
  constructor (tableElement, gradeTable){
    this.tableElement = tableElement;
    this.gradeTable = gradeTable;
  }
  updateGrades(grades){
    var tBody = this.tableElement.querySelector("tbody");
    while (tBody.firstChild) {
      tBody.removeChild(tBody.firstChild);
    }
    for (var i = 0; i < grades.length; i++) {
      var tr = document.createElement("tr");
      var name = document.createElement("td");
      var course = document.createElement("td");
      var grade = document.createElement("td");

      name.textContent = grades[i].name;
      course.textContent = grades[i].course;
      grade.textContent = grades[i].grade;

      tr.appendChild(name);
      tr.appendChild(course);
      tr.appendChild(grade);
      tBody.appendChild(tr);
      console.log(grades);
    }
  }
}
