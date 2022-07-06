<template>
  <section class="main">
    <div class="container">
      <div class="stepone">
        <div class="stepone-content">
          <h1>Good News! Congress Approves <span>HEALTH INSURANCE STARTING AT $0/MONTH</span> via the Affordable Care Act and Other Short-Term Healthcare Programs.</h1>
          <img src="@/assets/img/card-copy.jpg">
          <p class="title">Claim Your Card By Clicking to Call Below Immediately</p>
          <a href="tel:18773540680">Click To Call Now to Claim</a>
          <p class="subtitle">First Come First Serve! Your spot will be held for</p>
          <p class="text-timer"><b>00</b> Minutes <b>{{ countDown }}</b> Seconds</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      countDown: 90
    }
  },
  methods: {
    countDownTimer() {
      setTimeout(() => {
        this.countDown -= 1;
        this.countDownTimer();
      }, 1000);
      if (this.countDown === 0) {
        location.reload();
      }
    }
  },
  mounted(){
    this.countDownTimer();
  }
}
</script>

<style lang="scss" scoped>
.main {
  flex: 1 1 auto;
  padding-bottom: 30px;
  @media (min-width: 768px) {
    padding-bottom: 96px;
  }
}
.stepone {
  padding-top: 20px;
  @media(min-width:768px){
    padding-top: 120px;
  }
  &-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    h1 {
      font-weight: 700;
      font-size: 22px;
      line-height: 1.2;
      color: #000;
      text-align: center;
      max-width: 680px;
      width: 100%;
      margin-bottom: 20px;
      @media (min-width: 768px) {
        margin-bottom: 50px;
        font-size: 40px;
      }
    }
    span{
      color: #cf2c31;
    }
    img{
      width: 100%;
      height: auto;
      margin-bottom: 20px;
    }
    .title{
      font-size: 20px;
      margin-bottom: 20px;
      font-weight: 700;
      max-width: 430px;
      width: 100%;
      @media(min-width:768px){
        font-size: 30px;
        margin-bottom: 60px;  
      }
    }
    .subtitle{
      margin-bottom: 20px;
    }
    p{
      color: #000;
      font-size: 18px;
      line-height: 1.4;
      text-align: center;
      @media(min-width:768px){
        font-size: 24px;
      }
    }
    b{
      font-weight: 700;
    }
    a {
      background: rgb(6, 185, 6);
      padding: 20px;
      color: #fff;
      border: none;
      text-align: center;
      font-family: "Inter";
      font-weight: 700;
      font-size: 26px;
      max-width: 680px;
      width: 100%;
      transition: 1s;
      margin-bottom: 5px;
      text-decoration: none;
      box-shadow: 1px;
      cursor: pointer;
      -webkit-box-shadow: 0px 7px 4px 0px rgba(0,0,0,0.28); 
      box-shadow: 0px 7px 4px 0px rgba(0,0,0,0.28);
      @media(min-width:576px){
        font-size: 34px;
      }
      @media(min-width:768px){
        max-width: 100%;
      }
      &:hover {
        transform: scale(0.9);
        transition: 1s;
      }
    }
  }
}
</style>
