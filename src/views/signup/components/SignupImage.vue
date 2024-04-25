<script setup>
import { ref } from "vue";

defineProps({
    placeholder: {
        type: String,
        default: ""
    }
});

const inputRef = ref(null);
const imageSrc = ref(null);
const onChangedImage = files => {
    imageSrc.value = files[0] ? URL.createObjectURL(files[0]) : null;
};

const onClicked = key => {
    inputRef.value.click();
};
</script>

<template>
    <div v-if="!imageSrc" class="default" @click="onClicked">
        {{ placeholder }}
    </div>
    <img
        v-else
        :src="imageSrc"
        alt=""
        width="100%"
        style="aspect-ratio: 1; object-fit: cover; border-radius: 16px; cursor:pointer; border: 2px solid #b6b6b6;"
        @click="onClicked"
    />
    <input ref="inputRef" type="file" maxlength="1" accept="image/*" hidden @change="onChangedImage($event.target.files)" />
</template>

<style scoped>
.default {
    width: 100%;
    height: 100%;
    border: 2px solid #b6b6b6;
    border-radius: 16px;
    color: #0000004d;
    font-size: 16px;
    font-weight: 700;
    line-height: 19px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    white-space: pre-wrap;
}
</style>
