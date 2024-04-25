<script setup>
import MainHeader from "@/components/layout/MainHeader.vue";
import SignupProgress from "@/views/signup/components/SignupProgress.vue";
import { useRouter } from "vue-router";
import landingIntroImage from "@/images/LandingIntro.png";

const router = useRouter();
const onClickedDone = () => {
    router.push("/signup/info");
};
</script>

<template>
    <div class="w-100 h-100">
        <main-header start="back" end="" :title="false" />
        <main class="w-100 h-100" style="padding-top: 60px;">
            <div class="mx-auto" style="max-width: 390px; min-width: 360px;">
                <img :src="landingIntroImage" alt="" width="100%" />
            </div>
        </main>
    </div>
</template>

<style scoped></style>
