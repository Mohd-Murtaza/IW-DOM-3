let form=document.querySelector("form");
let task=document.querySelector("#task");
let priority=document.querySelector("#priority");
let tbody=document.querySelector("tbody");

form.addEventListener("submit", function(p)
{
    p.preventDefault();
    let arr=[];
    arr.push({
        taskName : task.value,
         taskPriority : priority.value});
        

         arr.map((ele)=>{
            let rowData = document.createElement("tr");
            let taskData=document.createElement("td");
            let priorityData=document.createElement("td");
            let favouriteData=document.createElement("td");

            taskData.innerText=ele.taskName;
            priorityData.innerText=ele.taskPriority;
            
            if(ele.taskName!="" && ele.taskPriority!="")
            {
                rowData.append(taskData,priorityData,favouriteData);
                return tbody.append(rowData);
            }
            else if(ele.taskName=="" && ele.taskPriority=="")
            {
                alert(`Please type your task and select your priority`);
            }
            else if(ele.taskName=="")
            {
                alert(`Please Type your task`);
            }
            else if(ele.taskPriority=="")
            {
                alert(`Please select your priority`);
            }
            
            
         })
         let row=document.getElementsByTagName("tr");
         for(let i=0; i<row.length; i++)
         {
            if(row[i].getElementsByTagName("td")[1])
            {
                if(row[i].getElementsByTagName("td")[1].innerHTML=="High")
                {
                    row[i].style.backgroundColor="red";
                }
                else
                {
                    row[i].style.backgroundColor="green";
                }
            } 
         }
         task.value="";
         priority.value="";
})
