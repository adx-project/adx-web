<template>
  <section id="collaborate" class="collaborate">
    <div class="container-fluid" data-aos="fade-up">
      <div class="row">
        <div class="col-lg-7 d-flex flex-column justify-content-center align-items-stretch order-2 order-lg-1">
          <div class="content">
            <h3>Whatever your background, <strong>we're looking for passionate volunteers</strong> to help us with
              the project.</h3>
            <p>People with the following profiles can help us build this project. If you're interested
              in collaborate in an interesting Open Source project, get in touch through our
              <strong>
                <NuxtLink to="/#contact">contact form</NuxtLink>
              </strong>.
            </p>
          </div>
          <div class="accordion-list">
            <ul>
              <li>
                <a class="collapse">Frontend & Backend developers</a>
                <div id="accordion-list-1" class="show" data-bs-parent=".accordion-list">
                  <p>
                    Many things are yet to be done and we would be glad to have some help. Our main stack will be
                    <strong>VueJS, Flutter &
                      Python</strong>, but any skills will be welcome!
                  </p>
                </div>
              </li>
              <li>
                <a class="collapse">Graphic designers</a>
                <div id="accordion-list-2" class="show" data-bs-parent=".accordion-list">
                  <p>
                    Of course, we want it all to be pretty and functional. If you're a graphic designer, you're more
                    than welcome.
                  </p>
                </div>
              </li>
              <li>
                <a class="collapse">DevOps</a>
                <div id="accordion-list-3" class="show" data-bs-parent=".accordion-list">
                  <p>
                    We could decidedly use some help with the processes. Help us out configure a nice infrastructure
                    for the project.
                  </p>
                </div>
              </li>
              <li>
                <a class="collapse">Data scientist / Machine Learning / AI scientists</a>
                <div id="accordion-list-4" class="show" data-bs-parent=".accordion-list">
                  <p>
                    We want to create a <strong>repository of scripts and applications that makes the data
                    useful</strong> by
                    correlating observations, creating 3D models of trajectories and much more, but is only
                    in our heads for now. Join us to make it happen.
                  </p>
                </div>
              </li>
              <li>
                <a class="collapse">Video and Image Forensic Analysts</a>
                <div id="accordion-list-40" class="show" data-bs-parent=".accordion-list">
                  <p>
                    A lot of content will need to be analyzed to verify its authenticity.
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

      <div class="row">
        <div class="col-lg-5 align-items-stretch order-1 order-lg-1 img background-skills"
             data-aos="zoom-in"
             data-aos-delay="150">&nbsp;
        </div>
        <div class="col-lg-7 d-flex flex-column justify-content-center align-items-stretch order-2 order-lg-2">
          <div class="accordion-list">
            <ul>
              <li>
                <a class="collapse">Lawyers</a>
                <div id="accordion-list-5" class="show" data-bs-parent=".accordion-list">
                  <p>
                    Knowledge about laws in <strong>Open
                    Source projects, GRPD,
                    NGO creation procedures</strong> or, well, <strong>any kinds of laws</strong> in general.
                    International law would be great.
                  </p>
                </div>
              </li>
              <li>
                <a class="collapse">Translators</a>
                <div id="accordion-list-6" class="show" data-bs-parent=".accordion-list">
                  <p>
                    We would like to see the project
                    translated to every possible language. If you can help with that, <strong>you're in</strong>.
                  </p>
                </div>
              </li>
              <li>
                <a class="collapse">Did we forget you?</a>
                <div id="accordion-list-7" class="show" data-bs-parent=".accordion-list">
                  <p>
                    We're definitively not listing all the skills we'll be needing soon... Community manager?
                    <strong>you're in!</strong>, accountant? <strong>you're in!</strong>, marketing?
                    <strong>you're in!</strong>... just let us know that you want to
                    help and we will be most likely needing you.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-lg-12 d-flex flex-column justify-content-center align-items-stretch order-2 order-lg-1">
          <div class="content">
            <h3>We are additionally <strong>looking for people in the following backgrounds</strong> to help with
              the data in the <strong>ADX Data Warehouse</strong>.</h3>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-6 d-flex flex-column justify-content-center align-items-stretch order-2 order-lg-1">
          <div class="accordion-list">
            <ul>
              <li>
                <a class="collapse"><span>·</span>Meteorologists</a>
              </li>
              <li>
                <a class="collapse"><span>·</span>Astronomers</a>
              </li>
              <li>
                <a class="collapse"><span>·</span>Physicists</a>
              </li>
              <li>
                <a class="collapse"><span>·</span>Astrophotographers</a>
              </li>
              <li>
                <a class="collapse"><span>·</span>Radio operators</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-lg-6 d-flex flex-column justify-content-center align-items-stretch order-2 order-lg-1">
          <div class="accordion-list">
            <ul>
              <li>
                <a class="collapse"><span>·</span><abbr title="Forward-looking infrared">FLIR</abbr> technicians/experts</a>
              </li>
              <li>
                <a class="collapse"><span>·</span>Pilots</a>
              </li>
              <li>
                <a class="collapse"><span>·</span>Air traffic controllers</a>
              </li>
              <li>
                <a class="collapse"><span>·</span>Maritime professionals</a>
              </li>
              <li>
                <a class="collapse"><span>·</span>Radar technicians/experts</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-12">
          <Contact/>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      path: "Collaborate"
    }
  },
  created() {
    this.$nuxt.$emit('breadcrumb', this.path);
  }
}
</script>
