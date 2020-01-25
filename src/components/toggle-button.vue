<template>
  <label :class="$style.switch">
    <input
      v-model="model"
      type="checkbox"
    >
    <span :class="$style.slider"/>
  </label>
</template>

<script>
export default {
  name: 'ToggleButton',
  props: {
    value: { type: Boolean, default: false },
  },
  computed: {
    model: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit('input', value);
      },
    },
  },
};
</script>

<style module>
.switch {
  position: relative;
  display: inline-block;
  min-width: 52px;
  height: 24px;
}
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  border-radius: 34px;
  transition: .4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 18px;
  width: 18px;
  left: 4px;
  bottom: 3px;
  background-color: white;
  border-radius: 50%;
  transition: .4s;
}

input:checked + .slider {
  background-color: var(--secondary-color);
}

input:checked + .slider:before {
  transform: translateX(25px);
}
</style>
