import { Metadata } from "next"

import LoginTemplate from "@modules/account/templates/login-template"

export const metadata: Metadata = {
  title: "Prijavi se",
  description: "Prijavi se na Živić-Elektro nalog.",
}

export default function Login() {
  return <LoginTemplate />
}
