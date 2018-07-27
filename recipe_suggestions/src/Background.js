import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Background extends Component {
    constructor(props){
      super(props);
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.changeToForm = this.changeToForm.bind(this);
      this.changeToHome = this.changeToForm.bind(this);
      this.removeIngredient = this.removeIngredient.bind(this);
      this.state = {mode: "Home", Ingredients: [], category: [], value: ''}
    }
    handleSubmit(e){
      e.preventDefault();
      console.log('Ingredients:', this.state.Ingredients, 'Categories', this.state.category, 'cookTime: ',this.state.value );
    }
    selectIngredient(e){
      console.log(this.state.Ingredients);
      let pressed = e.target.getAttribute('aria-pressed')=='false';
      if(pressed){
        let array = [...this.state.Ingredients];

        let array1 = array.concat([e.target.value]);

        this.setState({Ingredients: array1});

      }
      else{
        let array = [...this.state.Ingredients];
        let index = array.indexOf(e.target.value);
        array.splice(index,1);
        this.setState({Ingredients:array});
      }
      
    }
    handleChange(event) {
      this.setState({value: event.target.value});
    }
    selectCategory(e){
      console.log(this.state.category);
      let pressed = e.target.getAttribute('aria-pressed')=='false';
      if(pressed){
        let array = [...this.state.category];

        let array1 = array.concat([e.target.value]);

        this.setState({category: array1});

      }
      else{
        let array = [...this.state.category];
        let index = array.indexOf(e.target.value);
        array.splice(index,1);
        this.setState({category:array});
      }
    }
    removeIngredient(e){
      
    }
    changeToForm(){
      this.setState({mode:"SearchForm"});
    }
    changeToHome(){
      this.setState({mode:"Home"});
    }
    render(){
      const state = this.state.mode;
      let form;
      if(state === 'Home'){
        form = <div class = 'content'>
        <img src={require('./Meal Assist.png')}></img>
        <div class='button1'>
          <button class= 'btn btn-dark btn-lg' onClick={this.changeToForm}>Recipe Suggestion</button>
        </div>
        <div class='button2' >
          <button class = 'btn btn-dark btn-lg' onClick={this.changeToForm}> Grocery Suggestion</button>
        </div>
      </div>
      }
      else if(state === 'SearchForm'){
        form =
        <div class ="content"> 
        <form onSubmit={this.handleSubmit}>
            <h1>Ingredients</h1>
            <hr class= 'featurette-divider'></hr>

              <button class= 'btn btn-outline-primary category'data-toggle="button" value = "Chicken"onClick={this.selectIngredient.bind(this)}aria-pressed="false">Chicken</button>
              <button class= 'btn btn-outline-primary category'data-toggle="button" value = "Lettuce"onClick={this.selectIngredient.bind(this)}aria-pressed="false" >Lettuce</button>
              <button class= 'btn btn-outline-primary category'data-toggle="button" value = "Tomatoes"onClick={this.selectIngredient.bind(this)}aria-pressed="false" >Tomatoes</button>
              <button class= 'btn btn-outline-primary category'data-toggle="button" value = "Pasta"aria-pressed="false"onClick={this.selectIngredient.bind(this)} >Pasta</button>
              <button class= 'btn btn-outline-primary category'data-toggle="button" value = "Chicken Broth"aria-pressed="false" onClick={this.selectIngredient.bind(this)}>Chicken Broth</button>
              <button class= 'btn btn-outline-primary category'data-toggle="button" value = "Avocado"aria-pressed="false" onClick={this.selectIngredient.bind(this)}>Avocado</button>
              <button class= 'btn btn-outline-primary category'data-toggle="button" value = "Salt"aria-pressed="false" onClick={this.selectIngredient.bind(this)}>Salt</button>
              <button class= 'btn btn-outline-primary category'data-toggle="button" value = "Pepper"aria-pressed="false" onClick={this.selectIngredient.bind(this)}>Pepper</button>
              <button class= 'btn btn-outline-primary category'data-toggle="button" value = "Beef Broth"aria-pressed="false"onClick={this.selectIngredient.bind(this)}>Beef Broth</button>
              <button class= 'btn btn-outline-primary category'data-toggle="button" value = "Vegetable Stock"aria-pressed="false" onClick={this.selectIngredient.bind(this)}>Vegetable Stock</button>
              <button class= 'btn btn-outline-primary category'data-toggle="button" value = "Broccoli"aria-pressed="false" onClick={this.selectIngredient.bind(this)}>Brocooli</button>
              <button class= 'btn btn-outline-primary category'data-toggle="button" value = "Spinach"aria-pressed="false" onClick={this.selectIngredient.bind(this)}>Spinach</button>
              <hr class= 'featurette-divider'></hr>
              <h1>Food Type</h1>
              <hr class= 'featurette-divider'></hr>
              <button class= 'btn btn-outline-primary category'data-toggle="button" value = "Thai"aria-pressed="false" onClick={this.selectIngredient.bind(this)}>Thai</button>
              <button class= 'btn btn-outline-primary category'data-toggle="button" value = "Korean"aria-pressed="false" onClick={this.selectIngredient.bind(this)}>Korean</button>
              <button class= 'btn btn-outline-primary category'data-toggle="button" value = "Japanese"aria-pressed="false" onClick={this.selectIngredient.bind(this)}>Japanese</button>
              <button class= 'btn btn-outline-primary category'data-toggle="button" value = "Chinese"aria-pressed="false" onClick={this.selectIngredient.bind(this)}>Chinese</button>
              <button class= 'btn btn-outline-primary category'data-toggle="button" value = "Vietnamese"aria-pressed="false" onClick={this.selectIngredient.bind(this)}>Vietnamese</button>
              <button class= 'btn btn-outline-primary category'data-toggle="button" value = "Mexican"aria-pressed="false" onClick={this.selectIngredient.bind(this)}>Mexican</button>
              <button class= 'btn btn-outline-primary category'data-toggle="button" value = "American"aria-pressed="false" onClick={this.selectIngredient.bind(this)}>American</button>
              <button class= 'btn btn-outline-primary category'data-toggle="button" value = "Italian"aria-pressed="false" onClick={this.selectIngredient.bind(this)}>Italian</button>
              <button class= 'btn btn-outline-primary category'data-toggle="button" value = "Indian"aria-pressed="false" onClick={this.selectIngredient.bind(this)}>Indian</button>
              <button class= 'btn btn-outline-primary category'data-toggle="button" value = "Mongolian"aria-pressed="false" onClick={this.selectIngredient.bind(this)}>Mongolian</button>
              <button class= 'btn btn-outline-primary category'data-toggle="button" value = "Mediterranean"aria-pressed="false" onClick={this.selectIngredient.bind(this)}>Mediterranean</button>
              <button class= 'btn btn-outline-primary category'data-toggle="button" value = "Greek"aria-pressed="false" onClick={this.selectIngredient.bind(this)}>Greek</button>
  
              <div class="form-group row pb-1 pt-1 mr-0 ml-0">
                <label for="cookTime" class="col-sm-2 col-form-label">Cook Time (Minutes)</label>
                <div class="col-sm-10">
                <input type="text" value={this.state.value} onChange={this.handleChange} />
                  {/* <input type="text" class="mt-2 form-control"  onChange={this.handleChange.bind(this)}id="cookTime"value ={this.state.cookTime} placeholder="45"></input> */}
                </div>
              </div>
              <div class= "pb-5">
                <button type="submit" class="btn btn-primary mb-2">Search</button>
              </div>
          </form>
          </div>
      }
        return (
      <div className= 'Background'>
        <div class ='background'></div>
        <div class= 'title_container'>
          {form}
        </div>
        </div>
        );
    }
}

export default Background;