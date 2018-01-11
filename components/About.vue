<template>
  <div class="about">
    <section class="section">
      <div class="container is-fluid">
        <div class="content">
          <blockquote>
            <p>Finebrook Insurance Agency is a fast growing insurance broker that seeks to provide the most comprehensive Insurance products, thoroughly researched and fairly priced. Customer service is in our DNA and we continuously seek to build relationships with each and every person we interact with. With years of experience and backed by some of Kenya’s best insurance companies, you can count on us to protect you.</p>
          </blockquote>

          <blockquote>
            <h4><strong>{{ promises }}</strong></h4>

            <ul>
              <li><strong>Friendly customer service :</strong>
              We pride ourselves in excellent customer service. Every text, call or email is important to us. We are passionate about service.</li>
              <li><strong>Insurance Guidance :</strong>
              Are over/Under Insured? We guide and advise you on the most appropriate cover at the most affordable premiums.</li>
              <li><strong>Insurance & Risk management Advice :</strong>
              We assess your business, advise on areas of exposure and what policies to take. </li>
              <li><strong>We help with claims :</strong>
              In the unfortunate event of a claim, we walk with you every step. We guide you through the process and help you get your claim settled.</li>
            </ul>
          </blockquote>
          
          <h4><strong> {{ clients }}</strong></h4>

          <div class="columns pd">
            <div class="column">
              <div class="card">
                <header class="card-header">
                  <p class="card-header-title">
                    {{clients_sh1}}
                  </p>
                </header>
                <div class="card-content">
                  <div class="content">
                    <ul>
                      <li>NGOs/Parastatals</li>
                      <li>Churches</li>
                      <li>Financial Institutions</li>
                      <li>Embassies</li>
                      <li>Microfinance</li>
                      <li>Schools</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div class="column">
              <div class="card">
                <header class="card-header">
                  <p class="card-header-title">
                    {{clients_sh2}}
                  </p>
                </header>
                <div class="card-content">
                  <div class="content">
                    <ul>
                      <li>Retail/Wholesale</li>
                      <li>Hospitality</li>
                      <li>Construction</li>
                      <li>Transport & Logistics</li>
                      <li>Manufacturing</li>
                      <li>Security</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div class="column">
              <div class="card">
                <header class="card-header">
                  <p class="card-header-title">
                    {{clients_sh3}}
                  </p>
                </header>
                <div class="card-content">
                  <div class="content">
                    <ul>
                      <li>Individuals</li>
                      <li>Lawyers</li>
                      <li>Doctors</li>
                      <li>Civil Servants</li>
                      <li>Business people</li>
                      <li>High Net Worth Individuals</li>
                    </ul>
                  </div>
                </div>
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
  name: 'about',
  data(){
    return{
      promises : 'OUR PROMISE',
      clients : 'OUR CLIENTS',
      clients_sh1 : 'Corporate & Institutions',
      clients_sh2 : 'Businesses',
      clients_sh3 : 'Individuals/Professionals',
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>
@import '../mq.sass'

</style>
