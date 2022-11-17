/* eslint-disable react/button-has-type */
const React = require('react');

module.exports = function ModalCreateForm({ formUniKey, site}) {
  return (

    <div data-modal-window={`modal_create_form_${site.id}`} className="modal">
      <div className="modal_content">

        <div className="modal_inner">
          <div className="modal_title"> Конфигуратор форм для {site.title}</div>
          <div className="close_modal_window">&times;</div>
        </div>

        <form className="create-form-form" data-form-id id={formUniKey.formUniKey}>
        <p style={{'fontSize':'12px'}}>Добавьте нужное количество полей и выберите их тип</p>
       
          <button type='button' id={formUniKey.formUniKey} name='add-select' value={formUniKey.formUniKey} data-button-add >+</button>
         
          <button type='submit' id='submit-form-creation' name='submit-creation-form'>Создать</button>

          <input name='site' className='new-input' value={site.title}/>
          <input name='title' className='new-input' placeholder='Добавьте название формы'/>
          <input name='unikey' className='new-input' style={{'display':'none'}} value={formUniKey.formUniKey}/>
        {/* <select className='new-input'>
        <option class='option' value='name'>Имя</option>
              <option class='option' value='phone'>Телефон</option>
              <option class='option' value='email'>E-mail</option>
              <option class='option' value='text'>Текстовое поле</option>
              <option class='option' value='file'>Файл</option>
        </select> */}

         
          {/* <div className="empty-input" data-input-place="first">
            <p> Добавить поле</p>
            <button id="add-input-btn" data-button-add="first">+</button>
          </div>

          <div className="empty-input" data-input-place="second">
            <p> Добавить поле</p>
            <button id="add-input-btn" data-button-add="second">+</button>
          </div>

          <div className="empty-input" data-input-place="third">
            <p> Добавить поле</p>
            <button id="add-input-btn" data-button-add="third">+</button>
          </div>

          <div className="empty-input" data-input-place="fourth">
            <p> Добавить поле</p>
            <button id="add-input-btn" data-button-add="fourth">+</button>
          </div>

          <div className="empty-input" data-input-place="fifth">
            <p> Добавить поле</p>
            <button id="add-input-btn" data-button-add="fifth">+</button>
          </div> */}

        </form>
      </div>
      <link rel="stylesheet" href="/css/UI/MyModal/MyModal.css" />
      <script defer src="/js/createforms/addInputs.js" />
      <script defer src="/js/createforms/addInputs_copy.js" />
    </div>

  );
};
