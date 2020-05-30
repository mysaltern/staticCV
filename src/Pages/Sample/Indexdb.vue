<template>
  <div class="container h-100">
    <div v-bind:class="{ diccounect: !isOnline }">
      <div class="row h-100 justify-content-center align-items-center">
        <div v-if="!isOnline" class="col-12 center">
          <i class="fas fa-plug fa-3x"></i>

          <h5>offline</h5>
        </div>
        <div v-else class="col-12">
          <i class="fas fa-wifi fa-3x" style="color:green"></i>

          <h5>online</h5>
        </div>

        <!--Section: Contact v.2-->
        <section class="mb-4">
          <!--Section heading-->
          <h2 class="h1-responsive font-weight-bold text-center my-4">
            Contact us
          </h2>
          <!--Section description-->
          <p class="text-center w-responsive mx-auto mb-5">
            Do you have any questions? Please do not hesitate to contact us
            directly.
          </p>

          <div class="row">
            <!--Grid column-->
            <div class="col-md-9 mb-md-0 mb-5">
              <form
                id="contact-form"
                name="contact-form"
                action="mail.php"
                method="POST"
              >
                <!--Grid row-->
                <div class="row">
                  <!--Grid column-->
                  <div class="col-md-6">
                    <div class="md-form mb-0">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        class="form-control"
                      />
                      <label for="name" class="">Your name</label>
                    </div>
                  </div>
                  <!--Grid column-->

                  <!--Grid column-->
                  <div class="col-md-6">
                    <div class="md-form mb-0">
                      <input
                        type="text"
                        id="email"
                        name="email"
                        class="form-control"
                      />
                      <label for="email" class="">Your email</label>
                    </div>
                  </div>
                  <!--Grid column-->
                </div>
                <!--Grid row-->

                <!--Grid row-->
                <div class="row">
                  <div class="col-md-12">
                    <div class="md-form mb-0">
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        class="form-control"
                      />
                      <label for="subject" class="">Subject</label>
                    </div>
                  </div>
                </div>
                <!--Grid row-->

                <!--Grid row-->
                <div class="row">
                  <!--Grid column-->
                  <div class="col-md-12">
                    <div class="md-form">
                      <textarea
                        type="text"
                        id="message"
                        name="message"
                        rows="5"
                        class="form-control md-textarea"
                      ></textarea>
                      <label for="message">Your message</label>
                    </div>
                  </div>
                </div>
                <!--Grid row-->
              </form>

              <div class="text-center text-md-left">
                <a class="btn btn-outline-success" v-if="isOnline">Send</a>
                <a class="btn btn-outline-primary" v-else
                  >Oh you can only Save
                </a>
              </div>
              <div class="status"></div>
            </div>
            <!--Grid column-->
          </div>
        </section>
        <!--Section: Contact v.2-->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      // attachClass: true
    };
  },
  computed: {
    // list: function() {
    //   return this.$store.state.transaction.list;
    // }
  }
};
</script>
