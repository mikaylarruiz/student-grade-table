class GradeTable {
  constructor (tableElement, noGradesElement){
    this.tableElement = tableElement;
    this.noGradesElement = noGradesElement;
  }
  updateGrades(grades){
    var tbody = this.tableElement.querySelector('tbody');
    tbody.innerHTML = "";
    for (var i = 0; i < grades.length; i++) {
      var row = this.renderGradeRow(grades[i], this.deleteGrade);
      tbody.appendChild(row);
    }
    var noGrades = document.querySelector('p');
    if (grades.length === 0) {
      noGrades.classList.remove('d-none');
    } else {
      noGrades.classList.add('d-none');
    }
  }
  onDeleteClick(deleteGrade){
    this.deleteGrade = deleteGrade;
  }
  renderGradeRow(data, deleteGrade){
    var row = document.createElement('tr');
    var name = document.createElement('td');
    var course = document.createElement('td');
    var grade = document.createElement('td');
    var deleteButton = document.createElement('button');

    name.textContent = data.name;
    course.textContent = data.course;
    grade.textContent = data.grade;

    deleteButton.textContent = "Delete";
    deleteButton.setAttribute('class', "btn-danger operations delete-button");
    deleteButton.addEventListener("click", function(){
      row.setAttribute("class", "d-none")
      deleteGrade(data.id)
    });
    var deleteTd = document.createElement('td');
    deleteTd.setAttribute("class", "operations")
    deleteTd.append(deleteButton);

    row.appendChild(name);
    row.appendChild(course);
    row.appendChild(grade);
    row.appendChild(deleteTd);

    return row;
  }
}
