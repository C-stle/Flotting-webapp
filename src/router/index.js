import { createWebHistory, createRouter } from "vue-router";
import UserDashboard from "@/views/dashboard/UserDashboard.vue";
import UserLogin from "@/views/login/UserLogin";
import MainLayout from "@/components/layout/MainLayout";
import SignupSimple from "@/views/signup/SignupSimple.vue";
import UserProfile from "@/views/profile/UserProfile.vue";
import MainTitle from "@/views/title/MainTitle.vue";
import UserPlotting from "@/views/plotting/UserPlotting.vue";
import SettingMain from "@/views/setting/SettingMain.vue";
import SettingInquire from "@/views/setting/SettingInquire.vue";
import SettingNotice from "@/views/setting/SettingNotice.vue";
import SettingInvite from "@/views/setting/SettingInvite.vue";
import SettingBlock from "@/views/setting/SettingBlock.vue";
import SettingStatus from "@/views/setting/SettingStatus.vue";
import AlarmMain from "@/views/alarm/AlarmMain.vue";
import StoreMain from "@/views/store/StoreMain.vue";
import TestMain from "@/views/test/TestMain.vue";
import SettingMyProfile from "@/views/setting/SettingMyProfile.vue";
import SignupGuide from "@/views/signup/SignupGuide.vue";
import SignupInfo from "@/views/signup/SignupInfo.vue";
import SignupWorld from "@/views/signup/SignupWorld.vue";
import SignupHobby from "@/views/signup/SignupHobby.vue";
import SignupPhoto from "@/views/signup/SignupPhoto.vue";
import SignupEnd from "@/views/signup/SignupEnd.vue";
import { userInfoStore } from "@/store/user/userInfoStore";

const routes = [
    { path: "/login", component: UserLogin },
    { path: "/signupTest", component: SignupSimple },
    {
        path: "/",
        component: LandingMain
    },
    {
        path: "/intro",
        component: LandingIntro
    },
    {
        path: "/",
        component: MainLayout,
        children: [
            {
                path: "dashboard",
                component: UserDashboard
            },
            {
                path: "plotting",
                component: UserPlotting
            },
            {
                path: "setting",
                component: SettingMain
            },
            {
                path: "setting/inquire",
                component: SettingInquire
            },
            {
                path: "setting/notice",
                component: SettingNotice
            },
            {
                path: "setting/invite",
                component: SettingInvite
            },
            {
                path: "setting/block",
                component: SettingBlock
            },
            {
                path: "setting/status",
                component: SettingStatus
            },
            {
                path: "alarm",
                component: AlarmMain
            },
            {
                path: "store",
                component: StoreMain
            }
        ]
    },
    {
        path: "/profile",
        component: UserProfile
    },
    {
        path: "/setting/my-profile",
        component: SettingMyProfile
    },
    {
        path: "/signup/guide",
        component: SignupGuide
    },
    {
        path: "/signup/info",
        component: SignupInfo
    },
    {
        path: "/signup/world",
        component: SignupWorld
    },
    {
        path: "/signup/hobby",
        component: SignupHobby
    },
    {
        path: "/signup/photo",
        component: SignupPhoto
    },
    {
        path: "/signup/end",
        component: SignupEnd
    },
    {
        path: "/test",
        component: TestMain
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from) {
        if (to.fullPath.includes("signup")) {
            return { top: 0 };
        }
    }
});
router.beforeEach((to, from, next) => {
    const userStore = userInfoStore();
    if (to.path === "/login" || to.path === "/signupTest" || to.path === "/") {
        userStore.resetUserAccessToken();
        next();
    } else {
        if (!userStore.getUserAccessToken()) {
            next("/login");
        }
        next();
    }
});
export default router;
