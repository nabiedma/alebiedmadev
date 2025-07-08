<template>
  <div class="container mx-auto md:w-3xl w-full text-center my-40">
    <h2 class="text-4xl text-primary font-extrabold">
      Let's Connect
    </h2>
    <h3 class="text-lg text-base-content my-4">
      Have a question or want me to work on your new project? Drop me a line.
    </h3>
    <div class="card bg-base-200 mt-8 mx-auto w-md shadow-sm">
      <div class="card-body">
        <h2 class="card-title text-xl text-primary">
          Send a message
        </h2>
        <p class="text-left text-base-content">
          I'd love to hear from you. Send me a message and I'll respond as soon as possible.
        </p>
        <div class="mt-4">
          <input
            type="text"
            placeholder="Your name"
            class="input w-full mb-4"
          >
          <input
            type="email"
            placeholder="john@doe.com"
            class="input w-full mb-4"
          >
          <textarea class="textarea w-full mb-4 resize-y" placeholder="Your message" />
        </div>
        <button class="btn btn-wide max-w-full btn-primary">
          Send Message
        </button>
      </div>
    </div>
  </div>
</template>
