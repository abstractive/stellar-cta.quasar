/*
import YAML from 'yaml'
import fs from 'fs'
const file = fs.readFileSync('./en-us.yml', 'utf8')
export default {
  'en-us': YAML.parse(file)
}

*/

import enUS from './en-us'

export default {
  'en-us': enUS
}
