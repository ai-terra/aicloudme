<template>
  <div id="signup">
    <div class="signup-form">
      <form @submit.prevent="onSubmit">
        <div class="input">
          <label for="email">Mail</label>
          <input
                  type="email"
                  id="email"
                  v-model="email">
        </div>
        <div class="input">
          <label for="age">Your Age</label>
          <input
                  type="number"
                  id="age"
                  v-model.number="age">
        </div>
        <div class="input">
          <label for="password">Password</label>
          <input
                  type="password"
                  id="password"
                  v-model="password">
        </div>
        <div class="input">
          <label for="confirm-password">Confirm Password</label>
          <input
                  type="password"
                  id="confirm-password"
                  v-model="confirmPassword">
        </div>
        <div class="input">
          <label for="country">Country</label>
          <select id="country" v-model="country">
            <option value="austria">Austria</option>
            <option value="australia">Australia</option>
            <option value="canada">Canada</option>
            <option value="china">China</option>
            <option value="czech">Czech Republic</option>
            <option value="finland">Finland</option>
            <option value="france">France</option>
            <option value="germany">Germany</option>
            <option value="india">India</option>
            <option value="russia">Russia</option>
            <option value="romania">Romania</option>
            <option value="uk">UK</option>
            <option value="usa">USA</option>
          </select>
        </div>
        <div class="interests">
          <h3>Add your Interests</h3>
          <button @click="onAddInterest" type="button">Add Interest</button>
          <div class="interest-list">
            <div
                    class="input"
                    v-for="(interestInput, index) in interestInputs"
                    :key="interestInput.id">
              <label :for="interestInput.id">Interest #{{ index }}</label>
              <input
                      type="text"
                      :id="interestInput.id"
                      v-model="interestInput.value">
              <button @click="onDeleteInterest(interestInput.id)" type="button">X</button>
            </div>
          </div>
        </div>
        <div class="input inline">
          <input type="checkbox" id="terms" v-model="terms">
          <label for="terms">Accept Terms of Use</label>
        </div>
        <div class="submit">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        email: '',
        age: null,
        password: '',
        confirmPassword: '',
        country: 'china',
        interestInputs: [],
        terms: false
      }
    },
    methods: {
      onAddInterest () {
        const newInterest = {
          id: Math.random() * Math.random() * 1000,
          value: ''
        }
        this.interestInputs.push(newInterest)
      },
      onDeleteInterest (id) {
        this.interestInputs = this.interestInputs.filter(interest => interest.id !== id)
      },
      onSubmit () {
        const formData = {
          email: this.email,
          age: this.age,
          password: this.password,
          confirmPassword: this.confirmPassword,
          country: this.country,
          interests: this.interestInputs.map(interest => interest.value),
          terms: this.terms
        }
        console.log(formData)
        this.$store.dispatch('signup', formData)
      }
    }
  }
</script>

<style scoped>
  .signup-form {
    width: 400px;
    margin: 30px auto;
    border: 1px solid #eee;
    padding: 20px;
    box-shadow: 0 2px 3px #ccc;
  }

  .input {
    margin: 10px auto;
  }

  .input label {
    display: block;
    color: #4e4e4e;
    margin-bottom: 6px;
  }

  .input.inline label {
    display: inline;
  }

  .input input {
    font: inherit;
    width: 100%;
    padding: 6px 12px;
    box-sizing: border-box;
    border: 1px solid #ccc;
  }

  .input.inline input {
    width: auto;
  }

  .input input:focus {
    outline: none;
    border: 1px solid #6aa84f;
    background-color: #eee;
  }

  .input select {
    border: 1px solid #ccc;
    font: inherit;
  }

  .interests button {
    border: 1px solid #6aa84f;
    background: #6aa84f;
    color: white;
    padding: 6px;
    font: inherit;
    cursor: pointer;
  }

  .interests button:hover,
  .interests button:active {
    background-color: rgba(108, 167, 84, 0.8);
  }

  .interests input {
    width: 90%;
  }

  .submit button {
    border: 1px solid #6aa84f;
    color: #6aa84f;
    padding: 10px 20px;
    font: inherit;
    cursor: pointer;
  }

  .submit button:hover,
  .submit button:active {
    background-color: #6aa84f;
    color: white;
  }

  .submit button[disabled],
  .submit button[disabled]:hover,
  .submit button[disabled]:active {
    border: 1px solid #ccc;
    background-color: transparent;
    color: #ccc;
    cursor: not-allowed;
  }
</style>