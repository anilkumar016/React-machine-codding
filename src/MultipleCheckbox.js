import React from 'react';
class MultipleCheckbox extends React.Component {
   constructor(){
    super();
    this.state={
        pets:[]
    }
    this.handleCheck=this.handleCheck.bind(this);
   }
   handleCheck(e){
        if(e.target.checked){
            this.setState(prevState=>{
                return {pets:[...prevState.pets,e.target.value]}
            });
        }else{
            this.setState(prevState=>{
                return {pets:[...prevState.pets.filter(item=>item !==e.target.value)]}
            });
        }
       
   
   }
    render() {
        console.log( this.state);
        return (
            <div>
                <input type="checkbox" name="favorite_pet[]" value="Cats"  onChange={this.handleCheck} />Cats<br />
                <input type="checkbox" name="favorite_pet[]" value="Dogs" onChange={this.handleCheck} />Dogs  <br />
                <input type="checkbox" name="favorite_pet[]" value="Birds" onChange={this.handleCheck} />Birds<br />
                <input type="checkbox" name="favorite_pet[]" value="Catss" onChange={this.handleCheck} />Catss<br />
                <input type="checkbox" name="favorite_pet[]" value="Dogss" onChange={this.handleCheck} />Dogss  <br />
                <input type="checkbox" name="favorite_pet[]" value="Birdss" onChange={this.handleCheck} />Birdss<br />
            </div>
        );
    }
}

export default MultipleCheckbox;