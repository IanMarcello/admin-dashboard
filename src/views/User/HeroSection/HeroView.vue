<template>
  <div class="text-dark-900 dark:text-light-300">
    <div class="flex items-center justify-center flex-1 px-2">
      <div
        class="py-20 w-full px-4 m-4 rounded-md"
        style="background: linear-gradient(90deg, #667eea 0%, #764ba2 100%)"
      >
        <div class="container mx-auto px-6 dark:text-dark-900">
          <h2 class="text-4xl font-bold mb-2">
            Devil May Cry 5 Special Edition
          </h2>
          <h3 class="text-2xl mb-8">
            The fifth installment of Devil May Cry game series.
          </h3>

          <button
            class="font-bold rounded-full py-4 px-8 shadow-lg uppercase tracking-wider"
          >
            Pre Order
          </button>
        </div>
      </div>
    </div>

    <div>
      <section class="container mx-auto px-6 p-10">
        <h2 class="text-4xl font-bold text-center mb-8">Characters</h2>
        <div class="flex items-center flex-wrap mb-5">
          <div class="w-full md:w-1/2">
            <h4
              class="glitch-noise text-3xl font-bold mb-3"
              data-glitch-noise="Nero"
            >
              Nero
            </h4>
            <p class="mb-8 dark:text-light-500">
              One of the main protagonists of the Devil May Cry franchise. He
              first appeared as a playable character in Devil May Cry 4, and
              later in Devil May Cry 5. He was raised in Fortuna and served as a
              Holy Knight in the Order of the Sword, a religious group that
              worships Sparda and fights to protect the world from demons. It is
              later revealed that he is the son of Vergil, nephew of Legendary
              Devil Hunter Dante, and grandson of Legendary Dark Knight Sparda.
            </p>
          </div>
          <div class="w-full md:w-1/2">
            <img
              src="@/assets/images/content/nero.png"
              class="block mx-auto md:mr-auto md:ml-0"
              alt="Nero"
            />
          </div>
        </div>

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
              One of the main protagonists of the Devil May Cry franchise, and
              the main playable character for the majority of the games in the
              series. He is the second son of the demon Sparda and the human
              Eva, the younger twin brother of Vergil, and the uncle of Nero.
              Dante is a paranormal mercenary, private investigator and
              vigilante Devil Hunter dedicated to exterminating evil demons and
              other malevolent supernatural forces; a mission he follows in
              pursuit of those that killed his mother and corrupted his brother.
            </p>
          </div>
        </div>

        <div class="flex items-center flex-wrap mb-5">
          <div class="w-full md:w-1/2">
            <h4 class="glitch text-3xl font-bold mb-3" data-glitch="Vergil">
              Vergil
            </h4>
            <p class="mb-8 dark:text-light-500">
              The older twin brother of Dante and one of the main antagonists of
              the Devil May Cry franchise. Following the death of their mother
              as children, Vergil and Dante went their separate ways, with
              Vergil rejecting his humanity and embracing his demonic heritage,
              in contrast with his younger brother's embrace of humanity and
              initial rejection of the demonic. Stoic and reserved, Vergil
              displays a willingness to do anything in his quest to obtain the
              power of his father, Sparda.
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
      </section>
    </div>

    <div>
      <section>
        <div class="container mx-auto px-6 py-20">
          <h2 class="text-4xl font-bold text-center mb-8">Review Scores</h2>
          <div class="flex flex-wrap md:flex-nowrap md:justify-between">
            <div class="w-full md:w-1/3 rounded shadow-lg py-4 px-4 mb-4">
              <p class="text-center font-bold text-2xl mb-5">8.5/10</p>
              <p class="text-center font-bold text-4xl">GameZone</p>
            </div>

            <div
              class="w-full md:w-1/3 md:mx-10 rounded shadow-lg py-4 px-2 mb-4 mx-0"
            >
              <p class="text-center font-bold text-2xl mb-5">9.0/10</p>
              <p class="text-center font-bold text-4xl">GameSpot</p>
            </div>

            <div class="w-full md:w-1/3 rounded shadow-lg py-4 px-2 mb-4">
              <p class="text-center font-bold text-2xl mb-5">9.5/10</p>
              <p class="text-center font-bold text-4xl">IGN</p>
            </div>
          </div>
        </div>
      </section>
    </div>

    <div>
      <section class="px-4 m-4 rounded-md" style="background-color: #667eea">
        <div class="container mx-auto px-6 text-center py-20">
          <h2 class="mb-6 text-4xl font-bold text-center">Limited in Stock</h2>
          <h3 class="my-4 text-2xl">
            Get yourself the Devil May Cry 5 Special Edition!
            <br />
            To Play as Vergil (The Alpha and the Omega)
          </h3>
          <button
            class="font-bold rounded-full mt-6 py-4 px-8 shadow-lg uppercase tracking-wider"
          >
            Pre Order
          </button>
        </div>
      </section>
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

