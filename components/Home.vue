<template>
  <div class="home">
    <section class="hero is-bold">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            {{ heading }}
          </h1>
          <div class="is-one-thirds column is-paddingless">
            <h2 class="subtitle is-4">
              {{ subheading }}
            </h2>
          </div>
          <router-link to="about" class="button is-small is-info" id="learn">Learn more</router-link>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container is-fluid">
        
      </div>
      <div class="columns pd">
        <div class="column">
          <div class="card">
            <header class="card-header">
              <p class="card-header-title">
                Component
              </p>
            </header>
            <div class="card-content">
              <div class="content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
                <a href="">@bulmaio</a>. <a href="">#css</a> <a href="">#responsive</a>
                <br />
                <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
              </div>
            </div>
          </div>
        </div>

        <div class="column">
          <div class="card">
            <header class="card-header">
              <p class="card-header-title">
                Component
              </p>
            </header>
            <div class="card-content">
              <div class="content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
                <a href="">@bulmaio</a>. <a href="">#css</a> <a href="">#responsive</a>
                <br />
                <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
              </div>
            </div>
          </div>
        </div>

        <div class="column">
          <div class="card">
            <header class="card-header">
              <p class="card-header-title">
                Component
              </p>
            </header>
            <div class="card-content">
              <div class="content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
                <a href="">@bulmaio</a>. <a href="">#css</a> <a href="">#responsive</a>
                <br />
                <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'home',
  data(){
    return{
      subheading: 'We Ask, We Listen, We find Solutions',
      heading: 'Trust us to protect you',

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>
@import '../mq.sass'

.hero
  background: url('../assets/finebrook-blk.jpeg')
  background-size: cover

  .title
    //color: $primary
    +mobile
      font-weight: bold
    +tablet
      font-size: 2.5rem
    +desktop
      font-size: 3.5rem
      margin-top: 1rem

h2
  //margin: 1.5rem 0 2rem 0 !important
  color: $primary
  +mobile
      font-size: 0.9rem !important
      margin-bottom: 0.7rem
      padding-bottom: 0.7rem
  +tablet
      margin: 1rem 0 1.5rem 0 !important
  +desktop
      margin: 1.5rem 0 2rem 0 !important

#learn
  +desktop
    margin-bottom: 1rem
</style>
