<template>
  <section id="data-policy" class="about">
    <div class="container">
      <div class="row content">
        <div class="col-12 data-policy">
          <h1>Definitions</h1>
          <h4>ADX</h4>
          <p>ADX means the Anomalous Data Exchange, an international non governmental organization
            based in France which publishes the website <a href="https://adxproject.org">https://adxproject.org</a>.</p>

          <h4>GDPR</h4>
          <p>General Data Protection Regulation Act.
            <a href="https://ec.europa.eu/info/law/law-topic/data-protection_en">More info</a>.</p>

          <h4>Data Controller</h4>
          <p>Data Controller means the natural or legal person who (either alone or jointly or in common
            with other persons) determines the purposes for which and the manner in which any personal information is,
            or are to be, processed.</p>

          <h4>Data Processor</h4>
          <p>Data Processor means any natural or legal person who processes the data on behalf of the Data
            Controller.</p>

          <h4>Data Subject</h4>
          <p>Data Subject is any living individual who is using our Service and is the subject of Personal Data.</p>

          <h1>1. Principles for processing personal data</h1>
          <p>Our principles for processing personal data are:</p>
          <ul>
            <li>
              <strong>Fairness and lawfulness</strong>. When we process personal data, the individual rights of the
              Data Subjects must be protected. All personal data must be collected and processed in
              a legal and fair manner.
            </li>
            <li>
              <strong>Restricted to a specific purpose</strong>. The personal data of Data Subject must be processed
              only for specific purposes.
            </li>
            <li>
              <strong>Transparency</strong>. The Data Subject must be informed of how his/her data
              is being collected, processed and used.
            </li>
          </ul>

          <h1>2. What personal data we collect and process</h1>
          <p>ADX collects several different types of personal data for various purposes. Personal
            Data may include, but is not limited to:</p>
          <ul>
            <li>
              Email address
            </li>
            <li>
              First name and last name
            </li>
            <li>
              Phone number
            </li>
            <li>
              Address, State, Province, ZIP/Postal code, City
            </li>
          </ul>

          <h1>3. How we use the personal data</h1>
          <p>ADX uses the collected personal data for various purposes:</p>
          <ul>
            <li>
              To provide you with services
            </li>
            <li>
              To notify you about changes to our services and/or products
            </li>
            <li>
              To provide customer support
            </li>
            <li>
              To gather analysis or valuable information so that we can improve our services
            </li>
            <li>
              To detect, prevent and address technical issues
            </li>
          </ul>

          <h1>4. Legal basis for collecting and processing personal data</h1>
          <p>ADX legal basis for collecting and using the personal data described in this Data Protection Policy depends
            on the
            personal data we collect and the specific context in which we collect the information:</p>
          <ul>
            <li>
              ADX needs to perform a contract with you
            </li>
            <li>
              You have given ADX permission to do so
            </li>
            <li>
              Processing your personal data is in ADX legitimate interests
            </li>
            <li>
              ADX needs to comply with the law
            </li>
          </ul>

          <h1>5. Retention of personal data</h1>
          <p>ADX will retain your personal information only for as long as is necessary for the purposes set out in this
            Data
            Protection Policy.</p>
          <p>ADX will retain and use your information to the extent necessary to comply with our legal obligations,
            resolve
            disputes, and enforce our policies.</p>

          <h1>6. Data protection rights</h1>
          <p>If you are a resident of the European Economic Area (EEA), you have certain data protection rights. If you
            wish to be
            informed what personal data we hold about you and if you want it to be removed from our systems, please
            contact us.</p>
          <p>In certain circumstances, you have the following data protection rights:</p>
          <ul>
            <li>
              The right to access, update or to delete the information we have on you
            </li>
            <li>
              The right of rectification
            </li>
            <li>
              The right to object
            </li>
            <li>
              The right of restriction
            </li>
            <li>
              The right to data portability
            </li>
            <li>
              The right to withdraw consent
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>

</template>
<script>
export default {
  data() {
    return {
      path: "Privacy Policy"
    }
  },
  created() {
    this.$nuxt.$emit('breadcrumb', this.path);
  }
}
</script>
