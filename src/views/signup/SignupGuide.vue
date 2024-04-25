<script setup>
import MainHeader from "@/components/layout/MainHeader.vue";
import SignupProgress from "@/views/signup/components/SignupProgress.vue";
import { useRouter } from "vue-router";

const router = useRouter();
const onClickedDone = () => {
    router.push("/signup/info");
};
</script>

<template>
    <div class="w-100 h-100">
        <main-header start="" end="" :title="false" />
        <main class="w-100 h-100" style="padding-top: 60px;">
            <div class="mx-auto" style="max-width: 390px; min-width: 360px;">
                <div class="w-100 d-flex flex-column justify-center align-center" style="padding: 29px 26px;">
                    <signup-progress />
                    <div
                        style="width: fit-content; padding: 9px 19px; border: 1px solid #D9D9D9; border-radius: 16px; box-shadow: 0px 4px 4px 0px #60E0E099; text-align: center; margin-bottom: 29px;"
                    >
                        <span style="color: #3B3B3D; font-size: 20px;font-weight: 700;line-height: 24px;text-align: center;"
                            >프로필 작성 시 주의사항 3가지</span
                        >
                    </div>
                    <div
                        class="d-flex flex-column"
                        style="gap: 30px; border-radius: 16px; box-shadow: 4px 4px 10px 0px #60E0E0; padding: 38px 11px; margin-bottom: 70px;"
                    >
                        <div class="d-flex flex-column" style="gap: 3px;">
                            <span style="font-size: 18px;font-weight: 700;line-height: 22px;">1. 사실과 동일한 정보만 입력해주세요</span>
                            <span style="font-size: 12px;font-weight: 500;line-height: 15px;padding-left: 10px;"
                                >Ex) 흡연 > 비흡연, 172CM > 180CM, 중소기업 > 대기업</span
                            >
                        </div>
                        <div class="d-flex flex-column" style="gap: 3px;">
                            <span style="font-size: 18px; font-weight: 700; line-height: 22px;">2. 매력적인 사진을 등록해주세요</span>
                            <span style="font-size: 12px; font-weight: 500; line-height: 15px; padding-left: 10px;"
                                >Ex) 똑같은 사진 중복 등록 X, AI 프로필 등록 X</span
                            >
                            <span style="color: #F23030; font-size: 12px; font-weight: 500; line-height: 15px; padding-left: 10px; "
                                >*프로필 사진, 남이 찍어준 사진 등록 권장</span
                            >
                        </div>
                        <div class="d-flex flex-column" style="gap: 3px;">
                            <span style="font-size: 18px; font-weight: 700; line-height: 22px; ">3. 모든 내용은 성의있게 작성해주세요</span>
                            <span style="font-size: 12px; font-weight: 500; line-height: 15px; padding-left: 10px;"
                                >Ex) 좋은 사람 만나러 왔어요 X</span
                            >
                            <span style="color: #F23030; font-size: 12px; font-weight: 500; line-height: 15px; padding-left: 10px;"
                                >*주변 사람들의 평가 & 가지관이 들어나도록 작성 권장</span
                            >
                        </div>
                        <div
                            class="d-flex flex-column"
                            style=" gap: 3px; color: #000000B2; font-size: 18px; font-weight: 700; line-height: 21.78px; text-align: center;"
                        >
                            <span>정성껏 작성된 프로필일수록</span>
                            <span>매력적인 상대방이 매칭됩니다.</span>
                        </div>
                    </div>
                    <div>
                        <v-btn
                            style="height: fit-content; border: 1px solid #3B3B3D; border-radius: 16px; box-shadow: 0 4px 4px 0 #00000040; color: #3B3B3D; font-size: 20px; font-weight: 700; line-height: 24px; padding: 8px 26px; letter-spacing: 0;"
                            @click="onClickedDone"
                            >확인했습니다.</v-btn
                        >
                    </div>
                </div>
            </div>
        </main>
    </div>
</template>

<style scoped></style>
