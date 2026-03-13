import { reactive } from "vue";

interface StateStore {
  open: boolean;
  sidebar: boolean;
  navbar: boolean;
  onChange: () => void;
  onSidebarShow: () => void;
  onMobileNavbarShow: () => void;
}

const stateStore: StateStore = reactive({
  open: false,
  sidebar: false,
  navbar: false,
  onChange() {
    stateStore.open = !stateStore.open;
  },
  onSidebarShow() {
    stateStore.sidebar = !stateStore.sidebar;
  },
  onMobileNavbarShow() {
    stateStore.navbar = !stateStore.navbar;
  },
});

export default stateStore;
