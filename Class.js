class student
{
  constructor(name,age,marks)
  {
    this.name=name;
    this.age=age;
    this.marks=marks;
  }

setPlacementAge(minPlacementAge){
  console.log(this)
  return(minMarks)=>{
    console.log('inside eligibleForCurrentCompany',this)
    if(this.marks>=minMarks && this.age>minPlacementAge)
    {
      console.log(this.name+"is eligible")
    }
    else
    {
      console.log(this.name+"is not eligible")
    }
  }
}
}

const Abdulla=new student("Abdulla",23,75)
const Mannan=new student("Mannan",26,85)
Abdulla.setPlacementAge(25)(40)