<script setup>
import MainHeader from "@/components/layout/MainHeader.vue";
import { ref } from "vue";
import router from "@/router";
import SignupProgress from "@/views/signup/components/SignupProgress.vue";
import SignupRadio from "@/views/signup/components/SignupRadio.vue";
import {
    datingOptions,
    drinkingOptions,
    educationOptions,
    hobbyOptions,
    jobOptions,
    mbtiOptions,
    personalityOptions,
    smokingOptions
} from "@/views/signup/enum/options";
import { signupInfoStore } from "@/views/signup/store/singupInfoStore";
import { storeToRefs } from "pinia";

const store = signupInfoStore();
const { nickname, detailJob, job, education, smoking, drinking, mbti, personality, hobby, dating } = storeToRefs(store);
const form = ref();

const onClicked = async () => {
    const { valid } = await form.value.validate();

    const radioValid =
        job.value !== "" &&
        education.value !== "" &&
        smoking.value !== "" &&
        drinking !== "" &&
        mbti.value.filter(el => el === "").length === 0 &&
        personality.value.length > 0 &&
        hobby.value.length > 0 &&
        dating.value !== "";

    if (!valid || !radioValid) {
        alert("6번을 제외하고 1 ~ 10번까지 모든 문항을 입력해주세요!");
        return;
    }
    await router.push("/signup/photo");
};

const nicknameRules = [
    value => !!value || "필수 값 입니다.",
    value => /^[가-힣a-zA-Z]+$/.test(value) || "한글 or 영어만 입력가능합니다.",
    value => String(value).length >= 3 || "3 글자 이상",
    value => String(value).length <= 10 || "10 글자 이하"
];

const detailJobRules = [
    value => !!value || "필수 값 입니다.",
    value => /^[가-힣a-zA-Z]+$/.test(value) || "한글 or 영어만 입력가능합니다.",
    value => String(value).length >= 4 || "4 글자 이상",
    value => String(value).length <= 50 || "50 글자 이하"
];
</script>

