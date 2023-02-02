import React , {Component}from "react";

export default class DropMealFilter extends Component {
    constructor(){
        super();
        this.state ={
            categories:['all','vegetables', 'fruits', 'celeras', 'tubes', 'legumes', 'meat']
        }
    }
    render() {
        const elements = this.state.categories.map((category) => {
        
            return (
              <option value={category}>{category}</option>
            );
          });
    return(
    <div>
        <select>
        {elements}
        </select>
    </div>
        );
    }
}