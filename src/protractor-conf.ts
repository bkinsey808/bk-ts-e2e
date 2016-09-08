import { Config } from "protractor"

export const config: Config = {
  capabilities: {
    browserName: "chrome"
  },
  framework: "jasmine",
  jasmineNodeOpts: {
    defaultTimeoutInterval: 60000
  },
  seleniumAddress: "http://localhost:4444/wd/hub",
  specs: [ "spec.js" ]
}