<template>
    <div class="w-100 h-100">
        <main-header start="back" end="" :title="false" />
        <main class="w-100 h-100" style="padding-top: 60px;">
            <div class="mx-auto" style="max-width: 390px; min-width: 360px;">
                <div class="w-100 d-flex flex-column justify-center align-center" style="padding: 29px 18px;">
                    <signup-progress :idx="3" />
                    <div class="w-100 d-flex flex-column ga-3 page-guide">
                        <span class="page-title">소중한 나를 소개해주세요 !</span>
                        <div class="d-flex flex-column ga-1">
                            <span class="page-sub">(주의) 사실과 다른 정보의 향후</span>
                            <span class="page-sub">서비스 이용 정지의 사유가 될 수 있습니다.</span>
                        </div>
                    </div>
                    <v-form ref="form">
                        <div class="d-flex flex-column w-100 ga-6 mb-8">
                            <div class="d-flex flex-column ga-2">
                                <span class="title-text">(1) 닉네임</span>
                                <span class="sub-title">- 프로필에는 닉네임만 보여집니다.</span>
                                <v-text-field
                                    v-model="nickname"
                                    class="text-none input-text"
                                    density="compact"
                                    placeholder="엘리"
                                    variant="underlined"
                                    :clearable="true"
                                    counter="10"
                                    :rules="nicknameRules"
                                ></v-text-field>
                            </div>
                            <div class="d-flex flex-column ga-2">
                                <span class="title-text">(2) 직업</span>
                                <span class="sub-title">- 대학생 / 대학원생의 경우 학생으로 선택해주세요</span>
                                <div style="display: grid; grid-template-columns: repeat(3, 1fr); grid-gap: 8px;">
                                    <signup-radio
                                        v-for="({ value, title }, i) in jobOptions"
                                        :key="`job_${i}`"
                                        :group-value="job"
                                        :value="value"
                                        :title="title"
                                        @click="val => (job = val)"
                                    />
                                </div>
                            </div>
                            <div class="d-flex flex-column ga-3">
                                <span class="title-text">(3) 상세 직업</span>
                                <div class="d-flex flex-column ga-1">
                                    <span class="sub-title">- 직장인은 직장명 & 기타 전문직은 상세 직군을 작성해주세요</span>
                                    <span class="sub-title pl-3">예시 )</span>
                                    <span class="sub-title pl-3">직장인 -> 삼성전자, 한화케미칼 등</span>
                                    <span class="sub-title pl-3">사업가 -> 부동산 개발 법인 대표 등</span>
                                    <span class="sub-title pl-3">의료직 -> 간호사, 간호조무사 등</span>
                                    <span class="sub-title pl-3">기타 -> 자영업자 (식당 운영 등) / 자산가 / 투자자 등</span>
                                </div>
                                <v-text-field
                                    v-model="detailJob"
                                    class="text-none input-text"
                                    density="compact"
                                    placeholder="상세 직업"
                                    variant="underlined"
                                    :clearable="true"
                                    counter="50"
                                    :rules="detailJobRules"
                                ></v-text-field>
                            </div>
                            <div class="d-flex flex-column ga-3">
                                <span class="title-text">(4) 학력</span>
                                <div style="display: grid; grid-template-columns: repeat(3, 1fr); grid-gap: 8px;">
                                    <signup-radio
                                        v-for="({ value, title }, i) in educationOptions"
                                        :key="`edu_${i}`"
                                        :group-value="education"
                                        :value="value"
                                        :title="title"
                                        @click="val => (education = val)"
                                    />
                                </div>
                            </div>
                            <div class="d-flex flex-column ga-3">
                                <span class="title-text">(5) 흡연 여부</span>
                                <div style="display: grid; grid-template-columns: repeat(2, 1fr); grid-gap: 8px;">
                                    <signup-radio
                                        v-for="({ value, title }, i) in smokingOptions"
                                        :key="`smo_${i}`"
                                        :group-value="smoking"
                                        :value="value"
                                        :title="title"
                                        @click="val => (smoking = val)"
                                    />
                                </div>
                            </div>
                            <div class="d-flex flex-column ga-3">
                                <span class="title-text">(6) 음주 여부</span>
                                <div style="display: grid; grid-template-columns: repeat(2, 1fr); grid-gap: 8px;">
                                    <signup-radio
                                        v-for="({ value, title }, i) in drinkingOptions"
                                        :key="`dri_${i}`"
                                        :group-value="drinking"
                                        :value="value"
                                        :title="title"
                                        @click="val => (drinking = val)"
                                    />
                                </div>
                            </div>
                            <div class="d-flex flex-column ga-2">
                                <span class="title-text">(7) MBTI</span>
                                <span class="sub-title">- 잘 기억이 안나거나 모르는 경우 패스할 수 있어요 !</span>
                                <div class="d-flex justify-center align-center w-100">
                                    <div
                                        style="display: grid; grid-template-columns: repeat(2, 1fr); grid-gap: 8px; width: 80%; margin-inside: auto;"
                                    >
                                        <template v-for="(el, i) in mbtiOptions" :key="`mbti_${i}`">
                                            <signup-radio
                                                v-for="({ value, title }, j) in el"
                                                :key="`mbti_${i}_${j}`"
                                                :group-value="mbti[i]"
                                                :value="value"
                                                :title="title"
                                                @click="val => (mbti[i] = val)"
                                            />
                                        </template>
                                    </div>
                                </div>
                            </div>
                            <div class="d-flex flex-column ga-2">
                                <span class="title-text">(8) 나의 성격을 단어로 표현한다면?</span>
                                <span class="sub-title">- 최대 3가지를 선택해주세요!</span>
                                <div style="display: grid; grid-template-columns: repeat(3, 1fr); grid-gap: 8px;">
                                    <signup-radio
                                        v-for="({ value, title }, i) in personalityOptions"
                                        :key="`per_${i}`"
                                        :group-value="personality"
                                        :value="value"
                                        :title="title"
                                        @click="
                                            val =>
                                                personality.includes(val)
                                                    ? (personality = personality.filter(el => el !== val))
                                                    : personality.length < 3 && personality.push(val)
                                        "
                                    />
                                </div>
                            </div>
                            <div class="d-flex flex-column ga-2">
                                <span class="title-text">(9) 나의 관심사 / 취미를 모두 골라주세요 !</span>
                                <span class="sub-title">- 최대 3가지를 선택해주세요!</span>
                                <div style="display: grid; grid-template-columns: repeat(3, 1fr); grid-gap: 8px;">
                                    <signup-radio
                                        v-for="({ value, title }, i) in hobbyOptions"
                                        :key="`hob_${i}`"
                                        :group-value="hobby"
                                        :value="value"
                                        :title="title"
                                        @click="
                                            val =>
                                                hobby.includes(val) ? (hobby = hobby.filter(el => el !== val)) : hobby.length < 3 && hobby.push(val)
                                        "
                                    />
                                </div>
                            </div>
                            <div class="d-flex flex-column ga-2">
                                <span class="title-text">(10) 어떤 데이트를 선호하시나요 ?</span>
                                <span class="sub-title">- 1가지를 선택해주세요!</span>
                                <div style="display: grid; grid-template-columns: repeat(2, 1fr); grid-gap: 8px;">
                                    <signup-radio
                                        v-for="({ value, title }, i) in datingOptions"
                                        :key="`dat_${i}`"
                                        :group-value="dating"
                                        :value="value"
                                        :title="title"
                                        @click="val => (dating = val)"
                                    />
                                </div>
                            </div>
                        </div>
                    </v-form>
                    <div class="d-flex flex-column security-text mb-9">
                        <span>수집된 개인정보는</span>
                        <span>매칭 외 다른 용도로 활용되지 않습니다.</span>
                    </div>
                    <div>
                        <v-btn class="bottom-btn" @click="onClicked">사진 등록하러 가기</v-btn>
                    </div>
                </div>
            </div>
        </main>
    </div>
