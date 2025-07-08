<template>
  <footer class="flex flex-col w-full items-center justify-center py-4 px-8">
    <div class="flex md:flex-row flex-col gap-4 md:gap-0 justify-between w-full">
      <div class="flex flex-col w-1/3">
        <h4 class="text-xl text-primary font-bold mb-2">
          AleBiedma.dev
        </h4>
        <p>A personal blog about coding, being a dad and a casual dj/producer from Argentina.</p>
      </div>
      <div class="flex flex-col w-1/3">
        <h4 class="text-xl text-primary font-bold mb-2">
          Quick Links
        </h4>
        <ul>
          <li><a>Home</a></li>
          <li><a>Blog</a></li>
          <li><a>Contact</a></li>
        </ul>
      </div>
      <div class="flex flex-col w-1/3">
        <h4 class="text-xl text-primary font-bold mb-2">
          Connect
        </h4>
        <div class="flex flex-row items-center text-sm mb-2">
          <Icon
            name="tabler:mail"
            size="20"
            class="mr-2"
          /> hola@alebiedma.dev
        </div>
        <div>
          <a
            href="https://github.com/nabiedma"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon
              name="tabler:brand-github"
              size="24"
              class="mr-2 hover:text-primary transition-colors duration-500 ease-in-out"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/nestor-alejandro-biedma-086529156/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon
              name="tabler:brand-linkedin"
              size="24"
              class="mr-2 hover:text-primary transition-colors duration-500 ease-in-out"
            />
          </a>
        </div>
      </div>
    </div>
    <div class="w-full mt-4 text-center">
      <p class="text-sm text-base-content">
        © 2025 AleBiedma.dev. Built with passion in the Patagonia Argentina.
      </p>
    </div>
  </footer>
</template>
