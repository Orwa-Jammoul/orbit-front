<template>
    <section id="wrapper" class="error-page">
        <div class="img-frame">
            <img src="/essential/error-bg-02.png" alt="error image">
        </div>
        <div class="error-box">
            <div class="error-body text-center">
                <h1 class="error-code mb-2 mb-dmd-3 mb-xl-5">{{ error?.statusCode }}</h1>
                <h3 class="text-uppercase">{{ heading }}</h3>
                <p class="m-t-30 m-b-30 ">{{ description }}</p>
                <button @click="handleError" class="btn background text-white px-15 btn-rounded waves-effect waves-light ">
                    {{ i18e.t('back-to-home') }}
                </button>
            </div>
            <footer class="footer text-center">Copyright @ {{ new Date().getFullYear() }} 
            <span class="fw-bold">Orbit Technology and Design Company</span>
            </footer>
        </div>

    </section>
</template>

<script setup>
    const error = useError()
    console.log(error.value);
    const i18e = useI18n()
    // console.log('error : ', error.value.message, error.value.stack)
    const heading = computed(() => error.value?.statusCode == '404' ? i18e.t('page-not-found') : i18e.t('server-error'))
    const description = computed(() => error.value?.statusCode === '404'
        ? i18e.t('could-not-find-page-msg')
        : i18e.t('error-occurred-msg')
    )    
    const handleError = () => clearError({ redirect: langPath('/') })
</script>

<style lang="scss" scoped>
.error-page{
    position: relative;
    width: 100%;
    height: 100%;
    color: white;
    .img-frame{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 1;
        img{
            width: 100%;
            height: 100%;
            object-fit: contain;
        }
    }
    .error-box {
        height: 100%;
        position: fixed;
        background-color: black;
        // background: url(/svg/error-404.svg) center center no-repeat #fff !important;
        width: 100%;
        .error-body {
            padding-top: 5%;
            .error-code {
                font-size: 6rem;//fluid(100px, 210px);
                font-weight: 900;
                line-height: 210px
            }
        }
    }
}

.m-t-30 {
    margin-top: 30px !important;
}

.m-b-30 {
    margin-bottom: 30px !important;
}

.m-b-40 {
    margin-bottom: 40px !important;
}

.waves-effect {
    position: relative;
    cursor: pointer;
    display: inline-block;
    overflow: hidden;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -webkit-tap-highlight-color: transparent;
}

.btn-rounded {
    border-radius: 60px;
}

.error-box .footer {
    width: 100%;
    left: 0;
    right: 0;
    bottom: 0;
    color: #b3b3b3;
    left: 0;
    padding: 20px 30px;
    position: absolute;
    right: 0;
    background: black;
}





</style>