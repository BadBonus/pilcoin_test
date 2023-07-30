import test from "node:test";
import toast from "plugins/toast";
import {useToast} from "vue-toastification";


export default ({name: currentPage}: any) => {
  if (process.server) return;

  const router = useRouter();
  const toast = useToast();


  router.beforeEach(({name: namePage}, from, next) => {
    if (!perPage_isAllowed(namePage)) {
      toast.error("Нет доступа к этой странице");
      next("403");
    }
    next()
  })
};
