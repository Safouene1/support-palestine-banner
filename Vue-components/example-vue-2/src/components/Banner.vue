<script>
import BlurDiv from './BlurDiv.vue';

export default {
  components: {
    BlurDiv
  },
  name: 'Banner',
  data() {
    return {
      isDarkMode: false,
      title: "Free Palestine 🇵🇸",
      description: "Stand for humanity! Palestine has a right to defend itself. Together, we can put an end to the Gaza genocide. Let's unite to #SAVEGAZA and ensure that every life in this region has access to the most basic necessities.",
      linkTo: "https://twitter.com/search?q=%23PalestineLivesMatter&src=typeahead_click"
    }
  }, 
  computed: {
    darkModeClasses() {
      return this.isDarkMode === true ? {background: "bg-gray-600/70", text: "text-gray-300"} : {background: "bg-gray-50/70", text: "text-gray-900"}
    }
  }
}

</script>

<template>
  <div
      :class="['relative sm:sticky top-0 isolate z-50 flex items-center overflow-hidden px-3.5 py-2.5 backdrop-blur-sm  md:px-6', darkModeClasses.background]"
    >
      <div
        class="absolute left-[max(-7rem,calc(50%-52rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"
        aria-hidden="true"
      >
        <BlurDiv />
      </div>
      <div
        class="absolute left-[max(45rem,calc(50%+8rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"
        aria-hidden="true"
      >
        <BlurDiv />
      </div>
      <p
        :class="['mx-auto text-sm leading-4 sm:leading-6', darkModeClasses.text]"
      >
        <a :href="linkTo" target="_blank">
          <strong className="font-semibold">{{title}}</strong>
          <svg
            viewBox="0 0 2 2"
            class="mx-2 inline h-0.5 w-0.5 fill-current"
            aria-hidden="true"
          >
            <circle cx={1} cy={1} r={1} />
          </svg>
          {{description}}
        </a>
      </p>
    </div>
</template>


