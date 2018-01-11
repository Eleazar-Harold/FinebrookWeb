<template>
  <div class="contact">
    <section class="section">
      <div class="container is-fluid column is-three-fifths is-offset-one-fifth">
        <form @submit.prevent="validateBeforeSubmit" v-if="!formSubmitted">

            <h1>Contact Form</h1>
            <div class="field" :class="{'has-error': errors.has('name') }">
                <label class="label" for="name">Name</label>
                <div class="control has-icons-left has-icons-right">
                  <input v-model="name" v-validate.initial="name" data-rules="required|alpha|min:3" class="input" type="text" placeholder="Full Name">
                  <span class="icon is-small is-left">
                    <i class="fa fa-user"></i>
                  </span>
                  <p class="help is-danger" v-if="errors.has('name')">{{ errors.first('name') }}</p>
                </div>
            </div>

            <div class="field" :class="{'has-error': errors.has('email') }" >
                <label class="label" for="email">Email</label>
                <div class="control has-icons-left has-icons-right">
                  <input v-model="email" v-validate.initial="email" data-rules="required|email" class="input" type="email" placeholder="Email">
                  <span class="icon is-small is-left">
                    <i class="fa fa-envelope"></i>
                  </span>
                </div>
                <p class="help is-danger" v-if="errors.has('email')">{{ errors.first('email') }}</p>
            </div>

            <div class="field" :class="{'has-error': errors.has('subject') }">
                <label class="label" for="subject">Subject</label>
                <div class="control has-icons-left has-icons-right">
                  <input v-model="subject" v-validate.initial="subject" data-rules="required|alpha|min:3" class="input" type="text" placeholder="Subject">
                  <p class="help is-danger" v-if="errors.has('subject')">{{ errors.first('subject') }}</p>
                </div>
            </div>

            <div class="field" :class="{'has-error': errors.has('message') }">
                <label class="label" for="message">Message</label>
                <div class="control has-icons-left has-icons-right">
                  <textarea v-model="message" v-validate.initial="message" data-rules="required|alpha|min:3" class="textarea" placeholder="Message"></textarea>
                  <p class="help is-danger" v-if="errors.has('message')">{{ errors.first('message') }}</p>
                </div>
            </div>
            <div class="field is-grouped is-grouped-centered">
              <div class="control">
                <button class="button is-link" type="submit">Submit</button>
              </div>
              <div class="control">
                <button class="button is-text" type="reset">Cancel</button>
              </div>
            </div>
        </form>
        <div v-else>
          <h1 class="submitted">Form submitted successfully!</h1>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Vue from 'vue'
import VeeValidate from 'vee-validate'

Vue.use(VeeValidate)

VeeValidate.Validator.extend('passphrase', {
    getMessage: field => 'Sorry dude, wrong pass phrase.',
    validate: value => value.toUpperCase() == 'Demogorgon'.toUpperCase()
});

export default {
  name: 'contact',
  data () {
    return {
      email: '',
      name: '',
      subject: '',
      message: '',
      formSubmitted: false
    }
  },
  methods: {
    validateBeforeSubmit(e) {
        this.$validator.validateAll();

        if (!this.errors.any()) {
            this.submitForm()
        }
      },
    submitForm(){
      this.formSubmitted = true
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>
@import '../mq.sass'

.submitted 
  color: #4fc08d

</style>
