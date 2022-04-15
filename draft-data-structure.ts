/**
 * o usuário pode pertencer a várias equipes
 * uma equipe pode ter vários usuários (agência, setor de mkt, ...)
 * uma equipe pode ter vários projetos (site, blog, campanha X, Y, Z, ...)
 * cada projeto pode ter vários formulários
 *
 * Fase 1: submissão de forms (FormItem, FormSubmission, Form)
 * Fase 2: controle de acesso (Project, Team, User)
 */

interface FormItem {
  key: string
  value: string
}

interface FormSubmission {
  data: FormItem[]
  createdAt: string
}

interface Form {
  id: string
  teamId: string
  projectId: string
  name: string
  createdAt: string
  updatedAt: string
  submissions: FormSubmission[]
}

interface Project {
  id: string
  teamId: string
  forms: string[]
}

interface Team {
  id: string
  projects: string[]
  users: string[]
  name: string
}

interface User {
  id: string
  teams: string[]
  role: string
  name: string
  email: string
  password: string
}
