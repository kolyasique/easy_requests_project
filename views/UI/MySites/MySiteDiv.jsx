const React = require('react');

const ModalCreateForm = require('../MyModal/MyModalCreateForm')
const ModalAddWebsite = require('../MyModal/MyModalAddWebsite')

module.exports = function MySiteDiv( { formUniKey, site } ) {
    return (<div className='sitecontainer'>
    <h3>{site.title}1</h3>
    <a href={site.web}>{site.web}</a>
        <div className="secondcontainer">
        <button data-modal-btn={`modal_create_form_${site.id}`} id="create-form-button"> create form {site.id} </button>
        <ModalCreateForm formUniKey={formUniKey} site={site}/>
</div>
</div>

  
  
)};

{/* <div data-modal-window="modal_create_form" className="modal">
  <div className="modal_content">

    <div className="modal_inner">
      <div className="modal_title"> Модальное окно</div>
      <div className="close_modal_window">&times;</div>
    </div>

    <input placeholder='input'></input>
  </div>
</div> */}