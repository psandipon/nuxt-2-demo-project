export default async function({ $auth, store, redirect }) {
  $auth.setUser($auth.$storage.getUniversal("user"));
  if (!$auth.$state.loggedIn) {
    return redirect("/signin");
  }
}
