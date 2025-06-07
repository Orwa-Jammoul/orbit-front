<template>
  <section class="profile-section">
    <div class="row w-100 mx-auto mb-12" id="profile">
      <div class="col-12 mb-3">
        <NuxtLink @click="toggle" to="#" class="edit-profile">
          <i class="fa fa-edit"></i>
          {{ t("editeprofile") }}
        </NuxtLink>
      </div>
      <!-- {{ user }} -->
      <div class="col-12 mb-4">
        <div
          class="profile-info p-3"
          v-if="useUserInfo().value.client.type == 'Person'"
        >
          <span>{{ t("full Name") }} :</span>
          {{
            !isEn()
              ? useUserInfo().value.fullNameAr
              : useUserInfo().value.fullNameEn
          }}
        </div>
        <div class="profile-info p-3" v-else>
          <span>{{ t("Company Name") }} :</span>
          {{
            !isEn() ? useUserInfo().value.nameAr : useUserInfo().value.nameEn
          }}
        </div>
      </div>
      <div class="col-12 mb-4">
        <div class="profile-info p-3">
          <span>{{ t("email") }} :</span> {{ useUserInfo().value.email }}
        </div>
      </div>
      <div class="col-12 mb-4">
        <div class="profile-info p-3">
          <span>{{ t("phone") }} :</span> {{ useUserInfo().value.phone }}
        </div>
      </div>
      <div
        class="col-12 mb-4"
        v-if="useUserInfo().value.address"
      >
        <div class="profile-info p-3">
          <span>{{ t("address") }} :</span> {{ useUserInfo().value.address }}
        </div>
      </div>
      <div
        class="col-12 mb-4"
        v-if="useUserInfo().value.nation"
      >
        <div class="profile-info p-3">
          <span>{{ t("country") }} :</span> {{ useName(useUserInfo().value.nation) }}
        </div>
      </div>
      <div
        class="col-12 mb-4"
        v-if="useUserInfo().value.client.type == 'Company'"
      >
        <div
          class="profile-info p-3"
          v-if="
            useUserInfo().value.responsiblePersonNameAr ||
            useUserInfo().value.responsiblePersonNameEn
          "
        >
          <span>{{ t("Responsible Person Name") }} :</span>
          {{
            !isEn()
              ? useUserInfo().value.responsiblePersonNameAr
              : useUserInfo().value.responsiblePersonNameEn
          }}
        </div>
      </div>
      <div
        class="col-12 mb-4"
        v-if="useUserInfo().value.client.type == 'Company'"
      >
        <div
          class="profile-info p-3"
          v-if="useUserInfo().value.responsiblePersonMobile"
        >
          <span>{{ t("Responsible Person Mobile") }} :</span>
          {{ useUserInfo().value.responsiblePersonMobile }}
        </div>
      </div>
      <div
        class="col-12 mb-4"
        v-if="useUserInfo().value.birthDate"
      >
        <div class="profile-info p-3">
          <span>{{ t("birthDate") }} :</span>
          {{ useUserInfo().value.birthDate.slice(0, 10) }}
        </div>
      </div>
      <div class="col-12 mb-4" v-if="useUserInfo().value.sex">
        <div class="profile-info p-3">
          <span>{{ t("gender") }} :</span> {{ t(useUserInfo().value.sex) }}
        </div>
      </div>
      <div class="col-12 mb-4" v-if="useUserInfo().value.fax">
        <div class="profile-info p-3">
          <span>{{ t("fax") }} :</span> {{ useUserInfo().value.fax }}
        </div>
      </div>
      <div
        class="col-12 mb-4"
        v-if="useUserInfo().value.mailBox"
      >
        <div class="profile-info p-3">
          <span>{{ t("mailBox") }} :</span> {{ useUserInfo().value.mailBox }}
        </div>
      </div>
      <div
        class="col-12 mb-4"
        v-if="useUserInfo().value.website"
      >
        <div class="profile-info p-3">
          <span>{{ t("website") }} :</span> {{ useUserInfo().value.website }}
        </div>
      </div>
    </div>
    <div class="visually-hidden" id="editeprofile">
      <div class="mb-10">
        <MyAccountEditPersonProfile 
          v-if="accountType=='Person'"
          @toggle="toggle"
          @cancel="cancel"
        />
        <MyAccountEditCompanyProfile v-else 
          @toggle="toggle"
          @cancel="cancel"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
// const accountType = useAccountType().value
const accountType = useUserInfo().value.client.type
// console.log(accountType);
// const { public: {api, apiBase} } = useRuntimeConfig();

const cancel = () => {
  let profile = document.getElementById("profile");
  let editeprofile = document.getElementById("editeprofile");
  profile.classList.toggle("visually-hidden");
  editeprofile.classList.toggle("visually-hidden");
};
const toggle = () => {
  let profile = document.getElementById("profile");
  let editeprofile = document.getElementById("editeprofile");
  profile.classList.toggle("visually-hidden");
  editeprofile.classList.toggle("visually-hidden");
};



</script>

<style lang="scss" scoped>
@import "~/assets/styles/scss/theme/theme";
div {
  color: #000;
}
.edit-profile {
  color: $primary1;
  font-size: 1.3rem;
  font-weight: 900;
  &:hover {
    color: $primary1;
  }
}
.black-light-shadow {
  box-shadow: 0px 0px 45px -7px rgba(51, 51, 51, 0.247);
}
.profile-info {
  border-bottom: 1px solid #ddd;
  color: $primary2;
  font-weight: 900;
  span {
    color: rgb(78, 78, 78);
  }
}
</style>
