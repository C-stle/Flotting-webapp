import { defineStore } from "pinia";
import { ref } from "vue";
export const signupInfoStore = defineStore(
    "signupInfoStore",
    () => {
        const name = ref(""); // 이름
        const birth = ref(""); // 생년월일
        const height = ref(150); // 키
        const gender = ref(""); // 성별
        const location = ref(""); // 거주지
        const detailLocation = ref(""); // 상세 거주지
        const appliedPath = ref(""); // 신청 경로
        const recommendUserName = ref(""); // 추천인
        const worldFirst = ref(""); // 세계관 질문 1
        const worldSecond = ref(""); // 세계관 질문 2
        const nickname = ref(""); // 닉네임
        const job = ref(""); // 직업
        const detailJob = ref(""); // 상세 직업
        const education = ref(""); // 학력
        const smoking = ref(""); // 흡연
        const drinking = ref(""); // 음주
        const mbti = ref(["", "", "", ""]); // mbti
        const personality = ref([]); // 성격
        const hobby = ref([]); // 취미
        const dating = ref(""); // 데이트 유형

        const getTotal = () => {
            return {
                name: name.value,
                birth: birth.value,
                height: height.value,
                gender: gender.value,
                location: location.value,
                detailLocation: detailLocation.value,
                appliedPath: appliedPath.value,
                recommendUserName: recommendUserName.value,
                worldFirst: worldFirst.value,
                worldSecond: worldSecond.value,
                nickname: nickname.value,
                job: job.value,
                detailJob: detailJob.value,
                education: education.value,
                smoking: smoking.value,
                drinking: drinking.value,
                mbti: mbti.value.join(""),
                personality: personality.value,
                hobby: hobby.value,
                dating: dating.value
            };
        };

        return {
            name,
            birth,
            height,
            gender,
            location,
            detailLocation,
            appliedPath,
            recommendUserName,
            worldFirst,
            worldSecond,
            nickname,
            job,
            detailJob,
            education,
            smoking,
            drinking,
            mbti,
            personality,
            hobby,
            dating,
            getTotal
        };
    },
    {
        persist: {
            enabled: true,
            strategies: [
                {
                    key: "signup",
                    storage: sessionStorage
                }
            ]
        }
    }
);
