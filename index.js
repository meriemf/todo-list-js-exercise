function newTask(title, description){

  const task = {
  title: title,
  description: description,
  Complete : false,


  completeTask: function() {
    this.complete = true;
  },

  logTaskState: function() {
    console.log(`${this.title} has${this.complete ? " " : " not "}been completed`);
  },

};
return task;
};
task0 = newTask("task0","Clean Cat Litter");
task1 = newTask("task1","Do Laundry");
const tasks = [task0, task1];
tasks[0].completeTask();
tasks[0].logTaskState(); // Clean Cat Litter has not been completed
tasks[1] .logTaskState();
