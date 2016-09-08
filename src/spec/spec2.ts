import { browser, by, element } from "protractor/globals"

describe("protractor with typescript typings2", () => {
  beforeEach(() => {
    browser.get("http://www.angularjs.org")
  })

  it("should greet the named user2", () => {
    element(by.model("yourName")).sendKeys("Julie")
    const greeting = element(by.binding("yourName"))
    expect(greeting.getText()).toEqual("Hello Julie!")
  });

  it("should list todos2", function() {
    const todoList = element.all(by.repeater("todo in todoList.todos"))
    expect(todoList.count()).toEqual(2)
    expect(todoList.get(1).getText()).toEqual("build an angular app")
  })
})
