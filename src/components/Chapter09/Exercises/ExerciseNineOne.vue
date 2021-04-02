<template>
  <div class="container">
    <h2>Blackstone Bistro | Pizza-on-Demand</h2>
    <p>Our 12" wood-fired pizzas are available for delivery. Build your custom pizza and we'll deliver it within an hour.</p>

    <form>
      <fieldset>
        <legend>Your Information</legend>
        <ul>
          <li>
            <label for="form-name">Name:</label>
            <input type="text" name="customername" id="form-name"/>
          </li>
          <li>Address: <input type="text" name="address"/></li>
          <li>Telephone Number: <input type="tel" name="telephone"/></li>
          <li>Email: <input type="email" name="email"/></li>
          <li>Delivery instructions: <br/>
            <textarea
              name="instruction"
              rows="4"
              cols="60"
              maxlength="400"
              placeholder="No more than 400 characters long">
          </textarea>
          </li>
        </ul>
      </fieldset>


      <h2>Design Your Dream Pizza:</h2>
      <fieldset>
        <legend>Pizza specs</legend>
        <fieldset>
          <legend>Crust <em>(Choose one)</em>:</legend>
          <ul>
            <li><input type="radio" v-model="crust" value="white"> Classic white</li>
            <li><input type="radio" v-model="crust" value="multigrain"> Multigrain</li>
            <li><input type="radio" v-model="crust" value="cheese"> Cheese-stuffed crust</li>
            <li><input type="radio" v-model="crust" value="gluten-free"> Gluten-free</li>
          </ul>
        </fieldset>

        <fieldset>
          <legend>Toppings <em>(Choose as many as you want)</em>:</legend>
          <ul>
            <li><input type="checkbox" v-model="toppings" value="red-sauce" checked> Red sauce</li>
            <li><input type="checkbox" v-model="toppings" value="white-sauce"> White sauce</li>
            <li><input type="checkbox" v-model="toppings" value="cheese"> Mozzarella Cheese</li>
            <li><input type="checkbox" v-model="toppings" value="pepperoni">Pepperoni</li>
            <li><input type="checkbox" v-model="toppings" value="mushrooms"> Mushrooms</li>
            <li><input type="checkbox" v-model="toppings" value="peppers"> Peppers</li>
            <li><input type="checkbox" v-model="toppings" value="anchovies"> Anchovies</li>
          </ul>
        </fieldset>

        <fieldset>
          <legend>Number <em>(How many pizzas:)</em></legend>
          <select name="pizzas" size="1">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
          </select>
        </fieldset>
      </fieldset>
      <br/>
      <p>
        <input type="submit" value="Bring me a pizza!"/>
        <input type="reset"/>
      </p>
    </form>
    <p>Summary:</p>
    <ul>
      <li>Crust: {{ crust }}</li>
      <li>Toppings: {{ toppings.join(", ")}}</li>
      <li>Pizzas: {{ pizzas }}</li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "ExerciseNineOne",
    data() {
      return {
        crust: 'white',
        toppings: [],
        pizzas: 0,
      }
    }
  }
</script>

<style scoped>
  ol, ul {
    list-style-type: none;
  }
</style>