</template>

<style scoped>
.page-guide {
    box-shadow: 4px 4px 10px 0px #60e0e0;
    border-radius: 16px;
    padding: 18px 8px;
    margin-bottom: 30px;
}
.page-title {
    letter-spacing: 0;
    font-size: 20px;
    font-weight: 700;
    line-height: 24px;
    text-align: center;
}
.page-sub {
    letter-spacing: 0;
    font-size: 14px;
    font-weight: 700;
    line-height: 17px;
    text-align: center;
}
.title-text {
    letter-spacing: 0;
    font-size: 18px;
    font-weight: 700;
    line-height: 22px;
    text-align: left;
}
.textarea-text {
    border: 2px solid #b6b6b6;
    border-radius: 12px;
    letter-spacing: 0;
    font-size: 12px;
    font-weight: 700;
    line-height: 20px;
    text-align: left;
    padding: 0 12px 8px 12px;
}
.sub-title {
    letter-spacing: 0;
    color: #35a8aa;
    font-size: 12px;
    font-weight: 700;
    line-height: 15px;
    text-align: left;
}
.security-text {
    color: #2f9c9e;
    letter-spacing: 0;
    font-size: 16px;
    font-weight: 700;
    line-height: 19px;
    text-align: center;
}
.radio {
    width: 100%;
    height: 48px;
    border: 2px solid #00000066;
    border-radius: 8px;
    background: #ffffff99;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    font-weight: 700;
    line-height: 17px;
    text-align: center;
    cursor: pointer;
    letter-spacing: 0;
}
.radio-clicked {
    border: 2px solid #60e0e0;
    background: #60e0e08c;
}
.bottom-btn {
    width: 316px;
    height: 58px;
    padding-inline: 49px;
    border-radius: 16px;
    border: 1px solid #dfdfdf;
    box-shadow: 0px 4px 4px 0px #00000040;
    font-size: 24px;
    font-weight: 700;
    line-height: 29px;
    text-align: center;
    color: #ffffff;
    background: #60e0e0;
    letter-spacing: 0;
    margin-bottom: 30px;
}
.input-text {
    height: fit-content;
    letter-spacing: 0;
    font-size: 16px;
    font-weight: 700;
    line-height: 19px;
    text-align: left;
}
</style>