.glitch-noise {
  position: relative;
  z-index: 1;
}

.glitch-noise:before {
  content: attr(data-glitch-noise);
  position: absolute;
  top: 0;
  left: -2px;
  width: 100%;
  overflow: hidden;
  clip: rect(0, 900px, 0, 0);
  animation: noise-before 3s infinite linear alternate-reverse;
}

.glitch-noise:after {
  content: attr(data-glitch-noise);
  position: absolute;
  top: 0;
  left: 2px;
  width: 100%;
  overflow: hidden;
  clip: rect(0, 900px, 0, 0);
  animation: noise-after 2s infinite linear alternate-reverse;
}

@keyframes noise-before {
  0% {
    clip: rect(61px, 9999px, 52px, 0);
  }

  5% {
    clip: rect(33px, 9999px, 144px, 0);
  }

  10% {
    clip: rect(121px, 9999px, 115px, 0);
  }

  15% {
    clip: rect(144px, 9999px, 162px, 0);
  }

  20% {
    clip: rect(62px, 9999px, 180px, 0);
  }

  25% {
    clip: rect(34px, 9999px, 42px, 0);
  }

  30% {
    clip: rect(147px, 9999px, 179px, 0);
  }

  35% {
    clip: rect(99px, 9999px, 63px, 0);
  }

  40% {
    clip: rect(188px, 9999px, 122px, 0);
  }

  45% {
    clip: rect(154px, 9999px, 14px, 0);
  }

  50% {
    clip: rect(63px, 9999px, 37px, 0);
  }

  55% {
    clip: rect(161px, 9999px, 147px, 0);
  }

  60% {
    clip: rect(109px, 9999px, 175px, 0);
  }

  65% {
    clip: rect(157px, 9999px, 88px, 0);
  }

  70% {
    clip: rect(173px, 9999px, 131px, 0);
  }

  75% {
    clip: rect(62px, 9999px, 70px, 0);
  }

  80% {
    clip: rect(24px, 9999px, 153px, 0);
  }

  85% {
    clip: rect(138px, 9999px, 40px, 0);
  }

  90% {
    clip: rect(79px, 9999px, 136px, 0);
  }

  95% {
    clip: rect(25px, 9999px, 34px, 0);
  }

  100% {
    clip: rect(173px, 9999px, 166px, 0);
  }
}

@keyframes noise-after {
  0% {
    clip: rect(26px, 9999px, 33px, 0);
  }

  5% {
    clip: rect(140px, 9999px, 198px, 0);
  }

  10% {
    clip: rect(184px, 9999px, 89px, 0);
  }

  15% {
    clip: rect(121px, 9999px, 6px, 0);
  }

  20% {
    clip: rect(181px, 9999px, 99px, 0);
  }

  25% {
    clip: rect(154px, 9999px, 133px, 0);
  }

  30% {
    clip: rect(134px, 9999px, 169px, 0);
  }

  35% {
    clip: rect(26px, 9999px, 187px, 0);
  }

  40% {
    clip: rect(147px, 9999px, 137px, 0);
  }

  45% {
    clip: rect(31px, 9999px, 52px, 0);
  }

  50% {
    clip: rect(191px, 9999px, 109px, 0);
  }

  55% {
    clip: rect(74px, 9999px, 54px, 0);
  }

  60% {
    clip: rect(145px, 9999px, 75px, 0);
  }

  65% {
    clip: rect(153px, 9999px, 198px, 0);
  }

  70% {
    clip: rect(99px, 9999px, 136px, 0);
  }

  75% {
    clip: rect(118px, 9999px, 192px, 0);
  }

  80% {
    clip: rect(1px, 9999px, 83px, 0);
  }

  85% {
    clip: rect(145px, 9999px, 98px, 0);
  }

  90% {
    clip: rect(121px, 9999px, 154px, 0);
  }

  95% {
    clip: rect(156px, 9999px, 44px, 0);
  }

  100% {
    clip: rect(67px, 9999px, 122px, 0);
  }
}

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
