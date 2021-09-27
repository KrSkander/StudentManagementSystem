var numberOfStudents = 0;
var Students = [];

function addStudent(x){
    if(x != null)
    {Students.push(x);}
    console.log(Students);
}

function getNumberOfStudents(){
    console.log(Students.length);
    return Students.length;
}

function clearStudents(){
    Students.length =0 
    
}

function createFullName(fn,ln)
{
    return `${fn} ${ln}`;
}

function getStudentByInitials(name,initial){
   if(name[0]==initial) 
    {return true;}
    else return false;
}

function isFullName(name){
    if((name.split(" ").length==2) && (name.indexOf(" ")!= name.length-1 ))
    {return true;}
    else return false;
}


// Execution Code
var x = [['Nour','S'],['Ahmed','E'],['Salma','S'],['Skander','X'],['Ala','O']];
for(var i = 0 ; i < x.length ; i++){
    addStudent(createFullName(x[i][0],x[i][1]));
    
}
console.log(Students);
console.log(getStudentByInitials("Ahmed","A"));
console.log(isFullName("Skander"));