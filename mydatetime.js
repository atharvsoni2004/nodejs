let CurrentDate = ()=>
    {
        let d1 = new Date();
        let today = d1.getDate()  + "/" + (d1.getMonth()+1) +"/" + d1.getFullYear();   
        return today   
    }

let getCurrentTime = ()=>
{
    let d1= new Date();
    let today = d1.getHours() + ":" + d1.getMinutes() + ":" + d1.getSeconds();
    return today
}    

module.exports.Date = CurrentDate;
module.exports.Time = getCurrentTime;