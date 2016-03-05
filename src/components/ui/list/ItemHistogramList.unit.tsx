import * as React from "react";
import {mount} from "enzyme";

import { ItemHistogramList } from "./ItemHistogramList"

import {MockList} from "./MockList";

import {fastClick, hasClass, jsxToHTML, printPrettyHtml} from "../../__test__/TestHelpers"

describe("ItemHistogramList Components", ()=> {

  it("should render and behave correctly", ()=> {
    let props = {
      items:this.items, selectedItems: this.selectedItems,
      toggleItem: this.toggleItem, setItems: this.setItems,
      translate:this.translate
    }
    this.wrapper = mount(
      <MockList listComponent={ItemHistogramList}/>
    )
    
    const total = 10+11+12+15
    expect(this.wrapper.html()).toEqual(jsxToHTML(
      <div className="sk-item-list">
        <div className="sk-item-list-option sk-item-list__item is-active is-histogram" data-qa="option">
          <div className="sk-item-list-option__bar" style={{width: ((10/total)*100) + '%'}} />
          <div data-qa="label" className="sk-item-list-option__text">A translated</div>
          <div data-qa="count" className="sk-item-list-option__count">10</div>
        </div>
        <div className="sk-item-list-option sk-item-list__item is-histogram" data-qa="option">
          <div className="sk-item-list-option__bar" style={{width: ((11/total)*100) + '%'}} />
          <div data-qa="label" className="sk-item-list-option__text">B translated</div>
          <div data-qa="count" className="sk-item-list-option__count">11</div>
        </div>
        <div className="sk-item-list-option sk-item-list__item is-active is-histogram" data-qa="option">
          <div className="sk-item-list-option__bar" style={{width: ((12/total)*100) + '%'}} />
          <div data-qa="label" className="sk-item-list-option__text">C translated</div>
          <div data-qa="count" className="sk-item-list-option__count">12</div>
        </div>
        <div className="sk-item-list-option sk-item-list__item is-histogram" data-qa="option">
          <div className="sk-item-list-option__bar" style={{width: ((15/total)*100) + '%'}} />
          <div data-qa="label" className="sk-item-list-option__text">d translated</div>
          <div data-qa="count" className="sk-item-list-option__count">15</div>
        </div>
      </div>
    ))

    this.wrapper.setProps({disabled:true})
    expect(this.wrapper.find(".sk-item-list").hasClass("is-disabled")).toBe(true)
    expect(this.wrapper.find(".sk-item-list-option__count").length).toBe(4)
    this.wrapper.setProps({showCount:false})
    expect(this.wrapper.find(".sk-item-list-option__count").length).toBe(0)

    this.wrapper.setProps({mod:"my-item-list"})
    expect(this.wrapper.find(".my-item-list").length).toBe(1)

    expect(this.wrapper.node.state.toggleItem).not.toHaveBeenCalled()
    fastClick(this.wrapper.find(".my-item-list-option").at(2))
    expect(this.wrapper.node.state.toggleItem).toHaveBeenCalledWith("c")
  })
  
  it("mod + classname can be updated", () => {
    let props = {
      items: this.items, selectedItems: this.selectedItems,
      toggleItem: this.toggleItem, setItems: this.setItems,
      translate: this.translate,
      mod: "sk-item-list-updated", className: "my-custom-class"
    }
    this.wrapper = mount(
      <MockList listComponent={ItemHistogramList}   mod="sk-item-list-updated" className="my-custom-class"/>
    )

    expect(this.wrapper.find(".sk-item-list-updated").hasClass("my-custom-class")).toBe(true)
  })

})
