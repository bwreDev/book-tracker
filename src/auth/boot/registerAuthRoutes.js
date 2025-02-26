import { boot } from "quasar/wrappers";

export default boot(({ router }) => {
  router.addRoute("/", {
    name: "auth.register",
    path: "/register",
    meta: { unauthOnly: true },
    component: () => import("src/auth/pages/IdentityPasswordRegisterPage.vue"),
  });

  router.addRoute("/", {
    name: "auth.login",
    path: "/login",
    meta: { unauthOnly: true },
    component: () => import("src/auth/pages/IdentityPasswordLoginPage.vue"),
  });

  router.addRoute("/", {
    name: "auth.requestPasswordReset",
    path: "/forgot-password",
    meta: { unauthOnly: true },
    component: () =>
      import("src/auth/pages/PasswordResetRequestViaEmailPage.vue"),
  });

  router.addRoute("/", {
    name: "auth.resetPassword",
    path: "/password-reset",
    meta: { unauthOnly: true },
    component: () => import("src/auth/pages/PasswordResetViaEmailPage.vue"),
  });

  router.addRoute("/", {
    path: "/",
    component: () => import("layouts/AuthenticatedLayout.vue"),
    children: [
      {
        path: "",
        name: "dashboard",
        component: () => import("src/pages/Lists.vue"),
        meta: { authOnly: true },
      },
    ],
  });

  router.addRoute("/", {
    path: "/lists",
    component: () => import("layouts/AuthenticatedLayout.vue"),
    children: [
      {
        path: "",
        name: "lists",
        component: () => import("src/pages/Lists.vue"),
        meta: { authOnly: true },
      },
    ],
  });

  router.addRoute("/", {
    path: "/lists/:listId",
    component: () => import("layouts/AuthenticatedLayout.vue"),
    children: [
      {
        path: "",
        name: "list",
        component: () => import("src/pages/List.vue"),
        meta: { authOnly: true },
      },
    ],
  });
});
