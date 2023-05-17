class task{
    desc;
    due_date;
    prio_level;
    done=false;
    constructor(desc,due_date,prio_level){
        this.desc=desc;
        this.due_date=due_date;
        this.prio_level=prio_level;
    }
    MarkAsDone(){
      this.done=true;
      console.log(" Task Done :)");
    }
}
console.log('***************************');
console.log('Welcome to JS TODO-APP');
console.log('***************************');
console.log('Select an action:');
console.log('1) Add a new task');
console.log('2) List all tasks');
console.log('3) List completed tasks'); 
console.log('4) Mark the task as done');
console.log('5) Delete a task');
console.log('6) Sort tasks by the due date'); 
console.log('7) Sort tasks by priority'); 
console.log('8) Clear all tasks'); 
console.log('***************************');
// console.log("What's your choice?");
let arrOfTasks=[];

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  function method(){

  readline.question("What's your choice? ", choice => {

    switch(choice){
       
        case "1": 
        // Add a new task
            readline.question("enter a description of task:",descr=>{
            this.desc=descr;
            console.log(this.desc);
  
             readline.question("enter due date:",due=>{
             this.due_date=due;
             console.log(this.due_date);
  
  
  
            readline.question("enter priority:",pri=>{
            this.prio_level=pri;
            console.log(this.prio_level);
  
  
            const t1=new task(this.desc,this.due_date,this.prio_level);
              
            arrOfTasks.push(t1);
            console.log(arrOfTasks);
            method();

            });
        });
    });
                  break;
        case "2":
                    //list all tasks
      for(let i=0;i<arrOfTasks.length;i++){
        console.log(arrOfTasks[i]);
      }
      method();
      break;
      case "3":
        //list completed task
            for(let i=0;i<arrOfTasks.length;i++){
                if(arrOfTasks[i].done==true){
                console.log(arrOfTasks[i]);
              }
        }
        method();
        break;
     case "4":
            // mark the task as done
            readline.question("enter task to be done:",done=>{
                this.done=done;
                console.log(this.done);
    
    
                const tt=new task(this.desc,this.due_date,this.prio_level);
                if(done==tt.desc){
                    tt.MarkAsDone();
                    arrOfTasks.push(tt);
                    console.log(arrOfTasks);
                                }
              
                method();
  
              });
            // const t=new task(this.desc,this.due_date,this.prio_level);
            //   t.MarkAsDone();
            //   // const t1=new task(this.desc,this.due_date,this.prio_level);
            //   // console.log(t1);
            //   // const arrOfTasks=[];
            //   arrOfTasks.push(t);

            //   console.log(arrOfTasks);
            //   // console.log(done);
            //   method();
                  break;
     case "5":
    //delete a task 
    arrOfTasks.pop();
    console.log(arrOfTasks);
    method();
    break;

    case "6"://sort by due date 
    arrOfTasks.sort((a, b) => Number(a.due_date.split('-')) - Number(b.due_date.split('-')));
    console.log("ascending", arrOfTasks);

        method();
        break;

        case "7": //sort by priority 
        arrOfTasks.sort((a, b) => Number(a.prio_level) - Number(b.prio_level));
         console.log("ascending", arrOfTasks);
       
        method();
        break;
        case "8"://clear all tasks
            arrOfTasks=[];
            console.log(arrOfTasks);
            method();
            break;

    default:console.log("Please enter a correct choice!");
        method();
        break;

        
  }
      
});
  }
  method();
  
  