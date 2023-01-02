import Dummy  from "../Components/Dummy.js";
const { Component } = require("react");

class Task extends Component{
    constructor(){
        super();

        this.state={
            Student : Dummy,
            Branchs : ["All","CS","BCA","ME","BSC"],
            SelectedBranch:"All",
            Year :["All",2018,2019,2020],
            SelectedYear:"All",
            validation:false,
            message:"Dublicate Elemeent found",
            isDisable:false


    }
}

 selectBranch=(branch)=>{
   
  
    this.setState({SelectedBranch:branch.target.value});

    
}

selectYear =(year)=>{
    this.setState({SelectedYear:year.target.value});
}

deleteRecord=(index)=>{
    this.state.Student.splice(index,1);

    
     this.setState({Student:this.state.Student});
    
 }

 rollNumberValidation = (event)=>{
    

    this.state.Student.map((rol)=>{
        
        if(rol.Roll==event.target.value){
             
             this.setState({validation:true});
             this.setState({isDisable:true})
             
            }
            else if(this.state.validation==true){
                
                this.setState({validation:false});
                this.setState({isDisable:false})
        }
        
    })

 }

 info =(event)=>{
    let name = document.getElementById("name").value;
    let roll = document.getElementById("roll").value;
    let percent = document.getElementById("percent").value;
    let branch = document.getElementById("branch").value;
    let obj = {Name:name,Roll:roll,Branch:branch,Percent:percent};
    if(name!=''&& roll!=""&&percent!=""){
        
       
        this.setState({Student:[...this.state.Student,obj]});
    }
    

 }

 


 



    render(){
        return <div className="container">
            
           <div className="row mt-5 mb-5">

            <div className="col-md-6">
                <input type="text" onKeyUp={this.rollNumberValidation} id="roll" className="form-control" placeholder="Roll Number"/>
                 <small className="form-text text-muted text-left">{(this.state.validation)? <small className="text-danger">* Dublicate value </small>:""}</small>
            </div>

            <div className="col-md-6">
            <input type="text"  id="name"className="form-control" placeholder="Enter Name "/>    
            </div>
            
            </div>
            <div className="row mt-5 mb-5">
            <div className="col-md-6">
                   <select id="branch" className="form-control">
                        {this.state.Branchs.map((branch,index)=>
                        <option value={branch} >{branch}</option>
                        )}
                   </select> 
            </div>

            <div className="col-md-6">
                <input type="text" id="percent"className="form-control" placeholder="Percent "/>
            </div>

            </div>

            <div className="row mt-5 mb-5">
                <div className="col-md-12">
                    <button className="btn btn-success btn-block" disabled={this.state.isDisable} onClick={this.info} >Submit</button>
                </div>
            </div>







            <div className="row">
                   <div className="col-md-6">
                 
              {this.state.Branchs.map((item)=>{
                let len = item=='All'?this.state.Student.length:this.state.Student.filter((student)=>
                    student.Branch==item).length
                    return <button className=" ml-3 mb-5 btn  btn-outline-success" onClick={this.selectBranch} value={item}>{item}:{len}</button>
              })}

                   </div>


                   <div className="col-md-6">
                      <select onChange={this.selectYear} className="form-control">
                        {this.state.Year.map((year,index)=><option value={year}>{year}</option>)}
                      </select>
                   </div>

            </div>

    {/* dropdown button end here */}


                  <table className="table">
                    <thead>
                        <th>S.No</th>
                        <th>Name</th>
                        <th>Branch</th>
                        <th>Roll</th>
                        <th>Year</th>
                        <th>Percent</th>

                    </thead>
                    <tbody >
                        {this.state.Student
                        .filter((student)=>this.state.SelectedBranch=="All"|| student.Branch ==this.state.SelectedBranch)
                        .filter((student)=>this.state.SelectedYear=="All"|| student.Yoj== this.state.SelectedYear)
                        .map((student,index)=><tr>
                          <td>{index+1}</td>
                          <td>{student.Name}</td>
                          <td>{student.Branch}</td>
                          <td>{student.Roll}</td>
                          <td>{student.Yoj}</td>
                          <td>{student.Percent}</td>
                          <td><button className="btn btn-success" onClick={()=>{this.deleteRecord(index)}}> Delete</button></td>
                        </tr>
                       )}
                    </tbody>
                  </table>

        </div>
    }          
}

export default Task;