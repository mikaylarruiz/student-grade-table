
class PageHeader {
  constructor (headerElement){
  this.headerElement = headerElement;
  }
  updateAverage (newAverage) {
    console.log(newAverage);
    var span = this.headerElement;
    span.querySelector('span').textContent = newAverage;
  }
}
