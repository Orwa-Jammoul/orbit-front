<template>
  <main class="">
    <section class="login_box_area mx-auto">
      <div class="login_form_inner">
        <h3 class="fs-3 mb-3">{{ t("editeprofile") }}</h3>
        <AuthFormClientEdit
          @toggle="emit('toggle')"
          @cancel="emit('cancel')"
        />
      </div>
    </section>
  </main>
</template>

<script setup>

const emit = defineEmits(["toggle", "cancel"]);

</script>

<style lang="scss" scoped>
@import "~/assets/styles/scss/theme/theme";

.login_box_area {
  padding: 10px 0 !important;
  @include sm-mobile {
    padding: 5px 0;
  }
  .login_box_img {
    margin-right: -30px;
    position: relative;
    img {
      width: 100%;
    }

    .hover {
      position: absolute;
      top: 50%;
      left: 0px;
      text-align: center;
      width: 100%;
      transform: translateY(-50%);
      h4 {
        font-size: 24px;
        color: #fff;
        margin-bottom: 15px;
      }
      p {
        max-width: 380px;
        margin: 0px auto 25px;
        color: #fff;
      }
      .primary-btn {
        border-radius: 0px;
        line-height: 38px;
        text-transform: uppercase;
        &:hover:before {
          left: 260px;
        }
      }
    }
  }
  .login_form_inner {
    // box-shadow: 0px 10px 30px 0px rgba(0, 0, 0, 0.07);
    // box-shadow: 0px 10px 30px 0px rgb(250 250 250 / 7%);
    border: 1px solid $primary1;
    border-radius: 10px;
    height: 100%;
    text-align: center;
    padding-top: 25px !important;
    padding-bottom: 10px !important;
    //  background-color:$primary1;
    @include tablet {
      padding-top: 80px;
      padding-bottom: 65px;
    }
    @include sm-mobile {
      padding-top: 50px;
      padding-bottom: 50px;
    }
    h3 {
      margin-top: 1rem;
      color: $primary2;
      text-transform: uppercase;
      font-size: 18px;
      margin-bottom: 30px;
    }
    .register_form {
      margin: auto;
      a {
        font-size: 14px;
        color: #777777;
        font-family: "Roboto", sans-serif;
        margin-top: 20px;
        display: block;
      }
      .form-check-input:checked {
        background-color: $DarkBlue;
        border-color: $DarkBlue;
      }
      .lable-input{
        width: 100%;
        text-align: start;
        margin-top: 1rem;
        margin-bottom: 0;
      }
      .btn-main{
        padding-left: 0;
        padding-right: 0;
        width: 40%;
      }
    }
  }

  .btn-custom {
    &:hover:before {
      left: 700px;
      opacity: 0.3;
    }
  }
}
</style>
