<script setup>
import MainHeader from "@/components/layout/MainHeader.vue";
import router from "@/router";
import SignupProgress from "@/views/signup/components/SignupProgress.vue";
import { signupInfoStore } from "@/views/signup/store/singupInfoStore";
const onClicked = () => {
    router.push("/signup/photo");
};

const store = signupInfoStore();
const onClickedTest = () => {
    console.log(store.getTotal());
};
</script>

<template>
    <div class="w-100 h-100">
        <main-header start="back" end="" :title="false" />
        <main class="w-100 h-100" style="padding-top: 60px;">
            <div class="mx-auto" style="max-width: 390px; min-width: 360px;">
                <div class="w-100 d-flex flex-column justify-center align-center" style="padding-top: 29px; padding-inline: 18px;">
                    <signup-progress :idx="5" />
                    <div class="w-100 d-flex flex-column ga-3 page-guide">
                        <span class="page-title">프로필 등록이 완료되셨어요 !</span>
                        <div class="d-flex flex-column">
                            <span class="page-sub">24시간 내로 프로필 심사 결과가</span>
                            <span class="page-sub">카카오 알림톡으로 발송될 예정입니다.</span>
                        </div>
                    </div>
                    <div class="d-flex flex-column w-100 ga-6 mb-8 main" style="">
                        <div>
                            <p class="title">1. 프로필 등록</p>
                            <p class="sub">정보 / 세계관 / 취향 / 사진 등록</p>
                        </div>
                        <div>
                            <p class="title">2. 개인 취향 맞춤 매칭</p>
                            <p class="sub">매주 월요일 저녁에 매칭이 시작됩니다</p>
                        </div>
                        <div>
                            <p class="title">3. 전화 번호 상호 공개</p>
                            <p class="sub">설레는 대화 시작 및 오프라인 약속 잡기</p>
                        </div>
                    </div>
                    <div class="d-flex flex-column security-text mb-9">
                        <span>수집된 개인정보는</span>
                        <span>매칭 외 다른 용도로 활용되지 않습니다.</span>
                    </div>
                    <v-btn class="bottom-btn" @click="onClicked">플러팅 둘러보기</v-btn>
                    <v-btn class="bottom-btn" @click="onClickedTest">정보 확인</v-btn>
                </div>
            </div>
        </main>
    </div>
</template>

<style scoped>
.page-guide {
    box-shadow: 4px 4px 10px 0 #60e0e0;
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
.security-text {
    color: #2f9c9e;
    letter-spacing: 0;
    font-size: 16px;
    font-weight: 700;
    line-height: 19px;
    text-align: center;
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
.main {
    padding: 27px 11px;
    box-shadow: 4px 4px 10px 0 #60e0e0;
    border-radius: 16px;
    .title {
        font-size: 18px;
        font-weight: 700;
        line-height: 22px;
        text-align: left;
    }
    .sub {
        font-size: 12px;
        font-weight: 300;
        line-height: 15px;
        text-align: left;
        padding-left: 23px;
    }
}
</style>
