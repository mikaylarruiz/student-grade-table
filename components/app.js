class App {
  constructor(gradeTable, pageHeader, gradeForm) {
    this.handleGetGradesError = this.handleGetGradesError.bind(this);
    this.handleGetGradesSuccess = this.handleGetGradesSuccess.bind(this);
    this.gradeTable = gradeTable;
    this.pageHeader = pageHeader;
    this.gradeForm = gradeForm;
    this.createGrade = this.createGrade.bind(this);
    this.handleCreateGradeError = this.handleCreateGradeError.bind(this);
    this.handleCreateGradeSuccess = this.handleCreateGradeSuccess.bind(this);
    this.deleteGrade = this.deleteGrade.bind(this);
    this.handleDeleteGradeError = this.handleDeleteGradeError.bind(this);
    this.hanadleDeleteGradeSuccess = this.hanadleDeleteGradeSuccess.bind(this);
  }
  handleGetGradesError(error){
    console.error(error);
  }
  handleGetGradesSuccess(grades){
    var average = 0;
    for( var i = 0; i < grades.length; i++){
      average += grades[i].grade;
    }
    var gradeAverage = average/grades.length;
    this.pageHeader.updateAverage(gradeAverage);
    this.gradeTable.updateGrades(grades);
  }
  getGrades(){
    $.ajax({
      method: "GET",
      url: "https://sgt.lfzprototypes.com/api/grades",
      headers: { "X-Access-Token": "cdHLp7pQ" },
      success: this.handleGetGradesSuccess,
      error: this.handleGetGradesError
    })
  }
  start(){
    this.getGrades();
    this.gradeForm.onSubmit(this.createGrade);
    this.gradeTable.onDeleteClick(this.deleteGrade);
  }
  createGrade(name, course, grade){
    $.ajax({
      method: "POST",
      headers: { "X-Access-Token": "cdHLp7pQ" },
      url: "https://sgt.lfzprototypes.com/api/grades",
      data: { name, course, grade },
      success: this.handleCreateGradeSuccess,
      error: this.handleCreateGradeError
    })
  }
  handleCreateGradeError(error) {
    console.error(error);
  }
  handleCreateGradeSuccess() {
    this.getGrades();
  }
  deleteGrade(id){
    console.log(id);
    $.ajax({
      method: "DELETE",
      url: "https://sgt.lfzprototypes.com/api/grades/" + id,
      headers: { "X-Access-Token": "cdHLp7pQ" },
      success: this.handleDeleteGradeSuccess,
      error: this.handleDeleteGradeError,
    })
  }
  handleDeleteGradeError(error){
    console.error(error);
  }
  hanadleDeleteGradeSuccess(){
    this.getGrades();
  }
  ajaxCall(ajaxData){
    $.ajax({
      method: ajaxData.method,
      url: ajaxData.url,
      data: ajaxData.data,
      headers: { "X-Access-Token": "cdHLp7pQ" },
      success: ajaxData.success,
      error: ajaxData.error
    })
  }
}
