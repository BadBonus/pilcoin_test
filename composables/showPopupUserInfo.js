import { useToast } from "vue-toastification";
import userInfo from "@/components/UserInfo.vue";

export const showPopupUserInfo = () => {
  const toast = useToast();
  toast(userInfo, {
    position: "top-right",
    timeout: false,
    closeOnClick: true,
    pauseOnFocusLoss: true,
    pauseOnHover: true,
    draggable: true,
    draggablePercent: 0.6,
    showCloseButtonOnHover: false,
    hideProgressBar: true,
    closeButton: "button",
    icon: true,
    rtl: false,
  });
};
