<template>
    <div>
<label for="loanAmount">loanAmount</label>
<input type="number" id="loanAmount" v-model.number="loanAmount">
<label for="interestRate">interestRate</label>
<input type="number" step="0.01" id="interestRate" v-model.number="interestRate">
<label for="loanTerm">loanTerm</label>
<input type="number" id="loanTerm" v-model.number="loanTerm">
<p>monthlyPayment : {{ monthlyPayment }}</p>
<p>totalPayment {{ totalPayment }}</p>
    </div>
  </template>

<script>

export default {
  name: 'MortgageCalculator',

  data () {
    return {
      loanAmount: 1000000,
      interestRate: 10,
      loanTerm: 120

    }
  },
  methods: {

  },

  computed: {
    monthlyPayment: function () {
      const rate = this.interestRate / 100 / 12
      const term = this.loanTerm
      const principal = this.loanAmount
      const numerator = rate * Math.pow(1 + rate, term)
      const denominator = Math.pow(1 + rate, term) - 1
      const payment = principal * (numerator / denominator)
      return payment.toFixed(2)
    },

    totalPayment: function () {
      const term = this.loanTerm
      return (term * this.monthlyPayment).toFixed(2)
    }

  }
}
</script>

  <style scoped lang="scss"></style>
