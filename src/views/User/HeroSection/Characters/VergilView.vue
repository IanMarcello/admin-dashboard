<template>
  <div class="flex items-center flex-wrap mb-5">
    <div class="w-full md:w-1/2">
      <h4 class="glitch text-3xl font-bold mb-3" data-glitch="Vergil">
        Vergil
      </h4>
      <p class="mb-8 dark:text-light-500">
        The older twin brother of Dante and one of the main antagonists of the
        Devil May Cry franchise. Following the death of their mother as
        children, Vergil and Dante went their separate ways, with Vergil
        rejecting his humanity and embracing his demonic heritage, in contrast
        with his younger brother's embrace of humanity and initial rejection of
        the demonic. Stoic and reserved, Vergil displays a willingness to do
        anything in his quest to obtain the power of his father, Sparda.
      </p>
    </div>
    <div class="w-full md:w-1/2">
      <img
        src="@/assets/images/content/vergil.png"
        class="mx-auto md:mr-auto md:ml-0"
        alt="Vergil"
      />
    </div>
  </div>
</template>

<style>
.glitch {
  position: relative;
  z-index: 1;
}

.glitch:before,
.glitch:after {
  display: block;
  content: attr(data-glitch);
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0.8;
}

.glitch:before {
  animation: glitch-color 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) both
    infinite;
  color: #00ffff;
  z-index: -1;
}

.glitch:after {
  animation: glitch-color 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) reverse both
    infinite;
  color: #5900ff;
  z-index: -2;
}

@keyframes glitch-color {
  0% {
    transform: translate(0);
  }

  20% {
    transform: translate(-3px, 3px);
  }

  40% {
    transform: translate(-3px, -3px);
  }

  60% {
    transform: translate(3px, 3px);
  }

  80% {
    transform: translate(3px, -3px);
  }

  to {
    transform: translate(0);
  }
}
</style>
