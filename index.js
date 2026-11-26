export { createPlugin } from './plugin.js'
export { profile, evidence, parseDiagnosis, parseReport, validate } from './operator.js'

import { createPlugin } from './plugin.js'
export const { name, inject, apply } = createPlugin()

