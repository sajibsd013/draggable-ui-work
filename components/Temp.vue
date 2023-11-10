<template>
  <div id="wrapper">
    <h1>Temp File</h1>
    <ResizeTextarea
      :placeholder="placeholder"
      v-model="textValue"
      :rows="1"
    >
    </ResizeTextarea>
  </div>
</template>
<script>
export default {

  data() {
    return {
      placeholder: "is a test messageThis is a test messageThis is a test messageThis is a test messageThis is a test message",
      textValue: "ThThis is a test message,This is a test messageThis is a test messageThis is a test messageThis is a test messageThis is a test messageThis is a test messageThis is a test messageThis is a test messageThis is a test messageThis is a test messageThis is a test messagis is a test message,This is a test messageThis is a test messageThis is a test messageThis is a test messageThis is a test messageThis is a test messageThis is a test messageThis is a test messageThis is a test messageThis is a test messageThis is a test messag",
    };
  },
};
</script>
