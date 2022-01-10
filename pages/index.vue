<template>
  <div>
    <!-- intro -->
    <section id="hero" class="hero-height d-flex align-items-center">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1"
               data-aos="fade-up" data-aos-delay="200">
            <h1>The Anomalous Data Exchange</h1>
            <h2>Normalizing the unusual</h2>
            <div class="d-flex justify-content-center justify-content-lg-start">
              <NuxtLink to="about" class="btn-get-started scrollto">Learn More</NuxtLink>
              <a href="https://adxproject.knack.com/login#view-records" target="_blank" class="btn-get-involved scrollto">Go to the app</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <main id="main">

      <!-- partners -->
      <section id="clients" class="clients section-bg">
      </section>

      <!-- about -->
      <section id="about" class="about">
        <div class="container" data-aos="fade-up">

          <div class="section-title">
            <h2>About</h2>
          </div>

          <div class="row content">
            <div class="col-lg-4">
              <h4>The ADX project</h4>
              <p>
                The ADX project is an international Non-Governmental Organization whose mission is to
                standardize, collect, and help analyze observations of anomalous phenomena by credible
                observers and sensors.
              </p>
              <NuxtLink to="about" class="btn-learn-more">Learn More</NuxtLink>
            </div>
            <div class="col-lg-4 pt-4 pt-lg-0">
              <h4>ADX Data Standards</h4>
              <p>
                The ADX Data Standards (<strong>ADX-DS)</strong> is a standardized set of
                databases, variables, and formats that allow for easy exchange of data around Anomalous
                Observations (AOs) reported by collaborators.
              </p>
              <NuxtLink to="adx-ds" class="btn-learn-more">Learn More</NuxtLink>
            </div>
            <div class="col-lg-4 pt-4 pt-lg-0">
              <h4>ADX Data Warehouse</h4>
              <p>
                ADX Data Warehouse (<strong>ADX-DW</strong>) connects the scientific community
                to individuals and organizations that hold credible anomalous observations' data. All data
                is normalised using the ADX-DS format to allow for standardization.
              </p>
              <NuxtLink to="adx-dw" class="btn-learn-more">Learn More</NuxtLink>
            </div>
          </div>

        </div>
      </section>

      <!-- observations -->
      <section id="services" class="services section-bg">
        <div class="container" data-aos="fade-up">

          <div class="section-title">
            <h2>Observations</h2>
            <p>The ADX-DS model handles observations made from any platform and has specific
              metadata according to their type. Observations are grouped as below, with common
              tables to describe the observer, sensors, and phenomena observed.</p>
          </div>

          <div class="row">
            <div class="col-xl-6 col-md-12 d-flex align-items-stretch mt-0 mt-xl-0" data-aos="zoom-in"
                 data-aos-delay="100">
              <div class="icon-box">
                <div class="icon"><i class="bx bxs-landscape"></i></div>
                <h4>Land observations</h4>
                <p> Land observations assume the observer to be fixed or moving at a low velocity in relation to the
                  object. The
                  angle of elevation and azimuth of the observation can be described in the object position
                  table. Additional details such as weather conditions, object description, and other common
                  tables will be included in land observations..</p><br/>
              </div>
            </div>

            <div class="col-xl-6 col-md-12 d-flex align-items-stretch mt-0 mt-xl-0" data-aos="zoom-in"
                 data-aos-delay="200">
              <div class="icon-box">
                <div class="icon"><i class="bx bxs-plane-alt"></i></div>
                <h4>Air observations</h4>
                <p>Many pilots both civilians and military have reported encounters with non identifiable objects
                  during flight.</p><br/>
                <p>Airborne observations are supported by instrument data which can be
                  described in the sensor table. ADS-B files and cockpit/radio transmission recordings can be
                  attached to the observation. External sensors such as radar systems can also be linked to
                  aerial observations to corroborate the data and for an 'event' of grouped observations.</p>
              </div>
            </div>

            <div class="col-xl-6 col-md-12 d-flex align-items-stretch mt-0 mt-xl-4" data-aos="zoom-in"
                 data-aos-delay="300">
              <div class="icon-box">
                <div class="icon"><i class="bx bxs-ship"></i></div>
                <h4>Sea observations</h4>
                <p>Similarly to the air observations, sea observations happen often. And in the same way, they
                  can be reported by civilian or military vessels' crews. This kind of observation is supported
                  by the same types of data as air observations, including any specific on board instrument
                  such as SONAR equipment. The Sea and Air tables share common position metadata
                  position tables to describe the position of the ship.</p>
              </div>
            </div>

            <div class="col-xl-6 col-md-12 d-flex align-items-stretch mt-0 mt-xl-4" data-aos="zoom-in"
                 data-aos-delay="400">
              <div class="icon-box">
                <div class="icon"><i class="bx bxs-planet"></i></div>
                <h4>Space observations</h4>
                <p>With the rapidly increasing number of instruments in orbit such as meteorological, private
                  and military satellites, anomalous observations are not uncommon in space. In this table we
                  record the CTCSS file describing the spacecraft’s motion as well as any sensors onboard
                  the craft.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- how it works -->
      <section id="how-it-woks" class="how-it-woks">
        <div class="container-fluid" data-aos="fade-up">

          <div class="section-title">
            <h2>How it works</h2>
          </div>

          <div class="row">

            <div class="col-lg-7 d-flex flex-column justify-content-center align-items-stretch  order-2 order-lg-1">

              <div class="content">
                <h3>This is how we expect ADX to works</h3>
              </div>

              <div class="accordion-list">
                <ul>
                  <li>
                    <a class="show"
                       data-bs-target="#accordion-list-1"><span>01</span>
                      Observation</a>
                    <div id="accordion-list-1" class="show " data-bs-parent=".accordion-list">
                      <p>
                        Partner organisations and individuals report observations according to our data policy.
                      </p>
                      <p>
                        All reports must adhere to the ADX data policy
                      </p>
                      <p>
                        <NuxtLink to="data-policy">Data Policy</NuxtLink>
                      </p>
                    </div>
                  </li>

                  <li>
                    <a data-bs-target="#accordion-list-2" class=""><span>02</span>
                      Question</a>
                    <div id="accordion-list-2" class="show" data-bs-parent=".accordion-list">
                      <p>
                        Observations' data becomes publicly available which, can help scientists to formulate
                        questions and possibly research more deeply into phenomena described in observations.
                      </p>
                    </div>
                  </li>

                  <li>
                    <a data-bs-target="#accordion-list-3" class=""><span>03</span>
                      Hypothesis
                    </a>
                    <div id="accordion-list-3" class="show" data-bs-parent=".accordion-list">
                      <p>
                        Based on the research and questioning, scientists can then formulate hypotheses that
                        may explain patterns found in the anomalous data stored in the ADX data warehouse.
                      </p>
                    </div>
                  </li>

                  <li>
                    <a data-bs-target="#accordion-list-4"
                       class=""><span>04</span>
                      Experiment
                    </a>
                    <div id="accordion-list-4" class="show" data-bs-parent=".accordion-list">
                      <p>
                        Scientists can then develop testable predictions regarding the phenomena, and
                        gather further data through additional observation and experimentation.
                      </p>
                    </div>
                  </li>

                  <li>
                    <a data-bs-target="#accordion-list-5"
                       class=""><span>05</span>
                      Analysis
                    </a>
                    <div id="accordion-list-5" class="show" data-bs-parent=".accordion-list">
                      <p>
                        Additional data generated while testing these predictions can then be formatted
                        according to the ADX data standards and merged into the ADX data warehouse,
                        strengthening our knowledge base and leading to more questions.
                      </p>
                    </div>
                  </li>

                  <li>
                    <a data-bs-target="#accordion-list-6"
                       class=""><span>06</span>
                      Conclusion</a>
                    <div id="accordion-list-6" class="show" data-bs-parent=".accordion-list">
                      <p>
                        Analysis of experimental results and observations can then be linked directly
                        to observation records in the ADX data warehouse. This analysis will be published
                        on the ADX website with the permission of the authors.
                      </p>
                    </div>
                  </li>

                </ul>
              </div>

            </div>

            <div class="col-lg-5 align-items-stretch order-1 order-lg-2 img background-how-it-works"
                 data-aos="zoom-in"
                 data-aos-delay="150">&nbsp;
            </div>
          </div>

        </div>
      </section>

      <!-- collaborate -->
      <section id="cta" class="cta">
        <div class="container" data-aos="zoom-in">
          <div class="row">
            <div class="col-lg-9 text-center text-lg-start">
              <h3>Want to be part of it?</h3>
              <p>There are many different ways to collaborate with the ADX project. From helping us developing the website
                translate the project to your language, give feedback on what's already done and much more.</p>
              <p>We're just starting. There are many things to be done. Joins us!</p>
            </div>
            <div class="col-lg-3 cta-btn-container text-center">
              <NuxtLink to="collaborate" class="cta-btn align-middle">Find your place</NuxtLink>
            </div>
          </div>
        </div>
      </section>
      <Contact/>
    </main>
  </div>
</template>
<script>
export default {
  layout: 'landing'
}
</script>
