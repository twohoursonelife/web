<script setup lang="ts">
const title = 'First Time Playing Guide | Two Hours One Life'
const description = 'Learn how to play Two Hours One Life for the first time. Join our Discord to get your account, download the client, extract the files, and log in.'

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  ogImage: '/img/social.jpg',
  twitterCard: 'summary_large_image',
})
</script>

<template>
  <div class="min-h-screen bg-zinc-50 py-16 px-6 font-body text-zinc-900">
    <div class="max-w-4xl mx-auto space-y-12">
      
      <div class="text-center space-y-3 pt-6">
        <h1 class="text-3xl md:text-4xl font-extrabold font-heading text-zinc-900 tracking-tight">
          Playing Two Hours One Life for the First Time
        </h1>
        <p class="text-zinc-600 text-base md:text-lg max-w-xl mx-auto font-medium leading-relaxed">
          Follow these simple steps to set up your account, download the game client, and start playing.
        </p>
      </div>

      <div class="space-y-6">
        
        <section class="bg-white border border-zinc-200 rounded-none p-8 shadow-sm hover:border-zinc-300 transition-colors flex flex-col md:flex-row gap-6 items-start">
          <div class="w-10 h-10 rounded-none bg-primary-50 text-primary-700 border border-primary-200 flex items-center justify-center shrink-0 font-heading font-extrabold text-lg">
            1
          </div>
          <div class="space-y-4 flex-1">
            <div class="space-y-1.5">
              <h2 class="text-xl font-bold font-heading text-zinc-900 tracking-tight">
                Join our Discord to Get an Account
              </h2>
              <p class="text-zinc-600 text-sm md:text-base leading-relaxed font-medium">
                Join our Discord, accept the rules, and then our 2HOL Dictator bot will create an account for you and send you the information in a message. Can't find the message? Type '/account' in our Discord and the bot will provide you the details again.
              </p>
            </div>
            <div class="pt-1">
              <UButton
                to="https://discord.gg/Jd9Es3f"
                target="_blank"
                size="md"
                
              >
                Join Discord
              </UButton>
            </div>
          </div>
        </section>

        <section class="bg-white border border-zinc-200 rounded-none p-8 shadow-sm hover:border-zinc-300 transition-colors flex flex-col md:flex-row gap-6 items-start">
          <div class="w-10 h-10 rounded-none bg-primary-50 text-primary-700 border border-primary-200 flex items-center justify-center shrink-0 font-heading font-extrabold text-lg">
            2
          </div>
          <div class="space-y-5 flex-1 w-full">
            <div class="space-y-1.5">
              <h2 class="text-xl font-bold font-heading text-zinc-900 tracking-tight">
                Download the Game Client
              </h2>
              <p class="text-zinc-600 text-sm md:text-base leading-relaxed font-medium">
                Download for Windows or Linux on our download page. You will download a .zip file that you need to extract to play the game.
              </p>
            </div>

            <div class="grid sm:grid-cols-2 gap-4 w-full">
              <div class="border border-zinc-200 rounded-none p-5 bg-zinc-50 flex flex-col justify-between space-y-3">
                <div class="space-y-1">
                  <div class="flex items-center gap-2">
                    <UIcon name="i-lucide-monitor" class="w-5 h-5 text-zinc-600" />
                    <h3 class="font-bold font-heading text-sm text-zinc-900">Windows</h3>
                  </div>
                  <p class="text-zinc-500 text-xs font-medium">Windows build via download page</p>
                </div>
                <UButton
                  to="/download"
                  icon="i-lucide-download"
                >
                  Download for Windows
                </UButton>
              </div>

              <div class="border border-zinc-200 rounded-none p-5 bg-zinc-50 flex flex-col justify-between space-y-3">
                <div class="space-y-1">
                  <div class="flex items-center gap-2">
                    <UIcon name="i-lucide-terminal" class="w-5 h-5 text-zinc-600" />
                    <h3 class="font-bold font-heading text-sm text-zinc-900">Linux</h3>
                  </div>
                  <p class="text-zinc-500 text-xs font-medium">Linux build via download page</p>
                </div>
                <UButton
                  to="/download"
                  target="_blank"
                  variant="outline"
                  icon="i-lucide-download"
                >
                  Download for Linux
                </UButton>
              </div>
            </div>
          </div>
        </section>

        <section class="bg-white border border-zinc-200 rounded-none p-8 shadow-sm hover:border-zinc-300 transition-colors flex flex-col md:flex-row gap-6 items-start">
          <div class="w-10 h-10 rounded-none bg-primary-50 text-primary-700 border border-primary-200 flex items-center justify-center shrink-0 font-heading font-extrabold text-lg">
            3
          </div>
          <div class="space-y-4 flex-1">
            <div class="space-y-1.5">
              <h2 class="text-xl font-bold font-heading text-zinc-900 tracking-tight">
                Extract the Game Files
              </h2>
              <p class="text-zinc-600 text-sm md:text-base leading-relaxed font-medium">
                Install the game by extracting the files from the .zip file you just downloaded. Do not move files out of the folder that is created when you extract. All the files are needed to run the game. When extracting is finished, you can move the folder to your Documents.
              </p>
            </div>
            
            <div class="grid md:grid-cols-2 gap-4 pt-2">
              <div class="bg-zinc-100 border border-zinc-200 rounded-none p-5 flex gap-3 items-start">
                <UIcon name="i-lucide-monitor" class="w-5 h-5 text-primary-600 shrink-0 mt-0.5" />
                <div class="space-y-1">
                  <h4 class="font-bold text-zinc-900 text-sm font-heading">Windows Guide</h4>
                  <p class="text-zinc-600 text-xs leading-relaxed font-medium">
                    Right-click the downloaded archive .zip folder and select “Extract All…”. Follow the prompts to save the game contents. <strong>Do not save the game folder to your desktop as this can cause permissions issues.</strong> 7zip and similar applications unzip faster.
                  </p>
                </div>
              </div>

              <div class="bg-zinc-100 border border-zinc-200 rounded-none p-5 flex gap-3 items-start">
                <UIcon name="i-lucide-terminal" class="w-5 h-5 text-primary-600 shrink-0 mt-0.5" />
                <div class="space-y-1">
                  <h4 class="font-bold text-zinc-900 text-sm font-heading">Linux Guide</h4>
                  <p class="text-zinc-600 text-xs leading-relaxed font-medium">
                    Right-click the downloaded archive .zip folder and select “Extract Here” or “Extract to…” to choose a different folder to extract to. The Linux version is compiled and tested on Ubuntu.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="bg-white border border-zinc-200 rounded-none p-8 shadow-sm hover:border-zinc-300 transition-colors flex flex-col md:flex-row gap-6 items-start">
          <div class="w-10 h-10 rounded-none bg-primary-50 text-primary-700 border border-primary-200 flex items-center justify-center shrink-0 font-heading font-extrabold text-lg">
            4
          </div>
          <div class="space-y-4 flex-1">
            <div class="space-y-1.5">
              <h2 class="text-xl font-bold font-heading text-zinc-900 tracking-tight">
                Open the Game and Log In
              </h2>
              <p class="text-zinc-600 text-sm md:text-base leading-relaxed font-medium">
                Once the files have finished extracting, open the extracted folder, double click "OneLife" to run the game. It will take a few minutes to load for the first time. Please wait until the loading finishes. It will be faster the next time you play.
              </p>
            </div>

            <ul class="space-y-3 pl-1">
              
              <li class="flex items-start gap-3">
                <UIcon name="i-lucide-check-square" class="w-4 h-4 text-primary-600 shrink-0 mt-1" />
                <span class="text-zinc-700 text-sm font-medium">
                  <strong>Credentials:</strong> Join our Discord to get your login details from the 2HOL Dictator bot. Copy-and-paste them into the client and then click 'PLAY' to start playing!
                </span>
              </li>
              <li class="flex items-start gap-3">
                <UIcon name="i-lucide-check-square" class="w-4 h-4 text-primary-600 shrink-0 mt-1" />
                <span class="text-zinc-700 text-sm font-medium">
                  <strong>Auto-saving details:</strong> The game will save these details for you so you do not need to enter them each time. You should make sure to keep this information private.
                </span>
              </li>
              <li class="flex items-start gap-3">
                <UIcon name="i-lucide-check-square" class="w-4 h-4 text-primary-600 shrink-0 mt-1" />
                <span class="text-zinc-700 text-sm font-medium">
                  <strong>Linux launching:</strong> On Linux, you may need to open the command prompt and enter <code class="bg-zinc-100 px-1.5 py-0.5 rounded-none font-mono text-xs text-zinc-900 border border-zinc-200">./OneLife</code> to start the game.
                </span>
              </li>
            </ul>
          </div>
        </section>

      </div>

      <div class="bg-zinc-900 text-white rounded-none p-8 space-y-4 shadow-md border border-zinc-800">
        <h3 class="text-xl font-bold font-heading">Your First Life (The Tutorial)</h3>
        <p class="text-zinc-300 text-sm md:text-base leading-relaxed font-medium">
          The first time you log in, you will be in the tutorial, far away from other players. You need to read and follow the instructions to learn the basic game controls and mechanics. There will be a challenge at the end of the tutorial to make sure you are ready to be born into a family for real! Pay attention to the food mechanics (called Yum), and how to use the crafting guide.
        </p>
      </div>

      <div class="bg-zinc-100 border border-zinc-200 rounded-none p-8 text-center space-y-4 shadow-sm">
        <h3 class="text-lg font-bold font-heading text-zinc-900">After your first life</h3>
        <p class="text-zinc-600 text-sm max-w-xl mx-auto font-medium leading-relaxed">
          Take your time to start learning the game in each life, but don't forget to explore our Discord. There are thousands of welcoming people willing to help you find your way and learn. As you play more, you'll be able to access new roles, which will unlock more channels for you to contribute and connect with the community.
        </p>
        <div class="pt-1">
          <UButton
            to="https://discord.gg/Jd9Es3f"
            target="_blank"
            size="md"
          >
            Join Discord
          </UButton>
        </div>
      </div>

    </div>
  </div>
</template>