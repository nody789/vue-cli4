<template>
  <div class="progressStep">
    <div class="row">
      <div class="col-4">
        <div class="step" :class="{ now: current === 1 }">
          <p>01 確認購買</p>
        </div>
      </div>
      <div class="col-4">
        <div class="step" :class="{ now: current === 2 }">
          <p>02 填寫資料</p>
        </div>
      </div>
      <div class="col-4">
        <div class="step" :class="{ now: current === 3 }">
          <p>03 完成訂單</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProgressStep',
  props: ['current'],
};
</script>
