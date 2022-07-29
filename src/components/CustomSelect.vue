<template>
  <div class="container">
    <p>Payment Terms</p>
    <div class="selected" @click="change">
      <span>{{ curVal }}</span>
      <img
        src="@/assets/imgs/icon-arrow-down.svg"
        alt="Icon"
        :class="{ active: isActive }"
      />
    </div>
    <div class="select-box">
      <div
        class="options-container"
        v-for="(option, idx) in options"
        :key="option"
      >
        <transition-group name="list" tag="div">
          <label v-if="isActive" class="option" :for="option.labelName">
            <input
              type="radio"
              class="radio"
              :id="option.labelName"
              :name="option.name"
              :value="option.inputValue"
              @click="
                $emit(
                  'callback',
                  option.inputValue,
                  option.labelName,
                  option.name
                );
                change();
                setCurrentVal(idx);
              "
            />
            <span> {{ option.labelName }}</span>
          </label>
        </transition-group>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  emits: ['callback'],
  props: {
    options: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      isActive: false,
      curVal: 'Select something...',
    };
  },
  methods: {
    change() {
      this.isActive = !this.isActive;
    },
    setCurrentVal(idx) {
      this.curVal = this.options[idx].labelName;
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  padding: 3rem;
}
label {
  color: var(--black-color);
  border: 0;
}
label:not(:last-child) {
  border-bottom: 0;
}

img {
  margin-left: auto;
  transition: transform 0.2s ease-in-out;
}

p {
  color: var(--pink-text-color);
  display: block;
  margin-bottom: 10px;
  font-size: 14px;
  line-height: 15px;
  font-weight: 500;
  letter-spacing: -0.25px;
}

.select-box {
  width: 240px;
  box-shadow: 0px 10px 20px 0 rgba(72, 84, 159, 0.25);
}

.selected {
  border: 1px solid var(--light-gray-color);
  cursor: pointer;
}

.selected,
.option {
  width: 240px;
  min-width: 240px;
  max-height: 48px;
  font-weight: 700;
  font-size: 14px;
  line-height: 15px;
  letter-spacing: -0.25px;
  background-color: var(--white-color);
  padding: 17px 20px;
}

.options-container:not(:last-child) .option {
  border-bottom: 1px solid var(--light-gray-color);
}

.selected {
  border-radius: 5px;
  padding: 17px 20px;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.option {
  padding: 17px 20px;
  cursor: pointer;
}

.radio {
  display: none;
}

.active {
  transform: rotate(180deg);
}

.list-enter-active,
.list-leave-active {
  transition: all 0.2s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
}
</style>
