<template>
  <custom-select :options="selectOptions" @callback="test" />
</template>

<script>
export default {
  data() {
    return {
      // DATA REQUIRED FOR COSTUME SELECT
      selectOptions: [
        { labelName: 'Net 1 Day', inputValue: 1, name: 'days' },
        { labelName: 'Net 7 Day', inputValue: 7, name: 'days' },
        { labelName: 'Net 14 Day', inputValue: 14, name: 'days' },
        { labelName: 'Net 30 Day', inputValue: 30, name: 'days' },
      ],
    };
  },
  methods: {
    // U GOT 3 VALUES U CAN WORK WITH
    test(value, label, name) {
      console.log(value - 15, label, name);
    },
  },
};
</script>

<style lang="scss">
@import './assets/sass/index.scss';
</style>
