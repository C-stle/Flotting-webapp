<script setup>
import MainHeader from "@/components/layout/MainHeader.vue";
import router from "@/router";
import SignupImage from "@/views/signup/components/SignupImage.vue";
import SignupProgress from "@/views/signup/components/SignupProgress.vue";

const onClicked = () => {
    router.push("/signup/end");
};
</script>

<template>
    <div class="w-100 h-100">
        <main-header start="back" end="" :title="false" />
        <main class="w-100 h-100" style="padding-top: 60px;">
            <div class="mx-auto" style="max-width: 390px; min-width: 360px;">
                <div class="w-100 d-flex flex-column justify-center align-center" style="padding: 29px 18px;">
                    <signup-progress :idx="4" />
                    <div class="w-100 d-flex flex-column ga-3 page-guide">
                        <span class="page-title">소중한 나를 보여주세요 !</span>
                        <div class="d-flex flex-column">
                            <span class="page-sub"><span class="custom-text-red">등록된 사진은 워터마크가 삽입</span>되며,</span>
                            <span class="page-sub">일정기간 동안에만 조회가 가능합니다.</span>
                            <span class="page-sub custom-text-red">
                                상대방에게는 베스트사진 3장만 보여집니다.
                            </span>
                        </div>
                    </div>
                    <div class="d-flex flex-column w-100 ga-6 mb-8">
                        <div class="d-flex flex-column">
                            <span class="title-text pb-2">(1) 얼굴 사진</span>
                            <span class="sub-title pb-3">- 얼굴이 선명하게 나온 사진 ( 마스크 쓴 사진 X )</span>
                            <div style="display: grid; grid-template-columns: repeat(2, 1fr); width: 100%; gap: 5px; aspect-ratio: 2/1;">
                                <signup-image :placeholder="`필수 등록\n(향후 수정 가능)`" />
                                <signup-image :placeholder="`선택 등록\n(향후 수정 가능)`" />
                            </div>
                        </div>
                        <div class="d-flex flex-column">
                            <span class="title-text pb-2">(2) 전신 사진</span>
                            <span class="sub-title pb-3">- 머리부터 발 끝까지 모두 보이는 사진</span>
                            <div style="display: grid; grid-template-columns: repeat(2, 1fr); width: 100%; gap: 5px; aspect-ratio: 2/1;">
                                <signup-image :placeholder="`필수 등록\n(향후 수정 가능)`" />
                                <signup-image :placeholder="`선택 등록\n(향후 수정 가능)`" />
                            </div>
                        </div>
                        <div class="d-flex flex-column">
                            <span class="title-text pb-2">(3) 매력 어필 사진</span>
                            <span class="sub-title pb-3">- 취미 생활, 스튜디오 사진 등</span>
                            <div style="display: grid; grid-template-columns: repeat(2, 1fr); width: 100%; gap: 5px; aspect-ratio: 2/1">
                                <signup-image :placeholder="`필수 등록\n(향후 수정 가능)`" />
                                <signup-image :placeholder="`선택 등록\n(향후 수정 가능)`" />
                            </div>
                        </div>
                        <div class="d-flex flex-column">
                            <span class="title-text pb-2">(4) 신원 검증 서류</span>
                            <span class="sub-title pb-3 custom-text-red">- 재직 증명 서류 필수 제출</span>
                            <div style="display: grid; grid-template-columns: repeat(2, 1fr); width: 100%; gap: 5px; aspect-ratio: 2/1;">
                                <signup-image :placeholder="`직장 명함\nOR\n재직증명서`" />
                            </div>
                        </div>
                    </div>
                    <div class="d-flex flex-column security-text mb-9">
                        <span>수집된 개인정보는</span>
                        <span>매칭 외 다른 용도로 활용되지 않습니다.</span>
                    </div>
                    <v-btn class="bottom-btn" @click="onClicked">프로필 등록 완료하기</v-btn>
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
.custom-text-red {
    color: #fe5555;
}
</style>
