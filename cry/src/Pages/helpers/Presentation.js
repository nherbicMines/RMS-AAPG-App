/*This is a class that will be useful when getting data from DB
the key is the key used to identify the presentation in the DB*/ 

class Presentation{
  constructor(num, title, presenterName, time, type, day){
    this.num = num;
    this.title = title;
    this.presenterName = presenterName;
    this.time = time;
    this.type = type;
    this.day = day;
  }
}
export default Presentation