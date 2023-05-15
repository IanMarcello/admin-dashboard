<template>
  <div class="flex items-center flex-wrap mb-5">
    <div class="w-full md:w-1/2 md:px-8">
      <img
        src="@/assets/images/content/dante.png"
        class="block mx-auto md:mr-0 md:ml-auto"
        alt="Dante"
      />
    </div>
    <div class="w-full md:w-1/2">
      <h4 class="glitch-transform text-3xl font-bold mb-3">Dante</h4>
      <p class="mb-8 dark:text-light-500">
        One of the main protagonists of the Devil May Cry franchise, and the
        main playable character for the majority of the games in the series. He
        is the second son of the demon Sparda and the human Eva, the younger
        twin brother of Vergil, and the uncle of Nero. Dante is a paranormal
        mercenary, private investigator and vigilante Devil Hunter dedicated to
        exterminating evil demons and other malevolent supernatural forces; a
        mission he follows in pursuit of those that killed his mother and
        corrupted his brother.
      </p>
    </div>
  </div>
</template>

<style>
.glitch-transform {
  position: relative;
  animation: shift 4s ease-in-out infinite alternate;
  transform: skewX(0deg);
  z-index: 1;
}

@keyframes shift {
  0%,
  40%,
  44%,
  58%,
  61%,
  65%,
  69%,
  73%,
  100% {
    transform: skewX(0deg);
  }

  41% {
    transform: skewX(10deg);
  }

  42% {
    transform: skewX(-10deg);
  }

  59% {
    transform: skewX(40deg);
  }

  60% {
    transform: skewX(-40deg);
  }

  63% {
    transform: skewX(10deg);
  }

  70% {
    transform: skewX(-50deg);
  }

  71% {
    transform: skewX(10deg);
  }
}
</style>
