<template>
    <section class="inner-page">
      <div class="container">
        <p>
          The <strong>ADX Data Standards (ADX-DS)</strong> is a standardized set of databases,
          variables, and formats that allow for easy exchange of data around AOs (Anomalous Observations).
        </p>
        <p>
          This database structure is constantly reviewed by experts in different fields, scientific or not,
          to ensure it contains all relevant data to describe observations. The ADX-DS also contains universal
          position and time variables to allow 3D reconstructions of events.
        </p>
        <p>
          The ADX-DS is a free, open-source, community based project, distributed under an
          <a href="https://creativecommons.org/licenses/by-nc-nd/3.0/" target="_blank">
            <strong>Attribution-NonCommercial-NoDerivs CC BY-NC-ND</strong> license
          </a>, but remains the intellectual property of ADX.</p>
        <p>
          Official versions of the ADX-DS are publicly available on the
          <a href="https://github.com/adx-project/adx-ds">
            <strong>official project’s GIT repository on GitHub</strong>.
          </a>
        </p>
        <p>
          Being public domain, <strong>individuals and organizations may incorporate this database structure to
          implement
          their own data collection systems</strong>. Using the ADX-DS will allow for efficient pooling of data from
          different
          sources into unified datasets.
        </p>
      </div>
      <br/>
      <div class="container">
        <h1>ADX-DS schema</h1>
        <p>
          The image below describes standardized schema proposed in ADX-DS for a relational database system.
        </p>

        <div class="alert alert-info" role="alert">
          <i class="bi bi-exclamation-diamond"></i>
          The draft version 0.1 of the ADX-DS standards is displayed below and available on the project's GitHub
          public repository. We are requesting public comment on improvements to the data model through Dec 31, 2021.
          after which time a first release version will be compiled with all accepted feedback.
        </div>

        <div class="alert alert-warning" role="alert">
          <i class="bi bi-exclamation-diamond"></i>
          Please note that the current diagram is a work in progress subject to substantial,
          non-backwards-compatible changes.
        </div>
        <a href="/adx-ds-schema-v07.png">
          <img src="/adx-ds-schema-v07.png" alt="ADX-DS schema v0.7" class="img-fluid"/>
        </a>
      </div>
    </section>
</template>
<script>
export default {
  data() {
    return {
      path: 'ADX Data Standards'
    }
  },
  created() {
    this.$nuxt.$emit('breadcrumb', this.path);
  }
}
</script>
