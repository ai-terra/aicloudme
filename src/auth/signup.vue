<template>
  <div id="signup">
    <div class="signup-form">
      <form @submit.prevent="onSubmit">
        <div class="input" :class="{invalid: $v.email.$error}">
          <label for="email">Mail</label>
          <input
                  type="email"
                  id="email"
                  @blur="$v.email.$touch()"
                  v-model="email">
        <!-- <div>{{ $v }}</div> -->
        <p v-if="!$v.email.email">Please provide a valid email address.</p>
        <p v-if="!$v.email.required">This field must not be empty.</p>
        </div>
        <div class="input" :class="{invalid: $v.age.$error}">
          <label for="age">Your Age</label>
          <input
                  type="number"
                  id="age"
                  @blur="$v.age.$touch()"
                  v-model.number="age">
          <p v-if="!$v.age.minVal">You have to be at least {{ $v.age.$params.minVal.min }} years old.</p>
        </div>
        <div class="input" :class="{invalid: $v.password.$error}">
          <label for="password">Password</label>
          <input
                  type="password"
                  id="password"
                  @blur="$v.password.$touch()"
                  v-model="password">
        </div>
        <div class="input" :class="{invalid: $v.confirmPassword.$error}">
          <label for="confirm-password">Confirm Password</label>
          <input
                  type="password"
                  id="confirm-password"
                  @blur="$v.confirmPassword.$touch()"
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
        <div class="inline input" :class="{invalid: !$v.terms.$model}">
          <input 
                  type="checkbox" 
                  id="terms" 
                  @change="$v.terms.$touch()" 
                  v-model="terms">
          <label for="terms"> Accept Terms of Use</label>
          <!-- <div>{{ $v.terms }}</div> -->
        </div>
        <div class="submit">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
  import { required, email, numeric, minValue, minLength, sameAs, requiredUnless } from 'vuelidate/lib/validators'
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
    validations: {
      email: {
        required,
        email
      },
      age: {
        required,
        numeric,
        minVal: minValue(18)
      },
      password: {
        required,
        minLen: minLength(6)
      },
      confirmPassword: {
        sameAs: sameAs('password')
      },
      terms: {
        required
        // required: requiredUnless(vm => {
        //   return vm.country === 'china'
        // })
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
    border: 0px solid #ccc;
    border-bottom: 1px solid #ccc;
  }

  .input.inline input {
    width: auto;
  }

  .input input:focus {
    outline: none;
    border-bottom: 1px solid #4e4e4e;
    background-color: #eee;
  }

  .input.invalid label {
    color: red;
  }

  .input.invalid input {
    /* border: 1px solid red; */
    background-color: rgb(252, 218, 205);
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