<template>
  <section id="contact" class="contact">
    <div class="container" data-aos="fade-up">

      <div class="section-title">
        <h2>Contact us</h2>
      </div>

      <div class="row">
        <div class="col-lg-12 d-flex align-items-stretch">
          <form @submit.prevent="sendMail" class="php-email-form">
            <fieldset :disabled="state !== 0">
              <div class="row">
                <div class="form-group col-md-6">
                  <label for="firstname">First Name</label>
                  <input v-model.trim="values.firstName" type="text" name="firstname" class="form-control"
                         id="firstname"
                         required>
                </div>
                <div class="form-group col-md-6">
                  <label for="lastname">Last Name</label>
                  <input v-model.trim="values.lastName" type="text" name="lastname" class="form-control" id="lastname"
                         required>
                </div>
              </div>
              <div class="row">
                <div class="form-group col-md-12">
                  <label for="email">Your Email</label>
                  <input v-model.trim="values.email" type="email" class="form-control" name="email" id="email" required>
                </div>
              </div>
              <div class="row">
                <div class="form-group">
                  <label for="subject">Why are you contacting us?</label>
                  <select v-model="values.subject" id="subject" name="subject" class="form-control" required>
                    <option disabled value="">Please select one</option>
                    <option v-for="s in subjects" v-bind:value="{ id: s.id, text: s.label }">
                      {{ s.label }}
                    </option>
                  </select>
                  <p v-if="values.subject.id===this.subjects[1].id" class="contact-info-text">
                    Note that reporting an observation requires further steps. Please, briefly describe
                    the situation and we will contact you as soon as possible.
                  </p>
                </div>
              </div>
              <div class="row">
                <div v-show="values.subject.id===this.subjects[2].id" class="form-group col-md-6">
                  <label for="proposed-skills">Proposed skill</label>
                  <input v-model.trim="values.skills" type="text" class="form-control" name="proposed-skills"
                         id="proposed-skills" placeholder="Which skills can you bring to the project?">
                </div>
                <div v-show="values.subject.id===this.subjects[2].id" class="form-group col-md-6">
                  <label for="profile">Public profile (LinkedIn or similar)</label>
                  <input v-model.trim="values.profile" type="text" class="form-control" name="profile" id="profile"
                         placeholder="Please let us know a bit about you.">
                </div>
              </div>
              <div class="row">
                <div class="form-group">
                  <label for="message">Message</label>
                  <textarea v-model.trim="values.message" class="form-control" id="message" name="message" rows="10"
                            placeholder="Here we go!"
                            required></textarea>
                </div>
              </div>
              <div class="row">
                <div class="form-inline">
                  <div class="form-group">
                    <input v-model="values.acceptedTerms" type="checkbox" id="accept" name="accept"/>
                    <label class="form-check-label" for="accept">I accept the
                      <NuxtLink to="terms-and-conditions">Terms and Conditions</NuxtLink>
                      and the
                      <NuxtLink to="privacy-policy">Privacy Policy</NuxtLink>
                    </label>
                  </div>
                </div>
              </div>
              <div class="my-3">
                <div v-show="state===1" class="loading">Sending</div>
                <div v-show="state===3" class="error-message"></div>
                <div v-show="state===2" class="sent-message">Your message has been sent. Thank you!</div>
              </div>
              <div v-if:="state===0" class="text-center">
                <button :disabled="!values.acceptedTerms" type="submit">Send Message</button>
              </div>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script type="text/javascript">
export default {
  data() {
    return {
      // 0: init, 1: sending, 2:sent, error:3
      state: 0,
      values: {
        firstName: '',
        lastName: '',
        email: '',
        subject: '',
        skills: '',
        profile: '',
        message: '',
        acceptedTerms: false
      },
      subjects: [
        {id: 0, label: 'I have a general question'},
        {id: 1, label: 'I want to report an observation'},
        {id: 2, label: 'I want to volunteer with the project'},
        {id: 3, label: 'I want to propose a partnership'},
        {id: 4, label: 'I want to support the project'}
      ]
    }
  },
  methods: {
    sendMail() {
      this.state = 1;

      const params = new URLSearchParams({
        'firstName': this.values.firstName,
        'lastName': this.values.lastName,
        'email': this.values.email,
        'subject': this.values.subject.text,
        'message': this.values.message,
        'skills': this.values.skills,
        'profile': this.values.profile
      });


      fetch(process.env.ADX_EMAIL_SENDER_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
        },
        body: params
      })
        .then(async response => {
          const data = await response.json();

          // check for error response
          if (!response.ok) {
            // get error message from body or default to response status
            const error = (data && data.message) || response.status;
            this.state = 3;
            return Promise.reject(error);
          } else {
            this.state = 2;
          }
        })
        .catch(error => {
          console.error('There was an error sending the contact form!', error);
          this.state = 3;
        });
    }
  }
}
</script>
