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
        res.status(400).json({success:false, message:error.message});
}
 };

 // GET ALL THE TASK FOR THE LOGGED IN USER

 export const getTask=async(req,res)=>{
    try{
        const tasks=await Task.find({owner:req.user.id}).sort({createdAt:-1});
        res.json({success:true, tasks});
    }catch(error){
        res.status(500).json({success:false, message:error.message});
    }
 }

 // GET SINGLE TASKS BY ID(MUST BELONG TO  THAT USER)

 export const getTaskById=async(req,res)=>
 {
    try{
        const task=await Task.findOne({_id:req.params.id, owner:req.user.id});
        if(!task) return res.status(400).json({
    success:false,
    message:"Task not found"
});

 } catch(err){
    res.status(500).json({success:false, message:err.message});
 }
}

// UPDATE A TASK

export const updateTask=async(req,res)=>{
    
}