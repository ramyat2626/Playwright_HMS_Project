import path from 'path'

// Salesforce org details shared by the setup and the tests
export const SF_ORG_URL = "https://orgfarm-95e4b1e1e8-dev-ed.develop.my.salesforce.com/"
export const SF_USERNAME = process.env.SF_USERNAME ?? "ramyat2626.f2adf33763b6@agentforce.com"
export const SF_PASSWORD = process.env.SF_PASSWORD ?? "Qwerty.1212"

// Saved session file (the playwright/.auth folder is already in .gitignore)
export const AUTH_FILE = path.join(process.cwd(), "playwright", ".auth", "sfdc-user.json")
