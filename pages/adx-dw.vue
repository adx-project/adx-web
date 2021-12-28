<template>
  <section class="inner-page">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 d-flex flex-column justify-content-center pt-4 pt-lg-0"
             data-aos="fade-up" data-aos-delay="200">
          <div class="d-flex justify-content-center">
            <NuxtLink to="app" target="_blank" class="btn-get-involved scrollto">Go to the app</NuxtLink>
          </div>
        </div>
      </div>
      <br/>
      <p>
        The purpose of the <strong>ADX Data Warehouse (ADX-DW)</strong> is to connect the scientific community
        to individuals and organizations that hold credible anomalous observation data.
      </p>
      <p>
        The ADX-DW will be an objective description of observations made by observers or sensors and include
        associated raw media files.
      </p>
      <p>
        ADX builds partnerships with organizations that represent pilots, air traffic controllers,
        astronomers, maritime shipping companies, governmental organizations, as well as space based
        organizations.
      </p>
      <p>
        The ADX Data Warehouse will allow these different organizations to report and collate observations
        into a central location, and will allow them access to analysis of the observations by our panel of experts.
      </p>
      <p>
        In addition to partner organizations, ADX may publish data regarding observations made by qualified
        individuals such as commercial pilots, maritime professionals, former and current military, law enforcement,
        astronomers, aerospace companies, and others.
      </p>
      <p>
        Identities and qualifications of all contributors to this database will be verified by ADX administrators,
        however the identities of the observers may remain anonymous to protect their privacy.
      </p>
      <p>
        Data contained in the ADX Data Warehouse will follow the ADX-DS format to allow for standardization of
        observations’ data, but may also include unformatted raw datasets of sensor data that can be made available
        in their entirety to the scientific research community for analysis to detect trends or to serve as control
        data.
      </p>
      <p>
        Data submitted to the ADX Data Warehouse remains the intellectual property of the individual or organization
        that created the data. By submitting to the ADX Data Warehouse data owners agree that their data may be
        distributed under a creative commons ‘Attribution-NonCommercial-NoDerivs CC BY-NC-ND’ license by ADX.
        The entire contents of ADX Data Warehouse will be available to the public with the exception of personal
        identifying information.
      </p>
      <p>
        Please
        <NuxtLink to="data-policy">read our Data Policy</NuxtLink>
        below for more specifics what we intend to include in the main ADX-DW dataset.
      </p>
      <br/>
      <div class="row">
        <div class="col-lg-12 d-flex flex-column justify-content-center pt-4 pt-lg-0"
             data-aos="fade-up" data-aos-delay="200">
          <div class="d-flex justify-content-center">
            <NuxtLink to="app" target="_blank" class="btn-get-involved scrollto">Go to the app</NuxtLink>
          </div>
        </div>
      </div>
    </div>
    <Contact/>
  </section>
</template>
<script>
export default {
  data() {
    return {
      path: "ADX Data Warehouse"
    }
  },
  created() {
    this.$nuxt.$emit('breadcrumb', this.path);
  }
}
</script>
