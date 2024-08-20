"use server";

export async function editData (previousState: any, formData: FormData) {
  const username = formData.get("username")
  const password = formData.get("password")
  let checks:string[] = []
  if (!username) {
    checks.push("Veuillez entrer un nom d'utilisateur")
  }
  if (!password) {
    checks.push("Veuillez entrer un mot de passe")
  }
  if (username && username.length < 3) {
    checks.push("Le nom d'utilisateur doit faire au moins 3 caractères")
  }
  return checks;
  // return {
  //   errors: {
  //     username: !username ? "Veuillez entrer un nom d'utilisateur" : undefined,
  //     password: !password ? "Veuillez entrer un mot de passe" : undefined
  //   }
  // }
  }