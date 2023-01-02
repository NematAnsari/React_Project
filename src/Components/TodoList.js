import { Component } from "react";

class TodoList extends Component{
    constructor(){
        super();
 //       todo=[];
        this.state={
            Todos:[],
            
           

        }
    }




    save = () =>{
        
        let todoText = document.getElementById("Todo").value;
        let prt = document.getElementById("priority").value;
       
        let obj = {
            TodoText:todoText,
            Priority:prt
        }
           this.state.P1 = prt;
          this.setState({P1:this.state.P1});
          
    this.setState({Todos:[...this.state.Todos,obj]});
    
        
}

        deleteRecord=(index)=>{
            this.state.Todos.splice(index,1);

    
     this.setState({Todos:this.state.Todos});
    
        }

    render()
    {
        return <div className="container mt-5">      
          <div className="row">
          <div className="col-md-12">
            <input type="text" id="Todo" className="form-control" placeholder="Enter your todos here" style={{width:"97%",height:"46px"}}/>

          </div>
          <div className="row mt-5">
          <div className="col-md-12">

          <select class="form-select form-select-lg mb-3" id="priority">
                  <option selected>Select Priority</option>
                  <option value="A:High">High</option>
                  <option value="B:Medium">Medium</option>
                  <option value="C:Low">Low</option>
           </select>


         </div>
          </div>


        </div>
        
        <div className="row mt-5 mb-5">
                <div className="col-md-12">
                    <button className="btn btn-success btn-block" onClick={this.save} >Submit</button>
                </div>
        </div>

        <div className="row">
            <div className="col-md-12">
                <table className="table">
                    <thead>
                        <tr>
                            <th>S.No</th>
                            <th>Todos</th>
                            <th>Priority</th>
                            <th>Delete</th>
                            
                          
                            
                        </tr>
                    </thead>
                    <tbody >
                    {this.state.Todos
                        .sort()
                        .map((todo,index)=><tr className={`${this.state.Todos[index].Priority=='C:Low'?'green':this.state.Todos[index].Priority=='A:High'?'red':'blue'}`} >
                          <td>{index+1}</td>
                          <td>{todo.TodoText}</td>
                          <td >{todo.Priority}</td>
                          <td><button className="btn btn-success" onClick={()=>{this.deleteRecord(index)}}> Delete </button></td>
                          
                        </tr>
                       )}
                    </tbody>
                </table>
            </div>
        </div>
          

          </div>


    }
}

export default TodoList;