import { defineStore } from "pinia";
import { ref, computed, type Reactive, type ComputedRef, reactive } from "vue";
import { type IUser } from "@/models/user.model";
import { type IUserState } from "@/models/userState.model";

export const useUserStateStore = defineStore('user',  () => {
  const userState: Reactive<IUserState> = reactive({ user: null });
  const user: ComputedRef<IUser | null> = computed(() => userState.user);
  const isLoggedIn: ComputedRef<boolean> = computed(() => user.value !== null);
  function logIn(userData: IUser) {
    userState.user = userData;
  }
  function logOut() {
    userState.user = null
  }

  return { userState, user, isLoggedIn, logIn, logOut }
})
