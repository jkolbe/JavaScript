/*
  testImplement - Specific code we want tot test for performance speed
  testParams -  whatever parameters our test code needs in order to work correctly
  repetitions - used for average speed
*/

function SpeedTest(testImplement, testParams, repetitions){
  this.testImplement = testImplement;
  this.testParams = testParams;
  this.repetitions = repetitions || 10000; //optional
  this.average = 0;
};

SpeedTest.prototype = {
  startTest: function(){
    
    var beginTime, endTime, sumTimes = 0;
    for(var i = 0, x = this.repetitions; i < x; i++){
      beginTime = +new Date();
      this.testImplement(this.testParams);
      endTime = +newDate();
      sumTimes += endTime - beginTime;
    }
    this.average = sumTimes / this.repetitions;
    return console.log("Average execution across " +
                        this.repetitions + ": " +
                        this.average);

  }


};