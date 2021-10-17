<template>
  <div>
    <section class="inner-page">
      <div class="container">
        <p>
          The <strong>Anomalous Data Exchange (ADX) project</strong> is an international non-governmental
          organization (NGO) whose mission is to standardize, collect, and help analyze anomalous observations
          by credible observers and sensors.
        </p>
        <p>
          ADX is a <strong>neutral intermediary</strong> where observers can report data which scientists can then
          analyze.
          Our objective is to <strong>create high quality datasets</strong> for the scientific community regarding
          anomalous
          observations (AOs).
        </p>
        <p>
          The project consists of three main missions:
        </p>
        <ul>
          <li>Creating an <strong>international data standard</strong> for storing data on anomalous phenomena.</li>
          <li><strong>Hosting a data exchange</strong> where partner organizations and qualified individuals may
            post observations.
          </li>
          <li>Facilitating <strong>analysis, research and review</strong> by qualified scientists.</li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      path: 'About'
    }
  },
  created() {
    this.$nuxt.$emit('breadcrumb', this.path);
  }
}
</script>
