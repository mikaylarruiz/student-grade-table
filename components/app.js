class App {
  constructor(gradeTable, pageHeader) {
    this.handleGetGradesError = this.handleGetGradesError.bind(this);
    this.handleGetGradesSuccess = this.handleGetGradesSuccess.bind(this);
    this.gradeTable = gradeTable;
    this.pageHeader = pageHeader;
  }
  handleGetGradesError(error){
    console.error(error);
  }
  handleGetGradesSuccess(grades){
    var sumGrades = 0;
    var averageGrades = null;
    for (var i = 0; i < grades.length; i++){
      sumGrades += grades[i]
    }
    averageGrades = sumGrades/grades.length;
    this.gradeTable.updateGrades(grades);
    this.gradeTable.updateGrades(averageGrades);
    console.log(averageGrades)
  }
  getGrades(){
    $.ajax({
      method: "GET",
      url: "https://sgt.lfzprototypes.com/api/grades",
      headers: {
        "X-Access-Token": "cdHLp7pQ"
      },
      success: this.handleGetGradesSuccess,
      error: this.handleGetGradesError
    })
  }
  start(){
    this.getGrades();
  }
}
