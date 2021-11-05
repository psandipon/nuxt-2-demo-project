export default async function({ $auth, store, redirect }) {
  if (!$auth.$state.loggedIn) {
    return redirect("/signin");
  }
}
