<template>
  <div id="app">
    <nav class="navbar is-dark" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <router-link to="/" class="navbar-item">
          Fine<span class="has-text-info">brook</span> &nbsp; Insurance Agency
        </router-link>
        
        <button class="button navbar-burger" v-on:click="toggleNav" v-bind:class="{ 'is-active': isActive}">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      <div class="navbar-menu" v-bind:class="{ 'is-active': isActive}">
        <div class="navbar-start">
          
        </div>

        <div class="navbar-end" >
          <router-link to="/" class="navbar-item r-item">Home</router-link>
          <router-link to="about" class="navbar-item r-item">About</router-link>
          <router-link to="services" class="navbar-item r-item">Services</router-link>
          <router-link to="partners" class="navbar-item r-item">Partners</router-link>
          <router-link to="contact" class="navbar-item r-item">Contact</router-link>
        </div>
      </div>
    </nav>

    <router-view/>

    <footer class="footer">
      <div class="container is-info bsa">
        <div class="columns">
          <div class="column">
            <p>
              &copy; 2017 
              <a href="">
                <strong>&nbsp; Buko Services</strong>
              </a>
            </p>
          </div>
          <div class="column">
            <div class="content has-text-centered">
              <a class="icon" href="https://www.facebook.com/finebrookagency/" target="_blank" rel="noopener noreferrer"><i class="fa fa-facebook"></i></a>
              <a class="icon" href="#" target="_blank" rel="noopener noreferrer"><i class="fa fa-twitter"></i></a>
              <a class="icon" href="https://www.linkedin.com/company/18128439/" target="_blank" rel="noopener noreferrer"><i class="fa fa-linkedin"></i></a>
            </div>
          </div>
        </div>
        
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'app',
  data: function(){
    return{
      isActive: false
    }
  },
  methods: {
    toggleNav: function(){
      this.isActive = !this.isActive;
    }
  }
}
</script>

<style lang="sass">
@import '../node_modules/bulma/bulma.sass'
@import 'mq'

.navbar
    background-color: #383838
    a: hover
        color: gray

    .navbar-brand
        font-weight: bold

.navbar-end a
    color: #fff
    font-weight: bold

a.r-item
  color: #c1c1c1
  padding: 0.5rem 1.75rem
  +mobile
    color: gray
    &:hover
      background-color: #0f9ac9

.navbar-burger span
  background-color: #c1c1c1

footer
  background-color: $info !important
  color: #fff

  .column a
    color: #fff

  .icon
    color: #fff
    margin-left: 20px

</style>
