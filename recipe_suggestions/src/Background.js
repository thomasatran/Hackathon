import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ListEntry from './ListEntry.js';
class Background extends Component {
    constructor(props){
      super(props);
      this.seeMore = this.seeMore.bind(this);
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.changeToForm = this.changeToForm.bind(this);
      this.changeToHome = this.changeToForm.bind(this);
      this.handleGrocery = this.handleGrocery.bind(this);

      this.state = {mode: "Home", Ingredients: [], category: [], value: '', response: [], groceries: []}
    }
    async handleGrocery(e){
      e.preventDefault();
      let response = await fetch('http://localhost:4200/user/getGroceryList', {
        method: 'POST',headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({})
      }).then(res=>res.json())
      .then((json)=>{
        console.log(json);
        return json;
      });
      this.setState({groceries: response});
      this.setState({mode: 'Groceries'});
    }
    async handleSubmit(e){
      e.preventDefault();
      
      let response = await fetch('http://localhost:4200/recipe/search', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          Ingredients: this.state.Ingredients,
          Categories: this.state.category,
          CookTime: this.state.value
        }),
      }).then(text=>text.json()).then((body)=>{
      return body; 
    });
    let arr = response.slice(0,5);
    this.setState({mode:"Results"});
    this.setState({response: arr});
    }
    selectIngredient(e){
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
    seeMore(e){
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
          <button class = 'btn btn-dark btn-lg' onClick={this.handleGrocery}> Grocery Suggestion</button>
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
              <button class= 'btn btn-outline-primary category'data-toggle="button" value = "Spinach"aria-pressed="false" onClick={this.selectIngredient.bind(this)}>Bread</button>
              <hr class= 'featurette-divider'></hr>
              <h1>Food Type</h1>
              <hr class= 'featurette-divider'></hr>
              <button class= 'btn btn-outline-primary category'data-toggle="button" value = "Thai"aria-pressed="false" onClick={this.selectCategory.bind(this)}>Thai</button>
              <button class= 'btn btn-outline-primary category'data-toggle="button" value = "Korean"aria-pressed="false" onClick={this.selectCategory.bind(this)}>Korean</button>
              <button class= 'btn btn-outline-primary category'data-toggle="button" value = "Japanese"aria-pressed="false" onClick={this.selectCategory.bind(this)}>Japanese</button>
              <button class= 'btn btn-outline-primary category'data-toggle="button" value = "Chinese"aria-pressed="false" onClick={this.selectCategory.bind(this)}>Chinese</button>
              <button class= 'btn btn-outline-primary category'data-toggle="button" value = "Vietnamese"aria-pressed="false" onClick={this.selectCategory.bind(this)}>Vietnamese</button>
              <button class= 'btn btn-outline-primary category'data-toggle="button" value = "Mexican"aria-pressed="false" onClick={this.selectCategory.bind(this)}>Mexican</button>
              <button class= 'btn btn-outline-primary category'data-toggle="button" value = "American"aria-pressed="false" onClick={this.selectCategory.bind(this)}>American</button>
              <button class= 'btn btn-outline-primary category'data-toggle="button" value = "Italian"aria-pressed="false" onClick={this.selectCategory.bind(this)}>Italian</button>
              <button class= 'btn btn-outline-primary category'data-toggle="button" value = "Indian"aria-pressed="false" onClick={this.selectCategory.bind(this)}>Indian</button>
              <button class= 'btn btn-outline-primary category'data-toggle="button" value = "Mongolian"aria-pressed="false" onClick={this.selectCategory.bind(this)}>Mongolian</button>
              <button class= 'btn btn-outline-primary category'data-toggle="button" value = "Mediterranean"aria-pressed="false" onClick={this.selectCategory.bind(this)}>Mediterranean</button>
              <button class= 'btn btn-outline-primary category'data-toggle="button" value = "Greek"aria-pressed="false" onClick={this.selectCategory.bind(this)}>Greek</button>
  
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
      else if(state === "Results"){
        let results = this.state.response;
        let listItems = results.map((res)=>{
          let instructions = res.instructions.map((ins)=>{
            return <p class="pb-0">{ins}</p>
          });
          return (
            <div>
            <h4 class="mb-0 pt-3" >{res.name}</h4>
            <ul>{instructions}</ul>
            </div>
          )
        });
        form = <div class ="content">
            <ul class = "pr-1 pl-1">{listItems}</ul>
          </div>
      }
      else if(state ==="Groceries"){
        let arr = [];
        let recipes = this.state.groceries.favoriteRecipes;
        recipes.map((recipe)=>{
          if(arr.indexOf(recipe.ingredients[0].name) <0){
            arr = arr.concat([recipe.ingredients[0].name]);
          }
        });
        let groceryList = arr.map((item)=>{
          return (
            <h2 class = "pt-3 pb-5">{item}</h2>
          )
        });
        form = <div class ="content">
        <h1> Grocery List</h1>
        <hr class= 'featurette-divider'></hr>
          <ul class = "pr-1 pl-1">{groceryList}</ul>
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