var TaskList = require('./routes/tasklist');
var taskList = new TaskList(process.env.CUSTOMERCONNSTR_MONGOLAB_URI);

app.get('/', taskList.showTasks.bind(taskList));
app.post('/addtask', taskList.addtask.bind(taskList));
app.post('/completetask', taskList.completetask.bind(taskList));