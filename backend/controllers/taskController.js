 import Task from "../models/takeModel.js";


 // Create a new task

 export const createTask=async(req,res)=>{
    try{ const{title,description,priority,dueDate,completed}=req.body;
    const task=new Task({
        title, 
        description,
        priority,
        dueDate,
        completed: completed==="Yes"|| completed===true,
        owner:req.user.id

        
    });
    const saved=await task.save();
    res.status(201).json({success:true, task:saved });



}
catch(error)
{

}
 }