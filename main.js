(()=>{"use strict";class t{constructor(t,e){this.name=t,this.price=e}init(){this.bindToDOM()}static template(t,e){return`\n    <tr class="article-box">\n      <td class="article__title">${t}</td>\n      <td class="article__price">${e}</td>\n      <td class="button__block">\n        <button class="article__edit"></button>\n        <button class="article__del"></button>\n      </td>\n    </tr>\n`}bindToDOM(){const t=document.querySelector("tbody"),e=this.addProduct(this.name,this.price);t.insertAdjacentHTML("beforeend",e)}addProduct(){const t=document.querySelector(".input-article-name"),e=document.querySelector(".input-article-price");if(this.name=t.value.trim(),this.price=e.value.trim(),this.name&&this.price){return this.constructor.template(this.name,this.price)}return!1}}class e{getPinCards(){return JSON.parse(localStorage.getItem("itemCards"))||[]}save(t){localStorage.setItem("itemCards",JSON.stringify(t))}}class i{constructor(t){this.parentEl=t}static get markup(){return'\n        <div class="modal modal-active">\n        \n            <form class="modal-form-box">\n\t\t\t<div class="modal-content">\n\t\t\t<h3 class="description__title"></h3>\n\n\t\t\t\t<div class="button__block form__button">\n                \t<button class="article__add-button">Добавить</button>\n\t\t\t\t\t<button class="modal-close__btn">Отменить</button>\n\t\t\t\t</div>\n\t\t\t\t</div>\n            </form>\n        </div>\n'}static get markInput(){return'\n\t\t<div class="input-wrapper">\n\t\t\t<label for="lfname">Название:</label> \n\t\t\t<input class="input-tooltip input-article-name" type="text" placeholder="Введите название"/>\n\t\t\t\n\t\t</div>\n\t \t<div class="input-wrapper">\n\t\t\t<label for="lfprice">Стоимость:</label> \n\t\t\t<input class="input-tooltip input-article-price" type="text" placeholder="Введите стоимость"/>\n\t\t\t\n\t\t</div>'}redrawInput(){document.querySelector(".description__title").insertAdjacentHTML("afterend",this.constructor.markInput)}redrawModalForm(){this.parentEl.insertAdjacentHTML("afterbegin",this.constructor.markup),this.modalWrapperEl.classList.add("modal-active"),this.modalButtonEl.addEventListener("click",(()=>this.closeModalForm()))}showInputValue(t,e){this.modalNameEl.value=t,this.modalPriceEl.value=e}showDescription(t){document.querySelector(".description__title").textContent=t}get modalWrapperEl(){return this.parentEl.querySelector(".modal")}get modalDescription(){return this.parentEl.querySelector(".description__title")}set modalDescription(t){this.parentEl.querySelector(".description__title").textContent=t}get modalNameEl(){return this.parentEl.querySelector(".input-article-name")}set modalNameEl(t){this.parentEl.querySelector(".input-article-name").textContent=t}get modalPriceEl(){return this.parentEl.querySelector(".input-article-price")}set modalPriceEl(t){this.parentEl.querySelector(".input-article-price").textContent=t}get modalButtonEl(){return this.parentEl.querySelector(".modal-close__btn")}closeModalForm(){this.modalWrapperEl.classList.remove("modal-active"),this.parentEl.querySelector(".modal").remove()}}const n=document.getElementById("container"),a=new class{constructor(t){this.container=t}static get markup(){return'\n      <div class="principal__button">\n          <button class="add__button">+</button>\n      </div>\n      <div class="list-wrapper">\n          <h2 class="list__title">Товары</h2>\n          <span class="greeting__title">Ваш список пока Пруст</span>\n          <table class="table-product hidden">\n              <caption></caption>\n              <thead>\n                  <tr>\n                  <th class="theader">Название</th>\n                  <th class="theader">Стоимость</th>\n                  <th class="theader">Действия</th>\n                  </tr>\n              </thead>\n              <tbody></tbody>\n           </table>\n      </div>\n'}bindToDOM(){this.container.insertAdjacentHTML("afterbegin",this.constructor.markup)}}(n),r=new class{constructor(t){this.listEditor=t,this.state=[]}init(){this.listEditor.bindToDOM(),this.container=document.querySelector("#container"),this.addSubscribe(this.container),this.storage=new e,this.state=this.storage.getPinCards(),this.loadState(this.state)}addSubscribe(t){t.addEventListener("click",this.onClickOpenForm.bind(this)),t.addEventListener("click",this.onClickAddCard.bind(this)),t.addEventListener("click",this.onClickDeleteCard.bind(this)),t.addEventListener("click",this.onClickRemoveCard.bind(this)),t.addEventListener("click",this.onClickCancel.bind(this)),t.addEventListener("click",this.onClickSaveCard.bind(this)),t.addEventListener("keyup",this.keyUp.bind(this)),t.addEventListener("click",this.completionField.bind(this)),t.addEventListener("input",this.completionField.bind(this))}loadState(e){if(e){e.forEach((e=>{const i=(new t).constructor.template(e.name,e.price);document.querySelector("tbody").insertAdjacentHTML("beforeend",i)}));const i=document.querySelector(".table-product"),n=document.querySelectorAll(".article-box"),a=document.querySelector(".greeting__title");n.length>0?i.classList.remove("hidden"):i.classList.add("hidden"),n.length>0?a.classList.add("hidden"):a.classList.remove("hidden")}}saveCard(t){this.state.push(t),this.storage.save(this.state)}removeItem(t,e){const i=t.findIndex((t=>t.name===e));this.state.splice(i,1),this.storage.save(this.state)}completionField(t){t.target.classList.contains("input-tooltip")&&(t.target.parentElement.querySelector(".tooltip-active")&&t.target.nextElementSibling.remove(),this.newName=document.querySelector(".input-article-name"),this.newPrice=document.querySelector(".input-article-price"))}validityFields(t){const e=document.createElement("span");if(e.textContent="*Вы пропустили обязательное поле",e.classList.add("tooltip-active"),!t.parentElement.lastElementChild.classList.contains("tooltip-active")){if(""===t.value)return t.insertAdjacentElement("afterend",e),e.tooltipText="Заполните поле",!1;if(""!==t.value&&t.classList.contains("input-article-price")){if(!/^[1-9][0-9]*$/.test(parseInt(t.value,10)))return t.insertAdjacentElement("afterend",e),e.textContent="Стоимость должна быть больше 0",!1}if(t.classList.contains("input-article-price")){if(/[\D]+$/i.test(t.value))return t.insertAdjacentElement("afterend",e),e.textContent="Поле должно содержать только цифры",!1}return!0}}onClickOpenForm(t){if(t.preventDefault(),t.target.classList.contains("add__button")||t.target.classList.contains("article__edit")){if(this.modal=new i(this.container),document.querySelector(".modal"))return;this.modal.redrawModalForm(),this.modal.redrawInput()}t.target.classList.contains("article__edit")&&(this.onEditValueButton("Сохранить","article__save-button"),this.parent=t.target.parentElement.closest(".article-box"),this.articleName=this.parent.querySelector(".article__title").textContent,this.articlePrice=this.parent.querySelector(".article__price").textContent,this.modal.showInputValue(this.articleName,this.articlePrice))}onEditValueButton(t,e){const i=document.querySelector(".article__add-button");i.classList.remove("article__add-button"),i.classList.add(e),i.textContent=t}savingChanges(t,e){const i=this.validityFields(t),n=this.validityFields(e);if(i&&n){if(this.articleName!==t.value||this.articlePrice!==e.value){this.parent.remove(),this.removeItem(this.state,this.articleName);const i=this.renderingCard(t,e);this.saveCard(i)}this.modal.closeModalForm()}}renderingCard(e,i){const n=new t;return n.init(),e.value="",i.value="",n&&document.querySelector(".greeting__title").classList.add("hidden"),n}onClickAddCard(t){if(!t.target.classList.contains("article__add-button"))return;t.preventDefault(),this.articleName=document.querySelector(".input-article-name"),this.articlePrice=document.querySelector(".input-article-price");const e=this.validityFields(this.articleName),i=this.validityFields(this.articlePrice);if(!e||!i)return;const n=this.renderingCard(this.articleName,this.articlePrice);document.querySelector(".table-product").classList.remove("hidden"),this.modal.closeModalForm(),this.saveCard(n)}onClickDeleteCard(t){t.preventDefault(),t.target.classList.contains("article__del")&&(this.modal=new i(this.container),document.querySelector(".modal")||(this.modal.redrawModalForm(),this.onEditValueButton("Удалить","article__remove-button"),this.modal.showDescription("Удалить товар из списка?")),this.parentCard=t.target.closest(".article-box"),this.name=t.target.parentElement.parentElement.firstElementChild,this.price=t.target.parentElement.previousElementSibling)}onClickRemoveCard(t){t.target.classList.contains("article__remove-button")&&(this.parentCard.remove(),this.removeItem(this.state,this.name.textContent),this.modal.closeModalForm(),document.querySelector(".article-box")||(document.querySelector(".table-product").classList.add("hidden"),document.querySelector(".greeting__title").classList.remove("hidden")))}onClickSaveCard(t){t.target.classList.contains("article__save-button")&&(void 0!==this.newName||void 0!==this.newPrice?this.savingChanges(this.newName,this.newPrice):this.modal.closeModalForm())}onClickCancel(t){if(!t.target.classList.contains("modal-close__btn"))return;const e=document.querySelector(".table-product");document.querySelector(".article-box")?e.classList.remove("hidden"):e.classList.add("hidden")}keyUp(t){t.target.classList.contains("input-tooltip")&&this.validityFields(t.target)}}(a);r.init()})();